<?php 
try {
	require_once("./connectBooks_brian.php");
	//執行sql指令
    $sql = "INSERT INTO a_order (a_order_date, a_order_people, mem_id, activity_id)
    VALUES(:a_order_date, :a_order_people, :mem_id, :activity_id)";

    $activity = $pdo->prepare($sql);
    $activity->bindValue(":a_order_date", $_POST["a_order_date"]);
    $activity->bindValue(":a_order_people", $_POST["a_order_people"]);
    $activity->bindValue(":mem_id", $_POST["mem_id"]);
    $activity->bindValue(":activity_id", $_POST["activity_id"]);
    $activity->execute();                       

    echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('報名成功!');</script>";

}catch (PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
	echo $errMsg;
	}
	
?>
