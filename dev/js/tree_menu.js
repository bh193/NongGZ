$(function () {
    $('.minus_sign').click(function () {
        $(this).parent().parent().children('.con_text').slideToggle(500,"easeOutExpo");
    }).parent().parent().children('.con_text').hide();

    $('.minus_sign').click(function () {
        $(this).children('.turn').toggleClass('turn_zero');
    })
});