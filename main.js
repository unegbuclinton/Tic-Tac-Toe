const X_CLASS = 'x';
const XX_CLASS = 'circle';
const CIRCLE_CLASS = 'oval';
const winningCombination = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],
  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],
  [0, 4, 8],
  [2, 4, 6],
];
const cellElements = document.querySelectorAll('[data-cell');
const board = document.getElementById('board');
const winningText = document.querySelector('#winning-text-msg');
const restartButton = document.getElementById('restart-btn');
const winningMessage = document.querySelector('.winning-msg');

let switchTurn;

const checkWin = (currentClass) => {
  return winningCombination.some((combination) => {
    return combination.every((index) => {
      return cellElements[index].classList.contains(currentClass);
    });
  });
};
const placeMark = (cell, currentClass) => {
  cell.classList.add(currentClass);
};

const swapTurn = () => {
  switchTurn = !switchTurn;
};

const setBoardHoverClass = () => {
  board.classList.remove(X_CLASS);
  board.classList.remove(CIRCLE_CLASS);
  if (switchTurn) {
    board.classList.add(CIRCLE_CLASS);
  } else {
    board.classList.add(X_CLASS);
  }
};

const endGame = (draw) => {
  if (draw) {
    winningText.innerHTML = 'Draw!';
  } else {
    winningText.innerHTML = `${switchTurn ? "O's" : "X's"} Wins!`;
  }
  winningMessage.classList.add('show');
};

const isDraw = () => {
  return [...cellElements].every((cell) => {
    return (
      cell.classList.contains(XX_CLASS) || cell.classList.contains(X_CLASS)
    );
  });
};

const handleClick = (e) => {
  const cell = e.target;
  const currentClass = switchTurn ? XX_CLASS : X_CLASS;
  placeMark(cell, currentClass);
  if (checkWin(currentClass)) {
    endGame(false);
  } else if (isDraw()) {
    endGame(true);
  } else {
    swapTurn();
    setBoardHoverClass();
  }
};

const startGame = () => {
  switchTurn = false;
  cellElements.forEach((cell) => {
    cell.classList.remove(X_CLASS);
    cell.classList.remove(XX_CLASS);
    cell.removeEventListener('click', handleClick);
    cell.addEventListener('click', handleClick, { once: true });
  });
  setBoardHoverClass();
  winningMessage.classList.remove('show');
};

startGame();

restartButton.addEventListener('click', startGame);

// FizzBuzz

// print 1-100

// find multiple of 5

// find multiple 0f 3

// const arr = Array.from({ length: 100 }, (_, i) => i + 1);

// const checkNum = arr.map((num) => {
//   const multipleThree = num % 3;
//   const multipleFive = num % 5;
//   const mulltipleTen = num % 10;
//   if (multipleThree === 0) {
//     return 'fizz';
//   } else if (multipleFive === 0) {
//     return 'buzz';
//   } else if (mulltipleTen) {
//     return 'fizzBuzz';
//   }
// });

// console.log(checkNum);
