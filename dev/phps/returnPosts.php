<?php
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        //執行sql指令並取得pdoStatement
        $sql = "insert into post(post_date, post_img, post_content, farm_id, mem_id)
        values(:post_date, :post_img, :post_content, :farm_id,:mem_id)";
        $post = $pdo->prepare($sql);
        $post -> bindValue(":post_img", $_POST["post_img"]);
        $post -> bindValue(":post_content", $_POST["post_content"]);
        $post -> bindValue(":farm_id", $_POST["farm_id"]);
        $post -> bindValue(":mem_id", $_POST["mem_id"]);
        $post -> exceute();
        echo "異動成功";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
