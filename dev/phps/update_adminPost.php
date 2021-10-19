<?php
    try{
        //引入連線工作的檔案
        require_once("./connecttbame.php");   
        
        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        // echo $decoded; 
        // exit();
        // print_r($decoded);
       
        $update_id =$_GET['postid'];
        $update_status = $_GET['newstatus'];
        
        // 執行sql指令並取得pdoStatement
        $sql = "UPDATE report SET report_status=:report_status WHERE post_id = $update_id";
        $updatefarm = $pdo->prepare($sql);
        // $updatefarm -> bindValue(":mem_status",$update_status);
        $updatefarm -> bindValue(":report_status",$update_status);
        $updatefarm -> execute();
        echo "ok";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
