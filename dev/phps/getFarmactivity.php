<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");
        
        //執行sql指令並取得pdoStatement
        $sql = "SELECT a.activity_name, a.activity_date, c.city_name, f.farm_name, activity_content, a.activity_imgA, a.activity_id, f.farm_id
        from activity a join farm f on a.farm_id = f.farm_id
                        join city c on f.city_id = c.city_id
                        order by a.farm_id";
        $products = $pdo->query($sql);
        $prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($prodRows);
    } catch (Exception $e) {
        $pdo->rollBack();
        $errMsg .= "錯誤行號 : ". $e->getLine(). "<br>";
        $errMsg .= "錯誤原因 : ". $e->getMessage(). "<br>";
        echo $errMsg;	
    }
?>