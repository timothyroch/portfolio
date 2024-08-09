<?php


class Database
{
    private $host = "sql308.infinityfree.com";
    private $username = "if0_36846086";  // Change to your database username
    private $password = "m4Yx0levlfR";  // Change to your database password
    private $db = "if0_36846086_nls_db_web";

    function connect()
    {
        $connection = mysqli_connect($this->host, $this->username, $this->password, $this->db);
        return $connection;
    }
    
    function read($query)
    {
        $conn = $this->connect();
        $result = mysqli_query($conn, $query);

        if (!$result) {
            return false;
        } else {
            $data = [];
            while ($row = mysqli_fetch_assoc($result)) {
                $data[] = $row;
            }
            return $data;
        }
    }
    
    function readSingle($query)
    {
        $conn = $this->connect();
        $result = mysqli_query($conn, $query);

        if (!$result) {
            return false;
        } else {
            return mysqli_fetch_assoc($result);
        }
    }
    
    function save($query)
    {
        $conn = $this->connect();
        $result = mysqli_query($conn, $query);

        if (!$result) {
            return false;
        } else {
            return true;
        }
    }
}
