<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks.php");

	//執行sql指令並取得pdoStatement
	$sql = "select farm_name, tree_id, tree_status
	from farm a join tree b on a.farm_id = b.farm_id
	group by farm_name
	having tree_status in (0,1)";
	$farm_data = $pdo->query($sql);
	$farms = $farm_data->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($farms);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>