$(function () {
//判定水果數量與大小顆
var size=$('#size').text();//大中小
var id=parseInt($('#fruit_id').text());//水果id
var number=parseInt($('#number').text());//數量

//判定大小
if(size=="大"){
    $(".tree_fruit").css("width","16%");
}else if(size=="中"){
    $(".tree_fruit").css("width","12%");
}else if(size=="小"){
    $(".tree_fruit").css("width","8%");
}

//判定水果種類
$(".tree_fruit").attr("src",`images/fruit/fruit_${id}.svg`);


//判定數量
if(id<=3){
    if(number>90){
        $(".tree_fruit").show();
    }else if(number>60){
        for(var i=0;i<=6;i++){
            $(".tree_fruit").eq(i).show();
        }
    }else if(number>30){
        for(var i=0;i<=4;i++){
            $(".tree_fruit").eq(i).show();
        }
    }else if(number>0){
        for(var i=0;i<=2;i++){
            $(".tree_fruit").eq(i).show();
        }
    }else {
        $(".tree_fruit").hide();
    }
}else if(id==4){
    if(number>45){
        $(".tree_fruit").show();
    }else if(number>30){
        for(var i=0;i<=6;i++){
            $(".tree_fruit").eq(i).show();
        }
    }else if(number>15){
        for(var i=0;i<=4;i++){
            $(".tree_fruit").eq(i).show();
        }
    }else if(number>0){
        for(var i=0;i<=2;i++){
            $(".tree_fruit").eq(i).show();
        }
    }else {
        $(".tree_fruit").hide();
    }
}else if(id==5){
    if(number>180){
        $(".tree_fruit").show();
    }else if(number>120){
        for(var i=0;i<=6;i++){
            $(".tree_fruit").eq(i).show();
        }
    }else if(number>60){
        for(var i=0;i<=4;i++){
            $(".tree_fruit").eq(i).show();
        }
    }else if(number>0){
        for(var i=0;i<=2;i++){
            $(".tree_fruit").eq(i).show();
        }
    }else {
        $(".tree_fruit").hide();
    }
}







//跳窗 
$('a[href="#moreimg"]').click(function (event) {
    event.stopPropagation();
    $(this).modal({
        fadeDuration: 300
    });
}); 
$('a[href="#modal_login"]').click(function (event) {
    event.stopPropagation();
    $(this).modal({
        fadeDuration: 300
    });
});
$('a[href="#popOrder"]').click(function (event) {
    event.stopPropagation();
    $(this).modal({
        fadeDuration: 300
    });
});

if($('#mem_state').text()=="登出"){
    $('#buy').attr("href","#popOrder");
}else{
    $('#buy').attr("href","#modal_login");
}
});