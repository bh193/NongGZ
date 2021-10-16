<?php 
try {
	//引入連線工作的檔案
	require_once("./connecttbame.php");

	//執行sql指令並取得pdoStatement
	$sql = "select mem_name, mem_email,mem_tel,mem_status from member";
	$member = $pdo->query($sql);
	$memRows = $member->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($memRows);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>