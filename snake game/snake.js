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

const eatSound = new Audio('eat.mp3');
const gameOverSound = new Audio('gameover.mp3');
const backgroundMusic = new Audio('background.mp3');

backgroundMusic.loop = true;
backgroundMusic.volume = 0.2;

function generateObstacles() {
    obstacles = [];
    const obstacleCount = level * 2;
    for (let i = 0; i < obstacleCount; i++) {
        let obstacle = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount)
        };
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
    const powerUpCount = Math.max(1, level);

    for (let i = 0; i < powerUpCount; i++) {
        let powerUp = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount),
            type: powerUpTypes[Math.floor(Math.random() * powerUpTypes.length)]
        };
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
    const movingObstacleCount = Math.max(1, level);

    for (let i = 0; i < movingObstacleCount; i++) {
        let movingObstacle = {
            x: Math.floor(Math.random() * tileCount),
            y: Math.floor(Math.random() * tileCount),
            direction: Math.floor(Math.random() * 4),
            speed: 1
        };
        while (snake.some(segment => segment.x === movingObstacle.x && segment.y === movingObstacle.y) ||
               (food.x === movingObstacle.x && food.y === movingObstacle.y) ||
               obstacles.some(obstacle => obstacle.x === movingObstacle.x && movingObstacle.y === obstacle.y)) {
            movingObstacle.x = Math.floor(Math.random() * tileCount);
            movingObstacle.y = Math.floor(Math.random() * tileCount);
        }
        movingObstacles.push(movingObstacle);
    }
}

function draw() {
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

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);

    ctx.fillStyle = 'grey';
    for (let obstacle of obstacles) {
        ctx.fillRect(obstacle.x * gridSize, obstacle.y * gridSize, gridSize, gridSize);
    }

    ctx.fillStyle = 'blue';
    for (let movingObstacle of movingObstacles) {
        ctx.fillRect(movingObstacle.x * gridSize, movingObstacle.y * gridSize, gridSize, gridSize);
    }

    ctx.fillStyle = 'yellow';
    for (let powerUp of powerUps) {
        ctx.fillRect(powerUp.x * gridSize, powerUp.y * gridSize, gridSize, gridSize);
    }

    ctx.fillStyle = 'lime';
    for (let segment of snake) {
        ctx.fillRect(segment.x * gridSize, segment.y * gridSize, gridSize, gridSize);
    }

    const newHead = { x: snake[0].x + direction.x, y: snake[0].y + direction.y };

    if (newHead.x === food.x && newHead.y === food.y) {
        score++;
        eatSound.play();
        speed = Math.max(50, speed - 5);
        food = { x: Math.floor(Math.random() * tileCount), y: Math.floor(Math.random() * tileCount) };

        if (score % 5 === 0) {
            level++;
            generateObstacles();
            generatePowerUps();
            generateMovingObstacles();
        }
    } else {
        snake.pop();
    }

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

    snake.unshift(newHead);

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
                speed = Math.max(30, speed - 10);
            } else if (powerUp.type === 'length') {
                snake.push(snake[snake.length - 1]);
            } else if (powerUp.type === 'score') {
                score += 10;
            }
        }
    }
}

function gameOver() {
    gameRunning = false;
    backgroundMusic.pause();
    finalScore.innerText = score;
    gameOverScreen.style.display = 'block';
}

function resetGame() {
    snake = [{ x: Math.floor(tileCount / 2), y: Math.floor(tileCount / 2) }];
    direction = { x: 0, y: 0 };
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
    backgroundMusic.play();
}

function changeDirection(event) {
    if (!gameRunning) return;
    if (paused && event.key !== "p") return;

    const keyMap = {
        ArrowUp: { x: 0, y: -1 },
        ArrowDown: { x: 0, y: 1 },
        ArrowLeft: { x: -1, y: 0 },
        ArrowRight: { x: 1, y: 0 },
        p: 'pause'
    };

    const newDirection = keyMap[event.key];
    if (newDirection === 'pause') {
        togglePause();
    } else if (newDirection) {
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
        gameLoop();
    }
}

function handleTouchStart(event) {
    if (!gameRunning || paused) return;

    const touch = event.touches[0];
    const touchX = touch.clientX - canvas.offsetLeft;
    const touchY = touch.clientY - canvas.offsetTop;

    const tileX = Math.floor(touchX / gridSize);
    const tileY = Math.floor(touchY / gridSize);

    const snakeHead = snake[0];
    const dx = tileX - snakeHead.x;
    const dy = tileY - snakeHead.y;

    if (Math.abs(dx) > Math.abs(dy)) {
        direction = { x: Math.sign(dx), y: 0 };
    } else {
        direction = { x: 0, y: Math.sign(dy) };
    }
}

document.addEventListener('keydown', changeDirection);
canvas.addEventListener('touchstart', handleTouchStart);

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

startGame();
