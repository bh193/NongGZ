// $(document).ready(function(){
//   // created(){}
//   // mounted(){}

//     $(".sm-pic").on("click", function(){
//         $(".selected").removeClass("selected");
//         $(this).addClass("selected");
//         var picture = $(this).data();
        
//         event.preventDefault(); //prevents page from reloading every time you click a thumbnail

//         $(".first").fadeOut( 100, function() { 
//           $(".first").attr("src", picture.full);
//           $(".full").attr("href", picture.full);
//           $(".full").attr("title", picture.title);

//       }).fadeIn();

//     });// end on click

//     $(".full").fancybox({
//         helpers : {
//             title: {
//                 type: 'inside'
//             }
//         },
//         closeBtn : true,
//     });

// });
//end doc ready




// var _gaq = _gaq || [];
// _gaq.push(['_setAccount', 'UA-36251023-1']);
// _gaq.push(['_setDomainName', 'jqueryscript.net']);
// _gaq.push(['_trackPageview']);

// (function() {
//   var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
//   ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
//   var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);
// })();

/////////////



// $('.preview').click(function () {
//   $(this).find('.mask').hide();
//   $(this).siblings().find('.mask').show();
// });

/////////// 彈跳視窗速度

$('a[href="#modal_order"]').click(function(event) {
    event.stopPropagation();
    $(this).modal({
      fadeDuration: 300
    });
  });
