<?php 
session_start(); 
try {
	require_once("./connectBooks.php");
	//執行sql指令
	$sql = "insert into tree(tree_name, fruit_id, size, amount, tree_start, tree_end, tree_price, farm_id)
    values(:tree_name, :fruit_id, :size, :amount, :tree_start, :tree_end, :tree_price, :farm_id)";
	$trees = $pdo->prepare($sql);
	$trees->bindValue(":tree_name", $_POST["tree_name"]);
	$trees->bindValue(":fruit_id", $_POST["fruit_id"]);
	$trees->bindValue(":size", $_POST["size"]);
	$trees->bindValue(":amount", $_POST["amount"]);
	$trees->bindValue(":tree_start", $_POST["tree_start"]);
	$trees->bindValue(":tree_end", $_POST["tree_end"]);	 
    $trees->bindValue(":tree_price", $_POST["tree_price"]);
	$trees->bindValue(":farm_id", $_SESSION["farm_id"]);

	$trees->execute();
	$tree_id = $pdo->lastInsertId();
	echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('已新增一筆，但圖片尚未上傳');</script>";
} catch (PDOException $e) {
	echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('系統暫時不能正常運行，請稍後再試');</script>";
}
?>

<?php 
try {
	require_once("./connectBooks.php");
	if( $_FILES["treehistory_img"]["error"] == UPLOAD_ERR_OK && $_FILES["treehistory_img2"]["error"] == UPLOAD_ERR_OK){
		//決定檔案名稱
		$fileInfoArr = pathinfo($_FILES["treehistory_img"]["name"]);
		$imageNo = uniqid();
		$fileName = "{$imageNo}.{$fileInfoArr["extension"]}";  //312543544.gif
		$fileInfoArr2 = pathinfo($_FILES["treehistory_img2"]["name"]);
		$imageNo2 = uniqid();
		$fileName2 = "{$imageNo2}.{$fileInfoArr2["extension"]}";  //312543544.gif
		//先檢查images資料夾存不存在
		if( file_exists("images") === false){
			mkdir("images");
		}
		//將檔案copy到要放的路徑
		$from = $_FILES["treehistory_img"]["tmp_name"];
		$to = "../images/tree/$fileName";
		$from2 = $_FILES["treehistory_img2"]["tmp_name"];
		$to2 = "../images/tree/$fileName2";
		if(copy( $from, $to)===true && copy( $from2, $to2)===true){
			//執行sql指令
			$sql2 = "insert into treehistory(treehistory_img, tree_id)
			values(:treehistory_img, :tree_id),(:treehistory_img2, :tree_id)";
			$tree_history = $pdo->prepare($sql2);
			$tree_history->bindValue(":treehistory_img", $fileName);
			$tree_history->bindValue(":treehistory_img2", $fileName2);
			$tree_history->bindValue(":tree_id", $tree_id);	 	 
			$tree_history->execute();                       
			echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('新增一筆');</script>";
		}
	}else{
		echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('上傳圖片未完全');</script>";
	}

} catch (PDOException $e2) {
	echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('系統暫時不能正常運行，請稍後再試');</script>";	
}

?>