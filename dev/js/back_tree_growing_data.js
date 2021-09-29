$(function () {
$('a[href="#moreimg"]').click(function (event) {
    event.stopPropagation();
    $(this).modal({
        fadeDuration: 300
    });
}); 
});