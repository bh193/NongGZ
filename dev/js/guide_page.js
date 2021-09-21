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
            open = false;
        } else {
            $(this).css({
                "right": 0,
                "background-color": "#F6BD60",
            });
            $('#cover_controller').show();
            $('#cover_farm').hide();
            open= true;
        }
    });

    $('.after').click(function () {
        $('.backstage_login').css({"display":"flex",});
    });

    $('.close').click(function () {
        $('.backstage_login').css({"display":"none",});
    });

});