function doRed() {
    var red_dates = document.getElementsByClassName('red_dates');

    for (var i = 0; i < red_dates.length; i++) {
        var context = red_dates[i].getContext('2d');

        // //格線開始
        // context.beginPath();
        // for (let i = 0; i < 100; i++) {
        //     let interval = i * 100 //設定格子長寬
        //     context.font = "25px sans-serif"; //格線字大小
        //     context.fillStyle = 'red';//格線字顏色


        //     //水平線
        //     context.moveTo(0, interval);
        //     context.lineTo(canvas.width, interval);
        //     context.fillText(interval, 0, interval);//格線字加上


        //     //垂直線
        //     context.moveTo(interval, 0);
        //     context.lineTo(interval, canvas.height);
        //     context.fillText(interval, interval, 20);//格線字加上
        // }

        // context.strokeStyle = 'rgba(0,0,0,0.8)';
        // context.stroke();
        // //格線結束

        // //四分之一開始
        // context.beginPath();

        // context.moveTo(0, canvas.height / 2);
        // context.lineTo(canvas.width, canvas.height / 2);
        // context.moveTo(canvas.width / 2, 0);
        // context.lineTo(canvas.width / 2, canvas.height);
        // context.strokeStyle = 'rgba(0,0,0,1)';
        // context.stroke();
        // //四分之一結束

        //土壤水份
        context.fillStyle = "#d2e8e9";//填充色
        context.beginPath();
        context.moveTo(620, 1910);
        context.lineTo(800, 1830);
        context.lineTo(1000, 1860);
        context.lineTo(1250, 1820);
        context.lineTo(1470, 1920);
        context.lineTo(1200, 2000);
        context.lineTo(1000, 2000);
        context.lineTo(850, 1980);
        context.lineTo(720, 1980);
        context.closePath();
        context.fill();

        //樹幹
        //1
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(980, 1300);
        context.lineTo(1050, 1400);
        context.lineTo(990, 1700);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(1100, 1300);
        context.lineTo(1100, 1600);
        context.lineTo(1050, 1400);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(1050, 1400);
        context.lineTo(1100, 1600);
        context.lineTo(990, 1700);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#a6742ec";//填充色
        context.beginPath();
        context.moveTo(990, 1700);
        context.lineTo(1100, 1600);
        context.lineTo(1100, 1800);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(990, 1700);
        context.lineTo(1100, 1800);
        context.lineTo(970, 1930);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(1100, 1800);
        context.lineTo(1120, 1920);
        context.lineTo(970, 1930);
        context.closePath();
        context.fill();

        //樹冠
        //1
        context.fillStyle = "#afc937";//填充色
        context.beginPath();
        context.moveTo(550, 180);
        context.lineTo(880, 330);
        context.lineTo(400, 400);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(550, 180);
        context.lineTo(1250, 30);
        context.lineTo(880, 330);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(1250, 30);
        context.lineTo(1200, 380);
        context.lineTo(880, 330);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#afc937";//填充色
        context.beginPath();
        context.moveTo(1250, 30);
        context.lineTo(1450, 150);
        context.lineTo(1200, 380);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(1450, 150);
        context.lineTo(1420, 500);
        context.lineTo(1200, 380);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#afc937";//填充色
        context.beginPath();
        context.moveTo(1450, 150);
        context.lineTo(1680, 480);
        context.lineTo(1420, 500);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(400, 400);
        context.lineTo(1020, 680);
        context.lineTo(540, 750);
        context.closePath();
        context.fill();

        //8
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(400, 400);
        context.lineTo(880, 330);
        context.lineTo(1020, 680);
        context.closePath();
        context.fill();

        //9
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(880, 330);
        context.lineTo(1200, 380);
        context.lineTo(1020, 680);
        context.closePath();
        context.fill();

        //10
        context.fillStyle = "#648f40";//填充色
        context.beginPath();
        context.moveTo(1200, 380);
        context.lineTo(1420, 500);
        context.lineTo(1020, 680);
        context.closePath();
        context.fill();

        //11
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(1420, 500);
        context.lineTo(1450, 750);
        context.lineTo(1020, 680);
        context.closePath();
        context.fill();

        //12
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(1420, 500);
        context.lineTo(1680, 480);
        context.lineTo(1450, 750);
        context.closePath();
        context.fill();

        //13
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(540, 750);
        context.lineTo(850, 900);
        context.lineTo(400, 1000);
        context.closePath();
        context.fill();

        //14
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(540, 750);
        context.lineTo(1020, 680);
        context.lineTo(850, 900);
        context.closePath();
        context.fill();

        //15
        context.fillStyle = "#648f40";//填充色
        context.beginPath();
        context.moveTo(1020, 680);
        context.lineTo(1250, 1000);
        context.lineTo(850, 900);
        context.closePath();
        context.fill();

        //16
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(1020, 680);
        context.lineTo(1450, 750);
        context.lineTo(1250, 1000);
        context.closePath();
        context.fill();

        //17
        context.fillStyle = "#648f40";//填充色
        context.beginPath();
        context.moveTo(1450, 750);
        context.lineTo(1450, 1080);
        context.lineTo(1250, 1000);
        context.closePath();
        context.fill();

        //18
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(1450, 750);
        context.lineTo(1620, 1020);
        context.lineTo(1450, 1080);
        context.closePath();
        context.fill();

        //19
        context.fillStyle = "#4a6e3c";//填充色
        context.beginPath();
        context.moveTo(400, 1000);
        context.lineTo(900, 1220);
        context.lineTo(580, 1360);
        context.closePath();
        context.fill();

        //20
        context.fillStyle = "#648f40";//填充色
        context.beginPath();
        context.moveTo(400, 1000);
        context.lineTo(850, 900);
        context.lineTo(900, 1220);
        context.closePath();
        context.fill();

        //21
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(850, 900);
        context.lineTo(1250, 1000);
        context.lineTo(900, 1220);
        context.closePath();
        context.fill();

        //22
        context.fillStyle = "#5d8540";//填充色
        context.beginPath();
        context.moveTo(1250, 1000);
        context.lineTo(1450, 1080);
        context.lineTo(900, 1220);
        context.closePath();
        context.fill();

        //23
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(1450, 1080);
        context.lineTo(1400, 1400);
        context.lineTo(900, 1220);
        context.closePath();
        context.fill();

        //24
        context.fillStyle = "#5d8540";//填充色
        context.beginPath();
        context.moveTo(1450, 1080);
        context.lineTo(1620, 1020);
        context.lineTo(1400, 1400);
        context.closePath();
        context.fill();

        //25
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(580, 1360);
        context.lineTo(900, 1220);
        context.lineTo(1000, 1450);
        context.closePath();
        context.fill();

        //26
        context.fillStyle = "#4a6e3c";//填充色
        context.beginPath();
        context.moveTo(900, 1220);
        context.lineTo(1400, 1400);
        context.lineTo(1000, 1450);
        context.closePath();
        context.fill();
    }

}

window.addEventListener('load', doRed);