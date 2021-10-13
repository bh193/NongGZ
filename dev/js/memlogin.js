Vue.component('login',{
    data(){
        return{
            user: '',
            userpassword:'',
            loginmsg:'',
        }
    },
    methods: {
    },

    template:`
    <div  id="login">
        <form  class="login" action="./phps/memlogin.php" method="post">
            <div class="text">
                <label for="">電子信箱</label>
                <input type="mail" v-model="user" name="mem_user">
            </div>
            <div class="text">
                <label for="">密碼</label>
                <input type="password" v-model="userpassword" name="mem_password" >
            </div>
            <div class="text">
                    <button type="reset" class="btn">清除</button>
                    <button class="btn" type="submit">登入</button>
                    <div class="erromis" v-text="loginmsg"></div>

            </div>
        </form>
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
            error:'',
            msg:'註冊成功，歡迎加入農果子',          
        }
    },
    methods: {

        check(){
        let checkemail = /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z]+$/;


        if(this.username == ''|| this.mail == ''|| this.psw == '' || this.psw2 == '' ){
            this.msg = '尚有欄位未填寫'
            return
        }
        if(!checkemail.test(this.mail)){
            this.msg = '信箱格式錯誤'
            return
        }
        if(this.psw != this.psw2){
            this.msg  = '確認密碼不一致'
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
                        // dataType:'json',
                        success: (res) => {
                        console.log(res)
                        },
                        error: (res,err) => {
                            console.log(res,err)
                        },
                        complete: () => { //都會執行這行
                    
                        }
                        });
                }
            },
            error: (err) => {
             
            },
            complete: () => { //都會執行這行

            }
            });

        }
        


            
 
        
    },

    },
    mounted() {


    },
    template:`
    <div id="register">
    <form  class="register">
        <div class="text">
            <label for="">姓名</label>
            <input type="text" v-model="username" name="mem_name">
        </div>
        <div class="text">
            <label for="">電子信箱</label>
            <input type="text" v-model="mail" name="mem_email">
        </div>
        <div class="text">
            <label for="">密碼</label>
            <input type="password" v-model="psw" name="mem_psw">
        </div>
        <div class="text">
            <label for="">確認密碼</label>
            <input type="password" v-model="psw2" name="psw2">
        </div>
        <div class="text">
            <input type="checkbox" v-model="selected">
            <label for="check">點擊註冊代表您同意 之 <a href="">會員條款</a> 與<a href="#">客戶隱私權條款</a></label>

        </div>
       
        <div class="text">
            <button class="btn" type="reset">清除</button>
            <a href="#sendmail" rel="modal:open" @click="check"><button class="btngrenn">送出</button></a>
        </div>
     </form>
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
});