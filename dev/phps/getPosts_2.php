<?php
    try{
        //引入連線工作的檔案
        require_once("./connectNGZ.php");

        //執行sql指令並取得pdoStatement
        $sql = "SELECT p.post_date, p.post_img, p.post_content,p.post_feedback, m.mem_img, m.mem_name, f.farm_name, f.farm_id
        from post p join member m on (p.mem_id = m.mem_id)
             join farm f on (p.farm_id = f.farm_id) order by p.post_feedback desc";
        $products = $pdo->query($sql);
        $prodRows = $products->fetchAll(PDO::FETCH_ASSOC);
        echo json_encode($prodRows);
    } catch (Exception $e) {
        echo "錯誤行號 : ", $e->getLine(), "<br>";
        echo "錯誤原因 : ", $e->getMessage(), "<br>";
        //echo "系統暫時不能正常運行，請稍後再試<br>";	
    }
?>
