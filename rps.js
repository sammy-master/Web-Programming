let player1Choice = "";
let player2Choice = "";

function playerChoice(player, choice) {
    if (player === 1) {
        player1Choice = choice;
    } else {
        player2Choice = choice;
    }

    if (player1Choice && player2Choice) {
        determineWinner();
    }
}

function determineWinner() {
    const resultDisplay = document.getElementById("result");

    if (player1Choice === player2Choice) {
        resultDisplay.innerText = "It's a Draw! 😐";
    } else if (
        (player1Choice === "rock" && player2Choice === "scissors") ||
        (player1Choice === "paper" && player2Choice === "rock") ||
        (player1Choice === "scissors" && player2Choice === "paper")
    ) {
        resultDisplay.innerText = "Player 1 Wins! 🎉";
    } else {
        resultDisplay.innerText = "Player 2 Wins! 🎉";
    }
}

function resetGame() {
    player1Choice = "";
    player2Choice = "";
    document.getElementById("result").innerText = "";
}
