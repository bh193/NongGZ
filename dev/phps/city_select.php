<?php
    try{
        //引入連線工作的檔案
        require_once("./connecttbame.php");

        //執行sql指令並取得pdoStatement
        $sql = "select city_id, city_name from city";
        $city = $pdo->query($sql);
        $city = $city->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($city);
    } catch (Exception $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>