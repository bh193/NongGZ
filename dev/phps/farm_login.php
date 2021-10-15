<?php
session_start();
try{
  require_once("./connectBooks_brian.php");
  $sql = "select * from farm where farm_email=:farm_email and farm_psw=:farm_psw"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":farm_email", $_POST["farm_email"]);
  $member->bindValue(":farm_psw", $_POST["farm_psw"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
    echo "{}";
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //登入成功,將登入者的資料寫入session
    $_SESSION["farm_id"] = $memRow["farm_id"];
    $_SESSION["farm_name"] = $memRow["farm_name"];
    $_SESSION["farm_gm"] = $memRow["farm_gm"];
    $_SESSION["farm_email"] = $memRow["farm_email"];

    $result = ["farm_id"=> $_SESSION["farm_id"], "farm_name" => $_SESSION["farm_name"], "farm_gm" => $_SESSION["farm_gm"], "farm_email" => $_SESSION["farm_email"]];

    //送出登入者的姓名資料
    echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>