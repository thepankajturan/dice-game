function refreshPage() {
    location.reload();
}

// Player 1 Dice Object
let playerOneDice = document.getElementById("player-1-dice");

//Player 2 Dice Object
let playerTwoDice = document.getElementById("player-2-dice");

// Announcements
let ann = document.getElementById("ann");

// generating a random number to set the url accordingly
function randomNumGenerator() {
    return Math.ceil(Math.random() * 6);
}

// Random Number for Player 1
let randNumOne = randomNumGenerator();

// Random Number for Player 2
let randNumTwo = randomNumGenerator();

let diceForPlayerOne = `assets/svg/dice-${randNumOne}.svg`;

let diceForPlayerTwo = `assets/svg/dice-${randNumTwo}.svg`;

playerOneDice.setAttribute("src", diceForPlayerOne);

playerTwoDice.setAttribute("src", diceForPlayerTwo);


function isFirstTimeInLast5Minutes() {
    const lastLoadTimestamp = localStorage.getItem('lastLoadTimestamp');


    if (!lastLoadTimestamp || (Date.now() - parseInt(lastLoadTimestamp, 10)) > 1 * 60 * 1000) {

        localStorage.setItem('lastLoadTimestamp', Date.now().toString());
        return true;
    }


    return false;
}


if (isFirstTimeInLast5Minutes()) {

    ann.textContent = "Let's Go!";
} else {

    if (randNumOne > randNumTwo) {
        ann.textContent = "Player 1 Wins!";
    } else if (randNumOne == randNumTwo) {
        ann.textContent = "Draw!";
    } else {
        ann.textContent = "Player 2 Wins!";
    }
}
