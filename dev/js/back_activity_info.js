
let app = new Vue({
  el:"#app",
  data:{
    farmers:[],
    farm_id:"",
  },
  computed: {
    //抓到登入的farm_id
    activitys() {
      return this.farmers.filter(item => { 
        return item.farm_id == this.farm_id
      });
    },
  },
  methods: {
    getFarmInfo() {
      let xhr = new XMLHttpRequest();
      xhr.onload =  ()=> {
        member = JSON.parse(xhr.responseText);
        if (member.farm_email) {
          this.farm_id = member.farm_id;
          this.getActivityList();
        }
      }
      xhr.open("get", "./phps/getFarmInfo.php", true);
      xhr.send(null);
    },
    getActivityList(){
      let xhr = new XMLHttpRequest();
      xhr.onload = () => {
        // console.log(JSON.parse(xhr.responseText))
        this.farmers = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "../dist/phps/back_activity_info.php", true);
    xhr.send(null);
  }
  },

 

  updated() {
    //收合
    $('.con_title').click(function () {
      $(this).next('.con_text').slideToggle(500,"easeOutExpo");
    }).next('.con_text').hide();

    $('.con_title').click(function () {
      $(this).find('.turn').toggleClass('turn_zero');
    })

    let Cancel = 0; //已下架
    let Normal = 0; //舉辦中
    //計算舉辦中跟已下架的筆數
    //0, 1改為中文
    for (let i = 0; i < $('.status').length; i++) {
        let status = $('.status').eq(i).text();
        if (status == 0) {
          Cancel++;
            $('.status').eq(i).text('已下架');
        }else if (status == 1) {
          Normal++;
            $('.status').eq(i).text('舉辦中');
        };
      };
      $('#Cancel').text(Cancel);
      $('#Normal').text(Normal);

  },
  mounted() {
    this.getFarmInfo();
    $(document).ready(function(){
      $("#clear").click(function(){
        $(this).parent().siblings(".item").find("#text_area").val("");
        $(this).parent().siblings(".item").find(".item_text").val("");
      });
    });
  },
})	
      
    






