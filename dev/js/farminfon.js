//貼文
Vue.component('postItem',{
    props: ['postlist'],
    data(){
        return{

        }
    },
    template: `
        <div id="owl-one" class="owl-carousel owl-theme">
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
                        <button id="modal_btn_1" class="btn_heart"></button>
                        <span>{{prodRow.post_feedback}}</span>
                        <button id="modal_btn_1" class="btn_loudly"></button>
                    </div>
                </div>
            </div>
        </div>
    `,
});
//活動
Vue.component('activityItem',{
    props: ['activitylist'],
    data(){
        return{

        }
    },
    template: `
        <div id="owl-two" class="owl-carousel owl-theme">
            <div class="item" v-for="activity in activitylist">
                <div class="pic">
                    <img :src="'images/activity/' + activity.activity_imgA">
                </div>
                <div class="txt">
                    <div class="word">
                        <h2>{{activity.activity_name}}</h2>
                        <h3>{{activity.city_name}} ┃&nbsp{{activity.farm_name}}</h3>
                        <p>活動日期:{{activity.activity_date}}</p>
                        <p class="actdes">{{activity.activity_content}}</p>
                        <a :href="'activity_detail.html?activity_id=' + activity.activity_id"><button class="actbtn">我要報名</button></a>
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
        id:0,
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
        //農場分頁
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
        },
        //果樹認養
        getFruits(){
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                // console.log(JSON.parse(xhr.responseText))
                app.fruits = JSON.parse(xhr.responseText)
            }
            xhr.open("get", "../dist/phps/getFarmfruit.php",true);
            xhr.send(null);
        },
    },
    computed: {
        filterfruits(){
            return this.fruits.filter(fruitssearch =>{
                return fruitssearch.farm_id == this.id
            });
        },
        filterPost(){
            return this.prodRows.filter(postsearch =>{
                return postsearch.farm_id == this.id
            });
        },
        filterActivity(){
            return this.activitys.filter(activitysearch =>{
                return activitysearch.farm_id == this.id
            });
        },
    },
    mounted(){
        this.getInfo();
        this.getFruits();
        axios.get('../dist/phps/getFarminfon.php')
        .then(res => {
            this.prodRows = res.data;
            Vue.nextTick(function(){
               $("#owl-one").owlCarousel({
                   stagePadding: 400,
                   loop: true,
                   margin: 150,
                   nav: false,
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
        axios.get('../dist/phps/getFarmactivity.php')
        .then(res => {
            this.activitys = res.data;
            Vue.nextTick(function(){
                $('#owl-two').owlCarousel({
                    loop:true,
                    margin:10,
                    nav:false,
                    navigation:false,
                    pagination:false,
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
})