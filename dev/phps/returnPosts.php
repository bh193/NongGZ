<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        //檢查是否有images資料夾
        $dir = "../images/post";
        if(file_exists($dir) == false){
            mkdir($dir);
        }

        $data = $_POST["post_img"];
        
        if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
            $data = substr($data, strpos($data, ',') + 1);
            $type = strtolower($type[1]); // jpg, png, gif
        
            if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
                throw new \Exception('invalid image type');
            }
            $data = str_replace( ' ', '+', $data );
            $data = base64_decode($data);
        
            if ($data === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }
        $dname = uniqid();
        $today = date('Y-m-d');
        $putFile = file_put_contents("$dir/"."$dname".".{$type}", $data);
        $memid = "1";
        
        // 執行sql指令並取得pdoStatement
        $sql = "insert into post(post_date, post_img, post_content, farm_id, mem_id)
        values($today, :post_img, :post_content, :farm_id, :mem_id)";
        $postf = $pdo->prepare($sql);
        $postf -> bindValue(":post_img", $putFile);
        $postf -> bindValue(":post_content", $_POST["post_content"]);
        $postf -> bindValue(":farm_id", $_POST["farm_id"]);
        $postf -> bindValue(":mem_id", $memid);
        $postf -> exceute();
        echo "異動成功";
    } catch (PDOException $e) {
        $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
        echo $errMsg;
        }
?>
