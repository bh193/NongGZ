function $id(id) {
    return document.getElementById(id);
}

let member = {};

//登出系統
function showLoginForm() {
    if ($id('farm_login').innerText == "登入") {
        window.location.href='./index.html';
    } else { //登出
        let xhr = new XMLHttpRequest();
        xhr.onload = function () {
            $id("farm_name").innerText = "";
            $id("farm_login").innerText = "登入";
        }
        xhr.open("get", "./phps/logout.php", true);
        xhr.send(null);
        window.location.href='./index.html';
    }

}

//取session值
//#getFarmInfo  php
function getFarmInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        if (member.farm_email) {
            $id("farm_name").innerText = member.farm_name;
            $id("farm_login").innerText = "登出";
            $id("farm_id").innerText = member.farm_id;
        }
    }
    xhr.open("get", "./phps/getFarmInfo.php", true);
    xhr.send(null);
}

function init() {
    //--------------------------------------取回登入者的資訊
    getFarmInfo();

    $id("farm_login").onclick = showLoginForm;
}; //window.onload

window.addEventListener("load", init, false);