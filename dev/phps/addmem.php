<?php
    try{
        //引入連線工作的檔案
        require_once("./connectBooks_brian.php");
        
        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        $user = $decoded['user'];
        $email = $decoded['usermail'];
        $mpsw = $decoded['userpsn'];
        // 執行sql指令並取得pdoStatement
        $sql = "insert into member(mem_name, mem_email, mem_psw, mem_img)
        values(:mem_name, :mem_email, :mem_psw, 'premem.svg')";
                                                //設註冊會員後的預設大頭照
        $register = $pdo->prepare($sql);
        $register -> bindValue(":mem_name", $user);
        $register -> bindValue(":mem_email", $email);
        $register -> bindValue(":mem_psw",$mpsw);
        $register -> execute();
        echo "異動成功";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
