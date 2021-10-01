function doApple() {
    var apple = document.getElementsByClassName('apple');

    for (var i = 0; i < apple.length; i++) {
        var context = apple[i].getContext('2d');

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
        context.moveTo(400, 1900);
        context.lineTo(650, 1800);
        context.lineTo(850, 1820);
        context.lineTo(1200, 1800);
        context.lineTo(1500, 1820);
        context.lineTo(1650, 1900);
        context.lineTo(1700, 1950);
        context.lineTo(1580, 1980);
        context.lineTo(1400, 1950);
        context.lineTo(1050, 2000);
        context.lineTo(750, 1950);
        context.lineTo(550, 1970);
        context.closePath();
        context.fill();

        //樹幹(下)
        //左
        //1
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(850, 1300);
        context.lineTo(1100, 1450);
        context.lineTo(950, 1450);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(850, 1300);
        context.lineTo(950, 1450);
        context.lineTo(800, 1300);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#90602c";//填充色
        context.beginPath();
        context.moveTo(950, 1450);
        context.lineTo(1100, 1450);
        context.lineTo(1050, 1550);
        context.closePath();
        context.fill();

        //右
        //1
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(1250, 1350);
        context.lineTo(1250, 1400);
        context.lineTo(1050, 1450);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(1050, 1450);
        context.lineTo(1250, 1400);
        context.lineTo(1050, 1530);
        context.closePath();
        context.fill();

        //中
        //1
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(980, 1300);
        context.lineTo(1110, 1280);
        context.lineTo(1050, 1450);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(980, 1300);
        context.lineTo(1050, 1450);
        context.lineTo(1000, 1700);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(1110, 1280);
        context.lineTo(1110, 1620);
        context.lineTo(1050, 1450);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#90602c";//填充色
        context.beginPath();
        context.moveTo(1050, 1450);
        context.lineTo(1110, 1620);
        context.lineTo(1000, 1700);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(1000, 1700);
        context.lineTo(1110, 1620);
        context.lineTo(1110, 1800);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(1000, 1700);
        context.lineTo(1110, 1800);
        context.lineTo(980, 1920);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(1110, 1800);
        context.lineTo(1120, 1910);
        context.lineTo(980, 1920);
        context.closePath();
        context.fill();

        //樹幹(上)
        //左
        //1
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(900, 600);
        context.lineTo(1050, 670);
        context.lineTo(1000, 680);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(1000, 680);
        context.lineTo(1050, 670);
        context.lineTo(1050, 730);
        context.closePath();
        context.fill();

        //右
        //1
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(1100, 650);
        context.lineTo(1200, 650);
        context.lineTo(1050, 730);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(1100, 650);
        context.lineTo(1050, 730);
        context.lineTo(1000, 720);
        context.closePath();
        context.fill();

        //中
        //1
        context.fillStyle = "#593a21";//填充色
        context.beginPath();
        context.moveTo(1050, 650);
        context.lineTo(1080, 680);
        context.lineTo(1020, 720);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#7c502b";//填充色
        context.beginPath();
        context.moveTo(1050, 650);
        context.lineTo(1050, 600);
        context.lineTo(1150, 600);
        context.lineTo(1080, 680);
        context.closePath();
        context.fill();

        //樹冠(上)
        //1
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(500, 120);
        context.lineTo(800, 0);
        context.lineTo(820, 130);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#afc937";//填充色
        context.beginPath();
        context.moveTo(800, 0);
        context.lineTo(1050, 120);
        context.lineTo(820, 130);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(500, 120);
        context.lineTo(720, 280);
        context.lineTo(400, 300);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#4a6e3c";//填充色
        context.beginPath();
        context.moveTo(500, 120);
        context.lineTo(820, 130);
        context.lineTo(720, 280);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#598240";//填充色
        context.beginPath();
        context.moveTo(820, 130);
        context.lineTo(970, 380);
        context.lineTo(720, 280);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(820, 130);
        context.lineTo(1050, 120);
        context.lineTo(970, 380);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#598240";//填充色
        context.beginPath();
        context.moveTo(400, 300);
        context.lineTo(720, 280);
        context.lineTo(680, 460);
        context.closePath();
        context.fill();

        //8
        context.fillStyle = "#4a6e3c";//填充色
        context.beginPath();
        context.moveTo(720, 280);
        context.lineTo(970, 380);
        context.lineTo(680, 460);
        context.closePath();
        context.fill();

        //9
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(400, 300);
        context.lineTo(680, 460);
        context.lineTo(530, 630);
        context.closePath();
        context.fill();

        //10
        context.fillStyle = "#32492c";//填充色
        context.beginPath();
        context.moveTo(680, 460);
        context.lineTo(750, 720);
        context.lineTo(530, 630);
        context.closePath();
        context.fill();

        //11
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(680, 460);
        context.lineTo(970, 380);
        context.lineTo(750, 720);
        context.closePath();
        context.fill();

        //12
        context.fillStyle = "#32492c";//填充色
        context.beginPath();
        context.moveTo(970, 380);
        context.lineTo(1050, 640);
        context.lineTo(750, 720);
        context.closePath();
        context.fill();

        //13
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(1300, 20);
        context.lineTo(1330, 120);
        context.lineTo(1050, 120);
        context.closePath();
        context.fill();

        //14
        context.fillStyle = "#afc937";//填充色
        context.beginPath();
        context.moveTo(1300, 20);
        context.lineTo(1650, 150);
        context.lineTo(1330, 120);
        context.closePath();
        context.fill();

        //15
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(1050, 120);
        context.lineTo(1250, 240);
        context.lineTo(970, 380);
        context.closePath();
        context.fill();

        //16
        context.fillStyle = "#4a6e3c";//填充色
        context.beginPath();
        context.moveTo(1050, 120);
        context.lineTo(1330, 120);
        context.lineTo(1250, 240);
        context.closePath();
        context.fill();

        //17
        context.fillStyle = "#598240";//填充色
        context.beginPath();
        context.moveTo(1330, 120);
        context.lineTo(1480, 420);
        context.lineTo(1250, 240);
        context.closePath();
        context.fill();

        //18
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(1330, 120);
        context.lineTo(1650, 150);
        context.lineTo(1480, 420);
        context.closePath();
        context.fill();

        //19
        context.fillStyle = "#4a6e3c";//填充色
        context.beginPath();
        context.moveTo(1650, 150);
        context.lineTo(1700, 380);
        context.lineTo(1480, 420);
        context.closePath();
        context.fill();

        //20
        context.fillStyle = "#598240";//填充色
        context.beginPath();
        context.moveTo(1250, 240);
        context.lineTo(1180, 480);
        context.lineTo(970, 380);
        context.closePath();
        context.fill();

        //21
        context.fillStyle = "#4a6e3c";//填充色
        context.beginPath();
        context.moveTo(1250, 240);
        context.lineTo(1480, 420);
        context.lineTo(1180, 480);
        context.closePath();
        context.fill();

        //22
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(970, 380);
        context.lineTo(1180, 480);
        context.lineTo(1050, 640);
        context.closePath();
        context.fill();

        //23
        context.fillStyle = "#32492c";//填充色
        context.beginPath();
        context.moveTo(1180, 480);
        context.lineTo(1300, 720);
        context.lineTo(1050, 640);
        context.closePath();
        context.fill();

        //24
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(1180, 480);
        context.lineTo(1480, 420);
        context.lineTo(1300, 720);
        context.closePath();
        context.fill();

        //25
        context.fillStyle = "#32492c";//填充色
        context.beginPath();
        context.moveTo(1480, 420);
        context.lineTo(1600, 620);
        context.lineTo(1300, 720);
        context.closePath();
        context.fill();

        //26
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(1480, 420);
        context.lineTo(1700, 380);
        context.lineTo(1600, 620);
        context.closePath();
        context.fill();

        //樹冠(下)
        //1
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(550, 750);
        context.lineTo(600, 950);
        context.lineTo(400, 1000);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(550, 750);
        context.lineTo(800, 650);
        context.lineTo(600, 950);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(800, 650);
        context.lineTo(900, 900);
        context.lineTo(600, 950);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#afc937";//填充色
        context.beginPath();
        context.moveTo(800, 650);
        context.lineTo(1030, 730);
        context.lineTo(900, 900);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(1030, 730);
        context.lineTo(1110, 1020);
        context.lineTo(900, 900);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(1030, 730);
        context.lineTo(1350, 650);
        context.lineTo(1110, 1020);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(1350, 650);
        context.lineTo(1420, 920);
        context.lineTo(1110, 1020);
        context.closePath();
        context.fill();

        //8
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(1350, 650);
        context.lineTo(1560, 720);
        context.lineTo(1420, 920);
        context.closePath();
        context.fill();

        //9
        context.fillStyle = "#afc937";//填充色
        context.beginPath();
        context.moveTo(1560, 720);
        context.lineTo(1700, 1100);
        context.lineTo(1420, 920);
        context.closePath();
        context.fill();

        //10
        context.fillStyle = "#598240";//填充色
        context.beginPath();
        context.moveTo(400, 1000);
        context.lineTo(600, 950);
        context.lineTo(450, 1250);
        context.closePath();
        context.fill();

        //11
        context.fillStyle = "#4a6e3c";//填充色
        context.beginPath();
        context.moveTo(600, 950);
        context.lineTo(750, 1300);
        context.lineTo(450, 1250);
        context.closePath();
        context.fill();

        //12
        context.fillStyle = "#598240";//填充色
        context.beginPath();
        context.moveTo(600, 950);
        context.lineTo(820, 1180);
        context.lineTo(750, 1300);
        context.closePath();
        context.fill();

        //13
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(600, 950);
        context.lineTo(900, 900);
        context.lineTo(820, 1180);
        context.closePath();
        context.fill();

        //14
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(900, 900);
        context.lineTo(1110, 1020);
        context.lineTo(820, 1180);
        context.closePath();
        context.fill();

        //15
        context.fillStyle = "#598240";//填充色
        context.beginPath();
        context.moveTo(1110, 1020);
        context.lineTo(1030, 1300);
        context.lineTo(820, 1180);
        context.closePath();
        context.fill();

        //16
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(1110, 1020);
        context.lineTo(1260, 1280);
        context.lineTo(1030, 1300);
        context.closePath();
        context.fill();

        //17
        context.fillStyle = "#598240";//填充色
        context.beginPath();
        context.moveTo(1110, 1020);
        context.lineTo(1380, 1120);
        context.lineTo(1260, 1280);
        context.closePath();
        context.fill();

        //18
        context.fillStyle = "#6d9a40";//填充色
        context.beginPath();
        context.moveTo(1380, 1120);
        context.lineTo(1420, 920);
        context.lineTo(1110, 1020);
        context.closePath();
        context.fill();

        //19
        context.fillStyle = "#85ae3d";//填充色
        context.beginPath();
        context.moveTo(1420, 920);
        context.lineTo(1700, 1100);
        context.lineTo(1380, 1120);
        context.closePath();
        context.fill();

        //20
        context.fillStyle = "#598240";//填充色
        context.beginPath();
        context.moveTo(1380, 1120);
        context.lineTo(1700, 1100);
        context.lineTo(1600, 1300);
        context.closePath();
        context.fill();

        //21
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(820, 1180);
        context.lineTo(1030, 1300);
        context.lineTo(750, 1300);
        context.closePath();
        context.fill();

        //22
        context.fillStyle = "#4a6e3c";//填充色
        context.beginPath();
        context.moveTo(1380, 1120);
        context.lineTo(1600, 1300);
        context.lineTo(1260, 1280);
        context.closePath();
        context.fill();

        //23
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(450, 1250);
        context.lineTo(750, 1300);
        context.lineTo(800, 1400);
        context.closePath();
        context.fill();

        //24
        context.fillStyle = "#32492c";//填充色
        context.beginPath();
        context.moveTo(750, 1300);
        context.lineTo(1030, 1300);
        context.lineTo(800, 1400);
        context.closePath();
        context.fill();

        //25
        context.fillStyle = "#32492c";//填充色
        context.beginPath();
        context.moveTo(1030, 1300);
        context.lineTo(1260, 1280);
        context.lineTo(1280, 1430);
        context.closePath();
        context.fill();

        //26
        context.fillStyle = "#3f5c35";//填充色
        context.beginPath();
        context.moveTo(1260, 1280);
        context.lineTo(1600, 1300);
        context.lineTo(1280, 1430);
        context.closePath();
        context.fill();
    }

}

window.addEventListener('load', doApple);