<?php
session_start();

include("classes/connect.php");
include("classes/card.php");
include("classes/create_system.php");




// Check if system name is set in session
if (!isset($_SESSION['system_name'])) {
      // Redirect or handle case where session variable is not set
echo "yeah, there is a session set";
  } else{

      echo "the session is not set";
  }
  





?>