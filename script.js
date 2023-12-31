'use strict';

//Selecting Elements
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const current0Element = document.querySelector('#current--0');
const current1Element = document.querySelector('#current--1');
const diceElement = document.querySelector('.dice');
const btnNew = document.querySelector('.btn--new');
const btnRoll = document.querySelector('.btn--roll');
const btnHold = document.querySelector('.btn--hold');

//Starting Conditions
score0Element.textContent = 0;
score1Element.textContent = 0;
diceElement.classList.add('hidden');
let currentScore = 0;

//Rolling dice functionality
btnRoll.addEventListener('click', function () {
  //1. Generate a random dice roll
  const dice = Math.trunc(Math.random() * 6) + 1;

  //2. Display dice
  diceElement.classList.remove('hidden');
  diceElement.src = `dice-${dice}.png`;

  //3. Check for rolled 1
  if (dice !== 1) {
    //Add dice to current score
    currentScore += dice;
    current0Element.textContent = currentScore; //CHANGE LATER
  } else {
    //switch to next player
  }
});
