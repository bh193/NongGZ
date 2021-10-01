function switchFavorite(){
    if(heart.src == "../images/post/heart_gray.svg"){
        heart.src = "../images/post/heart_red.svg";
    }else{
        heart.src = "../images/post/heart_gray.svg";
    }
}
let heart = document.getElementsByClassName("btn_heart");
heart.onclick = switchFavorite;