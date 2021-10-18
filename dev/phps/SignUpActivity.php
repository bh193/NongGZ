<?php 
try {
	//新增活動報名表單(只需人數, 故其他欄位設隱藏)
	require_once("./connectBooks_brian.php");
    $sql = "INSERT INTO a_order (a_order_people, mem_id, activity_id)
    VALUES(:a_order_people, :mem_id, :activity_id)";

    $a_order = $pdo->prepare($sql);
    $a_order->bindValue(":a_order_people", $_POST["a_order_people"]);
    $a_order->bindValue(":mem_id", $_POST["mem_id"]);
    $a_order->bindValue(":activity_id", $_POST["activity_id"] );
    $a_order->execute();

    //update people_num 報名後新增已報名人數
    $sql = "UPDATE activity SET activity_people = activity_people + :a_order_people 
            WHERE activity_id = :activity_id";

    $activity = $pdo->prepare($sql);
    $activity->bindValue(":a_order_people", $_POST["a_order_people"]);
    $activity->bindValue(":activity_id", $_POST["activity_id"] );
    $activity->execute();

    echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('報名成功!');</script>";
}catch (PDOException $e) {
	$pdo->rollBack();
	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
	echo $errMsg;
}



// try {
//     require_once("./connectBooks_brian.php");
//   //加總報名人數
//   $sql2 = "UPDATE a_order SET activity_people=:activity_people
//   WHERE activity_id = :activity_id";
//   $member = $pdo->prepare($sql2);
//   $member->bindValue(":activity_people",$_POST[intval("activity_people") + intval("a_order_people")]);
//   $member->bindValue(":activity_id", $_POST["activity_id"]);
//   $member->execute();                       

// }catch (PDOException $e) {
// 	$pdo->rollBack();
// 	$errMsg .= "錯誤原因 : ".$e -> getMessage(). "<br>";
// 	$errMsg .= "錯誤行號 : ".$e -> getLine(). "<br>";	
// 	echo $errMsg;
// 	}

	
?>
