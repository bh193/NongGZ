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
        swiper:null,
        map:null,
        // hideStyle: [{
        //     featureType: 'poi.business',
        //     elementType: "all",
        //     stylers: [{
        //       visibility: 'off'
        //     }]
        //   }],
        

    },
    
    methods: {
        initMap(){
            let location = {   //預設中心點位置
                lat: 24.93102893626507, // 經度
                lng: 121.38434243374058 // 緯度
                
                
              };
              this.map = new google.maps.Map(document.getElementById('map'), {
                center: location,
                zoom: 11,
                mapTypeId: 'roadmap',
                mapTypeControl: false,
                streetViewControl: false,
                fullscreenControl: false,
              });

            axios.get('./phps/map.php')
            .then(res => { 
            this.farmRow=res.data;
            Array.prototype.forEach.call(this.farmRow, r => {
            let latLng = new google.maps.LatLng(r.farm_lat,r.farm_lon);  
            let marker = new google.maps.Marker({
                  position: latLng,
                  map: this.map,
                  animation: google.maps.Animation.DROP,
                  
                });
                // info window

                let infowindow = new google.maps.InfoWindow({
                  
                  content: `<div class="col">
                  <div class="img" style="background-image: url("'./images/farm/'+${r.farm_imgA});"></div>
                  <div class="info">
                      <h3>${r.farm_name}</h3>
                      <p>地址：<br>${r.farm_address}</p>
                      <div class="btn">
                      </div>
                  </div>
              </div>` 
                });
  
                //  點擊第二個視窗，第一個會關閉
                //  點擊第二個視窗，第一個會關閉
                marker.addListener('mouseover', e => {
                  if (this.infowindow) this.infowindow.close();
                  infowindow.open(this.map, marker);
                  this.infowindow = infowindow;
                });
    
              });
          
            this.$nextTick(this.setSwiper)//呼叫setSwiper()
            
        });

        },
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
    created() {
        window.addEventListener('load', () => {
          this.initMap();
        });
      }
})