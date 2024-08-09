<?php

class SystemCard {
    public function get_system($userid) {
        $DB = new Database();
        $conn = $DB->connect();

        $userid = mysqli_real_escape_string($conn, $userid);

        // Fetch systems for the given user
        $query = "SELECT * FROM system WHERE userid = '$userid'";
        $result = $DB->read($query);

        return $result; // Return fetched systems
    }
}
