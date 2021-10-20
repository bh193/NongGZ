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
      fruits: [
        { text: '橘子', value: '0' },
        { text: '蘋果', value: '1' },
        { text: '水蜜桃', value: '2' },
        { text: '芒果', value: '3' },
        { text: '紅棗', value: '4' },
    ],
      citys: [
        { text: '台北', value: '0' },
        { text: '新北', value: '1' },
        { text: '桃園', value: '2' },

    ],
    selected:'',
    selected2:'',
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

  methods: {
      initMap(){
          let location = {   //預設中心點位置
              lat: 24.9049523, // 經度
              lng: 121.4753259 // 緯度
              
              
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



  
            });
        
          this.$nextTick(this.setSwiper)//呼叫setSwiper()
          
      });

      },
      option1(){
        let location = {   //預設中心點位置
          lat: 25.04541, // 經度
          lng: 121.54781 // 緯度
          
          
        };
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 13,
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




        });
    
      this.$nextTick(this.setSwiper)//呼叫setSwiper()
      
  });
      },

      //
      option2(){
        let location = {   //預設中心點位置
          lat: 24.995186, // 經度
          lng: 121.478812 // 緯度
          
          
        };
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 13,
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




        });
    
      this.$nextTick(this.setSwiper)//呼叫setSwiper()
      
  });
      },
      option3(){
        let location = {   //預設中心點位置
          lat: 24.852503, // 經度
          lng: 121.271133 // 緯度
          
          
        };
        this.map = new google.maps.Map(document.getElementById('map'), {
          center: location,
          zoom: 12,
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




        });
    
      this.$nextTick(this.setSwiper)//呼叫setSwiper()
      
  });
      },
    



      
      setSwiper() {
          this.swiper = new Swiper(".mySwiper", {
            slidesPerView: 3.5,
            spaceBetween: 30,
            freeMode: true,
            // pagination: {
            //   el: ".swiper-pagination",
            //   clickable: true,
            //   }
            });
        }
     },
  created() {
      window.addEventListener('load', () => {
        this.initMap();
      });
    }
})
