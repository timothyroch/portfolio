<?php
include("classes/connect.php");

$systemName = isset($_GET['name']) ? $_GET['name'] : 'No system selected';
$systemId = isset($_GET['id']) ? $_GET['id'] : null;

$DB = new Database();

$randomCard = null;
$currentLevel = null;

for ($level = 1; $level <= 3; $level++) {
    $query = "SELECT * FROM cards WHERE id = '$systemId' AND level = $level ORDER BY RAND() LIMIT 1";
    $randomCard = $DB->readSingle($query);
    if ($randomCard) {
        $currentLevel = $level;
        break;
    }
}

$queryCount = "SELECT level, COUNT(*) AS count FROM cards WHERE id = '$systemId' GROUP BY level";
$cardCounts = $DB->read($queryCount);

$levelCounts = ['1' => 0, '2' => 0, '3' => 0];

if ($cardCounts !== false) {
    foreach ($cardCounts as $count) {
        $levelCounts[$count['level']] = $count['count'];
    }
}
?>
<!DOCTYPE html>
<html>
<head>
    <title><?php echo htmlspecialchars($systemName); ?></title>
    <style>
        .card {
            width: 40%;
            margin-left: 30%;
            min-height: 400px;
            height: auto;
            padding: 10px;
            margin-top: -30px;
            position: relative;
            overflow: hidden;
            display: flex;
            justify-content: center;
            flex-direction: column;
            align-items: center;
            font-size: 20px;
            border-radius: 5px;
            background-color: white;
            color: black;
        }
        .card-level {
            position: absolute;
            top: 5px;
            right: 10px;
            padding: 5px;
            background-color: rgba(0, 0, 0, 0.5);
            color: white;
            border-radius: 5px;
            font-size: 12px;
        }
        body {
            font-family: 'Roboto', sans-serif;
            background-color: black;
            color: white;
        }
        button {
            width: 8%;
            margin-left: 46%;
            margin-top: 1.2%;
            color: black;
            background-color: white;
            border-radius: 1.5px;
            border: 1px solid black;
        }
        a {
            color: white;
            text-decoration: none;
        }
        .cardlevel {
            background-color: white;
            border: 1px solid black;
            color: black;
            font-size: 13px;
            padding: 2px;
            border-radius: 2px;
        }
    </style>
    <script>
        function fetchNewCard(systemId) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'fetch_card.php?id=' + systemId, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var card = JSON.parse(xhr.responseText);
                    if (card) {
                        document.getElementById('card-name').innerText = card.namecard;
                        document.getElementById('card-question').innerText = card.question;
                        document.getElementById('card-answer').innerText = card.answer;
                        document.getElementById('card-level').innerText = 'Level ' + card.level;
                        document.getElementById('level-up-link').href = "level_up_card.php?cardid=" + card.cardid + "&level=" + card.level + "&name=<?php echo urlencode($systemName); ?>&id=<?php echo urlencode($systemId); ?>";
                    } else {
                        document.getElementById('card-container').innerHTML = '<p>No more cards found in the system.</p>';
                    }
                }
            };
            xhr.send();
        }

        function updateLevelCounts(systemId) {
            var xhr = new XMLHttpRequest();
            xhr.open('GET', 'fetch_level_counts.php?id=' + systemId, true);
            xhr.onreadystatechange = function () {
                if (xhr.readyState == 4 && xhr.status == 200) {
                    var levelCounts = JSON.parse(xhr.responseText);
                    if (levelCounts) {
                        document.getElementById('level-counts').innerHTML = '<strong>Level Counts:</strong> Level 3: ' + levelCounts['3'] + ', Level 2: ' + levelCounts['2'] + ', Level 1: ' + levelCounts['1'];
                    }
                }
            };
            xhr.send();
        }
    </script>
</head>
<body>
    <div style="height: 50px; width: 100%; background-color: black; display: flex;">
        <div style="flex: 1; display: flex; justify-content: left; align-items: center;">
            <a href="Add_System.php?name=<?php echo urlencode($systemName); ?>&id=<?php echo urlencode($systemId); ?>" style="font-size: 13px;">Exit Game</a>
        </div>
        <div style="flex: 1; display: flex; justify-content: center; align-items: center; font-size: 25px; font-weight: bold;">
            <?php echo htmlspecialchars($systemName); ?>
        </div>
        <div style="flex: 1; display: flex; justify-content: right; align-items: center;">
            <a href="view_system.php?name=<?php echo urlencode($systemName); ?>&id=<?php echo urlencode($systemId); ?>" style="font-size: 13px;">Modify Cards</a>
        </div>
    </div>
    <div style="width: 100%; display: flex; justify-content: left; align-items: center; margin-top: 60px; font-size: 17px;">
        <div id="level-counts" style="font-size: 14px;"></div>
    </div>
    <div>
        <div id="card-container">
            <?php if ($randomCard): ?>
                <div class="card">
                    <span id="card-level" class="card-level">Level <?php echo $randomCard['level']; ?></span>
                    <h3 id="card-name"><?php echo htmlspecialchars($randomCard['namecard']); ?></h3>
                    <p><strong>Question:</strong> <span id="card-question"><?php echo htmlspecialchars($randomCard['question']); ?></span></p><br>
                    <details>
                        <summary>Answer</summary>
                        <p><span id="card-answer"><?php echo htmlspecialchars($randomCard['answer']); ?></span></p>
                    </details><br><br><br>
                    <a id="level-up-link" href="level_up_card.php?cardid=<?php echo htmlspecialchars($randomCard['cardid']); ?>&level=<?php echo htmlspecialchars($randomCard['level']); ?>&name=<?php echo urlencode($systemName); ?>&id=<?php echo urlencode($systemId); ?>" class="cardlevel">Level Up</a>
                </div>
            <?php else: ?>
                <div style="width: 20%; margin-top: 10%; margin-left: 40%; display: flex; align-items: center; justify-content: center;">
                    <p>No cards found in the system.</p>
                </div>
            <?php endif; ?>
        </div>
        <button onclick="fetchNewCard(<?php echo htmlspecialchars($systemId); ?>)" style="border-radius: 2px;">Next Card</button>
    </div>
    <script>
        document.getElementById('level-counts').innerHTML = '<strong>Cards in levels:</strong><br> Level 3: <?php echo $levelCounts['3']; ?><br> Level 2: <?php echo $levelCounts['2']; ?><br> Level 1: <?php echo $levelCounts['1']; ?>';
    </script>
</body>
</html>
