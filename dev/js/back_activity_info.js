$(document).ready(function(){
  $("#clear").click(function(){
    $(this).parent().siblings(".item").find("#text_area").val("");
    $(this).parent().siblings(".item").find(".item_text").val("");
  });
});


$(function () {
  $('.con_title').click(function () {
      $(this).next('.con_text').slideToggle(500,"easeOutExpo");
  }).next('.con_text').hide();

  $('.con_title').click(function () {
      $(this).find('.turn').toggleClass('turn_zero');
  })
});