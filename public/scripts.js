// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
var game, gameType
document.addEventListener("DOMContentLoaded", function() {  
    game = document.querySelector('input[name="game"]:checked').value
    gameType = document.querySelector('input[name="gameType"]:checked').value
    toggleGame()
    toggleOpponent()
})

async function selectGame(elem) {
    game = elem.value
    toggleGame()
}

async function selectGameType(elem) {
    gameType = elem.value
    toggleOpponent()
}

async function playGame() {
    console.log(game)
    console.log(gameType)
}

async function toggleOpponent() {
    if(gameType == "opponent") {
        document.getElementsByClassName("choices")[0].hidden = false
        document.getElementsByClassName("chosenChoices")[0].hidden = false
    } else {
        document.getElementsByClassName("choices")[0].hidden = true
        document.getElementsByClassName("chosenChoices")[0].hidden = true
    }
}

async function toggleGame() {
    if(game == "rps") {
        document.getElementById("lizard").hidden = true
        document.getElementById("spock").hidden = true
    } else {
        document.getElementById("lizard").hidden = false
        document.getElementById("spock").hidden = false
    }
}