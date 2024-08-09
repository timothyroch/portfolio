<?php

$systemName = isset($_GET['name']) ? $_GET['name'] : 'No system selected';
$systemId = isset($_GET['id']) ? $_GET['id'] : null;
$systemNum = isset($_GET['number']) ? $_GET['number'] : null;

?>
<!DOCTYPE html>
<html>
<head><title>Remove System</title>
<style>

body {
  font-family: 'Roboto', sans-serif;
  background-color: black;
  color: white;
}
</style>

</head>

<body>


<div style="text-align: center; margin-top: 280px; font-size: 25px; font-weight: bold; color: white;">
Are you sure you want to delete: <?php echo htmlspecialchars($systemName); ?> ?<br>

<a href="Add_System.php" style="text-decoration: none; color: white;">Cancel</a> | <a href="delete_system.php?name=<?php  $systemName?>&id=<?php echo $systemId ?>&number=<?php echo $systemNum ?>" style="text-decoration: none; color: white;">Remove</a>

</div>

</body>
</html>