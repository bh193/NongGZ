let app = new Vue({
    el:"#app",
    data:{
        prodRows:[],
        prodRows2:[],
        farms:[],
        images:'',
        selectedFarm:'',
        posttxt:'',
        filterFarm:''
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
            console.log('postdata1')
            // let xhr = new XMLHttpRequest();
            // xhr.open("post", "../dist/phps/returnPosts.php", true);
            // xhr.setRequestHeader("content-type","application/x-www-form-urlencoded");
            // //送出資料
            let data_info = {
                'farm_id': this.selectedFarm, 
                'post_img':this.images,
                'post_content':this.posttxt,
            };
            // xhr.send(data_info);
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
    // methods: {
    //     getFarms(){
    //         let xhr = new XMLHttpRequest();
    //         xhr.onload = function() {
    //             app.farms = JSON.parse(xhr.responseText)
    //         }
    //         xhr.open("get", "getPosts.php",true);
    //         xhr.send({post_content:this.selectedFarm, post_img:this.images}); //key /  value
    //     }
    // }
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

function switchFavorite(){
    if(heart.src == "../images/post/heart_gray.svg"){
        heart.src = "../images/post/heart_red.svg";
    }else{
        heart.src = "../images/post/heart_gray.svg";
    }
}
let heart = document.getElementsByClassName("btn_heart");
heart.onclick = switchFavorite;

window.addEventListener("load", function(){
    //---------------------網頁的初始設定
    getProducts();

    getFarms();

    switchFavorite();
 
});

