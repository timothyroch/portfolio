const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const scoreBoard = document.getElementById('scoreBoard');
const gameOverScreen = document.getElementById('gameOverScreen');
const finalScore = document.getElementById('finalScore');

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let direction = { x: 0, y: 0 };
let food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
let powerUps = [];
let obstacles = [];
let movingObstacles = [];
let score = 0;
let speed = 100;
let gameRunning = false;
let level = 1;
let paused = false;

// Load sound effects and background music
const eatSound = new Audio('eat.mp3');
const gameOverSound = new Audio('gameover.mp3');
const backgroundMusic = new Audio('background.mp3');

// Configure background music
backgroundMusic.loop = true;
backgroundMusic.volume = 0.2; // Adjust volume as needed

function generateObstacles() {
    obstacles = [];
    const obstacleCount = level * 2; // Increase obstacle count as the level increases
    for (let i = 0; i < obstacleCount; i++) {
        let obstacle = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
        // Ensure obstacle is not placed on snake or food
        while (snake.some(segment => segment.x === obstacle.x && segment.y === obstacle.y) ||
               (food.x === obstacle.x && food.y === obstacle.y)) {
            obstacle.x = Math.floor(Math.random() * tileCount);
            obstacle.y = Math.floor(Math.random() * tileCount);
        }
        obstacles.push(obstacle);
    }
}

function generatePowerUps() {
    powerUps = [];
    const powerUpTypes = ['speed', 'length', 'score'];
    const powerUpCount = Math.max(1, level); // Increase power-up count as the level increases

    for (let i = 0; i < powerUpCount; i++) {
        let powerUp = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount),
            type: powerUpTypes[Math.floor(Math.random() * powerUpTypes.length)]
        };
        // Ensure power-up is not placed on snake, food, or obstacles
        while (snake.some(segment => segment.x === powerUp.x && segment.y === powerUp.y) ||
               (food.x === powerUp.x && food.y === powerUp.y) ||
               obstacles.some(obstacle => obstacle.x === powerUp.x && obstacle.y === powerUp.y)) {
            powerUp.x = Math.floor(Math.random() * tileCount);
            powerUp.y = Math.floor(Math.random() * tileCount);
        }
        powerUps.push(powerUp);
    }
}

function generateMovingObstacles() {
    movingObstacles = [];
    const movingObstacleCount = Math.max(1, level); // Increase moving obstacle count as the level increases

    for (let i = 0; i < movingObstacleCount; i++) {
        let movingObstacle = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount),
            direction: Math.floor(Math.random() * 4), // Random direction (0: up, 1: right, 2: down, 3: left)
            speed: 1
        };
        // Ensure moving obstacle is not placed on snake, food, or static obstacles
        while (snake.some(segment => segment.x === movingObstacle.x && segment.y === movingObstacle.y) ||
               (food.x === movingObstacle.x && food.y === movingObstacle.y) ||
               obstacles.some(obstacle => obstacle.x === movingObstacle.x && obstacle.y === movingObstacle.y)) {
            movingObstacle.x = Math.floor(Math.random() * tileCount);
            movingObstacle.y = Math.floor(Math.random() * tileCount);
        }
        movingObstacles.push(movingObstacle);
    }
}

function draw() {
    // Draw grid background
    ctx.fillStyle = '#333';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = '#444';
    for (let i = 0; i < tileCount; i++) {
        ctx.beginPath();
        ctx.moveTo(i * gridSize, 0);
        ctx.lineTo(i * gridSize, canvas.height);
        ctx.moveTo(0, i * gridSize);
        ctx.lineTo(canvas.width, i * gridSize);
        ctx.stroke();
    }

    // Draw food
    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    // Draw obstacles
    ctx.fillStyle = 'grey';
    for (let obstacle of obstacles) {
        ctx.fillRect(obstacle.x * gridSize, obstacle.y * gridSize, gridSize, gridSize);
    }

    // Draw moving obstacles
    ctx.fillStyle = 'blue';
    for (let movingObstacle of movingObstacles) {
        ctx.fillRect(movingObstacle.x * gridSize, movingObstacle.y * gridSize, gridSize, gridSize);
    }

    // Draw power-ups
    ctx.fillStyle = 'yellow';
    for (let powerUp of powerUps) {
        ctx.fillRect(powerUp.x * gridSize, powerUp.y * gridSize, gridSize, gridSize);
    }

    // Draw snake
    ctx.fillStyle = 'lime';
    for (let segment of snake) {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    }

    // Move snake
    const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    // Check if the snake eats the food
    if (newHead.x === food.x && newHead.y === food.y) {
        score++;
        eatSound.play();
        speed = Math.max(50, speed - 5); // Increase speed, minimum delay is 50ms
        food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
        
        // Advance level every 5 points
        if (score % 5 === 0) {
            level++;
            generateObstacles();
            generatePowerUps();
            generateMovingObstacles();
        }
    } else {
        snake.pop(); // Remove last segment if no food is eaten
    }

    // Check for collisions with walls, itself, obstacles, or moving obstacles
    if (
        newHead.x < 0 || newHead.x >= tileCount || 
        newHead.y < 0 || newHead.y >= tileCount || 
        snake.some(segment => segment.x === newHead.x && segment.y === newHead.y) ||
        obstacles.some(obstacle => obstacle.x === newHead.x && obstacle.y === newHead.y) ||
        movingObstacles.some(movingObstacle => movingObstacle.x === newHead.x && movingObstacle.y === newHead.y)
    ) {
        gameOverSound.play();
        gameOver();
        return;
    }

    snake.unshift(newHead); // Add new head to the front of the snake

    // Update score display
    scoreBoard.innerText = `Score: ${score} | Level: ${level}`;
}

