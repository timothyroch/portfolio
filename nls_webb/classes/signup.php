<?php

class Signup{

private $error = "";
public function evaluate($data)
{

  foreach ($data as $key => $value){



    if(empty($value))
    {
     $this->error = $this->error . $key . " is empty!<br>";
    }

    if($key == "email")
    {

    if (!preg_match("/([\w\-]+\@[\w\-]+\.[\w\-]+)/", $value)) {

        $this->error = $this->error . "Invalid email address!<br>";
    }


  }


  if($key == "username")
  {

  if (is_numeric($value)) {

      $this->error = $this->error . "username can't be a number!<br>";
  }

  if (strstr($value, " ")) {

    $this->error = $this->error . "username can't have spaces!<br>";
}


}


  }


  if($this->error == "")
  {
//no error
$this->create_user($data);
  }else{
    return $this->error;

  }
}

public function create_user($data)
{

  $username = ucfirst($data['username']);
  $password = $data['password'];
  $email = $data['email'];

  //create these
  $url_address = strtolower($username) . "." ;
  

  $query = "insert into users (username, password, url_address, email) values ('$username', '$password', '$url_address', '$email')";

  echo $query;
 $DB = new Database();
 $DB->save($query);

}


}
?>