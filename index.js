function getComputerChoice() {
   let choice = Math.floor(Math.random()*3)

   console.log(choice)

   if (choice == 0){
        return "rock";
   } else if (choice == 1){
        return "paper";
   } else {
    return "scissor";
   }
   
}

function getPlayerChoice() {
    let choice = prompt("Choose Rock Paper or Scissors");
    choice = choice.toLowerCase()
    while (choice != "rock" && choice != "scissor" && choice != "paper"){
        console.log(choice)
        choice = prompt("Choose Rock Paper or Scissors");
        choice = choice.toLowerCase()
    }
    return choice
}


function playRound(input, computer) {
    let player = input.toLowerCase();
    console.log(player)
    console.log(computer)

    if (player == computer) {
        return "Draw!";
    }
    else if (player == "rock" && computer == "paper") {
        return "Computer Wins!";
    }
    else if (player == "rock" && computer == "scissor") {
        return "Player Wins!";
    }
    else if (player == "scissor" && computer == "paper") {
        return "Player Wins!";
    }
    else if (player == "scissor" && computer == "rock") {
        return "Computer Wins!";
    }
    else if (player == "paper" && computer == "scissor") {
        return "Computer Wins!";
    }
    else if (player == "paper" && computer == "rock") {
        return "Player Wins!";
    } else {
        return "Failed"
    }
}


function game(){
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    console.log(winner)
    return;
}