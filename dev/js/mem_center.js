let app = new Vue({
  el: "#app",
  data: {
    AllMem: [],
    AllT_order: [],
    AllA_order:[],
    ShowImage: '',
  },
  computed: {
    all() {
      return this.AllMem.filter((item) => {
        return item.mem_id == $("#mem_id").text();
      });
    },
    trees() {
      return this.AllT_order.filter((item) => {
        return item.mem_id == $("#mem_id").text();
      });
    },
    activitys(){
      return this.AllA_order.filter((item) => {
        return item.mem_id == $("#mem_id").text();
      });
    }
  },
  methods:{
  //   imgchange(e) {
  //     let file = e.target.files[0];
  //     let readFile = new FileReader();
  //     readFile.readAsDataURL(file);
  //     readFile.addEventListener('load', this.loadImage);
  //     // document.getElementsByClassName('show_space').src = URL.createObjectURL(file);
  // },
  //   loadImage(e) {
  //     this.ShowImage = e.target.result;
  // },
  imgchange(e) {    	   
    let show = URL.createObjectURL(e.target.files[0]);
    this.ShowImage = show;
    // show.style.maxWidth = '110px';
    // show.style.maxHeight = '110px';   
    // 怎麼修改
  },
  },
  mounted() {
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
    // 單筆訂單開合與+-切換
    $(".item").click(function (e) {
      // let setThis = $(this);
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

    //果樹cavanas
    //判定水果數量與大小顆
    for (i = 0; i < $(".for2").length; i++) {
      var size = $(".size").eq(i).text(); //大中小
      var id = parseInt($(".fruit_id").eq(i).text()); //水果id
      var number = parseInt($(".number").eq(i).text()); //數量

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

      //updated後head生成js--canvas
      let orange_js = document.createElement("script");
      orange_js.type = "text/javascript";
      orange_js.src = "./js/orange.min.js";
      document.head.appendChild(orange_js);

      let apple_js = document.createElement("script");
      apple_js.type = "text/javascript";
      apple_js.src = "./js/apple.min.js";
      document.head.appendChild(apple_js);

      let mango_js = document.createElement("script");
      mango_js.type = "text/javascript";
      mango_js.src = "./js/mango.min.js";
      document.head.appendChild(mango_js);

      let peach_js = document.createElement("script");
      peach_js.type = "text/javascript";
      peach_js.src = "./js/peach.min.js";
      document.head.appendChild(peach_js);

      let red_js = document.createElement("script");
      red_js.type = "text/javascript";
      red_js.src = "./js/red-dates.min.js";
      document.head.appendChild(red_js);

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
          for (var i = 0; i <= 6; i++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(i).show();
          }
        } else if (number > 30) {
          for (var i = 0; i <= 4; i++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(i).show();
          }
        } else if (number > 0) {
          for (var i = 0; i <= 2; i++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(i).show();
          }
        } else {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").hide();
        }
      } else if (id == 4) {
        if (number > 45) {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").show();
        } else if (number > 30) {
          for (var i = 0; i <= 6; i++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(i).show();
          }
        } else if (number > 15) {
          for (var i = 0; i <= 4; i++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(i).show();
          }
        } else if (number > 0) {
          for (var i = 0; i <= 2; i++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(i).show();
          }
        } else {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").hide();
        }
      } else if (id == 5) {
        if (number > 180) {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").show();
        } else if (number > 120) {
          for (var i = 0; i <= 6; i++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(i).show();
          }
        } else if (number > 60) {
          for (var i = 0; i <= 4; i++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(i).show();
          }
        } else if (number > 0) {
          for (var i = 0; i <= 2; i++) {
            $('.tree_fruit_box').eq(i).find(".tree_fruit").eq(i).show();
          }
        } else {
          $('.tree_fruit_box').eq(i).find(".tree_fruit").hide();
        }
      }
    }
  },
});

//抓會員資料庫
function getActivityList() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    // console.log(JSON.parse(xhr.responseText))
    app.AllMem = JSON.parse(xhr.responseText);
    console.log(app.AllMem);
  };
  xhr.open("get", "../dist/phps/onlyMemberInCenter.php", true);
  xhr.send(null);
}
window.addEventListener("load", function () {
  getActivityList();
});

//抓果樹資料庫
function getT_orderList() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    app.AllT_order = JSON.parse(xhr.responseText);
    // console.log(app.AllT_order)
  };
  xhr.open("get", "../dist/phps/onlyT_orderInCenter.php", true);
  xhr.send(null);
}
window.addEventListener("load", function () {
  getT_orderList();
});

//抓活動訂單資料庫
function getA_orderList() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    app.AllA_order = JSON.parse(xhr.responseText);
  };
  xhr.open("get", "../dist/phps/back_activity_order.php", true);
  xhr.send(null);
}
window.addEventListener("load", function () {
  getA_orderList();
});

