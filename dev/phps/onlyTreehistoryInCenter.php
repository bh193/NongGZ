<?php 
try {
	//引入連線工作的檔案
	require_once("./connectBooks_brian.php");

	//執行sql指令並取得pdoStatement
	$sql = "SELECT *
          FROM treehistory 
          ORDER BY treehistory_date DESC";
	$tree_imgs = $pdo->query($sql);
	$img = $tree_imgs->fetchAll(PDO::FETCH_ASSOC);
	echo json_encode($img);
} catch (Exception $e) {
	echo "錯誤行號 : ", $e->getLine(), "<br>";
	echo "錯誤原因 : ", $e->getMessage(), "<br>";
	//echo "系統暫時不能正常運行，請稍後再試<br>";	
}
?>