<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks_brian.php");

	//執行sql指令並取得pdoStatement
	
	$sql = "SELECT * 
	FROM member a join t_order b on a.mem_id = b.mem_id
			  				join tree c on c.tree_id = b.tree_id
								join farm d on c.farm_id = d.farm_id
								join a_order e on a.mem_id = e.mem_id
								join activity f on e.activity_id = f.activity_id
								-- join treehistory e on b.tree_id = e.tree_id
								-- 會重複跑出二筆?
	ORDER BY t_order_id";				
	
	$products = $pdo->query($sql);
	$prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($prodRows);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>