const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const dino = {
  x: 50,
  y: canvas.height - 100,
  width: 50,
  height: 50,
  velocityY: 0,
  gravity: 1.5,
  jumpStrength: 30,
  grounded: false,
  emoji: '🦑 ' // Use emoji for the dinosaur
};

const ground = {
  x: 0,
  y: canvas.height - 50,
  width: canvas.width,
  height: 50
};

const obstacles = [];
let frame = 0;
let score = 0;
let gameOver = false;

// Background elements
const clouds = [];
function generateCloud() {
  const cloud = {
    x: canvas.width,
    y: Math.random() * canvas.height / 2,
    width: 100,
    height: 50,
    speed: Math.random() * 2 + 1,
  };
  clouds.push(cloud);
}

// Draw the dino emoji
function drawDino() {
  ctx.font = `${dino.height}px Arial`; // Set font size to match dino height
  ctx.fillText(dino.emoji, dino.x, dino.y + dino.height - 10); // Adjust the y position
}

function drawGround() {
  ctx.fillStyle = "#8B4513"; // Brown ground color
  ctx.fillRect(ground.x, ground.y, ground.width, ground.height);
}

function drawObstacles() {
  obstacles.forEach(obstacle => {
    ctx.fillStyle = "green"; // Cactus
    ctx.fillRect(obstacle.x, obstacle.y, obstacle.width, obstacle.height);
  });
}

function generateObstacle() {
  const size = Math.random() * 30 + 20; // More reasonable size
  const obstacle = {
    x: canvas.width,
    y: canvas.height - ground.height - size,
    width: size + 10, // Slightly larger obstacles but manageable
    height: size
  };
  obstacles.push(obstacle);
}

function handleObstacles() {
  obstacles.forEach((obstacle, index) => {
    obstacle.x -= 5;

    // Remove obstacles off the screen
    if (obstacle.x + obstacle.width < 0) {
      obstacles.splice(index, 1);
      score++;
    }

    // Collision detection
    if (
      dino.x < obstacle.x + obstacle.width &&
      dino.x + dino.width > obstacle.x &&
      dino.y < obstacle.y + obstacle.height &&
      dino.y + dino.height > obstacle.y
    ) {
      gameOver = true;
    }
  });
}

function handleClouds() {
  clouds.forEach((cloud, index) => {
    cloud.x -= cloud.speed;

    // Remove clouds off the screen
    if (cloud.x + cloud.width < 0) {
      clouds.splice(index, 1);
    }
  });
}

function drawClouds() {
  clouds.forEach(cloud => {
    ctx.fillStyle = "lightgray";
    ctx.fillRect(cloud.x, cloud.y, cloud.width, cloud.height);
  });
}

function jump() {
  if (dino.grounded) {
    dino.velocityY = -dino.jumpStrength;
    dino.grounded = false;
  }
}

function updateDino() {
  dino.velocityY += dino.gravity;
  dino.y += dino.velocityY;

  if (dino.y + dino.height >= canvas.height - ground.height) {
    dino.y = canvas.height - ground.height - dino.height;
    dino.grounded = true;
    dino.velocityY = 0;
  }
}

function updateGame() {
  if (gameOver) {
    ctx.fillStyle = "black";
    ctx.font = "30px Arial";
    ctx.fillText("Game Over! Press Space to Restart", canvas.width / 2 - 150, canvas.height / 2);
    return;
  }

  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw background elements (clouds)
  handleClouds();
  drawClouds();

  // Draw game elements
  drawGround();
  drawDino();
  drawObstacles();

  // Update elements
  updateDino();
  handleObstacles();

  // Increment frame and generate obstacles and clouds periodically
  frame++;
  if (frame % 100 === 0) {
    generateObstacle();
    if (Math.random() < 0.5) generateCloud(); // Randomly generate clouds
  }

  // Display score
  ctx.fillStyle = "black";
  ctx.font = "20px Arial";
  ctx.fillText("Score: " + score, 20, 30);

  requestAnimationFrame(updateGame);
}

window.addEventListener("keydown", (e) => {
  if (e.code === "Space" || e.code === "ArrowUp") {
    jump();
  }
  if (gameOver && e.code === "Space") {
    resetGame();
  }
});

function resetGame() {
  dino.y = canvas.height - 100;
  obstacles.length = 0;
  clouds.length = 0;
  frame = 0;
  score = 0;
  gameOver = false;
  updateGame();
}

updateGame();
