$(function () {

    $('#go_game').click(function() {
        $('#game').show();
        $('#back').show();
    });

    $('#go').click(function () {
        $('#back').hide();
        var time;
        var SetSecond = 10;
        time = setInterval(function () {
            SetSecond--;
            if (SetSecond < 0) {
                SetSecond = 0;
                $('#game').hide();
                $('#back').show();
                $('.rule').hide();
                $('.result').show();
            };
            $('#Check_Txt').text(`時間計數： ${SetSecond}秒`);
        }, 1000);
    });


    for (var i = 0; i <= 4; i++) {
        var treeTop = (Math.random() * 80); //亂數0~80
        var treeLeft = (Math.random() * 10 - 5) + ((i * 15) + 15); //亂數-5~5 //0,15,30,45,60 //15,30,45,60,75 >> 正負5%
        var treeWidth = (Math.random() * 5 + 10); //亂數10~15
        var fruitNum = Math.ceil((Math.random() * 5)); //亂數1~5整數
        $('.tree').eq(i).css("top", `${treeTop}%`);
        $('.tree').eq(i).css("left", `${treeLeft}%`);
        $('.tree').eq(i).css("width", `${treeWidth}%`);
        $('.tree').eq(i).children('.fruit').children('img').attr("src", `./images/fruit/fruit_${fruitNum}.svg`)
    }

    for (var j = 0; j <= 9; j++) {
        var str = '';
        var arr = [];
        for (var k = 0; k < 10; k++) {
            str = Math.ceil(Math.random() * 10); //亂數1~10整數 //1
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] == str) {
                    arr.splice(j, 1);
                    k--;
                }
            }
            arr.push(str);
        }
        for (var l = 0; l <= 9; l++) {
            var arrNum = arr[l] * 8;
            $('.num').eq(l).css("left", `${arrNum}%`);
        }
    }

    for (var j = 0; j <= 9; j++) {
        var str = '';
        var arr = [];
        for (var k = 0; k < 10; k++) {
            str = Math.ceil(Math.random() * 10); //亂數1~10整數 //1
            for (var j = 0; j < arr.length; j++) {
                if (arr[j] == str) {
                    arr.splice(j, 1);
                    k--;
                }
            }
            arr.push(str);
        }
        for (var t = 0; t <= 9; t++) {
            var arrNum = arr[t] * 8;
            $('.num').eq(t).css("top", `${arrNum}%`);
        }
    }

    var points = 40;
    $('.num').mouseover(function () {
        $(this).css("opacity", 1);
        $(this).css("animation", "bigimg 1s linear");
    })
    $(".toxic").one("mouseover", function () {
        points -= 25;
        $(".fruit").hide();
        $(".tree_img").css("filter", "sepia(80%)");
        $(".tree").css("transform", "scale(1)");
        $(".muck").one("mouseover", function () {
            $(".fruit").hide();
            show(points);
        })
        show(points);
    })
    $(".bomb").one("mouseover", function () {
        points -= 10;
        show(points);
    })
    $(".bee").one("mouseover", function () {
        points -= 5;
        show(points);
    })
    $(".muck").one("mouseover", function () {
        points += 20;
        $(".fruit").show();
        show(points);
    })
    $(".water").one("mouseover", function () {
        points += 15;
        $(".tree").css("transform", "scale(1.2)")
        show(points);
    })
    $(".coin").one("mouseover", function () {
        points += 5;
        show(points);
    })
    $(".insect").one("mouseover", function () {
        points += 5;
        show(points);
    })

    var coupon = 100;
    function show(points) {
        $('#points').text(`分數: ${points}`);
        $('#back_points').text(`獲得分數: ${points}`);
        if (points == 100) {
            coupon = 1500;
        } else if (points >= 80) {
            coupon = 1000;
        } else if (points >= 60) {
            coupon = 600;
        } else if (points >= 40) {
            coupon = 300;
        } else if (points >= 20) {
            coupon = 200;
        } else {
            coupon = 100;
        }
        $('#coupon').text(`折扣${coupon}元`);
    }

    $('#again').click(function () {
        $('#game').show();
    });
});