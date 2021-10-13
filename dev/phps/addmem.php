<?php
    try{
        //引入連線工作的檔案
        require_once("./connecttbame.php");
        

        // 執行sql指令並取得pdoStatement
        $sql = "insert into member(mem_name, mem_email, mem_psw)
        values(:mem_name, :mem_email, :mem_psw)";
        $register = $pdo->prepare($sql);
        $register -> bindValue(":mem_name", $_POST["mem_name"]);
        $register -> bindValue(":mem_email", $_POST["mem_email"]);
        $register -> bindValue(":mem_psw",$_POST["mem_psw"]);
        $register -> execute();
        echo "異動成功";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
