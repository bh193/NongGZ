$(document).ready(function(){
  $("#clear").click(function(){
    $(this).parent().siblings(".item").find("#text_area").val("");
    $(this).parent().siblings(".item").find(".item_text").val("");
  });
});