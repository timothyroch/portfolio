<?php
session_start();

include("classes/connect.php");
include("classes/login.php");

$email = "";
$password = "";


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  

  $login = new Login();
  $result = $login->evaluate($_POST);

  if($result != "")
  {

    echo "<div style='text-align:center;font-size:12px;color:white;background-color:grey;'>";
    echo "<br>The following errors occured:<br><br>";
    echo $result;
    echo "</div>";
  }else
  {

      header("Location: Add_System.php");
      die;

  }
 

  $email = $_POST['email'];
  $password = $_POST['password'];

  
}





?>
<html>

  <head>

<title>
  NLS | Log in
</title>

  </head>
  <style>
body {
  font-family: 'Roboto', sans-serif;
  background-color: black;
}
#bar{
  height: 95px;
  background-color: black;
  color: white;
  display: flex;
  margin-top: 0px;
}
#signup_button{
  background-color: black;
  font-size: 14px;

  flex: 1;
  text-decoration: none;
  color: white;
}
#bar2{
  background-color: white;
  width: 800px;
  margin: auto;
  margin-top: 50px;
  padding: 10px;
  padding-top: 50px;
  text-align: center;
  font-weight: bold;
  border-radius: 5px;
  height: auto;
}
#text{
  height: 40px;
  width: 300px;
  border-radius: 4px;
  border: solid 1px #ccc;
  padding: 4px;
  font-size: 14px;
}
#button{
  width: 300px;
  height: 40px;
  border-radius: 4px;
  font-weight: bold;
  border: none;
  background-color: black;
  color: white;
  border-radius: 5px;
}

  </style>

 
      <div id="bar">
      <div style=" font-size: 15px;  flex: 2; display: flex; justify-content: left; align-items: center; font-weight: bold; ">
            
            &nbspNumerical<br> &nbspLeitner<br> &nbspSystem
           
           </div> 
            

      </div>
      <div id="bar2">


        <form method="post">
Connect to your account:<br><br>

<input name="email" value="<?php echo $email ?>" type="text" id="text" placeholder="Email"><br><br>


<input name="password" value="<?php echo $password ?>" type="password" id="text" placeholder="Password"><br><br>

<input type="submit" id="button" value="Log in">
<br>

</form>
<div style="display: flex; justify-content: center; align-items: center; font-size: 11px;">Forgot your password? Contact numericalleitnersystem.gmail.com</div><br><br>
<div style="display: flex; justify-content: center; align-items: center; font-size: 11px;">
             
             Create an account:&nbsp&nbsp
             
            <div><a href="index.php" id="signup_button" style="background-color: white; color: black;">Signup</a></div>&nbsp
            
             </div>

      </div><br>

  </body>
</html>
