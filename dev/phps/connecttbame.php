<?php
	$dsn = "mysql:host=localhost;port=3306;dbname=tibamefe_cfd102g1;charset=utf8";
	$user = "root";
	$password = "1qaz!QAZ";
	$options = array(PDO::ATTR_CASE=>PDO::CASE_NATURAL, PDO::ATTR_ERRMODE=>PDO::ERRMODE_EXCEPTION );
	$pdo = new PDO($dsn, $user, $password, $options);
?>