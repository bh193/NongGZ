function $id(id) {
    return document.getElementById(id);
}

let member = {};

// function showLoginForm() {
//     if ($id('spanLogin').innerHTML == "登入") {
//         $id('lightBox').style.display = 'block';
//     } else { //登出
//         let xhr = new XMLHttpRequest();
//         xhr.onload = function () {
//             $id('memName').innerHTML = '&nbsp';
//             $id('spanLogin').innerHTML = '登入';
//         }
//         xhr.open("get", "logout.php", true);
//         xhr.send(null);
//     }

// }//showLoginForm

function sendForm() {
    //==============================使用Ajax 回server端,取回登入者姓名, 放到頁面上    
    let xhr = new XMLHttpRequest();

    xhr.onload = function () {
        member = JSON.parse(xhr.responseText);
        if (member.farm_email) { //有此帳密
            // $id("memName").innerText = member.memName;
            // $id("spanLogin").innerText = "登出";
            // //將登入表單上的資料清空，並隱藏起來
            // $id('lightBox').style.display = 'none';
            $id('farm_email').value = '';
            $id('farm_psw').value = '';
            $('body').hide();
            window.location.href='./back_farminfo.html';
        } else {
            window.location.href='#error';
            $('body').show();
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
    $('body').hide();
    window.location.href='./admin_farmer.html';
}else {
    $('body').show();
}
}

// function cancelLogin() {
//     //將登入表單上的資料清空，並將燈箱隱藏起來
//     $id('lightBox').style.display = 'none';
//     $id('memId').value = '';
//     $id('memPsw').value = '';
// }

// function getMemberInfo() {
//     let xhr = new XMLHttpRequest();
//     xhr.onload = function () {
//         member = JSON.parse(xhr.responseText);
//         if (member.memId) {
//             $id("memName").innerText = member.memName;
//             $id("spanLogin").innerText = "登出";
//         }
//     }
//     xhr.open("get", "getMemberInfo.php", true);
//     xhr.send(null);
// }

function init() {
    // //--------------------------------------取回登入者的資訊
    // getMemberInfo();

    // //--------------------------------------設定事件處理器
    // //===設定spanLogin.onclick 事件處理程序是 showLoginForm
    // $id('spanLogin').onclick = showLoginForm;

    //===設定btnLogin.onclick 事件處理程序是 sendForm
    $id('btnLogin_f').onclick = sendForm;
    $id('btnLogin_c').onclick = sendCom;

    // //===設定btnLoginCancel.onclick 事件處理程序是 cancelLogin
    // $id('btnLoginCancel').onclick = cancelLogin;

}; //window.onload

window.addEventListener("load", init, false);


