// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
var game, gameType
document.addEventListener("DOMContentLoaded", function() {  
    game = document.querySelector('input[name="game"]:checked').value
    gameType = document.querySelector('input[name="gameType"]:checked').value
})

async function selectGame(elem) {
    game = elem.value
}

async function selectGameType(elem) {
    gameType = elem.value
}

async function playGame() {
    console.log(game)
    console.log(gameType)
}
