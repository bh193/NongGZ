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