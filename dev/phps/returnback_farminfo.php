<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);
        $farmtel = $decoded['tel'];
        $farmaddress = $decoded['address'];
        $data = $decoded['infoPic'];
        $farmstoryPic = $decoded['storyPic'];
        $farmsettingPic = $decoded['settingPic'];
        $farmwstory = $decoded['wstory'];
        $farmwsetting = $decoded['wsetting'];
        $update_id = $decoded['farmId'];

        $dir = "../images/farm";

        if(file_exists($dir) == false){
            mkdir($dir);
        }
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
        file_put_contents("$dir/"."$dname".".{$type}", $data);
        $putFile = "$dname".".{$type}";

        // 執行sql指令並取得pdoStatement
        $sql = "UPDATE farm SET farm_tel = :farm_tel, farm_address = :farm_address, farm_imgA = :farm_imgA, farm_imgB = :farm_imgB, farm_imgC = :farm_imgC, farm_contentA = :farm_contentA, farm_contentB = :farm_contentB WHERE farm_id = $update_id ";
        $updatefarm = $pdo->prepare($sql);
        $updatefarm -> bindValue(":farm_tel", $update_tel);
        $updatefarm -> bindValue(":farm_address", $update_address);
        $updatefarm -> bindValue(":farm_imgA", $putFile);
        $updatefarm -> bindValue(":farm_imgB", $update_storyPic);
        $updatefarm -> bindValue(":farm_imgC", $update_settingPic);
        $updatefarm -> bindValue(":farm_contentA", $update_wstory);
        $updatefarm -> bindValue(":farm_contentB", $update_wsetting);
        $updatefarm -> execute();
    } catch (PDOException $e) {
        $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
        echo $errMsg;
    }
?>