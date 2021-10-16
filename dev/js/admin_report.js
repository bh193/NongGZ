let reportTable = new Vue({
    el:"#reportTable",
    data:{
    reportRows:[],
    selected:'0',
    search:'',
    options: [
        { text: '未審核', value: '0' },
        { text: '通過', value: '1' },
        { text: '未通過', value: '2' },
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
        return "未審核";
            break;
        case '1':
        return "通過";
            break;
        case '2':
        return "未通過";
            break;
        default:
            return "錯誤"
            break;
     }
    }
    
    },
    computed:{
    filterF() {
    return this.reportRows.filter(reportRows =>{return reportRows.post_id.includes(this.search)||reportRows.report_reason.includes(this.search)});
    }
    },
    })	

    function getreport(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(JSON.parse(xhr.responseText))
        reportTable.reportRows = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "./phps/adminReport.php", true);
    xhr.send(null);
    }
    
    window.addEventListener("load", function(){
    //------------------------網頁的初始設定
    getreport();
    
    })
    
    