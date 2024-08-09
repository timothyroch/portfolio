<?php

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

<!--bar that will be hidden-->
<div id="myDiv" style="height: 95%; width: 180px; background-color: #DCDCDC; position: absolute; left: -50%; border: 2px solid black;">

<button onclick="hidebar()" style="height: 25px; width: 45px; position: absolute; top: 1%; right: 2%;"><--</button>

<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Add_System.php" style="text-decoration: none; color: black; font-size: 18px; font: weight: bold;">Home</a>
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Add_Card.php" style="text-decoration: none;color: black; font-size: 18px; font: weight: bold;">Add Card</a>
<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Add_Card.php" style="text-decoration: none;color: black; font-size: 18px; font: weight: bold;">Continue To Play</a>

<br>
<br>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Add_Card.php" style="text-decoration: none;color: black; font-size: 18px; font: weight: bold;">Start a game</a>

</div>


<!--header-->
<div style="height: 50px; width: 100%; display: flex; background-color: blue;">


<div style="flex: 1; display: flex; align-items: center;">
  
<button onclick="showbar()" style="height:28px; width: 28px; border-radius: 50%; border: 1px solid black; background-color: white; "> |||</button>

</div>


<div style="flex: 2; display: flex; justify-content: center; align-items: center; font-size: 20px; font-weight: bold;">
  
Name of System 

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

<script>

function showbar(){

var div = document.getElementById('myDiv');
div.style.left = '0%';

}

function hidebar(){

var div = document.getElementById('myDiv');
div.style.left = '-50%';

}



</script>

</body>