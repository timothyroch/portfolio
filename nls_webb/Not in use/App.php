<?php
// Enable error reporting
ini_set('display_errors', 1);
error_reporting(E_ALL);

$Card = 'card.php';
?>

<!DOCTYPE html>
<html>
<head>
    <title>NLS | Leitner System</title>
    <style>
        a:hover{
            opacity: 70%;
        }
    </style>
</head>
<body>
    <div style="height: 100px; width: 100%; background-color: blue; font-size: 65px; text-align: center; font-weight: bold; display: flex; justify-content: center; align-items: center;">
        Numerical Leitner System
    </div>

    <div style="height: 300px; width: 80%; margin-top: 60px; margin-left: 135px;">
        <div style="background-color: yellow; height: 40px; opacity: 90%; text-align: center; font-size: 30px; display: flex; justify-content: center; align-items: center;">
            Your Systems
        </div>
        <div style="background-color: #DCDCDC; height: auto; min-height: 260px;">
            <?php include $Card; ?>
        </div>
    </div>

    <a href="Add_system.php" style="text-decoration: none; color: black;">
        <div style="height: 45px; background-color: yellow; margin-top: 30px; width: 200px; opacity: 90%; margin-left: 600px; text-align: center; padding-top: 25px;">
            Add a system
        </div>
    </a>
</body>
</html>
