function doOrange() {

    var orange = document.getElementsByClassName('orange');

    for (var i = 0; i < orange.length; i++) {
        var context = orange[i].getContext('2d');

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
        //     context.fillText(interval, interval, 10);//格線字加上
        // }

        // context.strokeStyle = 'rgba(0,0,0,0.4)';
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
        context.moveTo(160, 1900);
        context.lineTo(460, 1760);
        context.lineTo(700, 1760);
        context.lineTo(860, 1800);
        context.lineTo(1100, 1760);
        context.lineTo(1360, 1760);
        context.lineTo(1720, 1800);
        context.lineTo(1860, 1900);
        context.lineTo(1700, 1940);
        context.lineTo(1500, 2000);
        context.lineTo(1200, 1940);
        context.lineTo(900, 2000);
        context.lineTo(600, 2000);
        context.lineTo(400, 1940);
        context.lineTo(300, 1940);
        context.closePath();
        context.fill();

        //樹幹
        //左
        //1
        context.fillStyle = "#663600";//填充色
        context.beginPath();
        context.moveTo(560, 1060);
        context.lineTo(760, 1240);
        context.lineTo(600, 1140);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#663600";//填充色
        context.beginPath();
        context.moveTo(500, 1100);
        context.lineTo(600, 1140);
        context.lineTo(700, 1260);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#914e00";//填充色
        context.beginPath();
        context.moveTo(600, 1140);
        context.lineTo(760, 1240);
        context.lineTo(700, 1260);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#673700";//填充色
        context.beginPath();
        context.moveTo(760, 1240);
        context.lineTo(900, 1400);
        context.lineTo(700, 1260);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#904e00";//填充色
        context.beginPath();
        context.moveTo(760, 1240);
        context.lineTo(960, 1400);
        context.lineTo(900, 1400);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#683600";//填充色
        context.beginPath();
        context.moveTo(900, 1400);
        context.lineTo(960, 1400);
        context.lineTo(940, 1440);
        context.closePath();
        context.fill();

        //樹幹
        //右
        //1
        context.fillStyle = "#683600";//填充色
        context.beginPath();
        context.moveTo(1460, 1100);
        context.lineTo(1360, 1220);
        context.lineTo(1260, 1260);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#683600";//填充色
        context.beginPath();
        context.moveTo(1360, 1220);
        context.lineTo(1500, 1160);
        context.lineTo(1260, 1300);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#8f4e00";//填充色
        context.beginPath();
        context.moveTo(1260, 1260);
        context.lineTo(1360, 1220);
        context.lineTo(1260, 1300);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#663600";//填充色
        context.beginPath();
        context.moveTo(1260, 1260);
        context.lineTo(1260, 1300);
        context.lineTo(1100, 1360);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#904e00";//填充色
        context.beginPath();
        context.moveTo(1100, 1360);
        context.lineTo(1260, 1300);
        context.lineTo(1000, 1460);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#623300";//填充色
        context.beginPath();
        context.moveTo(1100, 1360);
        context.lineTo(1000, 1460);
        context.lineTo(1000, 1400);
        context.closePath();
        context.fill();

        //樹幹
        //中
        //1
        context.fillStyle = "#904e00";//填充色
        context.beginPath();
        context.moveTo(900, 1060);
        context.lineTo(1060, 1000);
        context.lineTo(1000, 1400);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#a96104";//填充色
        context.beginPath();
        context.moveTo(900, 1060);
        context.lineTo(1000, 1400);
        context.lineTo(920, 1700);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#c07620";//填充色
        context.beginPath();
        context.moveTo(1060, 1000);
        context.lineTo(1020, 1420);
        context.lineTo(1000, 1400);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#904e00";//填充色
        context.beginPath();
        context.moveTo(1000, 1400);
        context.lineTo(1020, 1420);
        context.lineTo(920, 1700);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#a76102";//填充色
        context.beginPath();
        context.moveTo(1020, 1420);
        context.lineTo(1040, 1760);
        context.lineTo(920, 1700);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#904e00";//填充色
        context.beginPath();
        context.moveTo(920, 1700);
        context.lineTo(1040, 1760);
        context.lineTo(900, 1900);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#673600";//填充色
        context.beginPath();
        context.moveTo(1040, 1760);
        context.lineTo(1060, 1880);
        context.lineTo(900, 1900);
        context.closePath();
        context.fill();

        //樹冠
        //左
        //1
        context.fillStyle = "#76b917";//填充色
        context.beginPath();
        context.moveTo(260, 760);
        context.lineTo(500, 700);
        context.lineTo(460, 760);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(500, 700);
        context.lineTo(560, 900);
        context.lineTo(460, 760);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#173b00";//填充色
        context.beginPath();
        context.moveTo(500, 700);
        context.lineTo(660, 800);
        context.lineTo(560, 900);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#aed800";//填充色
        context.beginPath();
        context.moveTo(260, 760);
        context.lineTo(460, 760);
        context.lineTo(200, 900);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(460, 760);
        context.lineTo(360, 900);
        context.lineTo(200, 900);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#55a41e";//填充色
        context.beginPath();
        context.moveTo(460, 760);
        context.lineTo(560, 900);
        context.lineTo(360, 900);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(660, 800);
        context.lineTo(700, 1000);
        context.lineTo(560, 900);
        context.closePath();
        context.fill();

        //8
        context.fillStyle = "#55a41e";//填充色
        context.beginPath();
        context.moveTo(200, 900);
        context.lineTo(360, 900);
        context.lineTo(200, 1100);
        context.closePath();
        context.fill();

        //9
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(360, 900);
        context.lineTo(360, 1100);
        context.lineTo(200, 1100);
        context.closePath();
        context.fill();

        //10
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(360, 900);
        context.lineTo(560, 900);
        context.lineTo(360, 1100);
        context.closePath();
        context.fill();

        //11
        context.fillStyle = "#1f4901";//填充色
        context.beginPath();
        context.moveTo(560, 900);
        context.lineTo(600, 1200);
        context.lineTo(360, 1100);
        context.closePath();
        context.fill();

        //12
        context.fillStyle = "#173b00";//填充色
        context.beginPath();
        context.moveTo(560, 900);
        context.lineTo(700, 1000);
        context.lineTo(600, 1200);
        context.closePath();
        context.fill();

        //13
        context.fillStyle = "#317002";//填充色
        context.beginPath();
        context.moveTo(200, 1100);
        context.lineTo(360, 1100);
        context.lineTo(460, 1260);
        context.closePath();
        context.fill();

        //14
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(360, 1100);
        context.lineTo(600, 1200);
        context.lineTo(460, 1260);
        context.closePath();
        context.fill();

        //樹冠
        //中
        //1
        context.fillStyle = "#aed800";//填充色
        context.beginPath();
        context.moveTo(1000, 0);
        context.lineTo(1260, 200);
        context.lineTo(660, 160);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#75b915";//填充色
        context.beginPath();
        context.moveTo(1000, 0);
        context.lineTo(1500, 200);
        context.lineTo(1260, 200);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#76ba18";//填充色
        context.beginPath();
        context.moveTo(660, 160);
        context.lineTo(960, 360);
        context.lineTo(400, 460);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#52a31d";//填充色
        context.beginPath();
        context.moveTo(660, 160);
        context.lineTo(1260, 200);
        context.lineTo(960, 360);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#479710";//填充色
        context.beginPath();
        context.moveTo(1260, 200);
        context.lineTo(1260, 660);
        context.lineTo(960, 360);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#408b0e";//填充色
        context.beginPath();
        context.moveTo(1260, 200);
        context.lineTo(1500, 200);
        context.lineTo(1260, 660);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#317002";//填充色
        context.beginPath();
        context.moveTo(1500, 200);
        context.lineTo(1600, 600);
        context.lineTo(1260, 660);
        context.closePath();
        context.fill();

        //8
        context.fillStyle = "#55a41e";//填充色
        context.beginPath();
        context.moveTo(400, 460);
        context.lineTo(960, 360);
        context.lineTo(660, 660);
        context.closePath();
        context.fill();

        //9
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(960, 360);
        context.lineTo(1260, 660);
        context.lineTo(660, 660);
        context.closePath();
        context.fill();

        //10
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(400, 460);
        context.lineTo(660, 660);
        context.lineTo(660, 1000);
        context.closePath();
        context.fill();

        //11
        context.fillStyle = "#1d4900";//填充色
        context.beginPath();
        context.moveTo(660, 660);
        context.lineTo(1000, 1160);
        context.lineTo(660, 1000);
        context.closePath();
        context.fill();

        //12
        context.fillStyle = "#317002";//填充色
        context.beginPath();
        context.moveTo(660, 660);
        context.lineTo(1260, 660);
        context.lineTo(1000, 1160);
        context.closePath();
        context.fill();

        //13
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(1260, 660);
        context.lineTo(1460, 960);
        context.lineTo(1000, 1160);
        context.closePath();
        context.fill();

        //14
        context.fillStyle = "#1d4900";//填充色
        context.beginPath();
        context.moveTo(1260, 660);
        context.lineTo(1460, 960);
        context.lineTo(1600, 600);
        context.closePath();
        context.fill();

        //樹冠
        //右
        //1
        context.fillStyle = "#aed800";//填充色
        context.beginPath();
        context.moveTo(1560, 700);
        context.lineTo(1700, 860);
        context.lineTo(1300, 800);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#76ba16";//填充色
        context.beginPath();
        context.moveTo(1560, 700);
        context.lineTo(1860, 900);
        context.lineTo(1700, 860);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#76ba19";//填充色
        context.beginPath();
        context.moveTo(1300, 800);
        context.lineTo(1500, 900);
        context.lineTo(1160, 960);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#52a31d";//填充色
        context.beginPath();
        context.moveTo(1300, 800);
        context.lineTo(1700, 860);
        context.lineTo(1500, 900);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(1700, 860);
        context.lineTo(1660, 1160);
        context.lineTo(1500, 900);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#307002";//填充色
        context.beginPath();
        context.moveTo(1700, 860);
        context.lineTo(1860, 900);
        context.lineTo(1660, 1160);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(1860, 900);
        context.lineTo(1900, 1100);
        context.lineTo(1660, 1160);
        context.closePath();
        context.fill();

        //8
        context.fillStyle = "#55a41e";//填充色
        context.beginPath();
        context.moveTo(1160, 960);
        context.lineTo(1500, 900);
        context.lineTo(1300, 1100);
        context.closePath();
        context.fill();

        //9
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(1500, 900);
        context.lineTo(1660, 1160);
        context.lineTo(1300, 1100);
        context.closePath();
        context.fill();

        //10
        context.fillStyle = "#52a31d";//填充色
        context.beginPath();
        context.moveTo(1160, 960);
        context.lineTo(1300, 1100);
        context.lineTo(1260, 1300);
        context.closePath();
        context.fill();

        //11
        context.fillStyle = "#307102";//填充色
        context.beginPath();
        context.moveTo(1300, 1100);
        context.lineTo(1500, 1400);
        context.lineTo(1260, 1300);
        context.closePath();
        context.fill();

        //12
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(1300, 1100);
        context.lineTo(1660, 1160);
        context.lineTo(1500, 1400);
        context.closePath();
        context.fill();

        //13
        context.fillStyle = "#204901";//填充色
        context.beginPath();
        context.moveTo(1660, 1160);
        context.lineTo(1760, 1360);
        context.lineTo(1500, 1400);
        context.closePath();
        context.fill();

        //14
        context.fillStyle = "#173b00";//填充色
        context.beginPath();
        context.moveTo(1660, 1160);
        context.lineTo(1900, 1100);
        context.lineTo(1760, 1360);
        context.closePath();
        context.fill();
    }
}

doOrange();