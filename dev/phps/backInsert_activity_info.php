<?php 
try {
	//新增後台體驗活動
	require_once("./connectBooks_brian.php");

	//.......確定是否上傳成功
	if($_FILES["activity_imgA"]["error"] == UPLOAD_ERR_OK && 
		 $_FILES["activity_imgB"]["error"] == UPLOAD_ERR_OK && 
		 $_FILES["activity_imgC"]["error"] == UPLOAD_ERR_OK && 
		 $_FILES["activity_imgD"]["error"] == UPLOAD_ERR_OK)
		 {
		//決定檔案名稱
			$fileInfoArr1 = pathinfo($_FILES["activity_imgA"]["name"]);
			$imageNo1 = uniqid();
			$fileName1 = "{$imageNo1}.{$fileInfoArr1["extension"]}";  

			$fileInfoArr2 = pathinfo($_FILES["activity_imgB"]["name"]);
			$imageNo2 = uniqid();
			$fileName2 = "{$imageNo2}.{$fileInfoArr2["extension"]}";

			$fileInfoArr3 = pathinfo($_FILES["activity_imgC"]["name"]);
			$imageNo3 = uniqid();
			$fileName3 = "{$imageNo3}.{$fileInfoArr3["extension"]}";

			$fileInfoArr4 = pathinfo($_FILES["activity_imgD"]["name"]);
			$imageNo4 = uniqid();
			$fileName4 = "{$imageNo4}.{$fileInfoArr4["extension"]}";

			//先檢查images資料夾存不存在
			if( file_exists("images") === false){
				mkdir("images");
			}
			//將檔案copy到要放的路徑
			$from1 = $_FILES["activity_imgA"]["tmp_name"];
			$to1 = "../images/activity/$fileName1";

			$from2 = $_FILES["activity_imgB"]["tmp_name"];
			$to2 = "../images/activity/$fileName2";

			$from3 = $_FILES["activity_imgC"]["tmp_name"];
			$to3 = "../images/activity/$fileName3";

			$from4 = $_FILES["activity_imgD"]["tmp_name"];
			$to4 = "../images/activity/$fileName4";

			if(	copy( $from1, $to1)===true &&
					copy( $from2, $to2)===true &&
					copy( $from3, $to3)===true &&
					copy( $from4, $to4)===true){
					$sql = "INSERT INTO activity (activity_name, activity_date, activity_max, activity_min, activity_start, activity_end, activity_imgA ,activity_imgB, activity_imgC, activity_imgD, activity_content, farm_id)

					VALUES(:activity_name, :activity_date, :activity_max, :activity_min, :activity_start, :activity_end, :activity_imgA, :activity_imgB, :activity_imgC, :activity_imgD, :activity_content, :farm_id)";

					$activity = $pdo->prepare($sql);
					// $activity->bindValue(":activity_id", $_POST["activity_id"]);
					$activity->bindValue(":activity_name", $_POST["activity_name"]);
					$activity->bindValue(":activity_date", $_POST["activity_date"]);
					$activity->bindValue(":activity_min", $_POST["activity_min"]);
					$activity->bindValue(":activity_max", $_POST["activity_max"]);	 
					// $activity->bindValue(":activity_people", $_POST["activity_people"]);	 
					$activity->bindValue(":activity_start", $_POST["activity_start"]);	 
					$activity->bindValue(":activity_end", $_POST["activity_end"]);	
					// $activity->bindValue(":activity_status", $_POST["activity_status"]);	
					$activity->bindValue(":activity_imgA", $fileName1);	
					$activity->bindValue(":activity_imgB", $fileName2);
					$activity->bindValue(":activity_imgC", $fileName3);	
					$activity->bindValue(":activity_imgD", $fileName4);		
					$activity->bindValue(":activity_content", $_POST["activity_content"]);	
					$activity->bindValue(":farm_id", $_POST["farm_id"]);	
					$activity->execute();                       
			
					echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('已新增一筆活動');</script>";
					}

		}else{
			echo "錯誤代碼 : {$_FILES["upFile"]["error"]} <br>";
			echo "新增失敗<br>";
		}
}catch (PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
	echo $errMsg;
			
		}
	
?>
