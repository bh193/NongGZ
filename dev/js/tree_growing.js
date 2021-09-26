$(function () {
$('a[href="#pop_1"]').click(function (event) {
    event.stopPropagation();
    $(this).modal({
        fadeDuration: 300
    });
});
$('a[href="#popOrder"]').click(function (event) {
    event.stopPropagation();
    $(this).modal({
        fadeDuration: 300
    });
});

if($('#mem_state').text()=="登出"){
    $('#buy').attr("href","#popOrder");
}else{
    $('#buy').attr("href","#pop_1");
}
});