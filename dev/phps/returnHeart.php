<?php
    try{
        //引入連線工作的檔案
        require_once("./returnHeart.php");   
        
        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        // echo $decoded; 
        
        
        // print_r($decoded);
       
        $member =$_GET['member'];
        $heartNum = $_GET['num'];
        $postId = $_GET['postId'];
        
        // 執行sql指令並取得pdoStatement
        $sql = "UPDATE post SET post_feedback =:post_feedback+1  WHERE post_id = :post_id";
        $post = $pdo->prepare($sql);
        $post -> bindValue(":post_id", $postId);
        $post -> bindValue(":post_feedback", $heartNum);
        $post -> bindValue(":mem_id", $member);
        $updatefarm -> execute();
        echo "ok";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
