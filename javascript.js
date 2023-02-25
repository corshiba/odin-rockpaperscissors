const choice = ['rock', 'paper', 'scissors'];

let score = 0;

function getComputerChoice() {
    return choice[ Math.floor( Math.random() * 3 ) ];
}

function playRound( playerSelection, computerSelection ){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        console.log( "Draw!" );
        return 0;
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            console.log( "You Lose! Paper beats Rock" );
            return -1;
        } else {
            console.log( "You Win! Rock beats Scissors" );
            return 1;
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            console.log( "You Lose! Scissors beats Paper" );
            return -1;
        } else {
            console.log( "You Win! Paper beats Rock" );
            return 1;
        }
    } else {
        if (computerSelection === 'rock'){
            console.log( "You Lose! Rock beats Scissors" );
            return -1;
        } else {
            console.log( "You Win! Scissors beats Paper" );
            return 1;
        }
    }
}

const btns = document.querySelectorAll('button');

btns.forEach( (btn) => {
    console.log(btn.classList.value);
    btn.addEventListener( 'click', () => {
        playRound( btn.classList.value, getComputerChoice() );
    } );
});