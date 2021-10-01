$(function () {
    $('.content').click(function () {
        $(this).find('.con_text').slideToggle(500,"easeOutExpo");
    }).children('.con_text').hide();

    $('.content').click(function () {
        $(this).find('.turn').toggleClass('turn_zero');
    })
});