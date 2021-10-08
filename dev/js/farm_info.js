function $id(id) {
    return document.getElementById(id);
}

let member = {};

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
}; //window.onload

window.addEventListener("load", init, false);