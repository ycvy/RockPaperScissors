console.log("Hello");
function computerSelection() {
    let computerChoiceNumber = Math.floor(Math.random()*3)+ 1;
    let computerChoice;
    if (computerChoiceNumber === 3) {
        computerChoice = "scissors";
    } else if (computerChoiceNumber === 2) {
        computerChoice = "paper";
    } else {
        computerChoice = "rock";
    }
    return computerChoice;
}

function playerSelection() {
    let isValidChoice = false;
    while (isValidChoice === false) {
        playerChoice = prompt("Rock, Paper or Scissors?").toLowerCase();
        if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
            isValidChoice = true;
        } else {
            isValidChoice = false;
        }
    }   
    return playerChoice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    let resultString = ''
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        resultString = "It's a tie! Rock vs Rock";
    } else if (playerSelection === 'paper' && computerSelection === 'paper') {
        resultString = "It's a tie! Paper vs Paper";
    } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
        resultString = "It's a tie! Scissors vs Scissors";
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        resultString = "You won! Rock beats Scissors";
        playerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        resultString = "You won! Paper beats Rock";
        playerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        resultString = "You won! Scissors beats Paper";
        playerScore++;
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        resultString = "You Lose! Paper beats Rock";
        computerScore++;
    } else if (playerSelection === 'paper' && computerSelection === 'scissors') {
        resultString = "You Lose! Scissors beats Paper";
        computerScore++;
    } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
        resultString = "You Lose! Rock beats Scissors";
        computerScore++;
    } else {
        resultString = "Something went wrong";
    }
    return resultString;
} 

function game() {
    for(let i = 0; i < 5; i++) {
        let currentRound = playRound(playerSelection(), computerSelection());
        console.log(currentRound); 
    }
    console.log("Player wins: " + playerScore, "Computer wins: " + computerScore);
    if (playerScore > computerScore) {
        console.log("Player is the winner!");
    } else if (playerScore === computerScore) {
        console.log("It's a tie!");
    } else {
        console.log("Computer is the winner!");
    }
}   
game();