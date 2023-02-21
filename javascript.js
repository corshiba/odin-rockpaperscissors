const choice = ['rock', 'paper', 'scissors'];

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

function game() {
    let score = 0;
    for ( let i = 0; i < 5; i++ ){
        let playerSelection = prompt("Rock Paper Scissors?");
        score += playRound( playerSelection, getComputerChoice() );
    }

    if ( score === 0 ){
        console.log( "It's a draw!" );
    } else if ( score > 0 ){
        console.log( "You win!" );
    } else {
        console.log( "You lose!" );
    }

}

game();