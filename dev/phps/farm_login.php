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
    $_SESSION["farm_tel"] = $memRow["farm_tel"];
    $_SESSION["farm_address"] = $memRow["farm_address"];
    $_SESSION["farm_psw"] = $memRow["farm_psw"];
    $_SESSION["farm_banner"] = $memRow["farm_banner"];
    $_SESSION["farm_imgA"] = $memRow["farm_imgA"];
    $_SESSION["farm_imgB"] = $memRow["farm_imgB"];
    $_SESSION["farm_imgC"] = $memRow["farm_imgC"];
    $_SESSION["farm_contentA"] = $memRow["farm_contentA"];
    $_SESSION["farm_contentB"] = $memRow["farm_contentB"];
    $_SESSION["farm_status"] = $memRow["farm_status"];


    $result = ["farm_id"=> $_SESSION["farm_id"], "farm_name" => $_SESSION["farm_name"], "farm_gm" => $_SESSION["farm_gm"], "farm_email" => $_SESSION["farm_email"], "farm_tel" => $_SESSION["farm_tel"], "farm_address" => $_SESSION["farm_address"], "farm_psw" => $_SESSION["farm_psw"], "farm_banner" => $_SESSION["farm_banner"], "farm_imgA" => $_SESSION["farm_imgA"], "farm_imgB" => $_SESSION["farm_imgB"], "farm_imgC" => $_SESSION["farm_imgC"], "farm_contentA" => $_SESSION["farm_contentA"], "farm_contentB" => $_SESSION["farm_contentB"], "farm_status" => $_SESSION["farm_status"]];

    //送出登入者的姓名資料
    echo json_encode($result);
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>