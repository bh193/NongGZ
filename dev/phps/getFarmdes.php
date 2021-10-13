<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");
        
        //執行sql指令並取得pdoStatement
        $sql = "SELECT * from farm";
        $products = $pdo->query($sql);
        $prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($prodRows);
    } catch (Exception $e) {
        $pdo->rollBack();
        $errMsg .= "錯誤行號 : ". $e->getLine(). "<br>";
        $errMsg .= "錯誤原因 : ". $e->getMessage(). "<br>";
        echo $errMsg;	
    }
?>