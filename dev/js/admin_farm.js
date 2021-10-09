let farmTable = new Vue({
el:"#farmTable",
data:{
farmRows:[],
farmDetails:{},
selected:'1',
search:'',
options: [
    { text: '停用', value: '0' },
    { text: '審核中', value: '1' },
    { text: '啟用', value: '2' },
    { text: '上架', value: '3' },
    ],
},
methods: {
filterData(name) {
// console.log('filterData')
// console.log(name)
this.farmDetails=this.farmRows.find(data=>data.farm_name==name)
},
getdata(id){
 // console.log('filterData')
// console.log(name)
this.farmDetails=this.farmRows.find(data=>data.farm_name==name)
},
getStatus(gets){
switch (gets){
    case '0':
    return "停用";
        break;
    case '1':
    return "審核中";
        break;
    case '2':
    return "啟用";
        break;
    case '3':
    return "上架";
        break;
    default:
        
        return "錯誤"
        break;
}
}

},
computed:{
filterF() {
// prodRows2 = prodRows;
return this.farmRows.filter(farmRow =>{return farmRow.farm_name.toLowerCase().includes(this.search.toLowerCase())});
}
},
})	

function getfarms(){
let xhr = new XMLHttpRequest();
xhr.onload = function(){
    console.log(JSON.parse(xhr.responseText))
    farmTable.farmRows = JSON.parse(xhr.responseText)
}
xhr.open("get", "./phps/adminFarm.php", true);
xhr.send(null);
}

window.addEventListener("load", function(){
//------------------------網頁的初始設定
getfarms();

})

