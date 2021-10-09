<?php
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
        $dname = "post";
        file_put_contents("$dir/"."$dname".".{$type}", $data);

        // 執行sql指令並取得pdoStatement
        $sql = "insert into post(post_date, post_img, post_content, farm_id)
        values(:post_date, :post_img, :post_content, :farm_id)";
        $post = $pdo->prepare($sql);
        $post -> bindValue(":post_img", "$dname".".{$type}");
        $post -> bindValue(":post_content", $_POST["post_content"]);
        $post -> bindValue(":farm_id", $_POST["farm_id"]);
        // $post -> bindValue(":mem_id", $_POST["mem_id"]);
        $post -> exceute();
        echo "異動成功";
    } catch (PDOException $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
