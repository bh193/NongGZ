<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks_brian.php");

	//執行sql指令並取得pdoStatement
	$sql = "SELECT *
	from activity a join farm b on a.farm_id = b.farm_id
									join city c on b.city_id = c.city_id
									-- join a_order d on a.activity_id = d.activity_id
									-- join member e on e.mem_id = d.mem_id
	order by activity_date";
	$products = $pdo->query($sql);
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>