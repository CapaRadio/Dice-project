'use strict';



//Les éléments sélécteurs
const player0 = document.querySelector('.player--0');
const player1 = document.querySelector('.player--1');
const score0Element = document.querySelector('#score--0');
const score1Element = document.querySelector('#score--1');
const currentScore0 = document.getElementById('current--0');
const currentScore1 = document.getElementById('current--1');
const diceElement = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');

let scores, currentScore, activePlayer, playing;

//Conditions Initiales
const init = () => {
  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  score0Element.textContent = 0;
  score1Element.textContent = 0;
  currentScore0.textContent = 0;
  currentScore1.textContent = 0;
  playing = true;

  diceElement.classList.add('hidden');
  player0.classList.remove('player--winner');
  player1.classList.remove('player--winner');
  player0.classList.add('player--active');
  player1.classList.remove('player--active');
};

init();

//Les Fonctions
const switchPlayer = () => {
  document.getElementById(`current--${activePlayer}`).textContent = 0;
  currentScore = 0;
  activePlayer = activePlayer === 0 ? 1 : 0;
  player0.classList.toggle('player--active');
  player1.classList.toggle('player--active');
};

//Fonctionnalités du Bouton Lancer le Dé
btnRoll.addEventListener('click', function () {
  if (playing) {
    //1. Générer un nombre aléatoire du dé entre 1 & 6
    const dice = Math.floor(Math.random() * 6) + 1;

    //2. Affichage des dé
    diceElement.src = `/img/dice-${dice}.png`;
    diceElement.classList.remove('hidden');

    //2. Regarde si le dé est égale a 1, si oui changer le tour du joueur 
    if (dice !== 1) {
      currentScore += dice;
      document.getElementById(`current--${activePlayer}`).textContent =
        currentScore;
    } else {
      //Changer de joueur 
      switchPlayer();
    }
  }
});

btnHold.addEventListener('click', function () {
  if (playing) {
    //1.Ajoute le score ROUND au score GLOBAL du joueur 
    scores[activePlayer] += currentScore;
    //Affiche le score aux scores du joueur actuel
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //Si le score du joueur est égale à 100, alors la partie est finis
    if (scores[activePlayer] >= 100) {
      //Termine la partie
      diceElement.classList.add('hidden');
      playing = false;
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
    } else {
      switchPlayer();
    }
  }
});

btnNew.addEventListener('click', function () {
  init();
});


//Le Chargement de page
const loader = document.querySelector('.loader');
//Ajoute un évenement qui écoute
window.addEventListener('load', () => {
//Cela rajoute le fondu
    loader.classList.add('fondu-out');

})