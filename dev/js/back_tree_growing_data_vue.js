let tree_data = new Vue({
  el: "#tree_data",
  data: {
      trees: [],
      trees2: [], //複製trees (當作原始檔)--->點擊"恢復"取得該果樹所有資訊
      id: "", //點擊"恢復"取得tree_id值
      number: "", //點擊"恢復"取得恢復鍵class位置第幾個
  },
  watch: {
      trees() {
          this.bindToggleSlide();
      }
  },
  computed: {
      treeList() {
          return this.trees.filter(tree => { return tree.farm_id == $('#farm_id').text() });
      },
      trees2_click() {
          return this.trees2.filter(tree => { return tree.tree_id == this.id });
      },
  },
  methods: {
      bindToggleSlide() {
          //渲染完成後執行一次性更新(果樹卡片式點選往下)
          this.$nextTick(() => {
              $('.con_title').click(function () {
                  $(this).next('.con_text').slideToggle(500, "easeOutExpo");
                  $(this).find('.turn').toggleClass('turn_zero');
              }).next('.con_text').hide();
          })
      },
      tree_click() {
          //id(tree_id),numer(class位置)
          this.id = $('#click_treeId').text();
          this.number = $('#click_number').text();
          //將trees2該果樹所有資訊丟入頁面
          $('.size').eq(this.number).val(this.trees2_click[0].size);
          $('.size').eq(this.number).text(this.trees2_click[0].size);
          $('.size_select').eq(this.number).prop('selectedIndex', 0);
          $('.amount').eq(this.number).val(this.trees2_click[0].amount)
          $('.tree_start').eq(this.number).val(this.trees2_click[0].tree_start);
          $('.tree_end').eq(this.number).val(this.trees2_click[0].tree_end);
          $('.tree_price').eq(this.number).val(this.trees2_click[0].tree_price);
      }
  },
  updated() {
      //新增--開始日為當下日期
      let date=new Date().toLocaleDateString();
      $('#tree_start').val(date);
      $('#tree_start').text(date);

      //點擊"查看歷史照片"，取得該tree_id
      $('.treehistory_img').click(function () {
          $('#tree_id').text($(this).closest('.con_text').find('.treeid').val());
          more_img.treeId(); //傳至more_img之new Vue跑函式
      });

      //將status數字狀態轉國字 //秀出上下架狀態
      let noadopt = 0;
      let adopt = 0;
      let down = 0;
      for (let i = 0; i < $('.status').length; i++) {
          let status = $('.status').eq(i).text();
          if (status == 0) {
              noadopt++;
              $('.status').eq(i).text('未認養');
              $('.status').eq(i).parent().parent('.content').find('.up').hide();
              $('.status').eq(i).parent().parent('.content').find('.down').show();
          } else if (status == 1) {
              adopt++;
              $('.status').eq(i).text('已認養');
              $('.status').eq(i).parent().parent('.content').find('.up').hide();
              $('.status').eq(i).parent().parent('.content').find('.down').hide();
          } else {
              down++;
              $('.status').eq(i).text('已下架');
              $('.status').eq(i).parent().parent('.content').find('.up').show();
              $('.status').eq(i).parent().parent('.content').find('.down').hide();
          };
      };
      let all=noadopt+adopt;//未認養+已認養
      $('#noadopt').text(noadopt);
      $('#adopt').text(adopt);
      $('#down').text(down);
      $('#status_all').val(all);//判斷是否已達6棵果樹

      //篩選果樹尺寸
      for (let i = 0; i < $('.size').length; i++) {
          let size = $('.size').eq(i).text();
          if (size == "大") {
              $('.size').eq(i).nextAll('.size_b').css("display", "none");
          } else if (size == "中") {
              $('.size').eq(i).nextAll('.size_m').css("display", "none");
          } else if (size == "小") {
              $('.size').eq(i).nextAll('.size_s').css("display", "none");
          } else if (size == "無") {
              $('.size').eq(i).nextAll('.size_n').css("display", "none");
          }
      }

      //上下架按鈕更動狀態
      $('.down').click(function () {
          $(this).parent().parent('.con_text').find('.status2').val(2);
      });
      $('.up').click(function () {
          $(this).parent().parent('.con_text').find('.status2').val(0);
      });

      //點擊"恢復"鍵後trees2取得tree_id值
      $(".recover").click(function () {
          let tree_id = $(this).parent().parent('.con_text').find('.treeid').val();
          $('#click_treeId').text(tree_id);
          let number = $(".recover").index(this);
          $('#click_number').text(number);
          tree_data.tree_click(); //丟入tree_click()函式
      });
  },

})

let more_img = new Vue({
  el: "#moreimg",
  data: {
      imgs: [],
      tree_id: "", //查看歷史照片"的tree_id值
  },
  methods: {
      //獲得"查看歷史照片"的tree_id值
      treeId() {
          this.tree_id = $('#tree_id').text();
      }
  },
  computed: {
      treeId_img() {
          return this.imgs.filter(img => { return img.tree_id == this.tree_id });
      },
  },
  updated() {
      //歷史照片跳窗
      $('a[href="#moreimg"]').click(function (event) {
          event.stopPropagation();
          $(this).modal({
              fadeDuration: 300
          });
      });
  },

})

//連接php
//#getTree_data
function getTree_data() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
      tree_data.trees = JSON.parse(xhr.responseText)
      tree_data.trees2 = JSON.parse(xhr.responseText)
  }
  xhr.open("get", "./phps/getTree_data.php", true);
  xhr.send(null);
}

//連接php
//#getTree_img
function getTree_img() {
  let xhr2 = new XMLHttpRequest();
  xhr2.onload = function () {
      more_img.imgs = JSON.parse(xhr2.responseText)
  }
  xhr2.open("get", "./phps/getTree_img.php", true);
  xhr2.send(null);
}

window.addEventListener("load", function () {
  getTree_data();
  getTree_img();
})