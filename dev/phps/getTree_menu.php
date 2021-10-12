<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks.php");

	//執行sql指令並取得pdoStatement
	$sql = "select  d.farm_id, d.farm_name, c.tree_name, a.t_order_id, c.tree_id, a.t_order_date, a.t_order_start, b.mem_name, b.mem_email, adddate(a.t_order_start, interval 1 year) t_order_end
    from t_order a join member b on a.mem_id = b.mem_id 
                   join tree c on a.tree_id = c.tree_id 
                   join farm d on c.farm_id = d.farm_id
    order by t_order_date desc";
	$menu_items = $pdo->query($sql);
	$menus = $menu_items->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($menus);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>