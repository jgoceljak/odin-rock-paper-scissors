function getComputerChoice() {
   let choice = Math.floor(Math.random()*3)

   switch(choice) {
    case 0:
        return "rock"
    case 1:
        return "paper"
    case 2: 
        return "scissors"
    default:
        return console.error("Failed");
   }
}


function playRound(player, computer) {
    player = player.toLowerCase();

    if (player == computer) {
        return "Draw!";
    }
    else if (player == "rock" && computer == "paper") {
        return "Computer Wins!"
    }
    else if (player == "rock" && computer == "scissor") {
        return "Player Wins!"
    }
    else if (player == "scissor" && computer == "paper") {
        return "Player Wins!"
    }
    else if (player == "scissor" && computer == "rock") {
        return "Computer Wins!"
    }
    else if (player == "paper" && computer == "scissor") {
        return "Computer Wins!"
    }
    else if (player == "paper" && computer == "rock") {
        return "Player Wins!"
    }
}



const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection))