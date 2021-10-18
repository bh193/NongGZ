let app = new Vue({
  el:"#app",
  data:{
    id: 0,
    dataObj: {},
    img: '',
    
    //手機carousel
    carouselName: 'carousel-next',
    carousels:[],
      len: 0,
      show: 0,
      xDown: null, // for swiper
      yDown: null, // for swiper
      autoplay: false, // 是否自動輪播
      timer: null, // auto play
      timerDelay: 3000, // 自動輪播間隔秒數
      toggleTimer: true, // pause auto play
      minHeight: 0, // 抓最小高度
      arrows: true, // 是否要有箭頭，預設 true
      dots: true // 是否要有小點，預設 true
      },

      computed:{
      },

    methods: {
      // 抓這個頁面當下的activity_id多少
      getData() {                            //拆?activity_id=3
        this.id =  window.location.search.split('?')[1].split('=')[1];
        
        // call php的response
        $.ajax({
          url: '../dist/phps/getActivityList.php',
          success: (response) => {
            console.log(response)
            let obj = JSON.parse(response).find(item => item.activity_id == this.id) 
            // 在資料庫找到我要的activity_id=3  並且JSON.parse字串轉成陣列  
            // console.log(obj)
            this.dataObj = obj;

            // (桌電)抓3裡面的imgA當大圖
            this.img = this.dataObj.activity_imgA;

            // 手機版carousel
            this.carousels = [
              {img:this.dataObj.activity_imgA}, 
              {img:this.dataObj.activity_imgB}, 
              {img:this.dataObj.activity_imgC}, 
              {img:this.dataObj.activity_imgD}, 
            ];
            // console.log(this.carousels)
            this.len = this.carousels.length;
            //先算carousels的長度 後面才能繼續做    
          },
        });

        //  抓資料庫流程
        //  1. call php?`id=${this.id}` => response
        //  2. this.dataObj = response
        //  this.dataObj=res.data;
      },


      // 手機版carousel
      toNext() {
        // console.log('toNext')
        this.carouselName = 'carousel-next';
        this.show + 1 >= this.len ? this.show = 0 : this.show = this.show + 1;
      },
      toPrev() {
        this.carouselName = 'carousel-prev';
        this.show - 1 < 0 ? this.show = this.len - 1 : this.show = this.show - 1;
      },
		  // swiper event(for mobile)
      touchStart(e) {
        this.xDown = e.touches[0].clientX;
        this.yDown = e.touches[0].clientY;
      },
      touchMove(e) {
        const _this = this;
        if(!this.xDown || !this.yDown) { return; }

        let xUp = e.touches[0].clientX;
        let yUp = e.touches[0].clientY;

        let xDiff = this.xDown - xUp;
        let yDiff = this.yDown - yUp;

        if(Math.abs(xDiff) > Math.abs(yDiff)) {
          xDiff > 0 ? _this.toNext() : _this.toPrev();
        }
        this.xDown = null;
        this.yDown = null;
      },
		  // 自動輪播
      autoPlay() {
        setInterval(() => {
          if(this.toggleTimer) this.toNext();
          // console.log("autoPlay")
        }, this.timerDelay);
      },

      // 抓右上角的mem_id
      findMem(){
        let member = {};
        let xhr = new XMLHttpRequest();
        xhr.onload = () => {
          member = JSON.parse(xhr.responseText);
          if (member.mem_email) {
            $("#myName").text(member.mem_name);
            $("#myEmail").text(member.mem_email); 
            $("#myId").val(member.mem_id);
            console.log(member)
          }
        }
        xhr.open("get", "./phps/getMemInfo.php", true);
        xhr.send(null);
      }
    },
     
    mounted() {
      this.getData();
      this.findMem();

      //輪播遮罩
      $('.preview').click(function () {
        $(this).find('.mask').hide();
        $(this).siblings().find('.mask').show();
      });

      const data = this.$refs.carousel.dataset;
      this.autoplay = data.auto == 'true';
      this.timerDelay = Number(data.delay) || 3000;
      this.arrows = data.arrows == 'true';
      this.dots = data.dots == 'true';

      if(this.autoplay) this.autoPlay();
      
      window.addEventListener('load', () => {
          this.minHeight = this.$refs.carousel.offsetHeight + 'px';
        });
      
        /////////// 彈跳視窗速度

        $('a[href="#modal_order"]').click(function(event) {
          event.stopPropagation();
          $(this).modal({
            fadeDuration: 300
          });
        });  
    },

    updated(){
      // 判別是否為會員才可報名
      if($('#mem_state').text() === "會員"){
        $('#checkMem').attr("href","#modal_login");
      }else{
        $('#checkMem').attr("href","#modal_order");
      }  
    }

  })	
  



       
       


