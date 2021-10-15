<?php
session_start();
if(isset($_SESSION["con_email"])){
    $result = ["con_email"=> $_SESSION["con_email"], "con_psw" => $_SESSION["con_psw"]];
	echo json_encode($result);
}else{
    echo "{}";
}
?>