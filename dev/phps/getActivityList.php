<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks_brian.php");

	//執行sql指令並取得pdoStatement
	$sql = "SELECT a.activity_id, a.activity_name, a.activity_date, a.activity_content, a.activity_imgA, a.activity_imgB, a.activity_imgC, a.activity_imgD, a.activity_max, a.activity_min, a.activity_start, a.activity_end, b.farm_name,c.city_name
	from activity a join farm b on a.farm_id = b.farm_id
									join city c on b.city_id = c.city_id;";
	$products = $pdo->query($sql);
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>