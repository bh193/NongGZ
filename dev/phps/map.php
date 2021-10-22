<?php
    try{
        //引入連線工作的檔案
        require_once("./connecttbame.php");
        //執行sql指令並取得pdoStatement
        $sql = "select farm_name, farm_id,city_id,farm_lat,farm_lon,farm_address,farm_imgA,farm_imgB from farm ";
        $farm = $pdo->query($sql);
        $farmRows = $farm->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($farmRows);
    } catch (Exception $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>