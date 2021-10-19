let app = new Vue({
  el: "#app",
  data: {
    AllMem: [],
    AllT_order: [],
    AllA_order:[],
    AllCoupon:[],
    AllTreehistory:[],
    order_treeId:'',
    ShowImage: '',
    mem_id: '',
    getDataCount: 0,
  },
  computed: {
    history_img() {
      return this.AllTreehistory.filter((item) => {
        return item.tree_id == this.order_treeId;
      });
    },
    all() {
      return this.AllMem.filter((item) => {
        return item.mem_id == this.mem_id
      });
    },
    trees() {
      return this.AllT_order.filter((item) => {
        return item.mem_id == this.mem_id
      });
    },
    activitys(){
      return this.AllA_order.filter((item) => {
        return item.mem_id == this.mem_id
      });
    },
    coupons(){
      return this.AllCoupon.filter((item) => {
        return item.mem_id == this.mem_id
      });
    },
  },
  methods:{

    // 讓data裡的order_treeId與#from_treeId相同
    getOrder_treeId(){
      this.order_treeId=$('#from_treeId').text();
    },

    //會員session
    getMemInfo() {
      let xhr = new XMLHttpRequest();
      xhr.onload =  () => {
        let member = JSON.parse(xhr.responseText);
        if (member.mem_email) {
          this.mem_id = member.mem_id;
          this.getT_orderList();
          this.getA_orderList();
          this.getCouponList();
          this.getMember();
        }
      }
      xhr.open("get", "../dist/phps/getMemInfo.php", true);
      xhr.send(null);
    },

  //抓會員資料庫
  getMember() {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      // console.log(JSON.parse(xhr.responseText))
      this.AllMem = JSON.parse(xhr.responseText);
            
    };
    xhr.open("get", "../dist/phps/onlyMemberInCenter.php", true);
    xhr.send(null);
  },

  //抓歷史照片資料庫
  getTreehistoryList(){
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      this.AllTreehistory = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "../dist/phps/onlyTreehistoryInCenter.php", true);
    xhr.send(null);
  },
    
  //抓果樹資料庫
  getT_orderList() {
    let xhr = new XMLHttpRequest();
    xhr.onload =  () => {
      this.AllT_order = JSON.parse(xhr.responseText);
      
      //拿到資料後綁定下面的click
      //計算加到>2之後做onCollapse
      this.getDataCount++;
      if (this.getDataCount >2 ) this.$nextTick(this.onCollapse);
    };
    xhr.open("get", "../dist/phps/onlyT_orderInCenter.php", true);
    xhr.send(null);
  },

  //抓活動資料庫
  getA_orderList() {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      this.AllA_order = JSON.parse(xhr.responseText);
      
      this.getDataCount++;
      if (this.getDataCount >2 ) this.$nextTick(this.onCollapse);
    };
    xhr.open("get", "../dist/phps/back_activity_order.php", true);
    xhr.send(null);
  },

  //抓折扣券資料庫
  getCouponList() {
    let xhr = new XMLHttpRequest();
    xhr.onload = () => {
      this.AllCoupon = JSON.parse(xhr.responseText);
      
      this.getDataCount++;
      if (this.getDataCount >2 ) this.$nextTick(this.onCollapse);
    };
    xhr.open("get", "../dist/phps/onlyCouponInCenter.php", true);
    xhr.send(null);
  },

  //瀏覽上傳圖
  imgchange(e) {    	   
    let show = URL.createObjectURL(e.target.files[0]);
    this.ShowImage = show;
  },

  //開合
  onCollapse() {
    $(".item").click(function (e) {
      $(this).next(".detail").slideToggle();
      
      var icon = $(this).find("#plus");
      if (icon.css("display") == "none") {
        icon.show();
      } else {
        icon.hide();
      }

      var icon = $(this).find("#minus");
      if (icon.css("display") == "none") {
        icon.show();
      } else {
        icon.hide();
      }
    });
  },
  },

  mounted() {
    // 1.先getMemInfo 拿到mem_id
    // 2.拿t-order資料
    // 3.綁定onclick

    this.getMemInfo();
    this.getTreehistoryList();
    
    // 認養及體驗活動訂單的頁面切換
    $(function () {
      var $orderSelect = $(".order-select"),
        $tabs = $orderSelect.find(".tabs"),
        $page = $tabs.find("a"),
        $order = $orderSelect.find(".orders"),
        $content = $order.find("> li");
        $page.eq(0).addClass("active");
        $content.eq(0).show();
        $page.on("click", function () {
        var $pageIndex = $(this).index();
        $(this).addClass("active").siblings().removeClass("active");
        $content.eq($pageIndex).show().siblings().hide();
      });
    });

    //頁面icon切換
    $(".select_1").click(function () {
      $(this).find(".tree_gray").hide();
      $(this).find(".tree_green").show();
      $(this).siblings(".select_2").find(".apple_gray").show();
      $(this).siblings(".select_2").find(".apple_green").hide();
      $(this).siblings(".select_3").find(".coupon_gray").show();
      $(this).siblings(".select_3").find(".coupon_green").hide();
    });

    $(".select_2").click(function () {
      $(this).find(".apple_gray").hide();
      $(this).find(".apple_green").show();
      $(this).siblings(".select_1").find(".tree_gray").show();
      $(this).siblings(".select_1").find(".tree_green").hide();
      $(this).siblings(".select_3").find(".coupon_gray").show();
      $(this).siblings(".select_3").find(".coupon_green").hide();
    });

    $(".select_3").click(function () {
      $(this).find(".coupon_gray").hide();
      $(this).find(".coupon_green").show();
      $(this).siblings(".select_1").find(".tree_gray").show();
      $(this).siblings(".select_1").find(".tree_green").hide();
      $(this).siblings(".select_2").find(".apple_gray").show();
      $(this).siblings(".select_2").find(".apple_green").hide();
    });
  },



 
  updated() {
    

   

    //點查看按鈕後 讓#from_treeId的text 與 抓到的id相同
    $('.smallbtn_s').click(function(){
      $('#from_treeId').text($(this).siblings('.tree_id').text());
      app.getOrder_treeId();
    })

    //折扣券使用狀態改成中文
    for (let i = 0; i < $('.status').length; i++) {
      let status = $('.status').eq(i).text();
      if (status == 0) {
          $('.status').eq(i).text('未使用');
      }else if (status == 1) {
          $('.status').eq(i).text('已使用');
      };
    };

    //彈跳視窗速度
    $('a[href="#modal_password"]').click(function(event) {
      event.stopPropagation();
      $(this).modal({
        fadeDuration: 300
      });
      return false;
    });




    //果樹cavanas
    //判定水果數量與大小顆
    let orange_js = document.createElement('script');
    orange_js.type = 'text/javascript';
    orange_js.src = './js/orange.min.js';
    document.head.appendChild(orange_js);

    let apple_js = document.createElement('script');
    apple_js.type = 'text/javascript';
    apple_js.src = './js/apple.min.js';
    document.head.appendChild(apple_js);

    let mango_js = document.createElement('script');
    mango_js.type = 'text/javascript';
    mango_js.src = './js/mango.min.js';
    document.head.appendChild(mango_js);

    let peach_js = document.createElement('script');
    peach_js.type = 'text/javascript';
    peach_js.src = './js/peach.min.js';
    document.head.appendChild(peach_js);

    let red_js = document.createElement('script');
    red_js.type = 'text/javascript';
    red_js.src = './js/red-dates.min.js';
    document.head.appendChild(red_js);
     
  
    for (let i = 0; i < $(".for2").length; i++) {
      let size = $(".size").eq(i).text(); //大中小
      let id = parseInt($(".fruit_id").eq(i).text()); //水果id
      let number = parseInt($(".number").eq(i).text()); //數量

      //canvas
      if (id == 1) {
        $("canvas").eq(i).attr("class", "orange");
      } else if (id == 2) {
        $("canvas").eq(i).attr("class", "apple");
      } else if (id == 3) {
        $("canvas").eq(i).attr("class", "mango");
      } else if (id == 4) {
        $("canvas").eq(i).attr("class", "peach");
      } else if (id == 5) {
        $("canvas").eq(i).attr("class", "red-dates");
      }
     
      //判定大小
      if (size == "大") {
        $('.tree_fruit_box').eq(i).find(".tree_fruit").css("width", "16%");
      } else if (size == "中") {
        $('.tree_fruit_box').eq(i).find(".tree_fruit").css("width", "12%");
      } else if (size == "小") {
        $('.tree_fruit_box').eq(i).find(".tree_fruit").css("width", "8%");
      }

      //判定水果種類
      $('.tree_fruit_box').eq(i).find(".tree_fruit").attr("src", `images/fruit/fruit_${id}.svg`);

      //判定數量
      if (id <= 3) {
        if (number > 90) {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").show();
        } else if (number > 60) {
          for (let j = 0; j <= 6; j++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(j).show();
          }
        } else if (number > 30) {
          for (let j = 0; j <= 4; j++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(j).show();
          }
        } else if (number > 0) {
          for (let j = 0; j <= 2; j++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(j).show();
          }
        } else {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").hide();
        }
      } else if (id == 4) {
        if (number > 45) {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").show();
        } else if (number > 30) {
          for (let j = 0; j <= 6; j++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(j).show();
          }
        } else if (number > 15) {
          for (let j = 0; j <= 4; j++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(j).show();
          }
        } else if (number > 0) {
          for (let j = 0; j <= 2; j++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(j).show();
          }
        } else {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").hide();
        }
      } else if (id == 5) {
        if (number > 180) {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").show();
        } else if (number > 120) {
          for (let j = 0; j <= 6; j++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(j).show();
          }
        } else if (number > 60) {
          for (let j = 0; j <= 4; j++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(j).show();
          }
        } else if (number > 0) {
          for (let j = 0; j <= 2; j++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(j).show();
          }
        } else {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").hide();
        }
      }
    }
  },

});

 
// $(".toggle_eye").click(() =>{
//   if($(this).siblings().prop('type', 'password')){
//     $(this).siblings().prop('type', 'text')
//   }
// })

