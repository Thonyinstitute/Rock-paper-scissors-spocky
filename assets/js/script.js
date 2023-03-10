// Start game when player clicks an icon (code was inspired by: https://github.com/knutinator/lets-play-rpsls//

let playerChoice = "";
let computerChoice = "";
let computerOptions = ["rock", "paper", "scissors", "lizard", "spock"];
let playerScore = 0;
let computerScore = 0;
let winMessage = "";


function clearStyles() {
    for (let i = 0; i < computerOptions.length; i++) {
            let iconStyle = document.getElementById(computerOptions[i]);
            iconStyle.style.removeProperty("color");
    }
}

let playerChoiceContainer = document.querySelector("#game-area");
playerChoiceContainer.addEventListener("click", handlePlayerChoice);
function handlePlayerChoice(event) {
    if (!event.target.classList.contains("icon")) {
            return;
    } else {
    playerChoice = event.target.dataset.choice;
    }
    clearStyles();
    computerPlay();
}


function computerPlay() {
    // Make the computer choose an icon randomly //
    let randomNumber = Math.floor(Math.random() * 5);
    computerChoice = computerOptions[randomNumber];
        
    // display the computer's choice (change styling of computer choice icon) //
    document.getElementById(computerChoice).style.color="gray";
    determineWinner();
}

// compare the choices, determine round winner, display message //
function determineWinner() { 
    // round win messages (also explains the rules) //
    let win0 = "Draw!";
    let win1 = "Scissors cuts Paper!";
    let win2 = "Paper covers Rock!";
    let win3 = "Rock crushes Lizard!";
    let win4 = "Lizard poisons Spock!";
    let win5 = "Spock smashes Scissors!";
    let win6 = "Scissors decapitates Lizard!";
    let win7 = "Lizard eats Paper!";
    let win8 = "Paper disproves Spock!";
    let win9 = "Spock vaporizes Rock!";
    let win10 = "Rock crushes Scissors!";

    // All possible outcomes of game rounds: //
    // Draw //
    if (playerChoice === computerChoice) {
        winMessage = win0;
        updateWinMessage();
    }
    // Scissors + Paper //
    else if (playerChoice === "scissors" && computerChoice === "paper") {
        winMessage = win1;
        incPlayerScore();
    }
    else if (playerChoice === "paper" && computerChoice === "scissors") {
        winMessage = win1;
        incComputerScore();
    }
    // Paper + Rock //
    else if (playerChoice === "paper" && computerChoice === "rock") {
        winMessage = win2;
        incPlayerScore();
    }
    else if (playerChoice === "rock" && computerChoice === "paper") {
        winMessage = win2;
        incComputerScore();
    }
    // Rock + Lizard //
    else if (playerChoice === "rock" && computerChoice === "lizard") {
        winMessage = win3;
        incPlayerScore();
    }
    else if (playerChoice === "lizard" && computerChoice === "rock") {
        winMessage = win3;
        incComputerScore();
    }
    // Lizard + Spock //
    else if (playerChoice === "lizard" && computerChoice === "spock") {
        winMessage = win4;
        incPlayerScore();
    }
    else if (playerChoice === "spock" && computerChoice === "lizard") {
        winMessage = win4;
        incComputerScore();
    }
    // Spock + Scissors //
    else if (playerChoice === "spock" && computerChoice === "scissors") {
        winMessage = win5;
        incPlayerScore();
    }
    else if (playerChoice === "scissors" && computerChoice === "spock") {
        winMessage = win5;
        incComputerScore();
    }
    // Scissors + Lizard //
    else if (playerChoice === "scissors" && computerChoice === "lizard") {
        winMessage = win6;
        incPlayerScore();
    }
    else if (playerChoice === "lizard" && computerChoice === "scissors") {
        winMessage = win6;
        incComputerScore();
    }
    // Lizard + Paper //
    else if (playerChoice === "lizard" && computerChoice === "paper") {
        winMessage = win7;
        incPlayerScore();
    }
    else if (playerChoice === "paper" && computerChoice === "lizard") {
        winMessage = win7;
        incComputerScore();
    }
    // Paper + Spock //
    else if (playerChoice === "paper" && computerChoice === "spock") {
        winMessage = win8;
        incPlayerScore();
    }
    else if (playerChoice === "spock" && computerChoice === "paper") {
        winMessage = win8;
        incComputerScore();
    }
    // Spock + Rock //
    else if (playerChoice === "spock" && computerChoice === "rock") {
        winMessage = win9;
        incPlayerScore();
    }
    else if (playerChoice === "rock" && computerChoice === "spock") {
        winMessage = win9;
        inccomputerScore();
    }
    // Rock + Scissors //
    else if (playerChoice === "rock" && computerChoice === "scissors") {
        winMessage = win10;
        incPlayerScore();
    }
    else if (playerChoice === "scissors" && computerChoice === "rock") {
        winMessage = win10;
        inccomputerScore();
    }

    // display round winner message and increase score tally (code was inspired by https://stackoverflow.com/questions/68074211/make-score-counter-from-javascript-display-as-text-in-html) //
    function incPlayerScore() {
        playerScore++;
        let playerScoreNew = document.getElementById("player1-score");
        playerScoreNew.textContent = `${playerScore}`;
        updateWinMessage();
    }
    function incComputerScore() {
        computerScore++;
        let computerScoreNew = document.getElementById("cpu-score");
        computerScoreNew.textContent = `${computerScore}`;
        updateWinMessage(); 
    }
    function updateWinMessage() {
        let winMessageNew = document.getElementById("winner-message-area");
        winMessageNew.textContent = `${winMessage}`;
        checkPlayerScore();
    }
}

// check if any player has 5 points and display game win message, then restart game //
function checkPlayerScore(){
    if (computerScore === 5) {
        alert("You lost... :(");
        location.reload();
    } else if (playerScore === 5) {
        alert("You won!!! :D");
        location.reload();
    // Error handling if score goes above 5 //    
    } else if (playerScore >= 6 || computerScore >= 6) {
        alert("ERROR! Something went wrong, please restart the game");
        location.reload();
    }
}
