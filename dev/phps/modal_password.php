<?php
try{
  require_once("./connectBooks_brian.php");
  $sql = "SELECT * FROM member WHERE mem_psw=:mem_psw"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":mem_psw", $_POST["old_psw"]);  //先檢驗舊密碼相符與否
  $member->execute();

  if( $member->rowCount()==0){ //查無此密碼
    echo "<script>alert('密碼錯誤!請重新輸入'); location.href = '../mem_center.html'</script>";                         
  }else{ 
    if($_POST["new_psw"] == $_POST["check_psw"]){    //再檢驗新密碼與確認密碼相符與否
      $sql2 ="UPDATE member SET mem_psw=:mem_psw
    WHERE mem_id = :mem_id";
    $member = $pdo->prepare($sql2);
    $member->bindValue(":mem_id", $_POST["mem_id"]);
    $member->bindValue(":mem_psw", $_POST["new_psw"]);
    $member->bindValue(":mem_psw", $_POST["check_psw"]);
	  $member->execute();      

    echo "<script>alert('密碼已更新!'); location.href = '../mem_center.html'</script>";
    }else{
      echo "<script>alert('確認密碼不相符!請重新輸入'); location.href = '../mem_center.html'</script>";
    }
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>