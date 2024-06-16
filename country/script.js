// Add event listener to every button -------------------------------------------------------------
const buttons = document.querySelectorAll(".countryButton");

const startButton = document.getElementById('startButton');
const answerType = document.getElementById("answerType");
const answerNumber = document.getElementById("answerNumber");
const continentOption = document.getElementById("continentOptions");

var currButton = null;

// loop through each button and add a click event listener
buttons.forEach(function(button) {
    button.addEventListener("click", function() {
        // Don't show the answer options, then button will reshow it later if need be
        answerType.style.display = "none";

        answerNumber.style.display = "block";
        startButton.style.display = "block";
        continentOption.style.display = "block";

        if (currButton !== null) {
            currButton.style.backgroundColor = "#476c4a";
        }
        button.style.backgroundColor = "#034006";

        currButton = button;
    });
});


// Add event listener for every game option -------------------------------------------------------

// Flags
const flagButton = document.getElementById('flag');

// Capitals
const capitalButton = document.getElementById('capital');
addAnswerListener(capitalButton);

// Specific Country
// Isn't a guessing game so should deactivate the answerNumber part too


function addAnswerListener(element) {
    element.addEventListener("click", function() {
        answerType.style.display = "block";
    });
}


// Set up the continent buttons for the game
var continent = document.getElementById("all");
continent.style.backgroundColor = "#034006";

const continentButtons = document.querySelectorAll(".continentButton");
continentButtons.forEach(function(continentButton) {
    continentButton.addEventListener("click", function() {
        if (continent != continentButton) {
            continent.style.backgroundColor = "#476c4a";
            continentButton.style.backgroundColor = "#034006";
            continent = continentButton;
        }
    });
});


// Set up the settings buttons for the game -------------------------------------------------------

const answerAll = document.getElementById("answerAll");
const answerTen = document.getElementById("answerTen");

var currNum = answerAll;
answerAll.style.backgroundColor = "#034006";
answerAll.addEventListener("click", function() {
    if (currNum != answerAll) {
        currNum.style.backgroundColor = "#476c4a";
        answerAll.style.backgroundColor = "#034006";
        currNum = answerAll;
    }
});
answerTen.addEventListener("click", function() {
    if (currNum != answerTen) {
        currNum.style.backgroundColor = "#476c4a";
        answerTen.style.backgroundColor = "#034006";
        currNum = answerTen;
    }
});


const answerChosen = document.getElementById("chosen");
const answerCountry = document.getElementById("country");
const answerRandom = document.getElementById("random");

var currOption = answerChosen;
answerChosen.style.backgroundColor = "#034006";
answerChosen.addEventListener("click", function() {
    if (currOption != answerChosen) {
        currOption.style.backgroundColor = "#476c4a";
        answerChosen.style.backgroundColor = "#034006";
        currOption = answerChosen;
    }
});
answerCountry.addEventListener("click", function() {
    if (currOption != answerCountry) {
        currOption.style.backgroundColor = "#476c4a";
        answerCountry.style.backgroundColor = "#034006";
        currOption = answerCountry;
    }
});
answerRandom.addEventListener("click", function() {
    if (currOption != answerRandom) {
        currOption.style.backgroundColor = "#476c4a";
        answerRandom.style.backgroundColor = "#034006";
        currOption = answerRandom;
    }
});


// Start button and game --------------------------------------------------------------------------
function startGame() {
    alert("Here");
    var game = new Capital("all", "chosen", "guessAll");
    alert("Here 2");
}