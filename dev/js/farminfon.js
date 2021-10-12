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
        prodRows:[],
        fruits:[],
        infoObj:{},
        imgSrc1:"../dist/images/farm/tree-01.svg",
    },
    methods: {
        getStatus(fruitStatus){
            switch (fruitStatus){
                case '0':
                return "未認養";
                    break;
                case '1':
                return "已認養";
                    break;
                case '2':
                return "下架";
                    break;
                default:
                    return "無狀態"
                    break;
            }
        },
        statusImg(fruitStatus){
            if(fruitStatus == 1){
                return this.imgSrc1;
            }
        },
        getInfo(){
            this.id = window.location.search.split('?')[1].split('=')[1];
            //call php的response
            $.ajax({
                url:'../dist/phps/getFarminfon.php',
                success:(response) =>{
                    console.log(response)
                    let obj = JSON.parse(response).find(prodRow => prodRow.farm_id == this.id)
                    this.infoObj = obj;
                },
                error: () => { 
                    console.log('error')
                },
                complete: () => { 
                    console.log(data_info)
                }
            });
        }
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
        this.getInfo();
    },
})
//貼文
function getProducts(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(JSON.parse(xhr.responseText))
        app.prodRows = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "../dist/getFarminfon.php",true);
    xhr.send(null);
}
//果樹
function getFruits(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(JSON.parse(xhr.responseText))
        app.fruits = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "../dist/phps/getFarmfruit.php",true);
    xhr.send(null);
}
window.addEventListener("load", function(){
    //---------------------網頁的初始設定
    getProducts();
    getFruits();
    
})