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
      farm:[],
      swiper:null,
      map:null,
    //   fruits: [
    //     { text: '橘子', value: '0' },
    //     { text: '蘋果', value: '1' },
    //     { text: '水蜜桃', value: '2' },
    //     { text: '芒果', value: '3' },
    //     { text: '紅棗', value: '4' },
    // ],
      findcity: [
        { lat:24.9757452, lon:121.4921768, zoom:10,  value: '0'   },
        { lat:25.04541,   lon:121.54781,   zoom: 13, value: '110' },
        { lat:24.995186,  lon:121.478812,  zoom: 13, value: '220' },
        { lat:24.852503,  lon:121.271133,  zoom: 12, value: '330' },

    ],

    selected:'',
    selected2:'',
    tab: 0,
  
    // hideBusiness: 'hide', 
    //     hideStyle: [
    //       {
    //         featureType: 'poi.business',
    //         stylers: [{
    //           visibility: 'off'
    //         }]
    //       }
    //     ]
  },
  computed:{

  },
  watch:{
    tab() {
      this.initMap();
    }
  },
  methods: {
    title(){
      const tabList = document.querySelector(".tablist");
      const tabs = document.querySelectorAll(".tablist__tab");
      const activeTab = document.querySelector(".tablist__tab.is-active");
      const selectionBar = document.querySelector(".selection-bar");
      
      const toggleTabClass = (target, elements) => {
      Array.from(elements).forEach((element) =>
          element.classList.remove("is-active")
      );
      target.classList.add("is-active");
};

const moveTabSelectionBar = (targetTab) => {
const rectTargetTab = targetTab.getBoundingClientRect();
const rectTabList = tabList.getBoundingClientRect();
const selectionBarWidth = rectTargetTab.width / rectTabList.width;
const selectionBarPosition = rectTargetTab.left - rectTabList.left;

selectionBar.style.transform = `matrix(${selectionBarWidth}, 0, 0, 1, ${selectionBarPosition}, 1)`;
};

Array.from(tabs).forEach((tab) => {
tab.addEventListener("click", (event) => {
  toggleTabClass(event.target, tabs);
  moveTabSelectionBar(event.target);
});
});

moveTabSelectionBar(activeTab);

    },
      filter(id){
        if(id == 0) return this.farm = this.farmRow;

        this.farm=this.farmRow.filter(data=>data.city_id == id)

      },
      initMap(){
        this.filter(this.tab)
        let loc = this.findcity.find(data=>data.value == this.tab)
        console.log(loc)
        let location = {   //預設中心點位置
              lat: loc.lat, // 經度
              lng: loc.lon // 緯度
            };
            this.map = new google.maps.Map(document.getElementById('map'), {
              center: location,
              zoom: loc.zoom,
              mapTypeId: 'roadmap',
                


              mapTypeControl: false,
              streetViewControl: false,
              fullscreenControl: false,
            });
            

         
          this.farm.forEach(r => {
          let latLng = new google.maps.LatLng(r.farm_lat,r.farm_lon);  
          let marker = new google.maps.Marker({
                position: latLng,
                map: this.map,
                animation: google.maps.Animation.DROP,
                icon:{
                  url:"../images/svg/index_before.svg",
                  scaledSize: new google.maps.Size(45, 45), 
                }
          
              });
          
          // this.farmRow.foreach((r,i)=>{
          // })
              let infowindow = new google.maps.InfoWindow({
                
                content: `<div class="col">
                <div class="img" style="background-image: url('./images/farm/${r.farm_imgA}');"></div>
                <div class="info">
                    <h3>${r.farm_name}</h3>
                    <p>地址：<br>${r.farm_address}</p>
                    <div class="btn">
                    <button onclick="window.location.href='farminfon.html?farm_id=${r.farm_id}'">農場詳情</button>
                      </div>
                    </div>
                </div>
            </div>` 
              });  
             
            
              //  滑鼠移過第二個視窗，第一個會關閉
              marker.addListener('mouseover', e => {
                if (this.infowindow) this.infowindow.close();
                infowindow.open(this.map, marker);
                this.infowindow = infowindow;
              });
              marker.addListener('click', e => {
                if (this.infowindow) this.infowindow.close();
                infowindow.open(this.map, marker);
                this.infowindow = infowindow;
              });



  
            });
        
          this.$nextTick(this.setSwiper)//呼叫setSwiper()
      },       
      setSwiper() {
          this.swiper = new Swiper(".mySwiper", {
            slidesPerView: 3.5,
            spaceBetween: 25,
            freeMode: true,
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            //   }
            });
        }
     },
   mounted() {
    axios.get('./phps/map.php')
    .then(res => { 
    this.farmRow=res.data;
    this.initMap();
    this.title();
   
    
});
   }, 

})
