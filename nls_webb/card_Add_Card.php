<?php
if (isset($card)) {
?>
    <br>
    <div id="post" style="height: auto; width: 95%; background-color:#DCDCDC; padding: 5px; display: flex; flex-direction: column; justify-content: space-between; border-radius: 5px;">
        <div>
            <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <strong>Name:</strong> <?php echo htmlspecialchars($card['namecard']); ?>
            </div>
            <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <strong>Question:</strong> <?php echo htmlspecialchars($card['question']); ?>
            </div>
            <div style="overflow: hidden; text-overflow: ellipsis; white-space: nowrap;">
                <strong>Answer:</strong> <?php echo htmlspecialchars($card['answer']); ?>
            </div>
        </div>
        <div style="display: flex; justify-content: flex-end; margin-top: 5px;">
            <a href="delete_card.php?cardid=<?php echo $card['cardid']; ?>&level=<?php echo $card['level']; ?>&name=<?php echo $systemName; ?>&id=<?php echo $systemId ?>" class="deletecard" style="text-decoration: none; border: 1px solid black; color: white; background-color: #8B0000; visibility: hidden; margin-right: 10px; font-size: 12px;border-radius: 1px;">Delete</a>
            <a href="level_down.php?cardid=<?php echo $card['cardid']; ?>&level=<?php echo $card['level']; ?>&name=<?php echo $systemName; ?>&id=<?php echo $systemId ?>" class="cardlevel" style="text-decoration: none; color: black; background-color:#DCDCDC; visibility: visible; margin-right: 5px;font-size: 11px;">level down</a>&nbsp&nbsp
            <a href="level_up.php?cardid=<?php echo $card['cardid']; ?>&level=<?php echo $card['level']; ?>&name=<?php echo $systemName; ?>&id=<?php echo $systemId ?>" class="cardlevel" style="text-decoration: none; color: black; background-color: #DCDCDC; visibility: visible; font-size: 11px;">level up</a>

        </div>
    </div>
    
    <script></script>
<?php
}
?>
