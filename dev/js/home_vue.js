let activity_item = new Vue({
  el: "#activity_item",
  data: {
    activitys: []
  },
  updated() {
    //探索體驗hover變色
    $('.con_box a').hover(function () {
      $(this).closest('.con_box').children('img').css("transform", "scale(1.1)");
    }, function () {
      $(this).closest('.con_box').children('img').css("transform", "scale(1)");
    })

    //探索體驗拖拉
    var boxwidth = $('.con_box').width();
    var windowwidth = $(document).width();
    var maxleft = 0 - ((boxwidth * 6) + (30 * 5) + (windowwidth * 0.25 / 2) - windowwidth); //可以往左移的範圍(項目寬*6個 + 項目之間空隙30*5 + 文章外邊其中一邊 - 螢幕寬度)
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
  }
})

//連接php
//#getActivity_item
function getActivity_item() {
  let xhr = new XMLHttpRequest();
  xhr.onload = function () {
    activity_item.activitys = JSON.parse(xhr.responseText)
  }
  xhr.open("get", "./phps/getActivity_item.php", true);
  xhr.send(null);
}

window.addEventListener("load", function () {
  getActivity_item();

})