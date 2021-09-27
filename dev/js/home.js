$(function () {
  //輪播
var settime;
var imgheight = $('.left_con li').height();
var picture = 1;
$('.slideshow').css("height", `${imgheight}`);
function showimg(picture) {
  if(picture==0){
    $('.title_text h2').text("小農合作社");
    $('.title_text h3').text("支持在地小農，用新鮮的食材善待你我。");
  }else if(picture==1){
    $('.title_text h2').text("挺認養行動");
    $('.title_text h3').text("與樹同行體悟到農作物栽種過程。");
  }else{
    $('.title_text h2').text("漫遊農世界");
    $('.title_text h3').text("走出戶外享受農場自然的氣息，一同了解水果從哪來。");
  }
  $(".left_con").animate({ bottom: -imgheight* picture }, 1000);
  $(".right_con").animate({ top: -imgheight* picture }, 1000);
}

settime = setInterval(function () {
  showimg( picture);
  picture++;
  if (picture == $('.left_con li').length) {
    picture = 0;
  }
}, 3000)


  //hover水果左右鍵
  $('.left_icon').hover(function () {
    $(this).children('img').attr("src", "images/svg/left-btn-y.svg");
  }, function () {
    $(this).children('img').attr("src", "images/svg/left-btn-g.svg");
  })

  $('.right_icon').hover(function () {
    $(this).children('img').attr("src", "images/svg/right-btn-y.svg");
  }, function () {
    $(this).children('img').attr("src", "images/svg/right-btn-g.svg");
  })

  //hover果樹連動按鍵
  $('.tree').hover(function () {
    $('.adopt_tree_btn').css({ "background-color": "#17C3B2", "border-color": "#17C3B2" });
  }, function () {
    $('.adopt_tree_btn').css({ "background-color": "#84A59D", "border-color": "#84A59D" });
  });


  //篩選水果
  var index = 1;

  $('.left_icon').click(function () {
    if (index == 1) {
      index = 1;
    } else {
      index--;
      show();
    }
  });

  $('.right_icon').click(function () {
    if (index == $('.fruit img').length) {
      index = $('.fruit img').length;
    } else {
      index++;
      show();
    }
  });

  function show() {
    $('.fruit img').eq(index - 1).show().siblings().hide();
    $('.circle h3').eq(index - 1).show().siblings().hide();
    $('.tree_o').attr("src", `images/fruit/tree_${index}.svg`);
    $('.tree_fruit').attr("src", `images/fruit/fruit_${index}.svg`);
    for (var i = 0; i <= 7; i++) {
      var number = (Math.random() * 60) - 30; //亂數0~60, 扣30 > 亂數-30~30
      $('.tree_fruit').eq(i).css("transform", `rotate(${number}deg)`);
    }
  }



  //探索體驗拖拉
  var boxwidth = $('.con_box').width();
  var windowwidth = $(document).width();
  var maxleft = 0 - ((boxwidth * 6) + (30 * 5) + (windowwidth * 0.25 / 2) - windowwidth);
  $('.activity_con').draggable({
    axis: "x",
    stop: function (event, ui) {
      if (ui.position.left > 0) {
        $('.activity_con').animate({ "left": "0px" }, 600);
      }
      else if (ui.position.left < maxleft) {
        $('.activity_con').animate({ "left": maxleft }, 600);
      }
    }
  });


  //探索體驗hover變色
  $('.con_box').hover(function () {
    $(this).children('.text').children('span').css("color", "#17C3B2");
    $(this).children('.text').children('#more').css("color", "#17C3B2");
    $(this).children('img').css("transform", "scale(1.1)");
  }, function () {
    $(this).children('.text').children('span').css("color", "#84A59D");
    $(this).children('.text').children('#more').css("color", "#84A59D");
    $(this).children('img').css("transform", "scale(1)");
  })
});