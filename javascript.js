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


// function main(){
//     const playerSelection = "rock";
//     const computerSelection = getComputerChoice();
//     console.log( playerSelection );
//     console.log( computerSelection );
//     console.log(playRound(playerSelection, computerSelection));
// }

// main();

function game() {
    for ( let i = 0; i < 5; i++ ){
        let playerSelection = prompt("Rock Paper Scissors?");
        console.log( playRound( playerSelection, getComputerChoice() ) );
    }


}

game();