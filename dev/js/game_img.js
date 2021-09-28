function doFirstgame() {
    var canvas_game = document.getElementById('Game');
    var context_game = canvas_game.getContext('2d');

    // 格線開始
    context_game.beginPath();
    for (let i = 0; i < 100; i++) {
        let interval = i * 50;
        // context_game.font='8px sans-serif';
        // context_game.fillStyle='red';

        // 水平線
        context_game.moveTo(0, interval);
        context_game.lineTo(canvas_game.width, interval);
        context_game.fillText(interval, 0, interval);

        // 垂直線
        context_game.moveTo(interval, 0);
        context_game.lineTo(interval, canvas_game.height);
        context_game.fillText(interval, interval, 10);

    }
    context_game.strokeStyle = 'rgba(0,0,0,0.2)';
    context_game.stroke();
    // 格線結束

    //底色
    context_game.fillStyle = "#c9df8f";//填充色
    context_game.beginPath();
    context_game.moveTo(0, 0);
    context_game.lineTo(1000, 0);
    context_game.lineTo(1000, 500);
    context_game.lineTo(0, 500);
    context_game.closePath();
    context_game.fill();

    //一色
    context_game.fillStyle = "#d6e591";//填充色
    context_game.beginPath();
    context_game.moveTo(200, 0);
    context_game.lineTo(350, 0);
    context_game.lineTo(300, 50);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(300, 50);
    context_game.lineTo(400, 100);
    context_game.lineTo(150, 100);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(450, 0);
    context_game.lineTo(700, 0);
    context_game.lineTo(600, 100);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(550, 250);
    context_game.lineTo(700, 400);
    context_game.lineTo(500, 500);
    context_game.lineTo(450, 300);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(950, 500);
    context_game.lineTo(700, 400);
    context_game.lineTo(700, 500);
    context_game.closePath();
    context_game.fill();


    //二色
    context_game.fillStyle = "#bad987";//填充色
    context_game.beginPath();
    context_game.moveTo(0, 0);
    context_game.lineTo(100, 0);
    context_game.lineTo(0, 50);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(100, 0);
    context_game.lineTo(200, 0);
    context_game.lineTo(150, 100);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(350, 0);
    context_game.lineTo(400, 100);
    context_game.lineTo(300, 50);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(200, 100);
    context_game.lineTo(350, 100);
    context_game.lineTo(400, 200);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(450, 0);
    context_game.lineTo(600, 100);
    context_game.lineTo(400, 100);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(700, 0);
    context_game.lineTo(750, 150);
    context_game.lineTo(600, 100);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(500, 100);
    context_game.lineTo(450, 300);
    context_game.lineTo(550, 250);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(400, 500);
    context_game.lineTo(450, 300);
    context_game.lineTo(500, 500);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(500, 500);
    context_game.lineTo(700, 400);
    context_game.lineTo(700, 500);
    context_game.closePath();
    context_game.fill();



    //三色
    context_game.fillStyle = "#9fce78";//填充色
    context_game.beginPath();
    context_game.moveTo(100, 0);
    context_game.lineTo(150, 100);
    context_game.lineTo(0, 50);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(200, 0);
    context_game.lineTo(300, 50);
    context_game.lineTo(150, 100);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(350, 0);
    context_game.lineTo(450, 0);
    context_game.lineTo(400, 100);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(150, 100);
    context_game.lineTo(200, 100);
    context_game.lineTo(200, 200);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(200, 300);
    context_game.lineTo(400, 200);
    context_game.lineTo(150, 400);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(450, 300);
    context_game.lineTo(400, 500);
    context_game.lineTo(300, 350);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(350, 100);
    context_game.lineTo(500, 100);
    context_game.lineTo(450, 300);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(700, 0);
    context_game.lineTo(800, 0);
    context_game.lineTo(750, 150);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(600, 100);
    context_game.lineTo(700, 400);
    context_game.lineTo(550, 250);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(1000, 500);
    context_game.lineTo(1000, 350);
    context_game.lineTo(850, 350);
    context_game.closePath();
    context_game.fill();



    //四色
    context_game.fillStyle = "#8cc66f";//填充色
    context_game.beginPath();
    context_game.moveTo(0, 50);
    context_game.lineTo(150, 100);
    context_game.lineTo(0, 200);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(200, 100);
    context_game.lineTo(400, 200);
    context_game.lineTo(200, 300);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(100, 250);
    context_game.lineTo(200, 300);
    context_game.lineTo(150, 400);
    context_game.lineTo(0, 300);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(150, 400);
    context_game.lineTo(200, 500);
    context_game.lineTo(0, 500);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(400, 200);
    context_game.lineTo(450, 300);
    context_game.lineTo(300, 350);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(800, 0);
    context_game.lineTo(950, 0);
    context_game.lineTo(850, 200);
    context_game.lineTo(750, 150);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(1000, 350);
    context_game.lineTo(850, 200);
    context_game.lineTo(850, 350);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(500, 100);
    context_game.lineTo(600, 100);
    context_game.lineTo(550, 250);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(1000, 500);
    context_game.lineTo(950, 500);
    context_game.lineTo(700, 400);
    context_game.lineTo(850, 350);
    context_game.closePath();
    context_game.fill();

    //五色
    context_game.fillStyle = "#75bf66";//填充色
    context_game.beginPath();
    context_game.moveTo(150, 100);
    context_game.lineTo(200, 200);
    context_game.lineTo(200, 300);
    context_game.lineTo(100, 250);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(100, 250);
    context_game.lineTo(0, 300);
    context_game.lineTo(0, 200);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(0, 300);
    context_game.lineTo(150, 400);
    context_game.lineTo(0, 500);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(400, 200);
    context_game.lineTo(150, 400);
    context_game.lineTo(200, 500);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(950, 0);
    context_game.lineTo(1000, 0);
    context_game.lineTo(1000, 150);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(850, 200);
    context_game.lineTo(1000, 150);
    context_game.lineTo(1000, 350);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(750, 150);
    context_game.lineTo(850, 200);
    context_game.lineTo(850, 350);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(600, 100);
    context_game.lineTo(750, 150);
    context_game.lineTo(700, 400);
    context_game.closePath();
    context_game.fill();

    //六色
    context_game.fillStyle = "#5db860";//填充色
    context_game.beginPath();
    context_game.moveTo(150, 100);
    context_game.lineTo(100, 250);
    context_game.lineTo(0, 200);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(200, 500);
    context_game.lineTo(300, 350);
    context_game.lineTo(400, 500);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(950, 0);
    context_game.lineTo(1000, 150);
    context_game.lineTo(850, 200);
    context_game.closePath();
    context_game.fill();

    context_game.moveTo(750, 150);
    context_game.lineTo(850, 350);
    context_game.lineTo(700, 400);
    context_game.closePath();
    context_game.fill();





    context_game.globalCompositeOperation = 'destination-out';
    canvas_game.addEventListener('mousemove', usePen);
}
function usePen(e) {
    var canvas_game = document.getElementById('Game');
    var context_game = canvas_game.getContext('2d');

    context_game.fillStyle = 'red';
    context_game.strokeStyle = 'red';

    // context_game.fillRect(e.clientX, e.clientY, 5, 5);
    // context_game.strokeRect(e.clientX, e.clientY, 5, 5);

    context_game.beginPath();

    context_game.arc(e.offsetX, e.offsetY, 20, 0, 2 * Math.PI);// context_game.arc(圓的中心的x坐標,圓的中心的y坐標,圓的半徑,起始角度,結束角度,順/逆);
    context_game.fill();
    context_game.stroke();

}
window.addEventListener('load', doFirstgame);