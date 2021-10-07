//post silde
// $(".owl-carousel").owlCarousel({
//     stagePadding: 400,
//     loop: true,
//     margin: 150,
//     nav: true,
//     responsive: {
//         0: {
//             items: 1, 
//             stagePadding:40,
//             margin:50
//         },
//         600: {
//             items: 1, 
//             stagePadding:200,
//             margin:120
//         },
//         1000: {
//             items: 1 
//         }
//     }
// });

//activity arrow change
function setNewImageL(){
    document.getElementById("arrow-l").src = "images/svg/left-btn-y.svg";
}
function setOldImageL(){
    document.getElementById("arrow-l").src = "images/svg/left-btn-g.svg";
}
function setNewImageR(){
    document.getElementById("arrow-r").src = "images/svg/right-btn-y.svg";
}
function setOldImageR(){
    document.getElementById("arrow-r").src = "images/svg/right-btn-g.svg";
}

//post 
let app = new Vue({
    el:"#app",
    data:{
        prodRows:[]
    },
    mounted(){
        console.log(`mounted() --> $el: ${this.$el}`);
        $(".owl-carousel").owlCarousel({
            stagePadding: 400,
            loop: true,
            margin: 150,
            nav: true,
            responsive: {
                0: {
                    items: 1, 
                    stagePadding:40,
                    margin:50
                },
                600: {
                    items: 1, 
                    stagePadding:200,
                    margin:120
                },
                1000: {
                    items: 1 
                }
            }
        });
    }
})
function getProducts(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(JSON.parse(xhr.responseText))
        app.prodRows = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "../dist/getFarminfon.php",true);
    xhr.send(null);
}
window.addEventListener("load", function(){
    //---------------------網頁的初始設定
    getProducts();
})