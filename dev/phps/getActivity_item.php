<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks.php");

	//執行sql指令並取得pdoStatement
	$sql = "select activity_name, substring(activity_content, 1, 20) activity_content, activity_imgA
    from activity
    order by activity_date desc
    limit 5";
	$activity_items = $pdo->query($sql);
	$activitys = $activity_items->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($activitys);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>