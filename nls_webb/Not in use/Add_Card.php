<?php
session_start();

include("classes/connect.php");
include("classes/card.php");
include("classes/create_system.php");

$systemObj = new SystemCard();
$data = $_SESSION['system_name'];
$systems = $systemObj->get_system($data);


// Check if system name is set in session
if (isset($_SESSION['system_name'])) {

    echo "Session in Add_Card.php: " . $_SESSION['system_name']; // Debugging line

;
  } else{

      echo "the session is not set";
  }



?>



<header>

<title>System Name</title>
<style>
        a:hover{
            opacity: 70%;
        }
    </style>
</header>



<body>



<?php echo $data?>



<div style="height: 80%; width: 50%; z-index: 1000; position: absolute; top:10%; right:25%; visibility: hidden;" id="ADD">


<div style="height: 50px; width: 100%; background-color: yellow; font-size: 18px; font-weight: bold; display:flex; justify-content: center; align-items: center;">

Create Your New Card

</div>

<div style="height: 90%; width: 100%; background-color: #DCDCDC; text-align: center; opacity: 120%;">



<div style="height:25px; width: 25px; background-color: red; font-size: 25px; border: 1px bold black; color: white; font-weight: bold; display:flex; justify-content: center; align-items: center; position: absolute; top: 50px; right: 0%;">
  
<button onclick="hideadd()" style="height: 100%; width: 100%; color: white; background-color: red; font-size: 17px;">
x
      </button>

</div>


      <br>
Name: &nbsp;&nbsp;<input type="search" placeholder="Type here..."> &nbsp;&nbsp;<br><br>

Question:<br> <textarea placeholder="Type here..." style="height: 150px; width: 600px;"></textarea><br><br>

Answer:<br> <textarea placeholder="Type here..." style="height: 150px; width: 600px;"></textarea><br><br>





<div style="height: 25px; width: 52px; background-color: green; color: white; display:flex; justify-content: center; align-items: center; position: absolute; bottom: 2%; left: 46.2%;">
  
<button onclick="hideadd()" style="height: 100%; width: 100%; background-color: green; border: none; color: white;">
Create
      </button>

</div>


      

      </div>
</div>






<!--start of page div-->
<div style="" id="page">

<!--bar that will be hidden-->
<div id="myDiv" style="height: 95%; width: 180px; background-color: #DCDCDC; position: absolute; left: -50%; border: 2px solid black;">

<button onclick="hidebar()" style="height: 25px; width: 45px; position: absolute; top: 1%; right: 2%;"><--</button>

<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Add_System.php" style="text-decoration: none; color: black; font-size: 18px; font: weight: bold;">Home</a>
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick="showadd()" style="text-decoration: none;color: black; font-size: 18px; font: weight: bold; background-color: #DCDCDC; border: none; margin-left: -6px; font-size: 17px;">Add Card</button>
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Add_Card.php" style="text-decoration: none;color: black; font-size: 18px; font: weight: bold;">Continue To Play</a>

<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Add_Card.php" style="text-decoration: none;color: black; font-size: 18px; font: weight: bold;">Start a game</a>

</div>


<!--header-->
<div style="height: 50px; width: 100%; display: flex; background-color: yellow;">


<div style="flex: 1; display: flex; align-items: center;" >
  
<button onclick="showbar()" style="height:28px; width: 28px; border-radius: 50%; border: 1px solid black; background-color: white; " id="menu"> |||</button>

</div>


<div style="flex: 2; display: flex; justify-content: center; align-items: center; font-size: 20px; font-weight: bold;">
  
Name of system

</div>


<div style="flex: 1; display: flex; align-items: center;">
  


</div>



</div>



<div style="width: 100%; min-height: 90%; height: auto; margin-top: 10px; display: flex; justify-content: space-between;">




<div style="width: 300px;">

<div style="height: 45px; width: 100%; display: flex; justify-content: center; align-items: center; background-color: yellow; border: 2px solid black;"> Level 3</div>
<div style="min-height: 90%; height: auto; background-color: #F8F8FF; width: 100%; border: 2px solid black; border-top: none;"></div>

</div>


<div style="width: 300px;">

<div style="height: 45px; width: 100%; display: flex; justify-content: center; align-items: center; background-color: yellow; border: 2px solid black;">Level 2</div>
<div style="min-height: 90%; height: auto; background-color: #F8F8FF; width: 100%; border: 2px solid black; border-top: none;"></div>

</div>


<div style="width: 300px;">

<div style="height: 45px; width: 100%; display: flex; justify-content: center; align-items: center; background-color: yellow; border: 2px solid black;">Level 1</div>
<div style="min-height: 90%; height: auto; background-color: #F8F8FF; width: 100%; border: 2px solid black; border-top: none;"></div>

</div>


<div style="width: 300px;">

<div style="height: 45px; width: 100%; display: flex; justify-content: center; align-items: center; background-color: yellow; border: 2px solid black;">Mastered</div>
<div style="min-height: 90%; height: auto; background-color: #F8F8FF; width: 100%; min-height: 90%; height: auto; background-color: #DCDCDC; width: 100%; border: 2px solid black; border-top: none;"></div>

</div>



</div>




<!--end of page div-->
      </div>





<script>

function showbar(){

var div = document.getElementById('myDiv');
div.style.left = '0%';

}

function hidebar(){

var div = document.getElementById('myDiv');
div.style.left = '-50%';

}

function showadd(){

var div1 = document.getElementById('myDiv');
div1.style.left = '-50%';

var div2 = document.getElementById('page');
div2.style.opacity = '10%';

var div3 = document.getElementById('ADD');
div3.style.visibility = 'visible';

var div4 = document.getElementById('menu');
//div4.onclick = '';

}

function hideadd(){

  var div1 = document.getElementById('myDiv');
div1.style.left = '-50%';

var div2 = document.getElementById('page');
div2.style.opacity = '100%';

var div3 = document.getElementById('ADD');
div3.style.visibility = 'hidden';



}


</script>

</body>