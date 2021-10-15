$(function () {
    if ($('#con_login').text() == "登入") {
        $(body).text("");
        alert("請登入");
    }

    // //登出系統
    // function showLoginForm() {
    //     if ($id('farm_login').innerText == "登入") {
    //         window.location.href = './index.html';
    //     } else { //登出
    //         let xhr = new XMLHttpRequest();
    //         xhr.onload = function () {
    //             $id("farm_name").innerText = "";
    //             $id("farm_login").innerText = "登入";
    //         }
    //         xhr.open("get", "./phps/logout.php", true);
    //         xhr.send(null);
    //         window.location.href = './index.html';
    //     }

    // }

    //取session值
    //#getConInfo  php
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        if (member.con_email) {
            $("#con_login").innerText = "登出";
        }
    }
    xhr.open("get", "./phps/getConInfo.php", true);
    xhr.send(null);


});