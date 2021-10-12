<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks.php");

	//執行sql指令並取得pdoStatement
	$sql = "select * 
    from member a left join coupon b on a.mem_id = b.mem_id
    where coupon_status=0 or coupon_status is null
    order by coupon_id";
	$mem_coupon = $pdo->query($sql);
	$mems = $mem_coupon->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($mems);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>