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
        cityRows:[],
        msg:'',
    },
    methods: {
        clearinput(){
            this.farm_name="";
            this.farm_gm="";
            this.city_id="";
            this.farm_address="";
            this.farm_cert="";
            this.farm_tel="";
            this.farm_email="";
            this.farm_psw="";
            this.farm_psw2="";
            this.farm_psw2="";
            this.checked=false;
        },
        openmodal(){
            $('a[href="#sendmail"]').click(function(event) {
                event.stopPropagation();
                $(this).modal({ fadeDuration: 300});
                })
        },
        addfarmer(){
        // let xhr = new XMLHttpRequest();
        // xhr.open("post", "../dist/phps/returnPosts.php", true);
        // xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
        //送出資料
        let checkemail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;

        if(this.fname == ''|| this.fgm == ''|| this.faddress == '' || this.fcert == '' || this.fmail == '' || this.fphone == '' || this.psw == '' || this.psw2 == ''){
            this.msg="尚有欄位未填寫"
            return
        }
        if(!checkemail.test(this.fmail)){
            this.msg="信箱格式錯誤"
            return
        }
        if(this.psw != this.psw2){
            this.msg="確認密碼不一致"
            return
        }
        if(this.checked == false){
            this.msg="會員條款未勾選"
            return
        }
        else{
                // xhr.send(data_farmeinfo);
                $.ajax({
                type: 'post',
                url: "./phps/insertFarm.php",
                data: JSON.stringify({
                    farm_name: this.fname, 
                    farm_gm:this.fgm,
                    city_id:this.selected,
                    farm_address:this.faddress,
                    farm_cert:this.fcert,
                    farm_tel:this.fphone,
                    farm_email:this.fmail,
                    farm_psw:this.psw,
                    farm_psw2:this.psw2   
                }),
                contentType:"application/json; charset=utf-8",
                success: (res) => {
                this.msg="申請為小農需2-3個工作天待審核通過後會寄送信件至您填寫的信箱。 謝謝"
                this.clearinput();
                console.log('ok')
                window.setTimeout("window.location='../index.html'",4000);
                
                },
                error: () => {
                this.msg="系統發生錯誤，請聯絡農果子"
                console.log('失敗')
                },
                complete: () => {
                
                }
                });
        }

        },
  
    },
    computed:{
        
    },
    mounted() {
        this.openmodal();
        // axios.get('./phps/city_select.php')
        //                  .then(res =>
        //                      console.log(res.data)
                           
                           
        //                      )    //成功時的處理函數
        //                  .catch(error => console.log(error)) 
    },
    })	
  
    // 下拉選單city table
    function getcity(){
    let xhr = new XMLHttpRequest();
    xhr.onload=function(){
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
  