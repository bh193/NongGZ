$(function () {

    if ($('#mem_state').text() == "登出") {
        $('#buy').attr("href", "#popOrder");
    } else {
        $('#buy').attr("href", "#modal_login");
    }
});