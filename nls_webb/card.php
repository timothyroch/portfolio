<?php
?>
<div id="post">
<div>

  <div style="height: 60px; width: 100%; display: flex; justify-content: center; align-items: center; background-color:#DCDCDC; border-radius: 3px; margin-top: 15px;">
  
  <div style="height: 80%; width: 60%; text-align: center; display: flex; justify-content: center; align-items: center; font-size: 18px; font-weight: bold; flex: 100;">
  
  <a href="view_system.php?name=<?php echo urlencode($system['name']); ?>&id=<?php echo $system['id']; ?>" style="text-decoration: none; color: black;">
  
  <?php echo htmlspecialchars($system['name']); ?>
  
  </a>
  
  
  </div>
  
  <div style="height: 80%; width: 40%;  display: flex; justify-content: right; align-items: center; text-decoration: none; color: black; flex: 40; font-size: 12px;">
  
  <a href="play.php?name=<?php echo urlencode($system['name']); ?>&id=<?php echo $system['id']; ?>" style="text-decoration: none; color: black;">Play</a> &nbsp&nbsp|&nbsp&nbsp <a href="view_system.php?name=<?php echo urlencode($system['name']); ?>&id=<?php echo $system['id']; ?>" style="text-decoration: none; color: black;">Modify</a> &nbsp&nbsp|&nbsp&nbsp <a href="verify_delete_system.php?name=<?php echo urlencode($system['name']); ?>&id=<?php echo $system['id']; ?>" style="text-decoration: none; color: black;">Remove</a>&nbsp
  
  
  </div>
  
  </div>
  
</div>
</div>
