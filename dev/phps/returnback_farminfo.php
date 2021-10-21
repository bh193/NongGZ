<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        $content = trim(file_get_contents("php://input"));
        $decoded = json_decode($content, true);

        $data = $decoded['imageA'];
        $dataB = $decoded['imageB'];
        $dataC = $decoded['imageC'];
        $farmtel = $decoded["tel"];
        $farmaddress = $decoded["address"];
        $farmcontentA = $decoded["wstory"];
        $farmcontentB = $decoded["wsetting"];
        $farmbanner = $decoded["banner"];
        $farmid = $decoded["farmId"];


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
        $imgA = "$dname".".{$type}";

        if (preg_match('/^data:image\/(\w+);base64,/', $dataB, $type)) {
            $dataB = substr($dataB, strpos($dataB, ',') + 1);
            $type = strtolower($type[1]);

            if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
                throw new \Exception('invalid image type');
            }
            $dataB = str_replace( ' ', '+', $dataB );
            $dataB = base64_decode($dataB);

            if ($dataB === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }
        $dnameA = uniqid();
        file_put_contents("$dir/"."$dnameA".".{$type}", $dataB);
        $imgB = "$dnameA".".{$type}";

        if (preg_match('/^data:image\/(\w+);base64,/', $dataC, $type)) {
            $dataC = substr($dataC, strpos($dataC, ',') + 1);
            $type = strtolower($type[1]);

            if (!in_array($type, [ 'jpg', 'jpeg', 'gif', 'png' ])) {
                throw new \Exception('invalid image type');
            }
            $dataC = str_replace( ' ', '+', $dataC );
            $dataC = base64_decode($dataC);

            if ($dataC === false) {
                throw new \Exception('base64_decode failed');
            }
        } else {
            throw new \Exception('did not match data URI with image data');
        }
        $dnameB = uniqid();
        file_put_contents("$dir/"."$dnameB".".{$type}", $dataC);
        $imgC = "$dnameB".".{$type}";

        $infoImage = $imgA;
        $storyImage = $imgB;
        $settingImage = $imgC;
        // 執行sql指令並取得pdoStatement
        $sql = "UPDATE farm SET farm_tel = :farm_tel, farm_address = :farm_address, farm_contentA = :farm_contentA, farm_contentB = :farm_contentB, farm_banner = :farm_banner, farm_imgA = :farm_imgA, farm_imgB = :farm_imgB, farm_imgC = :farm_imgC WHERE farm_id  = $farmid";
        $updatefarm = $pdo->prepare($sql);
        $updatefarm -> bindValue(":farm_tel", $farmtel);
        $updatefarm -> bindValue(":farm_address", $farmaddress);
        $updatefarm -> bindValue(":farm_contentA", $farmcontentA);
        $updatefarm -> bindValue(":farm_contentB", $farmcontentB);
        $updatefarm -> bindValue(":farm_banner", $farmbanner);
        $updatefarm -> bindValue(":farm_imgA", $infoImage);
        $updatefarm -> bindValue(":farm_imgB", $storyImage);
        $updatefarm -> bindValue(":farm_imgC", $settingImage);
        $updatefarm -> execute();
    } catch (PDOException $e) {
        // $pdo->rollBack();
        $errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
        $errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
        echo $errMsg;
    }
?>