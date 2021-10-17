let contactus = new Vue({
    el:"#contactus",
    data:{
        name:'',
        selected:'',
        email:'',
        content:'',
        msg:'感謝您的意見與回饋'
        
    },
    methods: {
        callmail(){
            (function () {
                emailjs.init("user_aMjH5KHo9lvpKrwcByHs4");
            })();
        },
        clearinput(){
            this.name="";
            this.selected="";
            this.email="";
            this.content="";
        },
        sendmail(){
            emailjs.send("service_9mcavrt","template_ymf7nzc",{
                subject: "[農果子]問題回報",
                name: this.name,
                selected: this.selected,
                email: this.email,
                content: this.content,
                }).then(response=>{
                    console.log("succes",response.status);
                },(error)=>{
                    console.log(error);
                })
        },
        checkform(){
            let checkemail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

            if(this.name == ''|| this.selected == ''|| this.email == '' || this.content == '' ){
                this.msg = '尚有欄位未填寫'
                return
            }
            if(!checkemail.test(this.email)){
                this.msg = '信箱格式錯誤'
                return
            }
            else{
                this.sendmail();
                this.$nextTick(this.clearinput);
            }
        },



    
    },
    computed:{

    },
    mounted() {
        this.callmail();
    },
    })	



