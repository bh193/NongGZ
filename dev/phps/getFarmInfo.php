<?php
session_start();
if(isset($_SESSION["farm_email"])){
    $result = ["farm_id"=> $_SESSION["farm_id"], "farm_name" => $_SESSION["farm_name"], "farm_gm" => $_SESSION["farm_gm"], "farm_email" => $_SESSION["farm_email"]];
	echo json_encode($result);
}else{
    echo "{}";
}
?>