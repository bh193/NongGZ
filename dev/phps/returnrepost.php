<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        $reporttxt = $decoded['reporttxt'];
        $memId = $decoded['memId'];
        $postId = $decoded['postId'];

        // 執行sql指令並取得pdoStatement
        $sql = "INSERT into report(report_reason, post_id, mem_id)
        values(:report_reason, :post_id, :mem_id)";
        $post = $pdo->prepare($sql);
        $post -> bindValue(":report_reason", $reporttxt);
        $post -> bindValue(":mem_id", $memId);
        $post -> bindValue(":post_id", $postId);
        $post -> execute();
        echo "異動成功";
    } catch (PDOException $e) {
        $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
        echo $errMsg;
    }
?>