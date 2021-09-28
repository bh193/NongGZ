$(function () {
    var name = $(document).attr("title");
    if (name == "[後台管理員]果農管理"| name =="農場資訊管理") {
        $('#nav li').eq(0).addClass('active');
    } else if (name == "[後台管理員]會員管理"| name =="果樹認養資訊") {
        $('#nav li').eq(1).addClass('active');
    } else if(name == "[後台管理員]審核檢舉貼文"| name =="果樹認養訂單"){
        $('#nav li').eq(2).addClass('active');
    } else if(name == "體驗活動資訊"){
        $('#nav li').eq(3).addClass('active');
    }else if(name == "體驗活動訂單"){
        $('#nav li').eq(4).addClass('active');
    }
    // $('#nav li a').click(function () {
    //     $(this).addClass('active').siblings().removeClass('active');
    // });
});