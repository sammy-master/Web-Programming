let board = ["", "", "", "", "", "", "", "", ""];
let currentPlayer = "X";
let gameActive = true;

function createBoard() {
    let boardDiv = document.getElementById("board");
    boardDiv.innerHTML = "";
    board.forEach((cell, index) => {
        let cellDiv = document.createElement("div");
        cellDiv.classList.add("cell");
        cellDiv.innerText = cell;
        cellDiv.onclick = () => cellClick(index);
        boardDiv.appendChild(cellDiv);
    });
}

function cellClick(index) {
    if (board[index] === "" && gameActive) {
        board[index] = currentPlayer;
        checkWinner();
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        createBoard();
    }
}

function checkWinner() {
    const winPatterns = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6]
    ];
    for (let pattern of winPatterns) {
        let [a, b, c] = pattern;
        if (board[a] && board[a] === board[b] && board[a] === board[c]) {
            document.getElementById("winner").innerText = `Player ${board[a]} Wins! 🎉`;
            gameActive = false;
            return;
        }
    }
    if (!board.includes("")) {
        document.getElementById("winner").innerText = "It's a Draw! 😐";
        gameActive = false;
    }
}

function resetGame() {
    board = ["", "", "", "", "", "", "", "", ""];
    currentPlayer = "X";
    gameActive = true;
    document.getElementById("winner").innerText = "";
    createBoard();
}

createBoard();
