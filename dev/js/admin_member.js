let memTable = new Vue({
    el:"#memTable",
    data:{
    memRows:[],
    memDetails:{},
    selected:'1',
    search:'',
    options: [
        { text: '停用', value: '0' },
        { text: '啟用', value: '1' },
        ],
    },
    methods: {
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
    },
    filterData(id) {
        this.memDetails=this.memRows.find(data=>data.mem_id==id) 
        
    },
    updatemem(){
        axios({
            method: 'get',
            url: './phps/update_adminMem.php',
            params:{
                member:this.memDetails.mem_id,
                newstatus:this.selected
            },
        })
        .then((response) => 
            location.reload()
        )
        .catch((error) => console.log(error))
    }
    
    },
    computed:{
        filters(){
            return this.memRows.filter(memRow =>{return memRow.mem_name.includes(this.search)||memRow.mem_email.includes(this.search)});
        }
    },
    })	

    function getmember(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(JSON.parse(xhr.responseText))
        memTable.memRows = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "./phps/adminMem.php", true);
    xhr.send(null);
    }
    
    window.addEventListener("load", function(){
    getmember();
    
    })
    
    