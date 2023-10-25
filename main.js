let computerPoints = 0;
let playerPoints = 0;

const buttons = document.querySelectorAll('button');
const result = document.querySelector('#result');

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

function playRound(computerSelection, playerSelection) {
    if(computerSelection === playerSelection) {
        result.textContent = `Its's a tie.
        Computer points: ${computerPoints}
        Player points: ${playerPoints}`;
    } else if(computerSelection === "rock") {
        if(playerSelection === "paper") {
            playerPoints++;
            result.textContent = `You win! Paper beats rock.
            Computer points: ${computerPoints}
            Player points: ${playerPoints}`;
        } else if(playerSelection === "scissors") {
            computerPoints++;
            result.textContent = `You loose! Rock beats scissors.
            Computer points: ${computerPoints}
            Player points: ${playerPoints}`;
        }
    } else if(computerSelection === "paper") {
        if(playerSelection === "rock") {
            computerPoints++;
            result.textContent = `You loose! Paper beats rock.
            Computer points: ${computerPoints}
            Player points: ${playerPoints}`;
        } else if(playerSelection === "scissors") {
            playerPoints++;
            result.textContent = `You win! Scissors beats paper.
            Computer points: ${computerPoints}
            Player points: ${playerPoints}`;
        }
    } else if(computerSelection === "scissors") {
        if(playerSelection === "rock") {
            playerPoints++;
            result.textContent = `You win! Rock beats scissors.
            Computer points: ${computerPoints}
            Player points: ${playerPoints}`;
        } else if(playerSelection === "paper") {
            computerPoints++;
            result.textContent = `You loose! Scissors beats paper.
            Computer points: ${computerPoints}
            Player points: ${playerPoints}`;
        }
    }
}

buttons.forEach(button => {
    button.addEventListener('click', () => {
        
        if (computerPoints == 5 || playerPoints == 5) {
            computerPoints = 0;
            playerPoints = 0;
            result.textContent = `GAME OVER`;
        } else {
            playRound(getComputerChoice(), button.id);
        }
    });
})