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

function round(playerSelection, computerSelection) {
    let result;

    if(playerSelection === "invalid choice") {
        result = "You entered an invalid move!";
    } else if(playerSelection === computerSelection) {
        result = "It's a tie!";
    } else if(  (playerSelection === "rock" && computerSelection === "scissors") ||
                (playerSelection === "paper" && computerSelection === "rock") ||
                (playerSelection === "scissors" && computerSelection === "paper")) {
        result = "Player wins!";
    } else {
        result = "Computer wins!";
    }
    return(result);
}

function game() {
    //let playerSelection = prompt("Please enter your choice", "");
    let computerSelection = computerPlay();
    
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if(!(playerSelection === "rock") ||
        (playerSelection === "paper") ||
        (playerSelection === "scissors"))
        playerSelection = "invalid choice";
    console.log("And the result is...\n");
    console.log(round(playerSelection, computerSelection));
}