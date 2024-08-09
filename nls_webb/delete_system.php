<?php
include("classes/connect.php");
$systemName = isset($_GET['name']) ? $_GET['name'] : 'No system selected';
$systemId = isset($_GET['id']) ? $_GET['id'] : null;
$systemNum = isset($_GET['number']) ? $_GET['number'] : null;

if (isset($systemId)) {
    $number = $systemId;
    
    // Delete system from database
    $query = "DELETE FROM system WHERE id = '$number'";
    $DB = new Database();
    $success = $DB->save($query);

    if ($success) {
      header("Location: Add_System.php");
      die;
        echo "System deleted successfully.";
    } else {
        echo "Error deleting system.";
    }
} else {
    echo "System ID not provided.";
}





?>
