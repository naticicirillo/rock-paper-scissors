let computerPoints = 0;
let playerPoints = 0;

// Gets a random number and then returns a string
function getComputerChoice () {
    let randomNumber = Math.floor(Math.random() * 3);

    switch (randomNumber) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
        default:
            break;
    }
}

// Plays a round and returns a mesagge
function playRound(computerSelection, playerSelection) {
    if(computerSelection === playerSelection) {
        console.log("Its's a tie.")
    } else if(computerSelection === "rock") {
        if(playerSelection === "paper") {
            playerPoints++;
            console.log("You win! Paper beats rock");
        } else if(playerSelection === "scissors") {
            computerPoints++;
            console.log("You loose! Rock beats scissors");
        }
    } else if(computerSelection === "paper") {
        if(playerSelection === "rock") {
            computerPoints++;
            console.log("You loose! Paper beats rock");
        } else if(playerSelection === "scissors") {
            playerPoints++;
            console.log("You win! Scissors beats paper");
        }
    } else if(computerSelection === "scissors") {
        if(playerSelection === "rock") {
            playerPoints++;
            console.log("You win! Rock beats scissors");
        } else if(playerSelection === "paper") {
            computerPoints++;
            console.log("You loose! Scissors beats paper");
        }
    }
}

// Show the game result
function winnerResult(computerPoints, playerPoints) {
    if(computerPoints === playerPoints) {
        console.log(`Computer points: ${computerPoints}
        Player points: ${playerPoints}
        It's a tie.
        GAME OVER`);
    } else if(computerPoints > playerPoints) {
        console.log(`Computer points: ${computerPoints}
        Player points: ${playerPoints}
        Computer wins.
        GAME OVER`);
    } else if(computerPoints < playerPoints) {
        console.log(`Computer points: ${computerPoints}
        Player points: ${playerPoints}
        You win.
        GAME OVER`);
    }
}

// Plays five rounds and then returns the outcome
function game(i) {
    for(i = 0; i < 5; i++) {
        const playerSelection = prompt("Rock, paper or scissors?").toLowerCase();
        console.log(playerSelection);
        
        getComputerChoice();
        
        const computerSelection = getComputerChoice();
        console.log(computerSelection);
        
        playRound(computerSelection, playerSelection);
    }

    winnerResult(computerPoints, playerPoints);
}

game();