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
});


// ---------- 4. Slå tärning ----------

btnroll.addEventListener("click", function () {

    let diceRoll = Math.floor(Math.random() * 6) + 1;

    roundScore = roundScore + diceRoll;

    // Visa poängen hos den aktiva spelaren
    document.getElementById(`score-${activePlayer}`).textContent = roundScore;
});


// ---------- 5. Håll poäng + byt spelare ----------

btnhold.addEventListener("click", function () {


    scores[activePlayer] = scores[activePlayer] + roundScore;

    document.getElementById(`current-${activePlayer}`).textContent =
        scores[activePlayer];

    roundScore = 0;
    document.getElementById(`score-${activePlayer}`).textContent = 0;


    if (activePlayer === 0) {
        activePlayer = 1;
    } else {
        activePlayer = 0;
    }
});