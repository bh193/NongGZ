let reportTable = new Vue({
    el:"#reportTable",
    data:{
    reportRows:[],
    reportDetails:{},
    selected:'0',
    search:'',
    options: [
        { text: '待審核', value: '0' },
        { text: '通過', value: '1' },
        { text: '未通過', value: '2' },
        ],
    },
    methods: {
    filterData(id) {
    this.reportDetails=this.reportRows.find(data=>data.post_id==id)
    },
    getStatus(gets){
    switch (gets){
        case '0':
        return "待審核";
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
        },
        updatepost(){
            axios({
                method: 'get',
                url: 'phps/update_adminPost.php',
                params:{
                    postid:this.reportDetails.post_id,
                    newstatus:this.selected
                },
            })
            .then((response) => 
                location.reload()
                // console.log(response)
            )
            .catch((error) => console.log(error))
        }   
    
    },
    computed:{
        filterRow() {
            return this.reportRows.filter(reportRow => {
                return reportRow.report_reason.includes(this.search) ||
                reportRow.mem_email.includes(this.search)||reportRow.post_id.includes(this.search)
            });
        },
    },
    })	

    function getreport(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(JSON.parse(xhr.responseText))
        reportTable.reportRows = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "phps/adminReport.php", true);
    xhr.send(null);
    }
    
    window.addEventListener("load", function(){

    getreport();
    
    })
    
    