let app = new Vue({
    el:"#app",
    data:{
        prodRows:[],
        prodRows2:[],
        farms:[],
        images:'',
        selectedFarm:'',
        posttxt:'',
        filterFarm:'',
        selectNew:'1',
        options: [
            { text:"最新的", value: '1' },
            { text:"熱門的", value: '2' },
            ],
    },
    methods: {
        imgchange(e){
            let file = e.target.files[0];
            let readFile = new FileReader();
            readFile.readAsDataURL(file);
            readFile.addEventListener('load', this.loadImage);
        },
        loadImage(e){
            this.images = e.target.result;
        },
        postdata(){
            console.log('postdata2');
            // //送出資料
            let data_info = {
                'farm_id': this.selectedFarm, 
                'post_img':this.images,
                'post_content':this.posttxt,
            };
            $.ajax({
                type: 'post',
                url: "../dist/phps/returnPosts.php",
                data: data_info,
                dataType:'json',
                success: (res) => {
                    console.log(res)
                },
                error: () => { 
                    console.log('error')
                },
                complete: () => { 
                    console.log(data_info)
                }
              });
        },
        // filterRow() {
        //     // prodRows2 = prodRows;
        //     return this.prodRows.filter(prodRow =>{return prodRow.farm_name.toLowerCase().includes(this.filterFarm.toLowerCase())});
        // }
    },
    computed:{
        filterRow() {
            // prodRows2 = prodRows;
            return this.prodRows.filter(prodRow =>{return prodRow.farm_name.toLowerCase().includes(this.filterFarm.toLowerCase())});
        }
    },
})
// 貼文卡片區
function getProducts(){
    let xhr = new XMLHttpRequest();
    xhr.onload = function(){
        console.log(JSON.parse(xhr.responseText))
        app.prodRows = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "../dist/phps/getPosts.php",true);
    xhr.send(null);
}

//農場下拉式選單
function getFarms() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function() {
        app.farms = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "../dist/phps/getFarms.php",true);
    xhr.send(null);
}
//最新|熱門排序
function selectNd() {
    if("selectNew.${value}" == 2){
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            app.farms = JSON.parse(xhr.responseText)
        }
        xhr.open("get", "../dist/phps/getPosts_2.php",true);
        xhr.send(null);
    }else{
        let xhr = new XMLHttpRequest();
        xhr.onload = function() {
            app.farms = JSON.parse(xhr.responseText)
        }
        xhr.open("get", "../dist/phps/getPosts.php",true);
        xhr.send(null);
    }
}

function switchFavorite(){
    if(heart.src == "../dist/images/post/heart_gray.svg"){
        heart.src = "../dist/images/post/heart_red.svg";
    }else{
        heart.src = "../dist/images/post/heart_gray.svg";
    }
}
let heart = document.getElementsByClassName("btn_heart");
heart.onclick = switchFavorite;

window.addEventListener("load", function(){
    
    //---------------------網頁的初始設定
    selectNd();
    getProducts();

    getFarms();

    switchFavorite();

 
});

