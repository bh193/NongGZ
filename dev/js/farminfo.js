window.onload = function(){
    let mouseOverL = document.getElementById("arrow-l");
    mouseOverL.onmousemove = function(){
        img.src = "images/svg/left-btn-y.svg";
    }
    let mouseOutL = document.getElementById("arrow-l");
    mouseOutL.onmouseout = function(){
        img.src = "images/svg/left-btn-g.svg";
    }
}
