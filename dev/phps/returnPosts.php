<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        $content =trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        $farmId = $decoded['farm_id'];
        $data = $decoded['post_img'];
        $farmContent = $decoded['post_content'];

        $dir = "../images/post";

        if(file_exists($dir) == false){
            mkdir($dir);
        }
        // $data = $_POST["post_img"];
        if (preg_match('/^data:image\/(\w+);base64,/', $data, $type)) {
            $data = substr($data, strpos($data, ',') + 1);
            $type = strtolower($type[1]);
        
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
        file_put_contents("$dir/"."$dname".".{$type}", $data);
        $putFile = "$dname".".{$type}";
        $memid = "1";

        // 執行sql指令並取得pdoStatement
        $sql = "insert into post(post_date, post_img, post_content, farm_id, mem_id)
        values(:post_date, :post_img, :post_content, :farm_id, :mem_id)";
        $post = $pdo->prepare($sql);
        $post -> bindValue(":post_img", $putFile);
        $post -> bindValue(":post_content", $farmContent);
        $post -> bindValue(":farm_id", $farmId);
        $post -> bindValue(":post_date", $today);
        $post -> bindValue(":mem_id", $memid);
        $post -> execute();
        echo "異動成功";
    } catch (PDOException $e) {
        $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
        echo $errMsg;
    }
?>
