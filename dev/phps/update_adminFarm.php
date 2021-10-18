<?php
    try{
        //引入連線工作的檔案
        require_once("./connecttbame.php");   
        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        $update_lat = $decoded['newlat'];
        $update_lon = $decoded['newlon'];
        $update_select = $decoded['newstatus'];
        // 執行sql指令並取得pdoStatement
        $sql = "update farm SET farm_lat=:farm_lat, farm_lot=:farm_lot,farm_status=:farm_status WHERE farm_id = :farm_id";
        $updatefarm = $pdo->prepare($sql);
        $updatefarm -> bindValue(":farm_lat", $update_lat);
        $updatefarm -> bindValue(":farm_email", $update_lon);
        $updatefarm -> bindValue(":farm_status",$update_select);
        $updatefarm -> execute();
        echo "異動成功";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
