<?php
    try{
        //引入連線工作的檔案
        require_once("./connecttbame.php");
        
    
        // 執行sql指令並取得pdoStatement
        $sql = "insert into farm(farm_name, farm_gm, farm_address,city_id, farm_tel, farm_email,farm_psw,farm_cert)
        values(:farm_name, :farm_gm, :farm_address,:city_id, :farm_tel, :farm_email,:farm_psw,:farm_cert)";
        $register = $pdo->prepare($sql);
        $register -> bindValue(":farm_name", $_POST["farm_name"]);
        $register -> bindValue(":farm_gm", $_POST["farm_gm"]);
        $register -> bindValue(":farm_address",$_POST["farm_address"]);
        $register -> bindValue(":city_id",$_POST["city_id"]);
        $register -> bindValue(":farm_tel",$_POST["farm_tel"]);
        $register -> bindValue(":farm_email",$_POST["farm_email"]);
        $register -> bindValue(":farm_psw",$_POST["farm_psw"]);
        $register -> bindValue(":farm_cert", $_POST["farm_cert"]);
        $register -> execute();
        echo "異動成功";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
