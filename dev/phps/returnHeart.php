<?php
    try{
        //引入連線工作的檔案
        require_once("./returnHeart.php");   
        
        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        // echo $decoded; 
        
        
        // print_r($decoded);
       
        $update_cert =$_GET['cert'];
        $update_lat = $_GET['newlat'];
        $update_lon = $_GET['newlon'];
        $update_select = $_GET['newstatus'];
        
        // 執行sql指令並取得pdoStatement
        $sql = "UPDATE post SET post_feedback =:post_feedback+1  WHERE post_id = :post_id";
        $post = $pdo->prepare($sql);
        $post -> bindValue(":post_id", $post_id);
        $updatefarm -> execute();
        echo "ok";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
