let fruit_tree = new Vue({
    el: "#fruit_tree",
    data: {
        trees: [],
    },
    computed: {
        tree() {
            let tree_id = window.location.search.split("?")[1].split("=")[1];
            return this.trees.filter(tree => { return tree.tree_id == tree_id });
        },
    },
    updated() {
        //判定水果數量與大小顆
        var size = $('#size').text();//大中小
        var id = parseInt($('#fruit_id').text());//水果id
        var number = parseInt($('#number').text());//數量

        //canvas
        if (id == 1) {
            $('canvas').attr("class", "orange");
        } else if (id == 2) {
            $('canvas').attr("class", "apple");
        } else if (id == 3) {
            $('canvas').attr("class", "mango");
        } else if (id == 4) {
            $('canvas').attr("class", "peach");
        } else if (id == 5) {
            $('canvas').attr("class", "red-dates");
        }

        //updated後head生成js--canvas
        let orange_js = document.createElement('script');
        orange_js.type = 'text/javascript';
        orange_js.src = './js/orange.min.js';
        document.head.appendChild(orange_js);

        let apple_js = document.createElement('script');
        apple_js.type = 'text/javascript';
        apple_js.src = './js/apple.min.js';
        document.head.appendChild(apple_js);

        let mango_js = document.createElement('script');
        mango_js.type = 'text/javascript';
        mango_js.src = './js/mango.min.js';
        document.head.appendChild(mango_js);

        let peach_js = document.createElement('script');
        peach_js.type = 'text/javascript';
        peach_js.src = './js/peach.min.js';
        document.head.appendChild(peach_js);

        let red_js = document.createElement('script');
        red_js.type = 'text/javascript';
        red_js.src = './js/red-dates.min.js';
        document.head.appendChild(red_js);


        //判定大小
        if (size == "大") {
            $(".tree_fruit").css("width", "16%");
        } else if (size == "中") {
            $(".tree_fruit").css("width", "12%");
        } else if (size == "小") {
            $(".tree_fruit").css("width", "8%");
        }

        //判定水果種類
        $(".tree_fruit").attr("src", `images/fruit/fruit_${id}.svg`);

        //判定數量
        if (id <= 3) {
            if (number > 90) {
                $(".tree_fruit").show();
            } else if (number > 60) {
                for (var i = 0; i <= 6; i++) {
                    $(".tree_fruit").eq(i).show();
                }
            } else if (number > 30) {
                for (var i = 0; i <= 4; i++) {
                    $(".tree_fruit").eq(i).show();
                }
            } else if (number > 0) {
                for (var i = 0; i <= 2; i++) {
                    $(".tree_fruit").eq(i).show();
                }
            } else {
                $(".tree_fruit").hide();
            }
        } else if (id == 4) {
            if (number > 45) {
                $(".tree_fruit").show();
            } else if (number > 30) {
                for (var i = 0; i <= 6; i++) {
                    $(".tree_fruit").eq(i).show();
                }
            } else if (number > 15) {
                for (var i = 0; i <= 4; i++) {
                    $(".tree_fruit").eq(i).show();
                }
            } else if (number > 0) {
                for (var i = 0; i <= 2; i++) {
                    $(".tree_fruit").eq(i).show();
                }
            } else {
                $(".tree_fruit").hide();
            }
        } else if (id == 5) {
            if (number > 180) {
                $(".tree_fruit").show();
            } else if (number > 120) {
                for (var i = 0; i <= 6; i++) {
                    $(".tree_fruit").eq(i).show();
                }
            } else if (number > 60) {
                for (var i = 0; i <= 4; i++) {
                    $(".tree_fruit").eq(i).show();
                }
            } else if (number > 0) {
                for (var i = 0; i <= 2; i++) {
                    $(".tree_fruit").eq(i).show();
                }
            } else {
                $(".tree_fruit").hide();
            }
        }
    },
})

let tree_img = new Vue({
    el: "#tree_img",
    data: {
        imgs: [],
    },
    computed: {
        imgs_id() {
            let tree_id = window.location.search.split("?")[1].split("=")[1];
            return this.imgs.filter(img => { return img.tree_id == tree_id });
        },

        imgs_limit2() {
            return this.imgs_id.slice(0, 2);
        },

        imgs_limit1() {
            return this.imgs_id.slice(0, 1);
        }
    },
})

