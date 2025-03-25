const emojis = ["😀", "😎", "🤩", "🥳", "😇", "😈", "👽", "👾", "🤖", "🎃", "🦄", "🐉", "🐢", "🦖", "🐍"];
let board = [...emojis, ...emojis].sort(() => Math.random() - 0.5);
let gameBoard = document.getElementById("game-board");
let firstCard = null, secondCard = null, lockBoard = false, score = 0;

function createBoard() {
    board.forEach((emoji, index) => {
        let card = document.createElement("div");
        card.classList.add("card");
        card.dataset.index = index;
        card.innerText = emoji;
        card.addEventListener("click", flipCard);
        gameBoard.appendChild(card);
    });
}

function flipCard() {
    if (lockBoard) return;
    let card = this;

    if (card === firstCard) return;
    
    card.classList.add("flipped");
    card.style.color = "black";

    if (!firstCard) {
        firstCard = card;
        return;
    }

    secondCard = card;
    checkMatch();
}

function checkMatch() {
    lockBoard = true;
    let isMatch = firstCard.innerText === secondCard.innerText;

    if (isMatch) {
        firstCard.removeEventListener("click", flipCard);
        secondCard.removeEventListener("click", flipCard);
        score += 10;
        document.getElementById("score").innerText = score;
        resetBoard();
    } else {
        setTimeout(() => {
            firstCard.classList.remove("flipped");
            secondCard.classList.remove("flipped");
            firstCard.style.color = "transparent";
            secondCard.style.color = "transparent";
            resetBoard();
        }, 800);
    }
}

function resetBoard() {
    [firstCard, secondCard, lockBoard] = [null, null, false];
}

createBoard();
