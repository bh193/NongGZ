$(function () {
    //光圈
    let tq = window.matchMedia("(min-width: 1024px)");
    if (tq.matches) {
        $('.map').mousemove(function (event) {
            var map_offset = $(".black_bg").offset();
            var map_w = $(".black_bg").outerWidth();
            var map_h = $(".black_bg").outerHeight();
            var x = event.pageX;
            var cursor_x = x - map_offset.left - 75;
            var y = event.pageY;
            var cursor_y = y - map_offset.top - 75;
            if (y >= (map_offset.top + 75) && y <= (map_offset.top + map_h - 75)) {
                $(".cursor").css({
                    "top": cursor_y + "px",
                });
            } else {
                return false;
            }
            if (x >= (map_offset.left + 75) && x <= (map_offset.left + map_w - 75)) {
                $(".cursor").css({
                    "left": cursor_x + "px"
                });
            } else {
                return false;
            }
        });
    } else {
        $('.map').on('touchmove',function(e){
            var map_offset = $(".black_bg").offset();
            var map_w = $(".black_bg").outerWidth();
            var map_h = $(".black_bg").outerHeight();
            var touch = e.originalEvent.targetTouches[0]; 
            var x =  touch.pageX;
            var cursor_x = x - map_offset.left - 75;
            var y = touch.pageY;
            var cursor_y = y - map_offset.top - 75;
            if (y >= (map_offset.top + 75) && y <= (map_offset.top + map_h - 75)) {
                $(".cursor").css({
                    "top": cursor_y + "px",
                });
            } else {
                return false;
            }
            if (x >= (map_offset.left + 75) && x <= (map_offset.left + map_w - 75)) {
                $(".cursor").css({
                    "left": cursor_x + "px"
                });
            } else {
                return false;
            }
        });
    }

    //hover樹變大
    $('.map_tree').hover(function () {
        $(this).css("transform","scale(1.1)");
      }, function () {
        $(this).css("transform","scale(1)");
      });

    //點選顯示目前位置
    $('.more_btnbox .bigbtn_s').click(function () {
        $(this).addClass('active').siblings().removeClass('active')
    });
});