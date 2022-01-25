let computerPoints = 0;
let userPoints = 0;
let userSelection;
let computerSelection;
const options = ['rock', 'paper', 'scissors'];

const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');
const display = document.querySelector('#display');
const runningScore = document.querySelector('#runningScore');
const winnerAnnouncement = document.querySelector('.buttons');
const buttons = document.querySelectorAll('.buttons')

// Functions


rock.addEventListener('click', function() {
  playRound('rock');
})


paper.addEventListener('click', function() {
  playRound('paper');
})


scissors.addEventListener('click', function() {
  playRound('scissors');
})


function computerPlay(options) {
  let computerChoice = Math.floor(Math.random() * 3);
  return options[computerChoice];
}


function playRound(userSelection) {

  const computerSelection = computerPlay(options);
 
  if (userSelection === 'rock' && computerSelection === 'scissors'
  || userSelection === 'paper' && computerSelection === 'rock'
  || userSelection === 'scissors' && computerSelection === 'paper') {
    userWins(userSelection, computerSelection);

  } else if (userSelection === 'rock' && computerSelection === 'paper'
  || userSelection === 'paper' && computerSelection === 'scissors'
  || userSelection === 'scissors' && computerSelection === 'rock') {
    computerWins(userSelection, computerSelection);
  
  } else {
    display.textContent = 'It\'s a tie! Both picked ' + userSelection.charAt(0).toUpperCase() + userSelection.slice(1);
  }
};

function userWins(userSelection, computerSelection) {
  ++userPoints;
  display.textContent = ('You Win! ' + userSelection.charAt(0).toUpperCase() + userSelection.slice(1) + ' beats ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
  updateScore(userPoints, computerPoints);
  if (userPoints === 5) {
  chooseWinner();
  }
}

function computerWins(userSelection, computerSelection) {
  ++computerPoints;
  display.textContent = ('You Lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + userSelection.charAt(0).toUpperCase() + userSelection.slice(1));
  updateScore(userPoints, computerPoints);
  if (computerPoints === 5) {
  chooseWinner();
  }
}

function updateScore(userPoints, computerPoints) {
  runningScore.textContent = ('🧑🏼 ' + userPoints + ' : ' + computerPoints + ' 🤖️');
}

function chooseWinner() {
  if (computerPoints > userPoints) {
    winnerAnnouncement.textContent = 'You lost the game!';
  } else {
    winnerAnnouncement.textContent = 'You win the game!';
  }
  rock.remove();
  paper.remove();
  scissors.remove();
}