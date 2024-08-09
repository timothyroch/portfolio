<?php

class Create
{
    private $error = "";

    public function create_system($data)
    {
        // Validate the input data
        $name = isset($data['name']) ? $data['name'] : '';
        
        if (empty($name)) {
            $this->error = "Name cannot be empty.";
            echo $this->error;
            return false;
        }

        if (!isset($_SESSION['nls_db_web_userid'])) {
            $this->error = "User is not logged in.";
            echo $this->error;
            return false;
        }
        
        $userid = $_SESSION['nls_db_web_userid'];
        
        // Escape the input data to prevent SQL injection
        $DB = new Database();
        $conn = $DB->connect();

        $name = mysqli_real_escape_string($conn, $name);
        $userid = mysqli_real_escape_string($conn, $userid);

        // SQL query to insert the new system
        $query = "INSERT INTO system (userid, name) VALUES ('$userid', '$name')";

        // Save the query
        $result = $DB->save($query);
        
        if ($result) {
            echo "System created successfully.";
            return true;
        } else {
            $this->error = "Error creating system. Database error: " . mysqli_error($conn);
            echo $this->error;
            return false;
        }
    }
}
?>













