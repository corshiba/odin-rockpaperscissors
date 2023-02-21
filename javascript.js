const choice = ['rock', 'paper', 'scissors'];

function getComputerChoice() {
    return choice[ Math.floor( Math.random() * 3 ) ];
}

function playRound( playerSelection, computerSelection ){
    playerSelection = playerSelection.toLowerCase();

    if (playerSelection === computerSelection) {
        return "Draw!";
    } else if (playerSelection === 'rock') {
        if (computerSelection === 'paper'){
            return "You Lose! Paper beats Rock";
        } else {
            return "You Win! Rock beats Scissors";
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'scissors'){
            return "You Lose! Scissors beats Paper";
        } else {
            return "You Win! Paper beats Rock";
        }
    } else {
        if (computerSelection === 'rock'){
            return "You Lose! Rock beats Scissors";
        } else {
            return "You Win! Scissors beats Paper";
        }
    }
}


function main(){
    const playerSelection = "rock";
    const computerSelection = getComputerChoice();
    console.log( playerSelection );
    console.log( computerSelection );
    console.log(playRound(playerSelection, computerSelection));
}

main();