<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        $update_psw =$_GET['psw'];
        $update_id =$_GET['farmId'];

        // 執行sql指令並取得pdoStatement
        $sql = "UPDATE farm SET farm_psw =:farm_psw WHERE farm_id = $update_id ";
        $updatefarm = $pdo->prepare($sql);
        $updatefarm -> bindValue(":farm_psw", $update_psw);
        $updatefarm -> execute();
    } catch (PDOException $e) {
        $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
        echo $errMsg;
    }
?>