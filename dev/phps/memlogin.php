<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>會員資料</title>
</head>
<body>
<?php
session_start();
try{
  require_once("./connecttbame.php");
  
  $sql = "select * from member where mem_email=:mem_email and mem_psw=:mem_psw"; 
  $member = $pdo->prepare($sql);
  $member->bindValue(":mem_email", $_POST["mem_user"]);
  $member->bindValue(":mem_psw", $_POST["mem_password"]);
  $member->execute();

  if( $member->rowCount()==0){ //查無此人
    echo "帳號或密碼錯誤";
    header('Refresh:1;url=../memlogin.html');
  }else{ //登入成功
    //自資料庫中取回資料
    $memRow = $member->fetch(PDO::FETCH_ASSOC);
    //登入成功,將登入者的資料寫入session
    $_SESSION["mem_email"] = $memRow["mem_email"];
    $_SESSION["mem_name"] = $memRow["mem_name"];

    $meminfo = ["mem_email"=> $_SESSION["mem_email"],"mem_name"=> $_SESSION["mem_name"]];


    //送出登入者的姓名資料
    //json_encode轉成json格式
    $data= json_encode($meminfo);
    //利用urldecode將資料轉回中文
    // $mem_data=urldecode($data);
	  echo $data;
  }
}catch(PDOException $e){
  echo $e->getMessage();
}
?>
</body>
</html>
