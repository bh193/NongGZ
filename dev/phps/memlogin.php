<?php
session_start();
try{
  require_once("./connecttbame.php");
  
  $sql = "select * from member where mem_email=:mem_email and mem_psw=:mem_psw"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":mem_email", $_POST["mem_user"]);
  $member->bindValue(":mem_psw", $_POST["mem_password"]);
  $member->execute();
  $backurl="../memlogin.html";
  $sussurl="../mem_center.html";
  if($member =="" || $member->rowCount()==0){
    echo"帳號密碼空白請重新填寫";
    echo "<script type='text/javascript'>";
    echo "window.location.href='$backurl'";
    echo "</script>"; 
  }
  // if( $member->rowCount()==0){ //查無此人
  //   echo "帳號或密碼錯誤";
  //   header('url=../memlogin.html');
  else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //登入成功,將登入者的資料寫入session
    $_SESSION["mem_id"] = $memRow["mem_id"];
    $_SESSION["mem_email"] = $memRow["mem_email"];
    $_SESSION["mem_name"] = $memRow["mem_name"];
    $_SESSION["mem_img"] = $memRow["mem_img"];
    $meminfo = ["mem_id"=> $_SESSION["mem_id"],"mem_email"=> $_SESSION["mem_email"],"mem_name"=> $_SESSION["mem_name"],"mem_img"=> $_SESSION["mem_img"]];

    //送出登入者的姓名資料
    //json_encode轉成json格式
    $data= json_encode($meminfo);
    //利用urldecode將資料轉回中文
    // $mem_data=urldecode($data);
    echo "<script type='text/javascript'>";
    echo "window.location.href='$sussurl'";
    echo "</script>";
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>

