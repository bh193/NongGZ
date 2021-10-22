
    let app = new Vue({
      el:"#app",
      data:{
        farmers:[],
      },
      computed: {
        //抓到登入的farm_id
        activitys() {
          return this.farmers.filter(item => { 
            return item.farm_id == $('#farm_id').text() 
          });
          console.log(activitys)
        },
      },
      updated() {
        //收合
        $('.con_title').click(function () {
          $(this).next('.con_text').slideToggle(500,"easeOutExpo");
        }).next('.con_text').hide();

        $('.con_title').click(function () {
          $(this).find('.turn').toggleClass('turn_zero');
        })
      },
    })


  function getActivityList(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
      console.log(JSON.parse(xhr.responseText))
      app.farmers = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "./phps/back_activity_order.php", true);
    xhr.send(null);
    }

  window.addEventListener("load", function(){
    getActivityList();
  })