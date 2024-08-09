
<?php

include("classes/connect.php");
include("classes/signup.php");

$username = "";
$email =  "";


if($_SERVER['REQUEST_METHOD'] == 'POST'){
  

  $signup = new Signup();
  $result = $signup->evaluate($_POST);

  if($result != "")
  {

    echo "<div style='text-align:center;font-size:12px;color:white;background-color:grey;'>";
    echo "<br>The following errors occured:<br><br>";
    echo $result;
    echo "</div>";
  }else
  {

      header("Location: login.php");
      die;

  }
 
  $username = $_POST['username'];
  $email = $_POST['email'];


}





?>
<html>

  <head>

<title>
  NLS | Signup
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

  
 

      <div id="bar" >


           <div style=" font-size: 15px;  flex: 2; display: flex; justify-content: left; align-items: center; font-weight: bold; ">
            
           &nbspNumerical<br> &nbspLeitner<br> &nbspSystem
          
          </div> 
           
           <div style=" flex: 1; display: flex; justify-content: right; align-items: flex-end; font-size: 11px;">
            

          
           </div>


      </div>




      <div id="bar2">
Create your account:<br><br>

<form  method="post" action="index.php">


              <input value="<?php echo $username ?>" name="username" type="text" id="text" placeholder="Username"><br><br>
             
              <input value="<?php echo $email ?>" name="email" type="text" id="text" placeholder="Email"><br><br>

              <input name="password" type="text" id="text" placeholder="Password"><br><br>

              <input name="password2" type="text" id="text" placeholder="Retype Password"><br><br>

              <input type="submit" id="button" value="Sign up">
              <br><br>


</form>

            <div style="display: flex; justify-content: center; align-items: center; font-size: 11px;">
Already have an account:&nbsp&nbsp
           
          <div><a href="login.php" id="signup_button" style="background-color: white; color: black;">Login</a></div>
</div>
  </body>
</html>


