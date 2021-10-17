let farmTable = new Vue({
    el:"#farmTable",
    data:{
    farmRows:[],
    farmDetails:{},
    selected:'1',
    updatelat:'',
    updatelon:'',
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
            case '3':
            return "上架";
                break;
            default:
                
                return "錯誤"
                break;
            }
    },
    openmodal(){  
        $('a[href="#popOrder"]').click(function(event) {
            event.stopPropagation();
            $(this).modal({
              fadeDuration: 300
            });
          });
    },
    update(){
        $.ajax({
            type: 'POST',
            url: "./phps/update_adminFarm.php",
            data: JSON.stringify({
                newlat:this.updatelat,
                newlon:this.updatelon,
                newstatus:this.selected,
                
            }),
            contentType:"application/json; charset=utf-8",
            success: (res) => {
                console.log('更新成功')
            },
            error: (err) => {
                console.log('更新失敗')
            },
            complete: () => { 

            }
            });
    },

},

computed:{
    filterF() {
        return this.farmRows.filter(farmRow =>{return farmRow.farm_name.includes(this.search)||farmRow.farm_gm.includes(this.search)||farmRow.farm_address.includes(this.search)||farmRow.farm_tel.includes(this.search)});
        }
    },
    // p1(){
    //     return this.farmDetails.filter( p2 =>{
    //         return p2.farm_cert == this.farmDetails
    //     })
    // }
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
getfarms();

})

