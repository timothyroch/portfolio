<?php

class Card 
{
    private $error = "";

    public function create_card($id, $data)
    {
        // Validate the input data
        $namecard = isset($data['namecard']) ? $data['namecard'] : '';
        $question = isset($data['question']) ? $data['question'] : '';
        $answer = isset($data['answer']) ? $data['answer'] : '';
        $level = isset($data['level']) ? $data['level'] : 3;  // Default to level 3 if not set
        
        // Ensure the level is always 3 at creation
        $level = 3;
        
        // Get the system ID from GET parameters or null if not set
        $systemId = isset($_GET['id']) ? $_GET['id'] : null;
        $id = $systemId;

        // Escape the input data to prevent SQL injection
        $DB = new Database();
        $conn = $DB->connect();

        $namecard = mysqli_real_escape_string($conn, $namecard);
        $question = mysqli_real_escape_string($conn, $question);
        $answer = mysqli_real_escape_string($conn, $answer);
        $level = mysqli_real_escape_string($conn, $level);
        $id = mysqli_real_escape_string($conn, $id);

        // SQL query to insert the new card
        $query = "INSERT INTO cards (id, namecard, question, answer, level) VALUES ('$id', '$namecard', '$question', '$answer', '$level')";

        // Save the query
        $DB->save($query);
    }
}
?>
