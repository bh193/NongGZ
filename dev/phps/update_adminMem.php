<?php
    try{
        //引入連線工作的檔案
        require_once("./connecttbame.php");   
        
        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        // echo $decoded; 
        // exit();
        // print_r($decoded);
       
        $update_id =$_GET['member'];
        $update_status = $_GET['newstatus'];
        
        // 執行sql指令並取得pdoStatement
        $sql = "UPDATE member SET mem_status=:mem_status WHERE mem_id = $update_id";
        $updatefarm = $pdo->prepare($sql);
        // $updatefarm -> bindValue(":mem_status",$update_status);
        $updatefarm -> bindValue(":mem_status",$update_status);
        $updatefarm -> execute();
        echo "ok";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
