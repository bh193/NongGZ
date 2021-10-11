Vue.component('login',{
    methods: {
        loginmem(){
            fetch('./php/login.php')
        }
    },
    template:`
    <div  id="login">
        <form action="" class="login">
            <div class="text">
                <label for="">電子信箱</label>
                <input type="mail" required="required">
            </div>
            <div class="text">
                <label for="">密碼</label>
                <input type="password" required="required">
            </div>
            <div class="text">
                    <button type="reset" class="btn">清除</button>
                    <button class="btn"><a href="./mem_center.html" style="color: #fff;text-decoration: none;">登入</a></button>

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
            selected:false
        }
    },
    methods: {
                    addmem(){
        let data_meminfo = {
        'mem_name': this.username, //資料庫名稱,v-model名稱
        'mem_email':this.mail,
        'mem_psw':this.psw,
        };
        $.ajax({
        type: 'post',
        url: "./phps/addmem.php",
        data: data_meminfo,
        dataType:'json',
        success: (res) => {
        console.log(res)
        },
        error: () => {
        console.log('error')
        },
        complete: () => {
        console.log(data_meminfo)
        }
        });
        
    },
    },

    template:`
    <div id="register">
        <form action="" class="register">
            <div class="text">
                <label for="">姓名</label>
                <input type="text" v-model="username" name="mem_name">
            </div>
            <div class="text">
                <label for="">電子信箱</label>
                <input type="text" v-model="mail" name="mem_mail">
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
             <!-- 對話框 -->

            <div class="text">
                <button class="btn" type="reset">清除</button>
                <a href="#sendmail" rel="modal:open" @click="addmem"><button class="btngrenn" type="submit">送出</button></a>
                <div id="sendmail" class="modal dialog">
                    <div class="text"><h3>恭喜成為會員</h3></div>
                    <div class="text"><button onclick="window.open('./memlogin.html')">立即登入</button></div>
                  </div>

            </div>
        </form>
    </div>
    `,
    
});

let mem= new Vue({
    el: '#mem',
    data: {
        content: 'login',
        
    },
    methods: {
    mystyle(){
            return{
                color:'green',
            }
        },

    
    },
});