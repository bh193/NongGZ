let app = new Vue({
  el:"#app",
  data:{
    activitys:[],
    input: {
      city:'',
      farm:'',
      date:''
    },
  },
  computed:{
    // 篩選器情況
    result(){
      // 1 1 1
      if(this.input.city != '' && this.input.farm != '' && this.input.date != ''){
        return this.activitys.filter(item => {
          return item.city_name == this.input.city && item.farm_name == this.input.farm && item.activity_date == this.input.date
        })
      // 1 0 0  
      }else if(this.input.city != '' && this.input.farm == '' && this.input.date == ''){
        return this.activitys.filter(item => {
          return item.city_name == this.input.city
        })
      // 0 1 0  
      }else if(this.input.city == '' && this.input.farm != '' && this.input.date == ''){
        return this.activitys.filter(item => {
          return item.farm_name == this.input.farm
        })
      // 0 0 1  
      }else if(this.input.city == '' && this.input.farm == '' && this.input.date != ''){
        return this.activitys.filter(item => {
          return item.activity_date == this.input.date
        })
      // 1 1 0  
      }else if(this.input.city != '' && this.input.farm != '' && this.input.date == ''){
        return this.activitys.filter(item => {
          return item.city_name == this.input.city && item.farm_name == this.input.farm
        })
      // 1 0 1  
      }else if(this.input.city != '' && this.input.farm == '' && this.input.date != ''){
        return this.activitys.filter(item => {
          return item.city_name == this.input.city && item.activity_date == this.input.date
        })
      }
      // 0 1 1 
      else if(this.input.city == '' && this.input.farm != '' && this.input.date != ''){
        return this.activitys.filter(item => {
          return item.farm_name == this.input.farm && item.activity_date == this.input.date
        })
      // 0 0 0 
      }else {
        return this.activitys
      }
    },
  }
})	

function getActivityList(){
  let xhr = new XMLHttpRequest();
  xhr.onload = function(){
    console.log(JSON.parse(xhr.responseText))
    app.activitys = JSON.parse(xhr.responseText)
  }
  xhr.open("get", "../dist/phps/getActivityList.php", true);
  xhr.send(null);
}

window.addEventListener("load", function(){
// 	//------------------------網頁的初始設定
  getActivityList();

// 	//------------------------註冊事件處理器
// 	let btnCartAdds = document.getElementsByClassName("btnCartAdd");
// 	let prodNames = document.getElementsByClassName("prodName");
// 	for( let i=0; i<btnCartAdds.length; i++){
// 		btnCartAdds[i].onclick = function(){
// 			console.log(i);
// 			alert( "確定購買" + prodNames[i].innerText + "商品嗎?");
// 		}
// 	}
})