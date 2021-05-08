'use strict';

const player0El = document.querySelector('.player--0');
const player1El = document.querySelector('.player--1');
const score0El = document.getElementById('score--0');
const score1El = document.getElementById('score--1');
const btnRoll = document.querySelector('.btn--roll');
const diceEl = document.querySelector('.dice');

let currentScore = 0;
let playerActive = 0;
score0El.textContent = 0;
score1El.textContent = 0;
diceEl.classList.toggle('hidden');

btnRoll.addEventListener('click', function () {
  const dice = Math.trunc(Math.random() * 6) + 1;
  diceEl.classList.remove('hidden');
  diceEl.src = `./img/dice-${dice}.png`;

  if (dice !== 1) {
    currentScore += dice;
    document.getElementById(
      `current--${playerActive}`
    ).textContent = currentScore;
  } else {
    document.getElementById(`current--${playerActive}`).textContent = 0;
    currentScore = 0;
    playerActive = playerActive === 0 ? 1 : 0;
    player0El.classList.toggle('player--active');
    player1El.classList.toggle('player--active');
  }
});
