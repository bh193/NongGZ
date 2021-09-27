$(function () {
    $('.con_title').click(function () {
        $(this).next('.con_text').slideToggle(500,"easeOutExpo");
    }).next('.con_text').hide();

    $('.con_title').click(function () {
        $(this).children().children('.turn').toggleClass('turn_zero');
    })
});