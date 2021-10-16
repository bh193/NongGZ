Vue.component('mapList',{
    props: ['mapimg'],
    data(){
        return{

        }
    },
    template: `
    <div class="swiper mySwiper">
        <div class="swiper-wrapper">
        <template v-for="farm in mapimg">
            <div class="swiper-slide">
                <img :src="'./images/farm/'+farm.farm_imgA">
            </div>
            <div class="swiper-slide">
                <img :src="'./images/farm/'+farm.farm_imgB">
            </div>
        </template>

        </div>
        <div class="swiper-pagination"></div>
  </div>
    
    `,
    });

    let app = new Vue({
    el:"#farm",
    data:{
        farmRow:[],
        swiper:null

    },
    methods: {
        setSwiper() {
            this.swiper = new Swiper(".mySwiper", {
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 20,
                pagination: {
                  el: ".swiper-pagination",
                  clickable: true
                }
              });
        }
    },
    computed: {
        farmRow2() {
            return this.farmRow
        }
    },
    mounted(){
        axios.get('./phps/map.php')
        .then(res => { 
            this.farmRow=res.data;
            this.$nextTick(this.setSwiper)//呼叫setSwiper()
        });

    },
})