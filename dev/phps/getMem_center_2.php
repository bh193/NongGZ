<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks_brian.php");

	//執行sql指令並取得pdoStatement
	
	$sql = "SELECT * 
	FROM member a join a_order b on a.mem_id = b.mem_id
                join activity c on b.activity_id = c.activity_id		
	ORDER BY a_order_id";				
	
	$products = $pdo->query($sql);
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>