let userPoints = 0;
let computerPoints = 0;
let UserPick = "";

function computerPlay() {
    let options = ["Rock", "Paper", "Scissors"];
    let computerPick = options[Math.floor(Math.random()*3)];
    return computerPick;
}

function SingleRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        console.log("It's a tie!");
    }
    else if ((playerselection === "Rock" && computerSelection === "Scissors")
    || (playerSelection === "Paper" && computerSelection === "Rock")
    || (playerSelection === "Scissors" && computerSelection === "Paper")) {
        userPoints += 1;
        console.log("You win!");
    }
    else {
        computerPoints += 1;
        console.log("You lose!");
    }
}