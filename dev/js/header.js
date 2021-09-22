$(function () {
    var open = false;
    $('.hamberger').click(function () {
        if (open == false) {
            $('#nav ').css({
                "left": 0,
            });
            $('#mem_icon').css({
                "left": "40%",
            });
            $('#line_1').css({
                "transform": "translate(-50%, -50%) rotate(45deg)",
                "top":"30%",
                "left":"65%",
            });
            $('#line_3').css({
                "transform": "translate(-50%, -50%) rotate(-45deg)",
                "left":"60%",
            });
            $('#line_2').hide();
            open = true;
        } else{
            $('#nav ').css({
                "left": "-100%",
            });
            $('#mem_icon').css({
                "left": "-60%",
            });
            $('#line_1').css({
                "transform": "translate(-50%, -50%)",
                "top":"25%",
                "left":"50%",
            });
            $('#line_3').css({
                "transform": "translate(-50%, -50%)",
                "left":"50%",
            });
            $('#line_2').show();
            open = false;
        }  
    });
});