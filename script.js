let computerPoints = 0;
let userPoints = 0;
const options = ['rock', 'paper', 'scissors'];

function computerPlay(options) {
  let computerChoice = Math.floor(Math.random() * 3);
  return options[computerChoice];
}

function userPlay() {
  return prompt('Pick your weapon!', '').toLowerCase();
}

function playRound () {

  const userSelection  = userPlay()
  const computerSelection = computerPlay(options)
 
  if (userSelection === 'rock' && computerSelection === 'scissors'
  || userSelection === 'paper' && computerSelection === 'rock'
  || userSelection === 'scissors' && computerSelection === 'paper') {
    alert('You Win! ' + userSelection.charAt(0).toUpperCase() + userSelection.slice(1) + ' beats ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1));
    ++userPoints;
    console.log('User wins');
 
  } else if (userSelection === 'rock' && computerSelection === 'paper'
  || userSelection === 'paper' && computerSelection === 'scissors'
  || userSelection === 'scissors' && computerSelection === 'rock') {
    alert('You Lose! ' + computerSelection.charAt(0).toUpperCase() + computerSelection.slice(1) + ' beats ' + userSelection.charAt(0).toUpperCase() + userSelection.slice(1));
    ++computerPoints;
    console.log('Computer wins');
 
  } else if (userSelection === computerSelection) {
    alert('It\'s a tie!');
    console.log('Tie');
  }
  
  else {
    alert('Wrong input. Try again.')
  }
};

function game() {
  for (let i = 0; i < 5; i++) {
    playRound();
    console.log(userPoints + ':' + computerPoints)
  }
  if (computerPoints > userPoints) {
  alert('You lost the game!')
} else if (userPoints > computerPoints) {
  alert('You win the game!')
} else {
  'It\'s a tie!'
}

game()
}