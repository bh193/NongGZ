<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks.php");

	//執行sql指令並取得pdoStatement
	$sql = "SELECT  a.farm_id,a.farm_name,a.farm_gm,a.farm_address,a.farm_status,a.farm_tel,a.farm_lat,a.farm_lon,a.farm_cert,b.city_name
    FROM farm a join city b on a.city_id=b.city_id order by farm_id";
	$products = $pdo->query($sql);
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>