function moveMovingObstacles() {
    for (let movingObstacle of movingObstacles) {
        switch (movingObstacle.direction) {
            case 0: movingObstacle.y -= movingObstacle.speed; break; // Up
            case 1: movingObstacle.x += movingObstacle.speed; break; // Right
            case 2: movingObstacle.y += movingObstacle.speed; break; // Down
            case 3: movingObstacle.x -= movingObstacle.speed; break; // Left
        }

        // Wrap around if out of bounds
        if (movingObstacle.x < 0) movingObstacle.x = tileCount - 1;
        if (movingObstacle.x >= tileCount) movingObstacle.x = 0;
        if (movingObstacle.y < 0) movingObstacle.y = tileCount - 1;
        if (movingObstacle.y >= tileCount) movingObstacle.y = 0;
    }
}

function handlePowerUps() {
    for (let i = powerUps.length - 1; i >= 0; i--) {
        if (snake[0].x === powerUps[i].x && snake[0].y === powerUps[i].y) {
            const powerUp = powerUps.splice(i, 1)[0];
            if (powerUp.type === 'speed') {
                speed = Math.max(30, speed - 10); // Increase speed
            } else if (powerUp.type === 'length') {
                snake.push(snake[snake.length - 1]); // Add segment
            } else if (powerUp.type === 'score') {
                score += 10; // Increase score
            }
        }
    }
}

function gameOver() {
    gameRunning = false;
    backgroundMusic.pause(); // Stop background music
    finalScore.innerText = score;
    gameOverScreen.style.display = 'block';
}

function resetGame() {
    snake = [{ x: Math.floor(tileCount / 2), y: Math.floor(tileCount / 2) }];
    direction = { x: 0, y: 0 }; // Reset direction to stop movement
    food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };
    powerUps = [];
    obstacles = [];
    movingObstacles = [];
    score = 0;
    speed = 100;
    level = 1;
    generateObstacles();
    generatePowerUps();
    generateMovingObstacles();
    gameOverScreen.style.display = 'none';
    scoreBoard.innerText = `Score: ${score} | Level: ${level}`;
    gameRunning = true;
    backgroundMusic.play(); // Start background music
}

function changeDirection(event) {
    if (!gameRunning) return; // Ignore direction change if game is not running
    if (paused && event.key !== "p") return; // Ignore other keys when paused

    const keyMap = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        p: 'pause' // Pause/resume key
    };

    const newDirection = keyMap[event.key];
    if (newDirection === 'pause') {
        togglePause();
    } else if (newDirection) {
        // Prevent the snake from reversing
        if ((newDirection.x !== -direction.x || snake.length === 1) &&
            (newDirection.y !== -direction.y || snake.length === 1)) {
            direction = newDirection;
        }
    }
}

function togglePause() {
    paused = !paused;
    if (paused) {
        ctx.font = '30px Arial';
        ctx.fillStyle = 'white';
        ctx.fillText('Paused', canvas.width / 2 - 50, canvas.height / 2);
    } else {
        gameLoop(); // Resume game loop
    }
}

document.addEventListener('keydown', changeDirection);

function gameLoop() {
    if (gameRunning && !paused) {
        draw();
        moveMovingObstacles();
        handlePowerUps();
        setTimeout(gameLoop, speed);
    }
}

function startGame() {
    resetGame();
    gameLoop();
}

// Start the game on page load
startGame();
