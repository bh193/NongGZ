// // 認養及體驗活動訂單的頁面切換

// $(function(){
//     var $orderSelect = $('.order-select') ,
//         $tabs = $orderSelect.find('.tabs') ,
//         $page = $tabs.find('a') ,
//         $order = $orderSelect.find('.orders') ,
//         $content = $order.find('> li');
    
//     $page.eq(0).addClass('active');
//     $content.eq(0).show();
    
//     $page.on('click',function(){
//         var $pageIndex = $(this).index();
//         $(this).addClass('active').siblings().removeClass('active');
//         $content.eq($pageIndex).show().siblings().hide();

//         // if( $(this).find(".tree_green").css("display") == "none"){
//         //   $(this).find(".tree_green").show();
//         // }else{
//         //   $(this).find(".tree_green").hide();
//         // }
       
//         // $(this).find(".tree_gray").css("display", "none");

//     });
// });
// $(".select_1").click(function(){
//   $(this).find(".tree_gray").hide();
//   $(this).find(".tree_green").show();
//   $(this).siblings(".select_2").find(".apple_gray").show();
//   $(this).siblings(".select_2").find(".apple_green").hide();
//   $(this).siblings(".select_3").find(".coupon_gray").show();
//   $(this).siblings(".select_3").find(".coupon_green").hide();
// });

// $(".select_2").click(function(){
//   $(this).find(".apple_gray").hide();
//   $(this).find(".apple_green").show();
//   $(this).siblings(".select_1").find(".tree_gray").show();
//   $(this).siblings(".select_1").find(".tree_green").hide();
//   $(this).siblings(".select_3").find(".coupon_gray").show();
//   $(this).siblings(".select_3").find(".coupon_green").hide();
// });

// $(".select_3").click(function(){
//   $(this).find(".coupon_gray").hide();
//   $(this).find(".coupon_green").show();
//   $(this).siblings(".select_1").find(".tree_gray").show();
//   $(this).siblings(".select_1").find(".tree_green").hide();
//   $(this).siblings(".select_2").find(".apple_gray").show();
//   $(this).siblings(".select_2").find(".apple_green").hide();
// });

// // 單筆訂單的開合跟icon切換

//     $(".item").click(function(){
//       $(this).next(".detail").slideToggle()
     
//      var icon =  $(this).children().children(".item #plus");
//        if( icon.css("display") == "none"){
//          icon.show();
//        }else{
//          icon.hide();
//        }
     
//        var icon =  $(this).children().children(".item #minus");
//        if( icon.css("display") == "none"){
//          icon.show();
//        }else{
//          icon.hide();
//        }
//    });

   