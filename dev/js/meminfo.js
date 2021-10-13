function $id(id) {
    return document.getElementById(id);
}

let member = {};

function getFarmInfo() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        if (member.farm_email) {
            $id("mem_name").value = member.mem_name;
            $id("farm_login").value = member.mem_mail;
        }
    }
    xhr.open("get", "../phps/memlogin.php", true);
    xhr.send(null);
}

function init() {
    //--------------------------------------取回登入者的資訊
    getFarmInfo();
}; //window.onload

window.addEventListener("load", init, false);