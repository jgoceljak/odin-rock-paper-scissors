
let PScore = 0;
let CScore = 0;


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


function displayMessage(message){
    const display = document.querySelector(".messages");

    display.textContent = message;
    return;
}

function updateScoreboard(){
    const player = document.querySelector(".PScore")
    const computer = document.querySelector(".CScore");

    player.textContent = PScore;
    computer.textContent = CScore;
}


function playRound(input, computer) {
    let player = input.toLowerCase();

    if (player == computer) {
        displayMessage("Nobody Wins, redoing round");
        return 0;
    }
    else if (player == "rock" && computer == "paper") {
        displayMessage("Computer chose paper. Computer Wins!");
        return 1;
    }
    else if (player == "rock" && computer == "scissor") {
        displayMessage("Computer chose scissor. Player Wins!");
        return 2;
    }
    else if (player == "scissor" && computer == "paper") {
        displayMessage("Computer chose paper. Player Wins!");
        return 2;
    }
    else if (player == "scissor" && computer == "rock") {
        displayMessage("Computer chose rock. Computer Wins!");"Player Wins"
        return 1;
    }
    else if (player == "paper" && computer == "scissor") {
        displayMessage("Computer chose scissor. Computer Wins!");
        return 1;
    }
    else if (player == "paper" && computer == "rock") {
        displayMessage("Computer chose rock. Player Wins!");
        return 2;
    } else {
        return "Failed"
    }
}


function round(playerSelection){
    const computerSelection = getComputerChoice();
    let winner = playRound(playerSelection, computerSelection);
    console.log(winner)
    if (winner == 1) {
        CScore++;
        updateScoreboard();
    } else if (winner == 2) {
        PScore++;
        updateScoreboard();
    } else {
    }

    if (PScore >= 5 || CScore >= 5){
           console.log("Game Over")
    return;
}
}


const choiceWrapper = document.querySelector(".choices");
choiceWrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) { //do nothing if not a button
    console.log("Not a button")
    return;
    }
    let playerSelection = String(event.target.id);
    round(playerSelection)

});