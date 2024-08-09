<?php
include("classes/connect.php");

$cardId = isset($_GET['cardid']) ? $_GET['cardid'] : null;
$level = isset($_GET['level']) ? $_GET['level'] : null;
$systemName = isset($_GET['name']) ? $_GET['name'] : 'No system selected';
$systemId = isset($_GET['id']) ? $_GET['id'] : null;

if ($cardId !== null && $level !== null && $level > 0) {
    $DB = new Database();
    $newLevel = $level - 1;

    // Update the level of the specific card
    $query = "UPDATE cards SET level = '$newLevel' WHERE cardid = '$cardId'";
    $success = $DB->save($query);

    header("Location: play.php?name=" . urlencode($systemName) . "&id=" . $systemId);
    die(); 
}
?>
