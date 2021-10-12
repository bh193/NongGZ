<?php  
try {
	require_once("./connectBooks.php");
	//執行sql指令
    if($_POST["coupon_id"]){
        $sql = "insert into t_order(t_order_date, t_order_start, mem_id, tree_id, coupon_id)
        values(current_date(), current_date(), :mem_id, :tree_id, :coupon_id)";
        $order = $pdo->prepare($sql);
        $order->bindValue(":mem_id", $_POST["mem_id"]);
        $order->bindValue(":tree_id", $_POST["tree_id"]);
        $order->bindValue(":coupon_id", $_POST["coupon_id"]);
    }else{
        $sql = "insert into t_order(t_order_date, t_order_start, mem_id, tree_id)
        values(current_date(), current_date(), :mem_id, :tree_id)";
        $order = $pdo->prepare($sql);
        $order->bindValue(":mem_id", $_POST["mem_id"]);
        $order->bindValue(":tree_id", $_POST["tree_id"]);
    }

	$order->execute();
	$t_order_id = $pdo->lastInsertId();
	echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('已完成交易');</script>";
} catch (PDOException $e) {
	echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('系統暫時不能正常運行，請稍後再試');</script>";
}
?>

<?php 
try {
	require_once("./connectBooks.php");
	//執行sql指令
    if($_POST["coupon_id"]){
        $sql2 = "update coupon 
        set coupon_status = 1, t_order_id = :t_order_id
        where coupon_id = :coupon_id";
        $coupon = $pdo->prepare($sql2); 
        $coupon->bindValue(":coupon_id", $_POST["coupon_id"]);
        $coupon->bindValue(":t_order_id",$t_order_id);

        $coupon->execute();                       
        echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('已完成交易');</script>";
    }
} catch (PDOException $e) {
	echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('系統暫時不能正常運行，請稍後再試');</script>";
}
?>

<?php 
try {
	require_once("./connectBooks.php");
	//執行sql指令
    $sql3 = "update tree 
    set tree_status = 1
    where tree_id = :tree_id";
    $tree = $pdo->prepare($sql3); 
    $tree->bindValue(":tree_id", $_POST["tree_id"]);

    $tree->execute();                       
    echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('已完成交易');</script>";

} catch (PDOException $e) {
	echo "<script> location.href='".$_SERVER["HTTP_REFERER"]."';alert('系統暫時不能正常運行，請稍後再試');</script>";
}
?>