<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks.php");

	//執行sql指令並取得pdoStatement
	$sql = "select * 
    from tree a join fruit b on a.fruit_id = b.fruit_id
    order by tree_status, tree_id";
	$tree_data = $pdo->query($sql);
	$trees = $tree_data->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($trees);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>