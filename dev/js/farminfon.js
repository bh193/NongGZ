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
Vue.component('postItem',{
    props: ['postlist'],
    data(){
        return{

        }
    },
    template: `
        <div class="owl-carousel owl-theme">
            <div class="item" v-for="prodRow in postlist">
                <div class="pic">
                    <img :src="'images/post/' + prodRow.post_img">
                </div>
                <div class="mempic">
                    <img :src="'images/mem/' + prodRow.mem_img">
                </div>
                <div class="txt">
                    <p>{{prodRow.post_content}}</p>
                    <div class="tag">
                        <a :href="'farminfon.html?farm_id=' + prodRow.farm_id">#{{prodRow.farm_name}}</a> 
                    </div>
                    <div class="icon">
                        <img src="images/post/heart_gray.svg">
                        <span>{{prodRow.post_feedback}}</span>
                        <img src="images/post/loudly_gray.svg">
                    </div>
                </div>
            </div>
        </div>
    `,
});

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
                url:'../dist/phps/getFarmdes.php',
                success:(response) =>{
                    let obj = JSON.parse(response).find(prodRow => prodRow.farm_id == this.id)
                    this.infoObj = obj;
                }
            });
        }
    },
    mounted(){
        axios.get('../dist/phps/getFarminfon.php')
        .then(res => {
            this.prodRows = res.data;
            Vue.nextTick(function(){
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
                           stagePadding:120,
                           margin:50
                       },
                       1000: {
                           items: 1 
                       }
                   }
               });
           });
        });
        this.getInfo();
    },
})
//果樹
function getFruits(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        // console.log(JSON.parse(xhr.responseText))
        app.fruits = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "../dist/phps/getFarmfruit.php",true);
    xhr.send(null);
}
window.addEventListener("load", function(){
    //---------------------網頁的初始設定
    getFruits();
    
})