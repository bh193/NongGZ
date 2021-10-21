let app = new Vue({
    el: "#app",
    data: {
        prodRows: [],
        farms: [],
        images: '',
        selectedFarm: '',
        posttxt: '',
        filterFarm: '',
        selectNew: '1',
        options: [
            { text: "最新的", value: '1' },
            { text: "熱門的", value: '2' },
        ],
        pagesize: 6,
        currentPage: 1,
        msg: '',
        member:{},
        loudlytxt:'',
        filterId:{},
        currentPostIndex: 0,
    },
    methods: {
        post(){
            if((!(this.isLogout)) && (this.posttxt == '' || this.images == '' || this.selectedFarm == '')){
                this.msg = "貼文內容、照片及tag農場都要填寫才可以發佈喔"
                console.log("沒有填寫")
                // return
            }else if(!(this.isLogout) && this.posttxt != '' && this.images != '' && this.selectedFarm != ''){
                $.ajax({
                    type: 'post',
                    url: "../dist/phps/returnPosts.php",
                    data: JSON.stringify({
                        farm_id: this.selectedFarm,
                        post_img: this.images,
                        post_content: this.posttxt,
                        member:this.member.mem_id,
                    }),
                    contentType: "application/json; charset=utf-8",
                    success: (res) => {
                        this.msg = "貼文發佈成功",
                        this.selectedFarm = '',
                        this.images = '',
                        this.posttxt = '',
                        console.log(res)
                        return
                    },
                    error: () => {
                        console.log('error')
                    },
                    complete: () => {
                        console.log()
                    }
                });
            }
            else{
                this.msg = "請登入會員"
                return
            }
        },
        imgchange(e) {
            let file = e.target.files[0];
            let readFile = new FileReader();
            readFile.readAsDataURL(file);
            readFile.addEventListener('load', this.loadImage);
        },
        loadImage(e) {
            this.images = e.target.result;
        },
        loadMore() {
            // console.log('load');
            if ($(window).height() + $(window).scrollTop() + 1 >= $(document).height()) {
                this.currentPage = this.currentPage + 1;
            }
        },
        //貼文卡片區
        getProducts() {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                console.log(JSON.parse(xhr.responseText))
                let array1 = JSON.parse(xhr.responseText)
                for(let i = 0; i< array1.length; i++){
                    array1[i].heart = 0;
                    array1[i].loudly = 0;
                }
                console.log('array1',array1)
                app.prodRows = array1;
            }
            xhr.open("get", "../dist/phps/getPosts.php?page=1", true);
            xhr.send(null);
        },
        //農場下拉式選單
        getFarms() {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                app.farms = JSON.parse(xhr.responseText)
            }
            xhr.open("get", "../dist/phps/getFarms.php", true);
            xhr.send(null);
        },
        //排序篩選
        selectNd() {
            let xhr = new XMLHttpRequest();
            xhr.onload = function () {
                app.prodRows = JSON.parse(xhr.responseText)
            }
            if (this.selectNew == 2) {
                xhr.open("get", "../dist/phps/getPosts_2.php", true);
            } else {
                xhr.open("get", "../dist/phps/getPosts.php", true);
            }
            xhr.send(null);
        },
        //會員名字
        getMember(){
            let vm = this;
            let xhr = new XMLHttpRequest();
            xhr.onload = function(){
                const response = JSON.parse(xhr.responseText);
                console.log('member',response);
                if(Object.keys(response).length == 0){
                    vm.member = {
                        mem_name:'登入農果子',
                        mem_img: "premem.svg",
                    }
                }else{
                    vm.member = response;
                }
            }
            xhr.open("get", "../dist/phps/getMemInfo.php", true);
            xhr.send(null);
        },
        //搜尋id
        filterdata(findId, index){
            this.filterId = this.prodRows.find(data => data.post_id == findId)
            this.currentPostIndex = index;
        },
        //檢舉貼文
        sendloudy(){
            $.ajax({
                type:'post',
                url:"../dist/phps/returnrepost.php",
                data:JSON.stringify({
                    reporttxt: this.loudlytxt,
                    memId: this.member.mem_id,
                    postId: this.filterId.post_id,
                }),
                contentType: "application/json; charset=utf-8",
                success: (res) => {
                    this.prodRows[this.currentPostIndex].loudly = 1;
                    this.loudlytxt = '';
                },
                error: () => {
                    console.log(error)
                },
                complete: () => {
                    console.log()
                }
            });
        },
        //按讚
        sendHeart(){
            $.ajax({
                type: 'post',
                url: "../dist/phps/returnHeart.php",
                data: JSON.stringify({
                    postId: this.filterId.post_id,
                }),
                contentType: "application/json; charset=utf-8",
                success: (res) => {
                    console.log(res)
                    let num = +this.prodRows[this.currentPostIndex].post_feedback
                    this.prodRows[this.currentPostIndex].post_feedback = num + 1;
                    this.prodRows[this.currentPostIndex].heart = 1;
                },
                error: () => {
                    console.log('error')
                },
                complete: () => {
                    console.log()
                }
            });
        }
    },
    watch: {
        selectNew: function () {
            this.selectNd();
            // console.log("change")
        }
    },
    computed: {
        //變更會員大頭照
        fullImageUrl(){
            return "images/mem/" + this.member.mem_img;
        },
        filterRow() {
            return this.prodRows.filter(prodRow => {
                return prodRow.farm_name.includes(this.filterFarm) ||
                       prodRow.mem_name.includes(this.filterFarm)
            });
        },
        pageRows() {
            return this.filterRow.slice(0, this.currentPage * this.pagesize);
        },
        //關閉視窗button
        isLogout(){
            // return Object.keys(this.member.mem_email).length == 0;
            return !this.member.mem_email;
        },
    },
    created() {
        window.addEventListener("scroll", this.loadMore);
    },
    mounted() {
        this.getProducts();
        this.getFarms();
        this.selectNd();
        this.getMember();
        Vue.nextTick(function(){
            $('a[href="#sendpost"]').click(function(event) {
                event.stopPropagation();
                $(this).modal({ fadeDuration: 300});
            })
        });
    }
})