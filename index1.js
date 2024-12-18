
const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const computerDisplay = document.getElementById("computerDisplay");
const resultDisplay = document.getElementById("resultDisplay");
const playerscoreDisplay = document.getElementById("playerscoreDisplay");
const ComputerscoreDisplay = document.getElementById("ComputerscoreDisplay");

let playerscore = 0;
let Computerscore = 0;

function PlayGame(playerchoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];
    
    let result = "";
    if (playerchoice === computerChoice) {
        result = "It's a Tie!";
    } else {
        switch (playerchoice) {
            case "rock":
                result = (computerChoice === "scissors") ? "You Win!" : "You Lose!";
                break;
            case "paper":
                result = (computerChoice === "rock") ? "You Win!" : "You Lose!";
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "You Win!" : "You Lose!";
                break;
        }
    }

    playerDisplay.textContent = `PLAYER: ${playerchoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = result;

    switch (result) {
        case "You Win!":
            playerscore++;
            playerscoreDisplay.textContent = playerscore;
            break;
        case "You Lose!":
            Computerscore++;
            ComputerscoreDisplay.textContent = Computerscore;
            break;
    }

    // Check if either player or computer has reached 20 points
    if (playerscore === 20 || Computerscore === 20) {
        const winner = playerscore === 20 ? "You" : "Computer";
        const message = `${winner} reached 20 points! Would you like to go to the summary page?`;

        const goToSummary = window.confirm(message); // Ask user if they want to go to the summary page
        
        if (goToSummary) {
            // Redirect to the summary page with the result
            localStorage.setItem("playerscore", playerscore);
            localStorage.setItem("Computerscore", Computerscore);
            localStorage.setItem("result", winner === "You" ? "Win" : "Lose");
            window.location.href = "index2.html"; // Redirect to the summary page
        } else {
            // Reset the game if they do not want to go to the summary
            playerscore = 0;
            Computerscore = 0;
            playerscoreDisplay.textContent = playerscore;
            ComputerscoreDisplay.textContent = Computerscore;
            resultDisplay.textContent = "";
        }
    }
}

    