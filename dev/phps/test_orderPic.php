<?php
session_start();
if(isset($_SESSION["treehistory_id"])){
    $meminfo = ["treehistory_id"=> $_SESSION["treehistory_id"], "tree_id" => $_SESSION["tree_id"]];
	echo json_encode($meminfo);
}else{
    echo "{}";
}
?>