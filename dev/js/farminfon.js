
//activity arrow change
// function setNewImageL(){
//     document.getElementById("arrow-l").src = "images/svg/left-btn-y.svg";
// }
// function setOldImageL(){
//     document.getElementById("arrow-l").src = "images/svg/left-btn-g.svg";
// }
// function setNewImageR(){
//     document.getElementById("arrow-r").src = "images/svg/right-btn-y.svg";
// }
// function setOldImageR(){
//     document.getElementById("arrow-r").src = "images/svg/right-btn-g.svg";
// }
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
                        <a href="#modal_login" rel="modal:open"><button id="modal_btn_1" class="btn_heart"></button></a>
                        <span>{{prodRow.post_feedback}}</span>
                        <a href="#modal_login" rel="modal:open"><button id="modal_btn_1" class="btn_loudly"></button></a>
                    </div>
                </div>
            </div>
        </div>
    `,
});
Vue.component('activityItem',{
    props:['activitylist'],
    data(){
        return{

        }
    },
    template:`
        <div class="owl-carousel owl-theme">
            <div class="item" v-for="activity in activitylist">
                <div class="pic">
                    <img :src="'images/activity/' + activity.activity_imgA">
                </div>
                <div class="txt">
                    <div class="word">
                        <h2>{{activity.activity_name}}</h2>
                        <h3>{{activity.city_name}} ┃&nbsp{{activity.farm_name}}</h3>
                        <p>活動日期:{{activity.activity_date}}</p>
                        <p>{{activity.activity_content}}</p>
                        <a href="activity_detail.html"><button>我要報名</button></a>
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
        activitys:[],
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
    computed: {
    //     statusImg(fruitStatus){
    //         if(fruitStatus == 1){
                
    //             point-event = "none";
    //         }
    //     },
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
                           stagePadding:60,
                           margin:50
                       },
                       600: {
                           items: 1, 
                           stagePadding:150,
                           margin:20
                       },
                       1000: {
                           items: 1 
                       }
                   }
               });
           });
        });
        this.getInfo();
        axios.get('../dist/phps/getFarmactivity.php')
        .then(res => {
            this.activitys = res.data;
            Vue.nextTick(function(){
                $('.owl-carousel').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:true,
                    responsive:{
                        0:{
                            items:1
                        },
                        600:{
                            items:1
                        },
                        1000:{
                            items:1
                        }
                    }
                })
            });
        });
    },
    updated() {
        for(let i=0;i<$('.status').length;i++){
            let statusF = $('.staus').eq(i).text();
            if(statusF=="已認養"){
                $('.pic').eq(i).css({
                    "filter":"grayscale(80%)",
                    "pointer-events":"none"
                })
            }
        };
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