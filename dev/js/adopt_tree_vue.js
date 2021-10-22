let tree_list = new Vue({
    el: "#tree_list",
    data: {
        trees: [],
        fruits:[],
        citys:[],
        input: {
            typefruit: '',
            typecity: '',
            typeprice: '',
        },
        index:1,
    },
    methods: {
        //與首頁一同養樹取得水果id連結
        getdata() {
            if (window.location.search != 0) {
                this.input.typefruit = window.location.search.split("?")[1].split("=")[1]
            }
        },
        //滾動至底部查看更多
        handleScroll() {
            $('.content').css("opacity",1);
            if ($( window ).height() + $(window).scrollTop()+1 >= $( document ).height()) {
                this.index=this.index+1;
               
            }
        },

        //篩選是否有東西
        select_num(){
            if(this.more_trees!=0){
                $('#data').text("");
            }else{
                $('#data').text("尚無可認養果樹資料");
            }
        }
    },
    computed: {
        //一次more多少
        more_trees() {
            return this.sequence.slice(0, 6*this.index);
        },
        //篩選
        select() {
            if (this.input.typefruit != '' && this.input.typecity != '') {
                return this.trees.filter(tree => {
                    return tree.fruit_id == this.input.typefruit && tree.city_id == this.input.typecity
                })
            } else if (this.input.typefruit != '' && this.input.typecity == '') {
                return this.trees.filter(tree => {
                    return tree.fruit_id == this.input.typefruit
                })
            } else if (this.input.typefruit == '' && this.input.typecity != '') {
                return this.trees.filter(tree => {
                    return tree.city_id == this.input.typecity
                })
            } else {
                return this.trees
            }
        },
        sequence() {
            if (this.input.typeprice == "價格高到低") {
                return this.select.sort(function (p1, p2) {
                    return p2.tree_price - p1.tree_price
                })
            } else if (this.input.typeprice == "價格低到高") {
                return this.select.sort(function (p1, p2) {
                    return p1.tree_price - p2.tree_price
                })
            } else {
                return this.select
            }
        },
    },
    created(){
        window.addEventListener("scroll", this.handleScroll);
    },
    mounted() {
        this.getdata();
    },
    updated() {
        this.select_num();
    },
})

//連接php
//#getTree_list
function getTree_list() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        tree_list.trees = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "./phps/getTree_list.php", true);
    xhr.send(null);
}

//連接php
//#getFruit
function getFruits() {
    let xhr2 = new XMLHttpRequest();
    xhr2.onload = function () {
        tree_list.fruits = JSON.parse(xhr2.responseText)
    }
    xhr2.open("get", "./phps/getFruit.php", true);
    xhr2.send(null);
}

//連接php
//#getCity
function getCitys() {
    let xhr3 = new XMLHttpRequest();
    xhr3.onload = function () {
        tree_list.citys = JSON.parse(xhr3.responseText)
    }
    xhr3.open("get", "./phps/getCity.php", true);
    xhr3.send(null);
}

window.addEventListener("load", function () {
    getTree_list();
    getFruits();
    getCitys();
})