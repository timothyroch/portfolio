<?php
include("classes/create_card.php");
include("classes/connect.php");

$systemName = isset($_GET['name']) ? $_GET['name'] : 'No system selected';
$systemId = isset($_GET['id']) ? $_GET['id'] : null;


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $card = new Card();
    $card->create_card($systemId, $_POST);
    header("Location: view_system.php?name=" . urlencode($systemName) . "&id=" . urlencode($systemId));
    die;
}

// Fetch all cards for the system
$DB = new Database();

$query = "SELECT * FROM cards WHERE id = '$systemId'";
$cards = $DB->read($query);


?>

<!DOCTYPE html>
<html>
<head>
    <title><?php echo htmlspecialchars($systemName); ?></title>
    <style>
        a:hover {
            opacity: 70%;
        }
        body {
  font-family: 'Roboto', sans-serif;
  background-color: black;
}
    </style>
</head>
<body>
    <div style="height: 80%; width: 50%; z-index: 1000; position: absolute; top:10%; right:25%; visibility: hidden;" id="ADD">
        <div style="height: 50px; width: 100%; background-color: black; font-size: 18px; font-weight: bold; display:flex; justify-content: center; align-items: center; color: white; border-radius: 5px 5px 0 0;">
            Create Your New Card
 
        </div>
        <div style="height: 90%; width: 100%; background-color: black; text-align: center; opacity: 120%; color: white; border-radius: 0 0 5px 5px;">
            <div style="height:25px; width: 25px; background-color: red; font-size: 25px; border: 1px bold black; color: white; font-weight: bold; display:flex; justify-content: center; align-items: center; position: absolute; top: 1%; right: 0%;">
            <button onclick="hideadd()" style="height: 100%; width: 100%; color: white; background-color: black; font-size: 25px; border: none; ">
                    x
                </button>
            </div>
            <br>
            <form method="post" action="view_system.php?name=<?php echo urlencode($systemName); ?>&id=<?php echo urlencode($systemId); ?>">
      
                Name: &nbsp;&nbsp;<input  type="text" placeholder="Type here..." name="namecard"> &nbsp;&nbsp;<br><br>
                Question:<br> <textarea name="question" placeholder="Type here..." style="height: 130px; width: 80%;"></textarea><br><br>
                Answer:<br> <textarea name="answer" placeholder="Type here..." style="height: 130px; width: 80%;"></textarea><br><br>
                <input type="submit" value="Create" style="border: 1px solid white; color: white; background-color: black;padding: 2px;">
   
            </form>
        </div>
    </div>

    <div style="" id="page">
        <div id="myDiv" style="height: 100%; width: 180px; background-color: white; position: absolute; left: -50%; border: 2px solid #DCDCDC; border-radius: 0 5px 0 5px">
            <button onclick="hidebar()" style="height: 25px; width: 45px; position: absolute; top: 1%; right: 2%; color: black; border: none; background-color: white; font-weight: bold; font-size: 20px;">x</button>
            <br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="Add_System.php" style="text-decoration: none; color: black; font-size: 18px; font-weight: bold;">Home</a>
            <br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<button onclick="showadd()" style="text-decoration: none; color: black; font-size: 18px; font-weight: bold; background-color: #DCDCDC; border: none; margin-left: -6px; font-size: 17px; background-color: white;">Add Card</button>
            <br><br>
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="play.php?name=<?php echo $systemName; ?>&id=<?php echo $systemId ?>" style="text-decoration: none; color: black; font-size: 18px; font-weight: bold;">Play</a>
            <br><br>
        </div>

        <div style="height: 50px; width: 100%; display: flex; background-color: black;">
            <div style="flex: 1; display: flex; align-items: center;">
                <button onclick="showbar()" style="height:28px; width: 28px; border-radius: 50%; border:none; background-color: black; color: white" id="menu">Menu</button>
            </div>
            <div style="flex: 2; display: flex; justify-content: center; align-items: center; font-size: 25px; font-weight: bold; color: white;">
            <?php echo htmlspecialchars($systemName); ?>&nbsp&nbsp&nbsp<a href="rename_system.php?name=<?php echo $systemName; ?>&id=<?php echo $systemId ?>" style="font-size: 12px; color: white; background-color: black;">Rename</a>
            </div>
            <div style="flex: 1; display: flex; align-items: center; justify-content: right;">
                <button onclick="finish()" id="finish" style="color: white; text-decoration: none; border:none;   visibility: hidden; font-size: 13px; background-color: black;">Finish</button>
                <button onclick="modify()" id="modify" style="color: white; text-decoration: none; border: none;  margin-right: 20px; visibility: visible; font-size: 13px; background-color: black;">Modify</button>




                <a href="refresh.php?name=<?php echo $systemName; ?>&id=<?php echo $systemId ?>" style="color: white; text-decoration: none; background-color: black; margin-right: 20px; font-size: 13px;">Refresh Cards</a>




            </div>
        </div>

        <div style="width: 100%; min-height: 520px; height: auto;  margin-top: 10px; display: flex; justify-content: space-around; margin-left: -10px;">














        
            <div style="width: 300px; ">
                <div style="height: 45px; width: 100%; display: flex; justify-content: center; align-items: center; background-color: white; border-bottom: 2px solid black; padding: 10px; color: black;border-radius: 5px 5px 0 0;">Level 3</div>
                <div style="height: 450px; background-color: white; width: 100%;  padding: 10px; display: flex; flex-direction: column; align-items: center;overflow-y: auto; border-radius: 0 0 5px 5px;">
                <?php
                if (is_array($cards) && !empty($cards)) {
                    foreach ($cards as $card) {
                        if ($card['level'] == 3) {
                            // Display each card in Level 3 (modify as needed)
                            include("card_Add_Card.php");
                        }
                    }
                } else {
                    echo "";
                }
                ?>
                </div>
            </div>
            <div style="width: 300px;">
                <div style="height: 45px; width: 100%; display: flex; justify-content: center; align-items: center; background-color: white; border-bottom: 2px solid black;padding-bottom: 10px; padding: 10px; color: black; border-radius: 5px 5px 0 0;">Level 2</div>
                <div style="height: 450px;  background-color: white; width: 100%; padding-bottom: 10px; padding: 10px; display: flex;  flex-direction: column; align-items: center; overflow-y: auto; border-radius: 0 0 5px 5px;">
                <?php
                if (is_array($cards) && !empty($cards)) {
                    foreach ($cards as $card) {
                        if ($card['level'] == 2) {
                            // Display each card in Level 2 (modify as needed)
                            include("card_Add_Card.php");
                        }
                    }
                } else {
                    echo "";
                }
                ?>
                </div>
            </div>
            <div style="width: 300px;">
                <div style="height: 45px; width: 100%; display: flex; justify-content: center; align-items: center; background-color: white; border-bottom: 2px solid black; padding-bottom: 10px; padding: 10px; color: black; border-radius: 5px 5px 0 0;">Level 1</div>
                <div style="height: 450px;  background-color: white; width: 100%; padding-bottom: 10px; padding: 10px; display: flex;  flex-direction: column; align-items: center; overflow-y: auto; border-radius: 0 0 5px 5px;">
                <?php
                if (is_array($cards) && !empty($cards)) {
                    foreach ($cards as $card) {
                        if ($card['level'] == 1) {
                            // Display each card in Level 1 (modify as needed)
                            include("card_Add_Card.php");
                        }
                    }
                } else {
                    echo "";
                }
                ?>
                </div>
            </div>
            <div style="width: 300px;">
                <div style="height: 45px; width: 100%; display: flex; justify-content: center; align-items: center; background-color: white; border-bottom: 2px solid black; padding-bottom: 10px; padding: 10px; color: black; border-radius: 5px 5px 0 0;">Mastered</div>
                <div style="height: 450px; background-color: white; width: 100%;  padding-bottom: 10px; padding: 10px; display: flex; flex-direction: column; align-items: center; overflow-y: auto; border-radius: 0 0 5px 5px;">
                <?php
                if (is_array($cards) && !empty($cards)) {
                    foreach ($cards as $card) {
                        if ($card['level'] == 0) {
                            // Display each card in Mastered (modify as needed)
                            include("card_Add_Card.php");
                        }
                    }
                } else {
                    echo "";
                }
                ?>
                </div>
            </div>









            
        </div>
    </div>

    <script>
        function showbar() {
            var div = document.getElementById('myDiv');
            div.style.left = '0%';
        }

        function hidebar() {
            var div = document.getElementById('myDiv');
            div.style.left = '-50%';
        }

        function showadd() {
            var div1 = document.getElementById('myDiv');
            div1.style.left = '-50%';

            var div2 = document.getElementById('page');
            div2.style.opacity = '10%';

            var div3 = document.getElementById('ADD');
            div3.style.visibility = 'visible';
        }

        function hideadd() {
            var div1 = document.getElementById('myDiv');
            div1.style.left = '-50%';

            var div2 = document.getElementById('page');
            div2.style.opacity = '100%';

            var div3 = document.getElementById('ADD');
            div3.style.visibility = 'hidden';
        }
        
        function modify() {
            var finish = document.getElementById('finish');
            var modify = document.getElementById('modify');
            finish.style.visibility = 'visible';
            modify.style.visibility = 'hidden';
            var deletecards = document.getElementsByClassName('deletecard');
            var hidelevel = document.getElementsByClassName('cardlevel');
            for (var i = 0; i < deletecards.length; i++) {
                deletecards[i].style.visibility = 'visible';
                deletecards[i].style.float = 'right';
            }
            for (var i = 0; i < hidelevel.length; i++) {
                hidelevel[i].style.visibility = 'hidden';
            }
        }

        function finish() {
            var finish = document.getElementById('finish');
            var modify = document.getElementById('modify');
            finish.style.visibility = 'hidden';
            modify.style.visibility = 'visible';
            var deletecards = document.getElementsByClassName('deletecard');
            var hidelevel = document.getElementsByClassName('cardlevel');
            for (var i = 0; i < deletecards.length; i++) {
                deletecards[i].style.visibility = 'hidden';
                deletecards[i].style.float = '';
            }
            for (var i = 0; i < hidelevel.length; i++) {
                hidelevel[i].style.visibility = 'visible';
            }
        }
    </script>
</body>
</html>
