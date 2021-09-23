
$(function () {
    //滾動事件 jquery_mousewheel
    $(window).mousewheel(function (event) {
        if (event.deltaY == 1) {  //滾輪上滑時
            $('.header').css({
                "top": 0,
            })
        } else {
            $('.header').css({  //滾輪下滑時
                "top": "-50%",
            })
        }
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
                $(window).unbind(); //取消滾動事件
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
                //恢復滾動事件
                $(window).mousewheel(function (event) {
                    if (event.deltaY == 1) {
                        $('.header').css({
                            "top": 0,
                        })
                    } else {
                        $('.header').css({
                            "top": "-50%",
                        })
                    }
                })

            }
        });
    }
});