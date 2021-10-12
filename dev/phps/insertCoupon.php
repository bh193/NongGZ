<?php 
try {
	require_once("./connectBooks.php");
    if($_POST["mem_id"]!="{{mem_id}}"){
        //執行sql指令
        $sql = "insert into coupon(mem_id, coupon_t_price)
        values(:mem_id, :coupon_t_price)";
        $coupon = $pdo->prepare($sql); 
        $coupon->bindValue(":mem_id", $_POST["mem_id"]);
        $coupon->bindValue(":coupon_t_price", $_POST["coupon_t_price"]);
        echo "<script> history.go(-1)</script>";
        $coupon->execute();
    }else{
        echo "<script> history.go(-1)</script>";
    }
} catch (PDOException $e) {
	echo "alert('系統故障折扣券無效，請聯絡相關工作人員');</script>";
}
?>
