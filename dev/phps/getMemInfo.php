<?php
session_start();
if(isset($_SESSION["mem_email"])){
    $meminfo = ["mem_id"=> $_SESSION["mem_id"],"mem_email"=> $_SESSION["mem_email"],"mem_name"=> $_SESSION["mem_name"],"mem_img"=> $_SESSION["mem_img"]];
	echo json_encode($meminfo);
}else{
    echo "{}";
}
?>