<?php
include("classes/connect.php");

$systemId = isset($_GET['id']) ? $_GET['id'] : null;

if ($systemId !== null) {
    $DB = new Database();

    // Query to count cards at each level
    $queryCount = "SELECT level, COUNT(*) AS count FROM cards WHERE id = '$systemId' GROUP BY level";
    $cardCounts = $DB->read($queryCount);

    // Initialize level counts
    $levelCounts = [
        '1' => 0,
        '2' => 0,
        '3' => 0
    ];

    // Populate level counts from database results
    foreach ($cardCounts as $count) {
        $levelCounts[$count['level']] = $count['count'];
    }

    // Return level counts as JSON response
    header('Content-Type: application/json');
    echo json_encode($levelCounts);
    exit;
}

// If systemId is invalid
echo json_encode(null);
?>
