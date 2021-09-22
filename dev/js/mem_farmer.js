

    $(".item").click(function(){
      $(this).next(".test").slideToggle(300)
     
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


   
