$(function () {
  //歷史照片跳窗
  $('a[href="#moreimg"]').click(function (event) {
    event.stopPropagation();
    $(this).modal({
      fadeDuration: 300
    });
  });

  //清除
  $(document).ready(function () {
    $("#clear").click(function () {
      $(this).parent().siblings(".item").find("#text_area").val("");
      $(this).parent().siblings(".item").find(".item_text").val("");
    });
  });

  //果樹卡片式點選往下
  $('.con_title').click(function () {
    $(this).next('.con_text').slideToggle(500, "easeOutExpo");
  }).next('.con_text').hide();

  $('.con_title').click(function () {
    $(this).find('.turn').toggleClass('turn_zero');
  })

});