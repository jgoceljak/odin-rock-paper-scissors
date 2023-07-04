function getComputerChoice() {
   let choice = Math.floor(Math.random()*3)


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
        choice = prompt("Choose Rock Paper or Scissors");
        choice = choice.toLowerCase()
    }
    return choice
}


function playRound(input, computer) {
    let player = input.toLowerCase();

    if (player == computer) {
        return "Nobody Wins, redoing";
    }
    else if (player == "rock" && computer == "paper") {
        console.log("Computer Choice: Paper")
        return "Computer Wins";
    }
    else if (player == "rock" && computer == "scissor") {
        console.log("Computer Choice: Scissor")
        return "Player Wins";
    }
    else if (player == "scissor" && computer == "paper") {
        console.log("Computer Choice: Paper")
        return "Player Wins";
    }
    else if (player == "scissor" && computer == "rock") {
        console.log("Computer Choice: Rock")
        return "Computer Wins";
    }
    else if (player == "paper" && computer == "scissor") {
        console.log("Computer Choice: Scissor")
        return "Computer Wins";
    }
    else if (player == "paper" && computer == "rock") {
        console.log("Computer Choice: Rock")
        return "Player Wins";
    } else {
        return "Failed"
    }
}


function game(){

    let counter = 1
    let PScore = 0;
    let CScore = 0;
    while (counter < 6) {
    const playerSelection = getPlayerChoice();
    const computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    console.log(winner + " round " + counter)
    counter++;
    if (winner == "Computer Wins") {
        CScore++;
    } else if (winner == "Player Wins") {
        PScore++;
    } else {

        counter--;
    }
    }

    if (PScore > CScore) {
        console.log("Player Wins the Match")
    } else {
        console.log("Computer Wins the Match")
    }

    return;
}