function $id(id) {
    return document.getElementById(id);
}

let member = {};

function sendForm() {
    //==============================使用Ajax 回server端,取回登入者姓名, 放到頁面上    
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        if (member.farm_email) { //有此帳密
            $id('farm_email').value = '';
            $id('farm_psw').value = '';
            $('#login_farm').removeAttr("href");
            $('#login_farm').removeAttr("rel");
            window.location.href='./back_farminfo.html';
        } else {
            $('#login_farm').attr("href","#error");
            $('#login_farm').attr("rel","modal:open");
            $('#login_farm').click();
        }
    }

    xhr.open("post", "./phps/farm_login.php", true);
    xhr.setRequestHeader("content-type", "application/x-www-form-urlencoded");
    let data_info = `farm_email=${$id("farm_email").value}&farm_psw=${$id("farm_psw").value}`;
    xhr.send(data_info);
    //==============================
}

function sendCom() {
let com_email = "cfd102"
let com_psw = "cfd102"
if($('#con_email').val() == com_email && $('#con_psw').val() == com_psw){
    $id('con_email').value = '';
    $id('con_psw').value = '';
    $('#login_con').removeAttr("href");
    $('#login_con').removeAttr("rel");
    window.location.href='./admin_farmer.html';
}else {
    $('#login_con').attr("href","#error");
    $('#login_con').attr("rel","modal:open");
    $('#login_con').click();
}
}

function init() {

    //===設定btnLogin.onclick 事件處理程序是 sendForm
    $id('btnLogin_f').onmousedown = sendForm;
    $id('btnLogin_c').onmousedown = sendCom;


}; //window.onload

window.addEventListener("load", init, false);


