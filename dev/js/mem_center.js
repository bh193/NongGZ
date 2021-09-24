// 認養及體驗活動訂單的頁面切換

$(function(){
    var $orderSelect = $('.order-select') ,
        $tabs = $orderSelect.find('.tabs') ,
        $page = $tabs.find('a') ,
        $order = $orderSelect.find('.orders') ,
        $content = $order.find('> li');
    
    $page.eq(0).addClass('active');
    $content.eq(0).show();
    
    $page.on('click',function(){
        var $pageIndex = $(this).index();
        $(this).addClass('active').siblings().removeClass('active');
        $content.eq($pageIndex).show().siblings().hide();
    });
});


// 單筆訂單的開合跟icon切換

    $(".item").click(function(){
      $(this).next(".detail").slideToggle()
     
     var icon =  $(this).children().children(".item #plus");
       if( icon.css("display") == "none"){
         icon.show();
       }else{
         icon.hide();
       }
     
       var icon =  $(this).children().children(".item #minus");
       if( icon.css("display") == "none"){
         icon.show();
       }else{
         icon.hide();
       }
   });