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

let playerScore = 0;
let computerScore = 0;

function playRound(userChoice, computerSelection) {
    let resultString = ''
    if (userChoice === 'rock' && computerSelection === 'rock') {
        resultString = "It's a tie! Rock vs Rock";
    } else if (userChoice === 'paper' && computerSelection === 'paper') {
        resultString = "It's a tie! Paper vs Paper";
    } else if (userChoice === 'scissors' && computerSelection === 'scissors') {
        resultString = "It's a tie! Scissors vs Scissors";
    } else if (userChoice === 'rock' && computerSelection === 'scissors') {
        resultString = "You won! Rock beats Scissors";
        playerScore++;
    } else if (userChoice === 'paper' && computerSelection === 'rock') {
        resultString = "You won! Paper beats Rock";
        playerScore++;
    } else if (userChoice === 'scissors' && computerSelection === 'paper') {
        resultString = "You won! Scissors beats Paper";
        playerScore++;
    } else if (userChoice === 'rock' && computerSelection === 'paper') {
        resultString = "You Lose! Paper beats Rock";
        computerScore++;
    } else if (userChoice === 'paper' && computerSelection === 'scissors') {
        resultString = "You Lose! Scissors beats Paper";
        computerScore++;
    } else if (userChoice === 'scissors' && computerSelection === 'rock') {
        resultString = "You Lose! Rock beats Scissors";
        computerScore++;
    } else {
        resultString = "Something went wrong";
    }
    return resultString;
} 

function game() {
    if (playerScore < 5 && computerScore < 5) {
    let currentRound = playRound(userChoice, computerSelection());
    document.getElementById('results').innerHTML = currentRound; 
   
    document.getElementById('score').innerHTML =("Player wins: " + playerScore + " Computer wins: " + computerScore);
    
        if (playerScore > computerScore && playerScore >= 5) {
            document.getElementById('winner').innerHTML ="Player is the winner!";
        } else if (playerScore < computerScore && computerScore >= 5) {
            document.getElementById('winner').innerHTML ="Computer is the winner!";
        } else {
            document.getElementById('winner').innerHTML =""
        }
    }

}
function main() {
    
    document.getElementById('rock').onclick = function(e) {
        userChoice = 'rock'
        game(userChoice, computerSelection())
    }
    document.getElementById('paper').onclick = function(e) {
        userChoice = 'paper'
        game(userChoice, computerSelection())
    }
    document.getElementById('scissors').onclick = function(e) {
        userChoice = 'scissors'
        game(userChoice, computerSelection())
    }
} 
main();

  
