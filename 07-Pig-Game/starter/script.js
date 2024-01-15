'use strict';
//selcting elements
const player0Score = document.querySelector('#score--0');
const player1Score = document.querySelector('#score--1');
//const player1Score = document.getElementById('score--1');
const player0Current = document.querySelector('#current--0');
const player1Current = document.querySelector('#current--1');
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');

const diceEl = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//staring conditions
player0Score.textContent = 0;
player0Current.textContent = 0;
player1Score.textContent = 0;
player1Current.textContent = 0;
diceEl.classList.add('hidden');

let currentScore0 = 0;
let currentScore1 = 0;
// new game functionality
document.querySelector('.btn--new').addEventListener('click', function () {
  player0Score.textContent = 0;
  player0Current.textContent = 0;
  player1Score.textContent = 0;
  player1Current.textContent = 0;
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
  diceEl.classList.add('hidden');
});

//rolling dice functionality
btnRoll.addEventListener('click', function () {
  // 1. generating a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2.display dice
  diceEl.classList.remove('hidden');
  diceEl.src = `dice-${dice}.png`;

  //3.check for rolled 1: if true,switch to next player
  if (dice === 1 && !player1.classList.contains('player--active')) {
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
    currentScore0 = 0;
    player0Current.textContent = 0;
  } else if (dice === 1 && !player0.classList.contains('player--active')) {
    // player1.classList.remove('player--active');
    player1.classList.toggle('player--active');
    player0.classList.toggle('player--active');
    currentScore1 = 0;
    player1Current.textContent = 0;
  } else if (dice !== 1 && !player0.classList.contains('player--active')) {
    currentScore1 += dice;
    player1Current.textContent = currentScore1;
    if (currentScore1 >= 100) {
      diceEl.src = `Player 2 Wins🎉`;
      player1Score.textContent = currentScore1;
    }
  } else if (dice !== 1 && !player1.classList.contains('player--active')) {
    currentScore0 += dice;
    player0Current.textContent = currentScore0;
    if (currentScore0 >= 100) {
      diceEl.src = `Player 1 Wins🎉`;
      player0Score.textContent = currentScore0;
    }
  }
});

// hold functionality

btnHold.addEventListener('click', function () {
  if (player0.classList.contains('player--active')) {
    player0Score.textContent = player0Current.textContent;
    player0Current.textContent = 0;
    player0.classList.remove('player--active');
    player1.classList.add('player--active');
  } else if (player1.classList.contains('player--active')) {
    player1Score.textContent = player1Current.textContent;
    player1Current.textContent = 0;
    player1.classList.remove('player--active');
    player0.classList.add('player--active');
  }
});