let tree_data = new Vue({
    el: "#tree_data",
    data: {
        trees: [],
    },
    computed: {
        tree() {
            let tree_id = window.location.search.split("?")[1].split("=")[1];
            return this.trees.filter(tree => { return tree.tree_id == tree_id });
        },
    },
    updated() {
        if ($('#status').text() != 0) {
            $('.fruit_tree_box').text("");
            $('#tree_img').text("");
            $('.update').text("");
            $('.data').text("");
            $('.price').text("");
            $('.con_btnbox').text("");
            if ($('#status').text() == 1) {
                $('#status_text').text("果樹已認養，請選擇其它果樹，謝謝。");
            } else {
                $('#status_text').text("果樹已下架，請選擇其它果樹，謝謝。");
            }
        }

        //判斷是否登入會員, 顯示訂單或登入會員
        if ($('#mem_state').text() == "登出") {
            $('#buy').attr("href", "#popOrder");
        } else {
            $('#buy').attr("href", "#modal_login");
        }
    },


})

let more_img = new Vue({
    el: "#moreimg",
    data: {
        imgs: [],
    },
    computed: {
        moreId_img() {
            let tree_id = window.location.search.split("?")[1].split("=")[1];
            return this.imgs.filter(img => { return img.tree_id == tree_id });
        },
    },
    updated() {
        //歷史照片跳窗
        $('a[href="#moreimg"]').click(function (event) {
            event.stopPropagation();
            $(this).modal({
                fadeDuration: 300
            });
        });
    },
})

let popOrder = new Vue({
    el: "#popOrder",
    data: {
        orders: [],
        mems: [],
        t_price: "",
        years: [],
    },
    methods: {
        init() {
            let myDate = new Date;
            let year = myDate.getFullYear();
            this.initSelectYear(year);
        },
        initSelectYear(year) {
            this.years = [];
            for (let i = 0; i < 30; i++) {
                this.years.push({ value: (year - i), label: (year - i) + "年" });
            }
        }
    },
    computed: {
        popId_order() {
            let tree_id = window.location.search.split("?")[1].split("=")[1];
            return this.orders.filter(order => { return order.tree_id == tree_id });
        },
        memId_coupon() {
            return this.mems.filter(mem => { return mem.mem_id == $('#mem_id').text() });
        },
        memId_status() {
            return this.memId_coupon.filter(mem => { return mem.coupon_status == 0 });
        },
        memId() {
            return this.memId_coupon.slice(0, 1);
        },
        price() {
            if (this.popId_order[0]) {
                let price = this.t_price.split("-")[1];
                let discount = this.popId_order[0].tree_price - price;
                if (discount) {
                    return discount;
                } else {
                    return this.popId_order[0].tree_price;
                }
            }
        },
        coupon_id() {
            return this.t_price.split("-")[0];
        }
    },
    created() {
        this.init();
    },
    updated() {
        //認養果樹訂單跳窗
        $('a[href="#popOrder"]').click(function (event) {
            event.stopPropagation();
            $(this).modal({
                fadeDuration: 300
            });
        });

        //信用卡設定
        $(".card").on("keydown", function (e) {
            //點擊0~9或backspace
            if ((e.which >= 48 && e.which <= 57) || e.which == 8) {

                //當輸入框無數值且按backspace，focus前一個輸入框
                if (e.target.value.length == 0 && e.which == 8) {
                    $(this).prev().focus();
                }
            } else {
                e.preventDefault();
            }
        });

        $(".card").on("keyup", function (e) {

            // \D 代表非數字字元，g 代表全域尋找
            //非數字則無法輸入
            let str = (e.target.value).replace(/\D/g, "");

            $(this).val(str);

            //文字框文字長度等於4，focus下一個輸入框
            if (str.length == 4) {
                $(this).next().focus();
            }
        });

        //信用卡卡碼判定
        $('#send').click(function () {
            let card_number = $('#card1').val() + $('#card2').val() + $('#card3').val() + $('#card4').val(); //字串
            //偶數位總和
            function even() {
                let even_sum = 0; //偶數位總和
                for (let i = 1; i <= 13; i += 2) { //0 "1" 2 "3" 4 "5" 6 "7" 8 "9" 10 "11" 12 "13" 14 | 15->驗證碼
                    let even_number = parseInt(card_number[i]); //parseInt() 字串轉數值
                    even_sum += even_number; //偶數位總和
                }
                return even_sum; //傳值
            }

            //奇數位加權總和
            function odd() {
                let odd_sum = 0; //奇數位總和
                for (let i = 0; i <= 14; i += 2) { //"0" 1 "2" 3 "4" 5 "6" 7 "8" 9 "10" 11 "12" 13 "14" | 15->驗證碼
                    let odd_number = parseInt(card_number[i]) * 2; //parseInt() 字串轉數值 , 奇數位 *2
                    if (odd_number >= 10) {
                        odd_number -= 9; // >=10則需扣9
                    }
                    odd_sum += odd_number;
                }
                return odd_sum; //傳值 
            }

            let sum = even() + odd();//奇數加權總合+偶數位總和
            let IdNum = sum % 10;//(奇數加權總合+偶數位總和)/10 取"餘數"
            if (IdNum != 0) {
                IdNum = 10 - IdNum; //餘數不等於0，則10-餘數
            }

            if (IdNum !== card_number[15] * 1) { //計算驗證碼不等於第16碼
                $('#card').val(0);
                $('#order_send').attr("href","#error");
            } else {
                $('#card').val(1);
                $('#order_send').attr("href","");
                $('#sendOrder').click();
            }
        })

        //安全碼設定
        $("#code").on("keydown", function (e) {
            //點擊0~9或backspace
            if ((e.which >= 48 && e.which <= 57) || e.which == 8) {
            } else {
                e.preventDefault();
            }
        });
        $("#code").on("keyup", function (e) {

            // \D 代表非數字字元，g 代表全域尋找
            //非數字則無法輸入
            let str_c = (e.target.value).replace(/\D/g, "");
            $(this).val(str_c);

        });

    },
})

