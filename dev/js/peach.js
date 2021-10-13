function doPeach() {

    var peach = document.getElementsByClassName('peach');

    for (var i = 0; i < peach.length; i++) {
        var context = peach[i].getContext('2d');

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
        context.moveTo(550, 1950);
        context.lineTo(1000, 1800);
        context.lineTo(1400, 1950);
        context.lineTo(1200, 2000);
        context.lineTo(1100, 2000);
        context.closePath();
        context.fill();

        //樹幹
        //1
        context.fillStyle = "#e39a47";//填充色
        context.beginPath();
        context.moveTo(890, 1000);
        context.lineTo(970, 1250);
        context.lineTo(940, 1500);
        context.closePath();
        context.fill();

        //2
        context.fillStyle = "#bf7620";//填充色
        context.beginPath();
        context.moveTo(1050, 1000);
        context.lineTo(1050, 1610);
        context.lineTo(970, 1250);
        context.closePath();
        context.fill();

        //3
        context.fillStyle = "#a86003";//填充色
        context.beginPath();
        context.moveTo(970, 1250);
        context.lineTo(1050, 1610);
        context.lineTo(940, 1500);
        context.closePath();
        context.fill();

        //4
        context.fillStyle = "#c07620";//填充色
        context.beginPath();
        context.moveTo(940, 1500);
        context.lineTo(1050, 1610);
        context.lineTo(950, 1770);
        context.closePath();
        context.fill();

        //5
        context.fillStyle = "#a66100";//填充色
        context.beginPath();
        context.moveTo(1050, 1610);
        context.lineTo(1100, 1950);
        context.lineTo(950, 1770);
        context.closePath();
        context.fill();

        //6
        context.fillStyle = "#663700";//填充色
        context.beginPath();
        context.moveTo(950, 1770);
        context.lineTo(920, 1950);
        context.lineTo(790, 1910);
        context.closePath();
        context.fill();

        //7
        context.fillStyle = "#904e00";//填充色
        context.beginPath();
        context.moveTo(950, 1770);
        context.lineTo(1100, 1950);
        context.lineTo(920, 1950);
        context.closePath();
        context.fill();

        //8
        context.fillStyle = "#904e00";//填充色
        context.beginPath();
        context.moveTo(1070, 1800);
        context.lineTo(1180, 1950);
        context.lineTo(1100, 1950);
        context.closePath();
        context.fill();

        //樹冠
        //1
        context.fillStyle = "#76ba17";//填充色
        context.beginPath();
        context.moveTo(1100, 0);
        context.lineTo(880, 260);
        context.lineTo(500, 250);
        context.closePath();
        context.fill()

        //2
        context.fillStyle = "#aed800";//填充色
        context.beginPath();
        context.moveTo(1100, 0);
        context.lineTo(1210, 600);
        context.lineTo(880, 260);
        context.closePath();
        context.fill()

        //3
        context.fillStyle = "#76ba19";//填充色
        context.beginPath();
        context.moveTo(1100, 0);
        context.lineTo(1400, 250);
        context.lineTo(1210, 600);
        context.closePath();
        context.fill()

        //4
        context.fillStyle = "#aed800";//填充色
        context.beginPath();
        context.moveTo(500, 250);
        context.lineTo(880, 260);
        context.lineTo(380, 650);
        context.closePath();
        context.fill()

        //5
        context.fillStyle = "#76ba18";//填充色
        context.beginPath();
        context.moveTo(880, 260);
        context.lineTo(880, 920);
        context.lineTo(380, 650);
        context.closePath();
        context.fill()

        //6
        context.fillStyle = "#50a31c";//填充色
        context.beginPath();
        context.moveTo(880, 260);
        context.lineTo(1210, 600);
        context.lineTo(880, 920);
        context.closePath();
        context.fill()

        //7
        context.fillStyle = "#55a41e";//填充色
        context.beginPath();
        context.moveTo(1400, 250);
        context.lineTo(1380, 920);
        context.lineTo(1210, 600);
        context.closePath();
        context.fill()

        //8
        context.fillStyle = "#76ba17";//填充色
        context.beginPath();
        context.moveTo(1400, 250);
        context.lineTo(1580, 650);
        context.lineTo(1380, 920);
        context.closePath();
        context.fill()

        //9
        context.fillStyle = "#55a41e";//填充色
        context.beginPath();
        context.moveTo(380, 650);
        context.lineTo(880, 920);
        context.lineTo(550, 1110);
        context.closePath();
        context.fill()

        //10
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(1210, 600);
        context.lineTo(1380, 920);
        context.lineTo(880, 920);
        context.closePath();
        context.fill()

        //11
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(1580, 650);
        context.lineTo(1350, 1160);
        context.lineTo(1380, 920);
        context.closePath();
        context.fill()

        //12
        context.fillStyle = "#307102";//填充色
        context.beginPath();
        context.moveTo(880, 920);
        context.lineTo(950, 1260);
        context.lineTo(550, 1110);
        context.closePath();
        context.fill()

        //13
        context.fillStyle = "#3b8801";//填充色
        context.beginPath();
        context.moveTo(880, 920);
        context.lineTo(1350, 1160);
        context.lineTo(950, 1260);
        context.closePath();
        context.fill()

        //14
        context.fillStyle = "#327002";//填充色
        context.beginPath();
        context.moveTo(880, 920);
        context.lineTo(1380, 920);
        context.lineTo(1350, 1160);
        context.closePath();
        context.fill()
    }
}

doPeach();