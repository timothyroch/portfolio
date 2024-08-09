<?php
include("classes/connect.php");

$cardId = isset($_GET['cardid']) ? $_GET['cardid'] : null;
$level = isset($_GET['level']) ? $_GET['level'] : null;
$systemName = isset($_GET['name']) ? $_GET['name'] : 'No system selected';
$systemId = isset($_GET['id']) ? $_GET['id'] : null;


if (isset($cardId)) {
  $number = $cardId;
  
  // Delete system from database
  $query = "DELETE FROM cards WHERE cardid = '$number'";
  $DB = new Database();
  $success = $DB->save($query);


  if ($success) {
    header("Location: view_system.php?name=" . urlencode($systemName) . "&id=" . $systemId);

    die;
      echo "System deleted successfully.";
  } else {
      echo "Error deleting system.";
  }
} else {
  echo "System ID not provided.";
}




?>








