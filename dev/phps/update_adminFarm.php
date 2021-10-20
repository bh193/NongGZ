<?php
    try{
        //引入連線工作的檔案
        require_once("./connectBooks.php");   
        
        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        // echo $decoded; 
        // exit();
        
        
        // print_r($decoded);
       
        $update_cert =$_GET['cert'];
        $update_lat = $_GET['newlat'];
        $update_lon = $_GET['newlon'];
        $update_select = $_GET['newstatus'];
        
        // 執行sql指令並取得pdoStatement
        $sql = "UPDATE farm SET farm_lat =:farm_lat, farm_lon=:farm_lon, farm_status=:farm_status WHERE farm_cert = :farm_cert";
        $updatefarm = $pdo->prepare($sql);
        $updatefarm -> bindValue(":farm_cert", $update_cert);
        $updatefarm -> bindValue(":farm_lat",  $update_lat);
        $updatefarm -> bindValue(":farm_lon",  $update_lon);
        $updatefarm -> bindValue(":farm_status",$update_select);
        $updatefarm -> execute();
        echo "ok";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