let farm_map = new Vue({
    el: "#farm_map",
    data: {
        trees: []
    },
    computed: {
        farmId_trees() {
            return this.trees.filter(farm_trees => { return farm_trees.farm_name == $('#farm_name').text() });
        },
        farmId_limit6() {
            return this.farmId_trees.slice(0, 6);
        },
        farm() {
            return this.farmId_trees.slice(0, 1);
        },
    },
    updated() {
        //光圈
        let tq = window.matchMedia("(min-width: 1024px)");
        if (tq.matches) {
            $('.map').mousemove(function (event) {
                var map_offset = $(".black_bg").offset();
                var map_w = $(".black_bg").outerWidth();
                var map_h = $(".black_bg").outerHeight();
                var x = event.pageX;
                var cursor_x = x - map_offset.left - 75;
                var y = event.pageY;
                var cursor_y = y - map_offset.top - 75;
                if (y >= (map_offset.top + 75) && y <= (map_offset.top + map_h - 75)) {
                    $(".cursor").css({
                        "top": cursor_y + "px",
                    });
                } else {
                    return false;
                }
                if (x >= (map_offset.left + 75) && x <= (map_offset.left + map_w - 75)) {
                    $(".cursor").css({
                        "left": cursor_x + "px"
                    });
                } else {
                    return false;
                }
            });
        } else {
            $('.map').on('touchmove', function (e) {
                var map_offset = $(".black_bg").offset();
                var map_w = $(".black_bg").outerWidth();
                var map_h = $(".black_bg").outerHeight();
                var touch = e.originalEvent.targetTouches[0];
                var x = touch.pageX;
                var cursor_x = x - map_offset.left - 75;
                var y = touch.pageY;
                var cursor_y = y - map_offset.top - 75;
                if (y >= (map_offset.top + 75) && y <= (map_offset.top + map_h - 75)) {
                    $(".cursor").css({
                        "top": cursor_y + "px",
                    });
                } else {
                    return false;
                }
                if (x >= (map_offset.left + 75) && x <= (map_offset.left + map_w - 75)) {
                    $(".cursor").css({
                        "left": cursor_x + "px"
                    });
                } else {
                    return false;
                }
            });
        }

        //判斷認養果樹狀態
        for (let i = 0; i < $('.tree_status').length; i++) {
            let status = $('.tree_status').eq(i).text();
            if (status == 1) {
                $('.map_tree a').eq(i).css("pointer-events", "none");
                $('.none').eq(i).text("已認養");
                $('.map_tree').eq(i).css("filter", "grayscale(0.6)");
            } else if (status == 2) {
                $('.map_tree a').eq(i).css("pointer-events", "none");
                $('.none').eq(i).text("已下架");
                $('.map_tree').eq(i).css("filter", "grayscale(0.6)");
            } else {
                //未認養hover樹變大
                $('.map_tree').eq(i).hover(function () {
                    $(this).css("transform", "scale(1.1)");
                }, function () {
                    $(this).css("transform", "scale(1)");
                });
                $('.none').eq(i).hide();
            }
        }
    },
})

