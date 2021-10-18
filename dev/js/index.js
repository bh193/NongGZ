$(function () {
    var open = true;
    $('.cover').click(function () {
        if (open == true) {
            $(this).css({
                "right": "50%",
                "background-color": "#F68D60",
            });
            $('#cover_controller').hide();
            $('#cover_farm').show();
            $('#btnLogin_f').hide();
            $('#btnLogin_c').show();
            open = false;
        } else {
            $(this).css({
                "right": 0,
                "background-color": "#F6BD60",
            });
            $('#cover_controller').show();
            $('#cover_farm').hide();
            $('#btnLogin_c').hide();
            $('#btnLogin_f').show();
            open = true;
        }
    });

    $('.after').click(function () {
        $('.backstage_login').css({ "display": "flex", });
    });

    $('.close').click(function () {
        $('.backstage_login').css({ "display": "none", });
    });

    $('#con_toggle_f').click(function () {
        $('.farm_login').css({ "margin-left": "-100%", });
    });

    $('#con_toggle_c').click(function () {
        $('.farm_login').css({ "margin-left": 0, });
    });


    //管理員enter登入
    document.onkeydown = function (e) {
        var em = document.all ? window.event : e;
        if (em.keyCode == 13) {
            $('#btnLogin_c').click();
            $('#btnLogin_f').click();
        }
    }


});