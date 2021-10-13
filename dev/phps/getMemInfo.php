<?php
session_start();
if(isset($_SESSION["mem_email"])){
    $meminfo = ["mem_id"=> $_SESSION["mem_id"], "mem_name" => $_SESSION["mem_name"], "mem_email" => $_SESSION["mem_email"]];
	echo json_encode($meminfo);
}else{
    echo "{}";
}
?>