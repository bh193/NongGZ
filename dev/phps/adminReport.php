<?php 
try {
	//引入連線工作的檔案
	require_once("./connecttbame.php");

	//執行sql指令並取得pdoStatement
	$sql = "select a.post_id,a.report_reason,a.report_reason,b.mem_email,a.report_status from report a join member b where a.mem_id=b.mem_id";
	$products = $pdo->query($sql);
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>