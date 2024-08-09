<?php

include("classes/connect.php");

$systemName = isset($_GET['name']) ? $_GET['name'] : 'No system selected';
$systemId = isset($_GET['id']) ? $_GET['id'] : null;


if ($_SERVER['REQUEST_METHOD'] == 'POST' && isset($_POST['id']) && isset($_POST['new_name'])) {
    $new_name = $_POST['new_name'];

if ($systemId) {
    $DB = new Database();

    $query = "UPDATE system SET name = '$new_name' WHERE id = '$systemId'";
    $success = $DB->save($query);

    if ($success) {
        header("Location: view_system.php?name=" . urlencode($new_name) . "&id=" . urlencode($systemId));
        die();
    } else {
        echo "Error updating card levels.";
    }
} else {
    echo "Invalid system ID.";
}

} 

?>

<!DOCTYPE html>
<html>
<head>
    <title>Rename System</title>
    <style>
        body {
            font-family: 'Roboto', sans-serif;
            background-color: black;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
        }

        .container {
            background-color: white;
            padding: 20px;
            border-radius: 10px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
            width: 300px;
            text-align: center;

        }
        .container h1 {
            font-size: 24px;
            margin-bottom: 20px;
        }
        .container input[type="text"] {
            width: 80%;
            padding: 10px;
            margin-bottom: 20px;
            border: 1px solid #ccc;
            border-radius: 5px;
        }
        .container input[type="submit"] {
            background-color: white;
            color: black;
            padding: 3px;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            border: 1px solid black;
        }
        .container input[type="submit"]:hover {
            opacity: 80%;
        }
        .container a {
            display: block;
            margin-top: 20px;
            color: #333;
            text-decoration: none;
        }
    </style>
</head>
<body>



    <div class="container">
        <h1>Rename System</h1>
        
<a href="view_system.php?name=<?php echo urlencode($systemName); ?>&id=<?php echo urlencode($systemId); ?>" style=" padding: 3px; font-size: 20px; font-weight: bold; color: white; text-decoration: none; border-radius: 2px; border: 1px solid white; font-size: 11px; position: absolute; top: 2%; left: 2%;">Cancel</a>

        <form method="POST" action="rename_system.php?name=<?php echo urlencode($systemName); ?>&id=<?php echo urlencode($systemId); ?>">
            <input type="hidden" name="id" value="<?php echo htmlspecialchars($systemId); ?>">
            <input type="text" name="new_name" value="<?php echo htmlspecialchars($systemName); ?>">
            <input type="submit" value="Update System Name">
        </form>
    </div>
</body>
</html>
