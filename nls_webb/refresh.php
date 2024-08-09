<?php
include("classes/connect.php");

$systemName = isset($_GET['name']) ? $_GET['name'] : 'No system selected';
$systemId = isset($_GET['id']) ? $_GET['id'] : null;

if ($systemId) {
    $DB = new Database();
    $lev = 3;

    // Update the level of all cards associated with the given system ID to 3
    $query = "UPDATE cards SET level = '$lev' WHERE id = '$systemId'";
    $success = $DB->save($query);

    if ($success) {
        header("Location: view_system.php?name=" . urlencode($systemName) . "&id=" . urlencode($systemId));
        die();
    } else {
        echo "Error updating card levels.";
    }
} else {
    echo "Invalid system ID.";
}
?>
