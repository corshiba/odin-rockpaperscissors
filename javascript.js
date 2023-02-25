const choice = ['rock', 'paper', 'scissors'];

let score = 0;

function getComputerChoice() {
    return choice[ Math.floor( Math.random() * 3 ) ];
}

function playRound( playerSelection, computerSelection ){
    playerSelection = playerSelection.toLowerCase();

    const resultDiv = document.querySelector(".result");

    if (playerSelection === computerSelection) {
        resultDiv.textContent = "Draw!";
        return 0;
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            resultDiv.textContent = "You Lose! Paper beats Rock";
            return -1;
        } else {
            resultDiv.textContent = "You Win! Rock beats Scissors";
            return 1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            resultDiv.textContent = "You Lose! Scissors beats Paper";
            return -1;
        } else {
            resultDiv.textContent = "You Win! Paper beats Rock";
            return 1;
        }
    } else {
        if (computerSelection === 'rock'){
            resultDiv.textContent = "You Lose! Rock beats Scissors";
            return -1;
        } else {
            resultDiv.textContent = "You Win! Scissors beats Paper";
            return 1;
        }
    }
}

const btns = document.querySelectorAll('button');

btns.forEach( (btn) => {
    btn.addEventListener( 'click', () => {
        playRound( btn.classList.value, getComputerChoice() );
    } );
});