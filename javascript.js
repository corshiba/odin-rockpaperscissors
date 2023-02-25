const choice = ['rock', 'paper', 'scissors'];

let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    return choice[ Math.floor( Math.random() * 3 ) ];
}

function playRound( playerSelection, computerSelection ){
    playerSelection = playerSelection.toLowerCase();

    const resultDiv = document.querySelector(".result");

    if (playerSelection === computerSelection) {
        resultDiv.textContent = "Draw!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            resultDiv.textContent = "You Lose! Paper beats Rock";
            computerScore++;
        } else {
            resultDiv.textContent = "You Win! Rock beats Scissors";
            playerScore++;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            resultDiv.textContent = "You Lose! Scissors beats Paper";
            computerScore++;
        } else {
            resultDiv.textContent = "You Win! Paper beats Rock";
            playerScore++;
        }
    } else {
        if (computerSelection === 'rock'){
            resultDiv.textContent = "You Lose! Rock beats Scissors";
            computerScore++;
        } else {
            resultDiv.textContent = "You Win! Scissors beats Paper";
            playerScore++;
        }
    }

    if ( playerScore > 4 ) {
        resultDiv.textContent += " Player wins!";
    } else if ( computerScore > 4 ) {
        resultDiv.textContent += " Computer wins!";
    }
}

const btns = document.querySelectorAll('button');

btns.forEach( (btn) => {
    btn.addEventListener( 'click', () => {
        playRound( btn.classList.value, getComputerChoice() );
    } );
});