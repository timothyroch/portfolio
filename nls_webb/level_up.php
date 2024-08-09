<?php
include("classes/connect.php");

$cardId = isset($_GET['cardid']) ? $_GET['cardid'] : null;
$level = isset($_GET['level']) ? $_GET['level'] : null;
$systemName = isset($_GET['name']) ? $_GET['name'] : 'No system selected';
$systemId = isset($_GET['id']) ? $_GET['id'] : null;

if ($cardId !== null && $level !== null && $level > 0) {
    $lev = $level - 1;

    // Update the card's level in the database
    $query = "UPDATE cards SET level = '$lev' WHERE cardid = '$cardId'";
    $DB = new Database();
    $success = $DB->save($query);



      
   
}
header("Location: view_system.php?name=" . urlencode($systemName) . "&id=" . $systemId);
die();
?>
