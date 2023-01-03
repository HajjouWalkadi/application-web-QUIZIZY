

<?php

require 'database.php';

class questions  extends Database{
   
    public function get(){
     
        $sql= "SELECT * FROM quiz";
        $stmt = $this->connectPDO()->prepare($sql);
        $stmt -> execute();
        $data = $stmt->fetchAll(PDO:: FETCH_ASSOC);
        
         echo json_encode($data);
    }


}

$question = new  questions();

$question->get();




?>
