<?php
session_start();
if(isset($_SESSION["farm_email"])){
    $result = ["farm_id"=> $_SESSION["farm_id"], "farm_name" => $_SESSION["farm_name"], "farm_gm" => $_SESSION["farm_gm"], "farm_email" => $_SESSION["farm_email"], "farm_tel" => $_SESSION["farm_tel"], "farm_address" => $_SESSION["farm_address"], "farm_psw" => $_SESSION["farm_psw"], "farm_banner" => $_SESSION["farm_banner"], "farm_imgA" => $_SESSION["farm_imgA"], "farm_imgB" => $_SESSION["farm_imgB"], "farm_imgC" => $_SESSION["farm_imgC"], "farm_contentA" => $_SESSION["farm_contentA"], "farm_contentB" => $_SESSION["farm_contentB"], "farm_status" => $_SESSION["farm_status"]];
	echo json_encode($result);
}else{
    echo "{}";
}
?>