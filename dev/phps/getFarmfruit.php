<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        //執行sql指令並取得pdoStatement
        $sql = "select t.tree_name, t.tree_status, treehistory_img
        from tree t join treehistory h on (t.tree_id = h.tree_id)
             join farm f on (f.farm_id = t.farm_id)
        where f.farm_id=1
        group by h.treehistory_date";
        $products = $pdo->query($sql);
        $fruits = $products->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($fruits);
    } catch (Exception $e) {
        $pdo->rollBack();
        $errMsg .= "錯誤行號 : ", $e->getLine(). "<br>";
        $errMsg .= "錯誤原因 : ", $e->getMessage(). "<br>";
        echo $errMsg;	
    }
?>