<?php
    $errMsg = "";
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        //執行sql指令並取得pdoStatement
        $sql = "SELECT t.tree_name, t.tree_status, t.tree_id, treehistory_img, f.farm_id
        from tree t join treehistory h on (t.tree_id = h.tree_id)
	                join farm f on (f.farm_id = t.farm_id)
                    where h.treehistory_date = (select max(h.treehistory_date)
                                                 from treehistory as treeh
                                                 where h.tree_id = treeh.tree_id)
        and tree_status!=2
        group by tree_id;";
        $products = $pdo->query($sql);
        $fruits = $products->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($fruits);
    } catch (Exception $e) {
        $pdo->rollBack();
        $errMsg .= "錯誤行號 : ". $e->getLine(). "<br>";
        $errMsg .= "錯誤原因 : ". $e->getMessage(). "<br>";
        echo $errMsg;	
    }
?>