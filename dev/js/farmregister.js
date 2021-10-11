let farmR = new Vue({
  el:"#farmR",
  data:{
      fname:'',
      fgm:'',
      faddress:'',
      fcert:'',
      fmail:'',
      fphone:'',
      psw:'',
      psw2:'',
      checked:false,
      selected:'',
      cityRows:[]
  },
  methods: {
      addfarmer(){
      // let xhr = new XMLHttpRequest();
      // xhr.open("post", "../dist/phps/returnPosts.php", true);
      // xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
      //送出資料
      let data_farmeinfo = {
      'farm_name': this.fname, //資料庫名稱,v-model名稱
      'farm_gm':this.fgm,
      'city_id':this.selected,
      'farm_address':this.faddress,
      'farm_cert':this.fcert,
      'farm_tel':this.fphone,
      'farm_email':this.fmail,
      'farm_psw':this.psw,
      'farm_psw2':this.psw2            
      };
      // xhr.send(data_farmeinfo);
      $.ajax({
      type: 'post',
      url: "./phps/insertFarm.php",
      data: data_farmeinfo,
      dataType:'json',
      success: (res) => {
      console.log(res)
      },
      error: () => {
      console.log('error')
      },
      complete: () => {
      console.log(data_farmeinfo)
      }
      });
      },

  },
  computed:{

  },
  })	

  //下拉選單city table
  function getcity(){
  let xhr = new XMLHttpRequest();
  xhr.onload=function(){
      console.log('ok')
      console.log(JSON.parse(xhr.responseText))
      farmR.cityRows = JSON.parse(xhr.responseText)
  }
  xhr.open("get", "./phps/city_select.php", true);
  xhr.send(null);
  }
  window.addEventListener("load", function(){
  //------------------------網頁的初始設定
  getcity();

  })
