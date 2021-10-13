<?php
    try{
        //引入連線工作的檔案
        require_once("./connecttbame.php");

        
     $content =trim(file_get_contents("php://input"));
     $decoded = json_decode($content, true);
     $user = $decoded['usermail'];
        // 執行sql指令並取得pdoStatement
        $sql = "select * from member where mem_email = :mem_email ";
        $memRows = $pdo->prepare($sql);
        $memRows->bindValue(":mem_email",$user);
        $memRows->execute();

        if($memRows->rowCount()>0){
            echo "1";//帳號已使用
        }else{
            echo "2";//Ok
        }

       
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
