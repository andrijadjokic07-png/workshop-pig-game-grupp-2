// =============================================
// Grisspelet
// =============================================


// ---------- 1. Speldata ----------

const WINNING_SCORE = 100;

let scores = [0, 0];
let roundScore = 0;
let activePlayer = 0;
let isPlaying = true;


// ---------- 2. Element i DOM:en ----------

let btnnew = document.querySelector(".btn-new");
let btnroll = document.querySelector(".btn-roll");
let btnhold = document.querySelector(".btn-hold");


// ---------- 3. Nytt spel ----------

btnnew.addEventListener("click", function () {

    scores = [0, 0];
    roundScore = 0;
    activePlayer = 0;
    isPlaying = true;

    document.getElementById("score-0").textContent = 0;
    document.getElementById("score-1").textContent = 0;

    document.getElementById("current-0").textContent = 0;
    document.getElementById("current-1").textContent = 0;

    document.getElementById("name-0").textContent = "Spelare 1";
    document.getElementById("name-1").textContent = "Spelare 2";

    document.getElementById("name-0").classList.remove("winner");
    document.getElementById("name-1").classList.remove("winner");

    document.getElementById("dice-1").style.display = "block";
    document.getElementById("dice-2").style.display = "block";
});


// ---------- 4. Slå tärning ----------

btnroll.addEventListener("click", function () {

    if (!isPlaying) {
        return;
    }

    let diceRoll = Math.floor(Math.random() * 6) + 1;

    roundScore = roundScore + diceRoll;

    document.getElementById(`score-${activePlayer}`).textContent = roundScore;
});


// ---------- 5. Håll poäng ----------

btnhold.addEventListener("click", function () {

    if (!isPlaying) {
        return;
    }

    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById(`current-${activePlayer}`).textContent =
        scores[activePlayer];

    if (scores[activePlayer] >= WINNING_SCORE) {

        isPlaying = false;

        document.getElementById(`name-${activePlayer}`).textContent =
            "Vinnare!";

        document
            .getElementById(`name-${activePlayer}`)
            .classList.add("winner");

        document.getElementById("dice-1").style.display = "none";
        document.getElementById("dice-2").style.display = "none";

        return;
    }

    roundScore = 0;

    document.getElementById(`score-${activePlayer}`).textContent = 0;

    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
});