let more_farm = new Vue({
    el: "#more_farm",
    data: {
        farms: []
    },
    updated() {
        //點選顯示目前位置
        $('.more_btnbox .bigbtn_s').click(function () {
            $(this).addClass('active').siblings().removeClass('active')
        });
    },
})

//連接php
//#getTree_data
function getFruit_tree() {
    let xhr = new XMLHttpRequest();
    xhr.onload = function () {
        console.log(JSON.parse(xhr.responseText))
        fruit_tree.trees = JSON.parse(xhr.responseText)
    }
    xhr.open("get", "./phps/getTree_data.php", true);
    xhr.send(null);
}

//連接php
//#getTree_img
function getTree_img() {
    let xhr2 = new XMLHttpRequest();
    xhr2.onload = function () {
        tree_img.imgs = JSON.parse(xhr2.responseText)
    }
    xhr2.open("get", "./phps/getTree_img.php", true);
    xhr2.send(null);
}

//  連接php
// #getTree_data
function getTree_data() {
    let xhr3 = new XMLHttpRequest();
    xhr3.onload = function () {
        tree_data.trees = JSON.parse(xhr3.responseText)
    }
    xhr3.open("get", "./phps/getTree_data.php", true);
    xhr3.send(null);
}

//  連接php
// #getTree_img
function getMore_img() {
    let xhr4 = new XMLHttpRequest();
    xhr4.onload = function () {
        more_img.imgs = JSON.parse(xhr4.responseText)
    }
    xhr4.open("get", "./phps/getTree_img.php", true);
    xhr4.send(null);
}

//  連接php
// #getTree_data
function getpopOrder() {
    let xhr5 = new XMLHttpRequest();
    xhr5.onload = function () {
        popOrder.orders = JSON.parse(xhr5.responseText)
    }
    xhr5.open("get", "./phps/getTree_data.php", true);
    xhr5.send(null);
}

//  連接php
// #getMem_coupon
function getpopOrder_mem() {
    let xhr6 = new XMLHttpRequest();
    xhr6.onload = function () {
        popOrder.mems = JSON.parse(xhr6.responseText)
    }
    xhr6.open("get", "./phps/getMem_coupon.php", true);
    xhr6.send(null);
}

//  連接php
// #getTree_data
function getfarm_map() {
    let xhr7 = new XMLHttpRequest();
    xhr7.onload = function () {
        farm_map.trees = JSON.parse(xhr7.responseText)
    }
    xhr7.open("get", "./phps/getTree_data.php", true);
    xhr7.send(null);
}

//  連接php
// #getfarm_btn
function getfarm() {
    let xhr8 = new XMLHttpRequest();
    xhr8.onload = function () {
        more_farm.farms = JSON.parse(xhr8.responseText)
    }
    xhr8.open("get", "./phps/getfarm_btn.php", true);
    xhr8.send(null);
}

window.addEventListener("load", function () {
    getFruit_tree();
    getTree_img();
    getTree_data();
    getMore_img();
    getpopOrder();
    getpopOrder_mem();
    getfarm_map();
    getfarm();
})