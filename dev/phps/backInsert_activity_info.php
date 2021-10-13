<?php 
try {
	require_once("./connectBooks_brian.php");
	//執行sql指令
	$sql = "insert into activity (activity_name, activity_date, activity_max, activity_min, activity_start, activity_end, activity_imgA ,activity_imgB, activity_imgC, activity_imgD, activity_content, farm_id)

	values(:activity_name, :activity_date, :activity_max, :activity_min, :activity_start, :activity_end, :activity_imgA, :activity_imgB, :activity_imgC, :activity_imgD, :activity_content, :farm_id)";

	$activity = $pdo->prepare($sql);
	// $activity->bindValue(":activity_id", $_GET["activity_id"]);
	$activity->bindValue(":activity_name", $_GET["activity_name"]);
	$activity->bindValue(":activity_date", $_GET["activity_date"]);
	$activity->bindValue(":activity_min", $_GET["activity_min"]);
	$activity->bindValue(":activity_max", $_GET["activity_max"]);	 
  // $activity->bindValue(":activity_people", $_GET["activity_people"]);	 
  $activity->bindValue(":activity_start", $_GET["activity_start"]);	 
	$activity->bindValue(":activity_end", $_GET["activity_end"]);	
	// $activity->bindValue(":activity_status", $_GET["activity_status"]);	
	$activity->bindValue(":activity_imgA", $_GET["activity_imgA"]);	
	$activity->bindValue(":activity_imgB", $_GET["activity_imgB"]);
	$activity->bindValue(":activity_imgC", $_GET["activity_imgC"]);	
	$activity->bindValue(":activity_imgD", $_GET["activity_imgD"]);		
	$activity->bindValue(":activity_content", $_GET["activity_content"]);	
	$activity->bindValue(":farm_id", $_GET["farm_id"]);	
	$activity->execute();                       
	echo "<script>alert('已新增一筆活動'); location.href = '../back_activity_info.html'</script>";

} catch (PDOException $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	// echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>

<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<title>Examples</title>
</head>
<body>
 
</html>