let toggleEye = document.querySelector('.toggle_eye');
let password = document.querySelector('#psw');

toggleEye.addEventListener('click', function (e) {
  // 切換input type
  let type = password.getAttribute('type') === 'password' ? 'text' : 'password';
  password.setAttribute('type', type);
  // toggle 眼睛icon(bi-eye / bi-eye-slash)
  this.classList.toggle('bi-eye');
});

let toggleEye1 = document.querySelector('.toggle_eye1');
let password1 = document.querySelector('#psw1');

toggleEye1.addEventListener('click', function (e) {
  // 切換input type
  let type = password1.getAttribute('type') === 'password' ? 'text' : 'password';
  password1.setAttribute('type', type);
  // toggle 眼睛icon(bi-eye / bi-eye-slash)
  this.classList.toggle('bi-eye');
});

let toggleEye2 = document.querySelector('.toggle_eye2');
let password2 = document.querySelector('#psw2');

toggleEye2.addEventListener('click', function (e) {
  // 切換input type
  let type = password2.getAttribute('type') === 'password' ? 'text' : 'password';
  password2.setAttribute('type', type);
  // toggle 眼睛icon(bi-eye / bi-eye-slash)
  this.classList.toggle('bi-eye');
});

// function getTreehistoryList(){
//   let xhr = new XMLHttpRequest();
//   xhr.onload = function(){
//     app.AllTreehistory = JSON.parse(xhr.responseText)
//   }
//   xhr.open("get", "../dist/phps/onlyTreehistoryInCenter.php", true);
//   xhr.send(null);
// }

// window.addEventListener("load", function(){
//   getTreehistoryList();
// })