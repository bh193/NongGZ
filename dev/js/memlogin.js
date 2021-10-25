Vue.component('login',{
    data(){
        return{
            user: '',
            userpassword:'',
            loginmsg:'登入成功，正在前往會員中心',
        }
    },
    methods: {
        clearinput(){
            this.user="";
            this.userpassword="";
        },
        openmodal(){
            $('a[href="#loginbox"]').click(function(event) {
                event.stopPropagation();
                $(this).modal({ fadeDuration: 300});
            })
        },

        checkmember(){
            if(this.user ==''||this.userpassword  == ''){
                this.loginmsg="尚有欄位未填寫"
                return
            }
            $.ajax({
                type: 'post',
                url: "./phps/memlogin.php",
                data: JSON.stringify({
                    usermail: this.user, 
                    userpsw:this.userpassword,   
                }),
                contentType:"application/json; charset=utf-8",
                success: (res) => {
                    if(res == 1){
                        this.loginmsg="登入失敗，帳號密碼錯誤或帳號停用中"
                        this.$nextTick(this.clearinput);
                    }
                    else{
                     
                        window.setTimeout("window.location='mem_center.html'",2000);
                    }
                },
                error: () => {
                this.loginmsg="系統發生錯誤，請聯絡農果子"
                this.$nextTick(this.clearinput);
                },
                complete: () => {
                
                }
                });
        }
    },
    mounted() {
        this.openmodal();
    },
    template:`
    <div id="login">
        <div  class="login">
            <div class="text">
                <label for="email">電子信箱</label>
                <input type="mail" v-model="user" name="mem_user" id="email">
            </div>
            <div class="text">
                <label for="psw">密碼</label>
                <input type="password" v-model="userpassword" name="mem_password" id="psw" >
            </div>
            <div class="text">
                    <button class="btn" @click="clearinput">清除</button>
                    <a href="#loginbox" rel="modal:open" @click="checkmember"><button class="btngrenn">登入</button></a>
                        
            </div>
        </div>
        <div id="loginbox" class="modal dialog">
        <div class="msg"><a><h3 v-text="loginmsg"></h3></a></div>
     </div>
        
    </div>
    `,
});
Vue.component('register',{
    data(){
        return{
            username: '',
            mail:'',
            psw:'',
            psw2:'',
            selected:false,
            msg:'註冊成功，請重新登入', 
        }
    },
    methods: {
        openmodal(){
            $('a[href="#sendmail"]').click(function(event) {
                event.stopPropagation();
                $(this).modal({ fadeDuration: 300});
            })
        },
        clearinput(){
            this.username="";
            this.mail="";
            this.psw="";
            this.psw2="";
            this.selected="";
        },
        check(){
        let checkemail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;


        if(this.username == ''|| this.mail == ''|| this.psw == '' || this.psw2 == '' ||this.selected == false){
            this.msg = '尚有欄位未填寫'
            return
        }
        if(!checkemail.test(this.mail)){
            this.msg = '信箱格式錯誤'
            this.mail=""
            return
        }
        if(this.psw != this.psw2){
            this.msg  = '確認密碼不一致'
            this.psw="";
            this.psw2="";
            this.selected="";
            return
        }
        if(this.selected == false){
            this.msg  = '會員條款未勾選'
            return
        }
        if(this.username != null && this.mail != null && this.psw != null && this.psw2 != null  ){
       $.ajax({
            type: 'POST',
            url: "./phps/checkmail.php",
            data: JSON.stringify({
                user:this.username,
                usermail:this.mail,
                userpsn:this.psw
            }),
            contentType:"application/json; charset=utf-8",
            success: (res) => {
                if(res == 1){
                    this.msg="信箱已被使用過"
                    this.$nextTick(this.clearinput);

                }else{
                        $.ajax({
                        type: 'POST',
                        url: "./phps/addmem.php",
                        data: JSON.stringify({
                            user:this.username,
                            usermail:this.mail,
                            userpsn:this.psw
                        }),
                        contentType:"application/json; charset=utf-8",                
                        success: (res) => {
                
                        // this.$nextTick(this.clearinput);
                        window.setTimeout("window.location='memlogin.html'",2000);
                        
                        },
                        error: (res,err) => {
                            console.log(res,err)
                        },
                        complete: () => { 
                            
                        }
                        });
                }
            },
            error: (err) => {
             
            },
            complete: () => { 

            }
            });

        }
        


            
 
        
    },

    },
    mounted() {
        this.openmodal();

    },
    template:`
    <div id="register">
    <div  class="register">
        <div class="text">
            <label for="username">姓名</label>
            <input type="text" v-model="username" name="mem_name" id="username">
        </div>
        <div class="text">
            <label for="usermail">電子信箱</label>
            <input type="text" v-model="mail" name="mem_email" id="usermail">
        </div>
        <div class="text">
            <label for="userpsw">密碼</label>
            <input type="password" v-model="psw" name="mem_psw" id="userpsw">
        </div>
        <div class="text">
            <label for="userpsw2">確認密碼</label>
            <input type="password" v-model="psw2" name="psw2" id="userpsw2">
        </div>
        <div class="text">
            <input type="checkbox" v-model="selected" id="check">
            <label for="check">點擊註冊代表您同意 之 <a href="./policy.html">會員條款</a> 與<a href="./privacy.html">客戶隱私權條款</a></label>

        </div>
       
        <div class="text">
            <button class="btn"  @click="clearinput">清除</button>
            <a href="#sendmail" rel="modal:open" @click="check"><button class="btngrenn">送出</button></a>
        </div>
     </div>
     <div id="sendmail" class="modal dialog">
     <div class="msg"><h3 v-text="msg"></h3></div>
  </div>
</div>
    `,
    
});

let mem= new Vue({
    el: '#mem',
    data: {
        content: 'login',
        
    },
    methods: {
    mystyle(boolean){
        if (boolean) 
            return{
                color:'#17C3B2',
            }
        },

    
    },
    computed:{

    }
});