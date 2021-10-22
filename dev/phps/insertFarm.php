<?php
    try{
        //引入連線工作的檔案
        require_once("./connecttbame.php");
        
        $data=trim(file_get_contents("php://input"));
        $json_decod = json_decode($data, true);

        $farmname = $json_decod['farm_name'];
        $farmuser=$json_decod['farm_gm'];
        $city=$json_decod['city_id'];
        $farm_address=$json_decod['farm_address'];
        $farm_cert= $json_decod['farm_cert'];
        $farm_tel = $json_decod['farm_tel'];
        $farm_email = $json_decod['farm_email'];
        $farm_psw = $json_decod['farm_psw'];

        // 執行sql指令並取得pdoStatement
        $sql = "insert into farm(farm_name, farm_gm, farm_address,city_id, farm_tel, farm_email,farm_psw,farm_cert,farm_imgA,farm_imgB,far_imgc)
        values(:farm_name, :farm_gm, :farm_address,:city_id, :farm_tel, :farm_email,:farm_psw,:farm_cert,','premem.svg','premem.svg','premem.svg')";
        $register = $pdo->prepare($sql);
        $register -> bindValue(":farm_name",$farmname);
        $register -> bindValue(":farm_gm", $farmuser);
        $register -> bindValue(":farm_address",$farm_address);
        $register -> bindValue(":city_id",$city);
        $register -> bindValue(":farm_tel",$farm_tel);
        $register -> bindValue(":farm_email",$farm_email);
        $register -> bindValue(":farm_psw", $farm_psw);
        $register -> bindValue(":farm_cert", $farm_cert);
        $register -> execute();
        echo "新增成功";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
