window.addEventListener('DOMContentLoaded', () => {
  const tiles = Array.from(document.querySelectorAll('.tile'));
  const playerDisplay = document.querySelector('.display span');
  const resetButton = document.querySelector('#reset');
  const announcer = document.querySelector('.announcer');
  const confettiCanvas = document.getElementById('confetti');
  const ctx = confettiCanvas.getContext('2d');

  let board = ['', '', '', '', '', '', '', '', ''];
  let currentPlayer = 'X';
  let isGameActive = true;
  let confettiTriggered = false;  // Flag to check if confetti has been triggered
  let confettiAnimationFrameId = null;  // Store the requestAnimationFrame ID

  const PLAYERX_WON = 'PLAYERX_WON';
  const PLAYERO_WON = 'PLAYERO_WON';
  const TIE = 'TIE';

  const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  function handleResultValidation() {
    let roundWon = false;
    for (let i = 0; i < winningConditions.length; i++) {
      const [a, b, c] = winningConditions[i];
      if (board[a] === '' || board[b] === '' || board[c] === '') {
        continue;
      }
      if (board[a] === board[b] && board[b] === board[c]) {
        roundWon = true;
        break;
      }
    }

    if (roundWon) {
      announce(currentPlayer === 'X' ? PLAYERX_WON : PLAYERO_WON);
      isGameActive = false;
      if (!confettiTriggered) {
        triggerConfetti();
        confettiTriggered = true;  // Set flag to true after first confetti
      }
      return;
    }

    if (!board.includes('')) {
      announce(TIE);
    }
  }

  function announce(type) {
    switch(type) {
      case PLAYERO_WON:
        announcer.innerHTML = 'Player <span class="playerO">O</span> Won!';
        break;
      case PLAYERX_WON:
        announcer.innerHTML = 'Player <span class="playerX">X</span> Won!';
        break;
      case TIE:
        announcer.innerHTML = 'It\'s a Tie!';
    }
    announcer.classList.remove('hide');
  }

  function isValidAction(tile) {
    return tile.innerText === '' && isGameActive;
  }

  function updateBoard(index) {
    board[index] = currentPlayer;
  }

  function changePlayer() {
    currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    playerDisplay.innerText = currentPlayer;
  }

  function userAction(tile, index) {
    if (isValidAction(tile)) {
      tile.innerText = currentPlayer;
      tile.classList.add(`player${currentPlayer}`);
      updateBoard(index);
      handleResultValidation();
      changePlayer();
    }
  }

  function resetBoard() {
    board = ['', '', '', '', '', '', '', '', ''];
    isGameActive = true;
    announcer.classList.add('hide');
    confettiTriggered = false;  // Reset confetti trigger flag

    if (currentPlayer === 'O') {
      changePlayer();
    }

    tiles.forEach(tile => {
      tile.innerText = '';
      tile.classList.remove('playerX');
      tile.classList.remove('playerO');
    });

    // Stop the confetti animation if it's running
    if (confettiAnimationFrameId) {
      cancelAnimationFrame(confettiAnimationFrameId);
      confettiAnimationFrameId = null;
      ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    }
  }

  tiles.forEach((tile, index) => {
    tile.addEventListener('click', () => userAction(tile, index));
  });

  resetButton.addEventListener('click', resetBoard);

  function triggerConfetti() {
    confettiCanvas.width = window.innerWidth;
    confettiCanvas.height = window.innerHeight;

    const confetti = {
      colors: ['#FFDC80', '#34E89E', '#F7797D'],
      maxCount: 200,
      speed: 5,
      frameInterval: 15,
      start() {
        this.canvas = confettiCanvas;
        this.ctx = ctx;
        this.canvas.width = window.innerWidth;
        this.canvas.height = window.innerHeight;
        this.confetti = [];
        this.random = Math.random;
        this.lastFrameTime = Date.now();
        this.update();
      },
      update() {
        const now = Date.now();
        const delta = now - this.lastFrameTime;
        if (delta > this.frameInterval) {
          this.lastFrameTime = now - (delta % this.frameInterval);
          this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
          this.addConfetti();
          this.drawConfetti();
        }
        confettiAnimationFrameId = requestAnimationFrame(this.update.bind(this));
      },
      addConfetti() {
        if (this.confetti.length < this.maxCount) {
          this.confetti.push({
            x: this.random() * this.canvas.width,
            y: this.canvas.height,
            radius: this.random() * 3 + 1,
            color: this.colors[Math.floor(this.random() * this.colors.length)],
            tilt: this.random() * 10 - 10,
            tiltAngleIncrement: this.random() * 0.07 + 0.05,
            tiltAngle: this.random() * Math.PI
          });
        }
      },
      drawConfetti() {
        for (let i = 0; i < this.confetti.length; i++) {
          const confettiPiece = this.confetti[i];
          this.ctx.beginPath();
          this.ctx.arc(confettiPiece.x, confettiPiece.y, confettiPiece.radius, 0, 2 * Math.PI);
          this.ctx.fillStyle = confettiPiece.color;
          this.ctx.fill();
          confettiPiece.tiltAngle += confettiPiece.tiltAngleIncrement;
          confettiPiece.x += Math.sin(confettiPiece.tiltAngle);
          confettiPiece.y -= Math.cos(confettiPiece.tiltAngle) + 1;
          confettiPiece.tilt += 0.1;
          if (confettiPiece.y < 0 || confettiPiece.x > this.canvas.width) {
            this.confetti.splice(i, 1);
            i--;
          }
        }
      }
    };

    confetti.start();
  }
});
