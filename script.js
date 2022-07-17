function computerPlay() {
    let choice = Math.floor(Math.random() * 3);
    let move;
    switch(choice) {
        case 0:     move = "Rock";
                    break;
        case 1:     move = "Paper";
                    break;
        case 2:     move = "Scissors";
                    break;
    }
    return(move);
}

function round(e) {
    let result;

    let computerSelection = computerPlay();
    let playerSelection = e.target.textContent.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    const breakElement = document.createElement('br');

    if(playerSelection === computerSelection) {
        result = "This round is a tie!";
    } else if(  (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
        playerScore++;
        result = "Player wins this round!";
    } else {
        computerScore++;
        result = "Computer wins this round!";
    }

    const resultElement = document.querySelector('.round-result');
    const gameResultElement = document.querySelector('.game-result');
    const roundElement = document.querySelector('.round');
    const playerScoreElement = document.querySelector('.player-score');
    const computerScoreElement = document.querySelector('.computer-score');

    resultElement.textContent = `You played ${playerSelection} and the computer played ${computerSelection}. ` + result + ' ';
    resultElement.appendChild(breakElement);
    roundElement.textContent = `Round ${++roundCount}`;
    playerScoreElement.textContent = `${playerScore}`
    computerScoreElement.textContent = `${computerScore}`

    if((roundCount = roundCount % 5) == 0) {
        gameResultElement.textContent += 'Game over... ';

        if(playerScore > computerScore)
            gameResultElement.textContent += 'player wins!';
        else if(playerScore < computerScore)
            gameResultElement.textContent += 'computer wins!';
        else   
            gameResultElement.textContent += 'it\'s a tie!';
        playerScore = 0;
        computerScore = 0;
    } else
    gameResultElement.textContent = '';
}

//let playerSelection = prompt("Please enter your choice", "");
const playerButtons = [...document.querySelectorAll('.player-button')];
let roundCount = 0;
let playerScore = 0;
let computerScore = 0;

playerButtons.forEach(button => {
    button.addEventListener('click', round)
});