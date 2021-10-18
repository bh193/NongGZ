let memTable = new Vue({
    el:"#memTable",
    data:{
    memRows:[],
    selected:'1',
    search:'',
    options: [
        { text: '停用', value: '0' },
        { text: '啟用', value: '1' },
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
        return "啟用";
            break;
        default:
            return "錯誤"
            break;
     }
    }
    
    },
    computed:{
    filterM() {
    return this.memRows.filter(memRow =>{return memRow.mem_name.includes(this.search)||memRow.mem_email.includes(this.search)||memRow.mem_tel.includes(this.search)});
    }
    },
    })	

    function getmember(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(JSON.parse(xhr.responseText))
        memTable.memRows = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "./phps/adminmem.php", true);
    xhr.send(null);
    }
    
    window.addEventListener("load", function(){
    //------------------------網頁的初始設定
    getmember();
    
    })
    
    