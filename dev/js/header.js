$(function () {
    //滾動捲軸事件
    var bodyClass = document.body.classList,
        lastScrollY = 0;
    window.addEventListener('scroll', function () {
        var st = this.scrollY;
        if (st < lastScrollY) {
            bodyClass.remove('hideUp');//top:0//出現//上拉
        } else {
            bodyClass.add('hideUp');//top:-30%//消失//下拉
        }
        lastScrollY = st;
    });

    //螢幕判定
    let tq = window.matchMedia("(min-width: 769px)");//平板最小螢幕
    if (tq.matches) {
        //符合平板以上
    } else {
        //手機板
        //漢堡選單js
        var open = false; //宣告為關閉狀態
        $('.hamberger').click(function () {
            if (open == false) { //目前狀態為關閉時
                $('#nav ').css({ //導覽列打開
                    "left": 0,
                });
                $('#mem_icon').css({ //會員打開
                    "left": "40%",
                });
                $('#line_1').css({
                    "transform": "translate(-50%, -50%) rotate(45deg)",
                    "top": "30%",
                    "left": "65%",
                });
                $('#line_3').css({
                    "transform": "translate(-50%, -50%) rotate(-45deg)",
                    "left": "60%",
                });
                $('#line_2').hide();
                open = true; //打開狀態
                $(window).unbind(); //取消滾動捲軸事件
            } else {
                //目前狀態為打開時
                $('#nav ').css({  //導覽列關閉
                    "left": "-100%",
                });
                $('#mem_icon').css({ //會員關閉
                    "left": "-60%",
                });
                $('#line_1').css({
                    "transform": "translate(-50%, -50%)",
                    "top": "25%",
                    "left": "50%",
                });
                $('#line_3').css({
                    "transform": "translate(-50%, -50%)",
                    "left": "50%",
                });
                $('#line_2').show();
                open = false; //關閉狀態

                //恢復滾動捲軸事件
                window.addEventListener('scroll', function () {
                    var st = this.scrollY;
                    if (st < lastScrollY) {
                        bodyClass.remove('hideUp');//top:0//出現//上拉
                    } else {
                        bodyClass.add('hideUp');//top:-30%//消失//下拉
                    }
                    lastScrollY = st;
                });

            }
        });
    }

    //登入會員顯示資訊
    let member = {};
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        if (member.mem_email) {
            $("#mem_name").text(member.mem_name);
            $("#mem_state").text("登出");
            $("#mem_id").text(member.mem_id);
            $("#catch").val(member.mem_id);
            $('#mem_center').show();
        } else {
            $('#mem_center').hide();
            $("#mem_state").text("會員");
        }
    }
    xhr.open("get", "./phps/getMemInfo.php", true);
    xhr.send(null);

    //登出系統
    //點擊狀態
    $('#mem_state').click(function () {
        if ($('#mem_state').text() == "會員") {  //尚未登入
            $(window).attr("location", "./memlogin.html");
            $('#mem_center').hide();
        } else { //登出
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                $('#mem_state').text("會員");
                location.reload();
                $('#mem_center').show();
                if (location.href.indexOf("mem_center.html") != -1) { //如果在會員中心登出
                    $(window).attr("location", "./home.html"); //則回到首頁
                } else {  //如果不在會員中心登出
                    location.reload();  //則本頁重整
                }
            }
            xhr.open("get", "./phps/logout.php", true);
            xhr.send(null);

        }
    });

    //點擊icon
    $('#m_img').click(function () { 
        if ($('#mem_state').text() == "會員") {  //尚未登入
            $('#m_img').attr("href", "./memlogin.html");
            $('#mem_center').hide();
        } else { //登出
            $('#m_img').removeAttr("href");
            $('#mem_state').text("會員");
            $('#mem_center').show();
            if (location.href.indexOf("mem_center.html") != -1) {
                $(window).attr("location", "./home.html");
            } else {
                location.reload();
            }
        }
        xhr.open("get", "./phps/logout_m.php", true);
        xhr.send(null);
    });




});
