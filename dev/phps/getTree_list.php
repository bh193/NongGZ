<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks.php");

	//執行sql指令並取得pdoStatement
	$sql = "select * 
	from treehistory a join tree b on a.tree_id = b.tree_id 
	                   join fruit c on b.fruit_id = c.fruit_id 
					   join farm d on b.farm_id = d.farm_id 
	where treehistory_date=( 
							select max(treehistory_date) 
							from treehistory f 
							where a.tree_id=f.tree_id)
		    and tree_status=0
	group by a.tree_id
	order by tree_update desc";
	$tree_items = $pdo->query($sql);
	$trees = $tree_items->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($trees);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>