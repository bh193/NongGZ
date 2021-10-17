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
        // styleClear: {display:none},
    },
    methods: {
        post(){
            if(($("#mem_state").text() == "登出") && (this.posttxt == '' || this.images == '' || this.selectedFarm == '')){
                this.msg = "尚有內容未填寫及選擇"
                console.log("沒有填寫")
                return
                
            }else if($("#mem_state").text() == "登出" && this.posttxt != '' && this.images != '' && this.selectedFarm != ''){
                $.ajax({
                    type: 'post',
                    url: "../dist/phps/returnPosts.php",
                    data: JSON.stringify({
                        farm_id: this.selectedFarm,
                        post_img: this.images,
                        post_content: this.posttxt,
                    }),
                    contentType: "application/json; charset=utf-8",
                    success: (res) => {
                        this.msg = "貼文發佈成功"
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
        //貼文發佈
        // postdata() {
        //     console.log('postdata2');
        //     $.ajax({
        //         type: 'post',
        //         url: "../dist/phps/returnPosts.php",
        //         data: JSON.stringify({
        //             farm_id: this.selectedFarm,
        //             post_img: this.images,
        //             post_content: this.posttxt,
        //         }),
        //         contentType: "application/json; charset=utf-8",
        //         success: (res) => {
        //             console.log(res)
        //         },
        //         error: () => {
        //             console.log('error')
        //         },
        //         complete: () => {
        //             console.log()
        //         }
        //     });
        // },
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
                app.prodRows = JSON.parse(xhr.responseText)
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

    },
    watch: {
        selectNew: function () {
            this.selectNd();
            // console.log("change")
        },
        // selectNew: this.selectNd,
    },
    computed: {
        filterRow() {
            return this.prodRows.filter(prodRow => {
                return prodRow.farm_name.includes(this.filterFarm) ||
                    prodRow.mem_name.includes(this.filterFarm)
            });
        },
        pageRows() {
            return this.filterRow.slice(0, this.currentPage * this.pagesize);
        }
    },
    created() {
        window.addEventListener("scroll", this.loadMore);
    },
    mounted() {
        this.getProducts();
        this.getFarms();
        this.selectNd();
    },
    // updated() {
    //     if ($("#mem_state").text() == "登出") {
    //         $('.box_heart').removeAttr("href");
    //         $('.box_heart').removeAttr("rel");
    //         $('.box_loudy').removeAttr("href");
    //         $('.box_loudy').removeAttr("rel");
    //         $('.box_submit').removeAttr("href");
    //         $('.box_submit').removeAttr("rel");
    //     } else {
    //         $('.box_heart').attr("href", "#modal_login")
    //         $('.box_heart').attr("rel", "modal:open")
    //         $('.box_loudy').attr("href", "#modal_login")
    //         $('.box_loudy').attr("rel", "modal:open")
    //         $('.box_submit').attr("href", "#modal_login")
    //         $('.box_submit').attr("rel", "modal:open")
    //     }
    // },
})

function switchFavorite() {
    if (heart.src == "../dist/images/post/heart_gray.svg") {
        heart.src = "../dist/images/post/heart_red.svg";
    } else {
        heart.src = "../dist/images/post/heart_gray.svg";
    }
}
let heart = document.getElementsByClassName("btn_heart");
heart.onclick = switchFavorite;

window.addEventListener("load", function () {

    //---------------------網頁的初始設定
    switchFavorite();


});

