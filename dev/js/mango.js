function doMango() {
    var mango = document.getElementsByClassName('mango');

    for (var i = 0; i < mango.length; i++) {
        var context = mango[i].getContext('2d');

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
        context.moveTo(600, 1800);
        context.lineTo(1000, 1810);
        context.lineTo(1200, 1800);
        context.lineTo(1400, 1850);
        context.lineTo(1650, 1810);
        context.lineTo(1930, 1850);
        context.lineTo(1500, 2000);
        context.lineTo(1100, 2000);
        context.lineTo(480, 1920);
        context.lineTo(270, 1850);
        context.closePath();
        context.fill();

        //樹幹
        //左
        //1
        context.fillStyle = "#8e4e00";//填充色
        context.beginPath();
        context.moveTo(620, 920);
        context.lineTo(900, 1160);
        context.lineTo(700, 1050);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#673500";//填充色
        context.beginPath();
        context.moveTo(580, 980);
        context.lineTo(700, 1050);
        context.lineTo(800, 1160);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#a96105";//填充色
        context.beginPath();
        context.moveTo(700, 1050);
        context.lineTo(900, 1160);
        context.lineTo(800, 1160);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#c07620";//填充色
        context.beginPath();
        context.moveTo(900, 1160);
        context.lineTo(1000, 1350);
        context.lineTo(800, 1160);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#8f4f00";//填充色
        context.beginPath();
        context.moveTo(900, 1160);
        context.lineTo(1110, 1360);
        context.lineTo(1000, 1350);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#6c3400";//填充色
        context.beginPath();
        context.moveTo(1000, 1350);
        context.lineTo(1110, 1360);
        context.lineTo(1090, 1430);
        context.closePath();
        context.fill();

        //樹幹
        //右
        //1
        context.fillStyle = "#8d4800";//填充色
        context.beginPath();
        context.moveTo(1400, 850);
        context.lineTo(1350, 1000);
        context.lineTo(1280, 1100);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#8f4e00";//填充色
        context.beginPath();
        context.moveTo(1450, 900);
        context.lineTo(1300, 1200);
        context.lineTo(1350, 1000);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#c07620";//填充色
        context.beginPath();
        context.moveTo(1350, 1000);
        context.lineTo(1300, 1200);
        context.lineTo(1280, 1100);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#8f5000";//填充色
        context.beginPath();
        context.moveTo(1280, 1100);
        context.lineTo(1300, 1200);
        context.lineTo(1130, 1360);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#673600";//填充色
        context.beginPath();
        context.moveTo(1300, 1200);
        context.lineTo(1150, 1500);
        context.lineTo(1130, 1360);
        context.closePath();
        context.fill();

        //樹幹
        //中
        //1
        context.fillStyle = "#924f00";//填充色
        context.beginPath();
        context.moveTo(1080, 1360);
        context.lineTo(1100, 1350);
        context.lineTo(1090, 1520);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#8f4d00";//填充色
        context.beginPath();
        context.moveTo(1100, 1350);
        context.lineTo(1160, 1340);
        context.lineTo(1150, 1600);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#c07620";//填充色
        context.beginPath();
        context.moveTo(1100, 1350);
        context.lineTo(1150, 1600);
        context.lineTo(1090, 1520);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#8d4f00";//填充色
        context.beginPath();
        context.moveTo(1090, 1520);
        context.lineTo(1150, 1600);
        context.lineTo(1040, 1800);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#673600";//填充色
        context.beginPath();
        context.moveTo(1150, 1600);
        context.lineTo(1120, 1910);
        context.lineTo(1040, 1800);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#904e00";//填充色
        context.beginPath();
        context.moveTo(1150, 1600);
        context.lineTo(1180, 1880);
        context.lineTo(1120, 1910);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#673600";//填充色
        context.beginPath();
        context.moveTo(1040, 1800);
        context.lineTo(1020, 1910);
        context.lineTo(950, 1900);
        context.closePath();
        context.fill();

        //8
        context.fillStyle = "#904e00";//填充色
        context.beginPath();
        context.moveTo(1040, 1800);
        context.lineTo(1120, 1910);
        context.lineTo(1020, 1910);
        context.closePath();
        context.fill();

        //樹冠
        //1
        context.fillStyle = "#aed800";//填充色
        context.beginPath();
        context.moveTo(1000, 0);
        context.lineTo(790, 350);
        context.lineTo(300, 250);
        context.closePath();
        context.fill()

        //2
        context.fillStyle = "#76ba19";//填充色
        context.beginPath();
        context.moveTo(1000, 0);
        context.lineTo(1250, 550);
        context.lineTo(790, 350);
        context.closePath();
        context.fill()

        //3
        context.fillStyle = "#54a41e";//填充色
        context.beginPath();
        context.moveTo(1000, 0);
        context.lineTo(1690, 110);
        context.lineTo(1250, 550);
        context.closePath();
        context.fill()

        //4
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(1690, 110);
        context.lineTo(1690, 700);
        context.lineTo(1250, 550);
        context.closePath();
        context.fill()

        //5
        context.fillStyle = "#2e7102";//填充色
        context.beginPath();
        context.moveTo(1690, 110);
        context.lineTo(1990, 600);
        context.lineTo(1690, 700);
        context.closePath();
        context.fill()

        //6
        context.fillStyle = "#76ba19";//填充色
        context.beginPath();
        context.moveTo(300, 250);
        context.lineTo(790, 350);
        context.lineTo(100, 600);
        context.closePath();
        context.fill()

        //7
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(790, 350);
        context.lineTo(790, 760);
        context.lineTo(100, 600);
        context.closePath();
        context.fill()

        //8
        context.fillStyle = "#55a41e";//填充色
        context.beginPath();
        context.moveTo(790, 350);
        context.lineTo(1250, 550);
        context.lineTo(790, 760);
        context.closePath();
        context.fill()

        //9
        context.fillStyle = "#327002";//填充色
        context.beginPath();
        context.moveTo(1250, 550);
        context.lineTo(1690, 700);
        context.lineTo(790, 760);
        context.closePath();
        context.fill()

        //10
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(100, 600);
        context.lineTo(790, 760);
        context.lineTo(380, 1030);
        context.closePath();
        context.fill()

        //11
        context.fillStyle = "#327002";//填充色
        context.beginPath();
        context.moveTo(790, 760);
        context.lineTo(650, 1100);
        context.lineTo(380, 1030);
        context.closePath();
        context.fill()

        //12
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(790, 760);
        context.lineTo(850, 1000);
        context.lineTo(650, 1100);
        context.closePath();
        context.fill()

        //13
        context.fillStyle = "#204901";//填充色
        context.beginPath();
        context.moveTo(790, 760);
        context.lineTo(1300, 1040);
        context.lineTo(850, 1000);
        context.closePath();
        context.fill()

        //14
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(790, 760);
        context.lineTo(1650, 950);
        context.lineTo(1300, 1040);
        context.closePath();
        context.fill()

        //15
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(790, 760);
        context.lineTo(1690, 700);
        context.lineTo(1650, 950);
        context.closePath();
        context.fill()

        //16
        context.fillStyle = "#265e03";//填充色
        context.beginPath();
        context.moveTo(1990, 600);
        context.lineTo(1690, 700);
        context.lineTo(1650, 950);
        context.closePath();
        context.fill()
    }
}

doMango();