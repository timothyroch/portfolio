<?php
include("classes/connect.php");

$systemId = isset($_GET['id']) ? $_GET['id'] : null;

if ($systemId !== null) {
    $DB = new Database();

    // Fetch a random card from the system
    $query = "SELECT * FROM cards WHERE id = '$systemId' ORDER BY RAND() LIMIT 1";
    $randomCard = $DB->readSingle($query);

    if ($randomCard) {
        // Return card details as JSON response
        header('Content-Type: application/json');
        echo json_encode($randomCard);
        exit;
    }
}

// If no card found or systemId is invalid
echo json_encode(null);
?>
