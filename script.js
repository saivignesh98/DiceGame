'use strict';

//select elements
const scorePlayer0 = document.getElementById('score--0');
const scorePlayer1 = document.getElementById('score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const player0Element = document.querySelector('.player--0');
const player1Element = document.querySelector('.player--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Set player scores as 0 initially
scorePlayer0.textContent = 0;
scorePlayer1.textContent = 0;

//Hide dice element initially
diceElement.style.visibility = 'hidden';

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;

//Roll the dice
btnRoll.addEventListener('click', () => {
  //Generate random number between 1 and 6
  let randomNumber = Math.ceil(Math.random() * 6);

  //Show dice image accordingly
  diceElement.style.visibility = 'visible';
  diceElement.src = `dice-${randomNumber}.png`;

  //Check if dice roll is 1, add to current score/switch accordingly.
  if (randomNumber != 1) {
    currentScore += randomNumber;
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    togglePlayer();
  }
});

//Hold functionality
btnHold.addEventListener('click', () => {
  scores[activePlayer] += currentScore;
  scorePlayer0.textContent = scores[0];
  scorePlayer1.textContent = scores[1];
  togglePlayer();
});

const togglePlayer = () => {
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0Element.classList.toggle('player--active');
  player1Element.classList.toggle('player--active');
};
