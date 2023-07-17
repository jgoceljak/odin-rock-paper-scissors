
let PScore = 0;
let CScore = 0;

const choiceWrapper = document.querySelector(".choices");
const buttons = choiceWrapper.children
choiceWrapper.addEventListener('click', (event) => {
    const isButton = event.target.nodeName === 'BUTTON';
    if (!isButton) { //do nothing if not a button
    console.log("Not a button")
    return;
    }
    let playerSelection = String(event.target.id);
    round(playerSelection)
});

const resetButton = document.querySelector(".resetGame");
resetButton.addEventListener('click', (event) => {
    resetGame()
});

resetButton.disabled = true;

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
           gameOver()
    return;
}
}

function gameOver() {
    if (PScore > CScore){
        displayMessage("You win! Click Reset to restart");
    } else {
        displayMessage("You lose! Click Reset to restart");
    }
    for(var i=0; i<buttons.length; i++){
        var child = buttons[i];
        child.disabled = true;
    resetButton.disabled = false;
    }
}



function resetGame(){
    PScore = 0;
    CScore = 0;
    updateScoreboard();
    displayMessage("Select an option to start.");
    for(var i=0; i<buttons.length; i++){
        var child = buttons[i];
        child.disabled = false;
    resetButton.disabled = true;
    }
}


