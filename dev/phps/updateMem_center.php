<?php 
try {
	//更新會員中心個人資料

	//----------------------------檢查是否有選新的頭像
	if( $_FILES["mem_img"]["error"] == UPLOAD_ERR_OK){
		//決定檔案名稱
		$fileInfoArr = pathinfo($_FILES["mem_img"]["name"]);
		$imageNo = uniqid();
		$fileName = "{$imageNo}.{$fileInfoArr["extension"]}";  
		//先檢查images資料夾存不存在
		if( file_exists("images") === false){
			mkdir("images");
		}
		//將檔案copy到要放的路徑
		$from = $_FILES["mem_img"]["tmp_name"];
		$to = "../images/mem/$fileName";
		if(copy( $from, $to)===false){
			echo "update error";
		}
	}else{ //没有就使用舊的
		$fileName = $_POST["originImg"];
	}	


	require_once("./connectBooks_brian.php");
	//執行sql指令
	$sql = "UPDATE member SET mem_name=:mem_name, mem_tel=:mem_tel, mem_img=:mem_img, mem_psw=:mem_psw
	WHERE mem_id = :mem_id";
	$member = $pdo->prepare($sql);
	$member->bindValue(":mem_name", $_POST["mem_name"]);
	$member->bindValue(":mem_tel", $_POST["mem_tel"]);
	$member->bindValue(":mem_id", $_POST["mem_id"]);
	$member->bindValue(":mem_psw", $_POST["mem_psw"]);
	$member->bindValue(":mem_img", $fileName);
	$member->execute();                       

	//----------------------------------

	$meminfo = ["mem_id"=> $_POST["mem_id"],"mem_email"=> $_POST["mem_email"],"mem_name"=> $_POST["mem_name"],"mem_img"=> $_POST["mem_img"]];

	//----------------------------------
	echo "<script>alert('個人資料已更新!'); location.href = '../mem_center.html'</script>";

} catch (PDOException $e) {
	echo "<script>alert('系統暫時不能正常運行，請稍後再試'); location.href = '../mem_center.html'</script>";
}
?>

