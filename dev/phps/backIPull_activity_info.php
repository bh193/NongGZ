<?php 
try {
	//更改後台體驗活動狀態(下架)
	require_once("./connectBooks_brian.php");
	//執行sql指令
	$sql = "UPDATE activity 
  SET activity_status = 0
  WHERE activity_id = :activity_id";

	$activity = $pdo->prepare($sql);
	$activity->bindValue(":activity_id", $_POST["activity_id"]);
	$activity->execute();                       
	
	echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('已下架');</script>";

} catch (PDOException $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	// echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>
