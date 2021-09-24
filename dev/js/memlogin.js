var openLogin = () => {
    document.getElementById("loginfont").style.color = "#17C3B2"; 
    document.getElementById("registerfont").style.color = "black";     
    document.getElementById('login').style.display = "block";
    document.getElementById('register').style.display = "none";
    }
    var openRegister = () => {
    document.getElementById("loginfont").style.color = "black"; 
    document.getElementById("registerfont").style.color = "#17C3B2"; 
    document.getElementById('register').style.display = "block";
    document.getElementById('login').style.display = "none";
    }