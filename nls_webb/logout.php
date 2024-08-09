<?php

session_start();
if(isset($_SESSION['nls_db_web_userid']))
{
  $_SESSION['nls_db_web_userid'] = NULL;
  unset($_SESSION['nls_db_web_userid']);
}
header("Location: login.php");
die;