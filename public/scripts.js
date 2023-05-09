// If you would like to see some examples of similar code to make an interface interact with an API, 
// check out the coin-server example from a previous COMP 426 semester.
// https://github.com/jdmar3/coinserver
var game, gameType, shot
document.addEventListener("DOMContentLoaded", function() {  
    game = document.querySelector('input[name="game"]:checked').value
    gameType = document.querySelector('input[name="gameType"]:checked').value
    toggleGame()
    toggleOpponent()
})

async function selectGame(elem) {
    game = elem.value
    shot = undefined
    toggleGame()
    resetShotChoice()
}

async function selectGameType(elem) {
    gameType = elem.value
    toggleOpponent()
}

async function playGame() {
    let baseurl = document.location.href + 'app/'
    let url = baseurl + game + '/play'
    if(gameType == "opponent") {
        url += '/' + shot
    }
    let response = await fetch(url)
    let data = await response.json()
    if (gameType == "opponent") {
        let player = "You: " + data.player + "<br>"
        let opponent = "Opponent: " + data.opponent + "<br>"
        let result = "Result: " + data.result
        document.getElementById("result").innerHTML = player + opponent + result
    } else {
        let player = data.player.toUpperCase()
        document.getElementById("result").innerHTML = player
    }
    document.getElementById("results").showModal()
}

async function toggleOpponent() {
    if(gameType == "opponent") {
        document.getElementsByClassName("choices")[0].hidden = false
        document.getElementsByClassName("chosenChoice")[0].hidden = false
    } else {
        document.getElementsByClassName("choices")[0].hidden = true
        document.getElementsByClassName("chosenChoice")[0].hidden = true
    }
}

async function toggleGame() {
    document.getElementById("playButton").disabled = true
    if(game == "rps") {
        document.getElementById("lizard").hidden = true
        document.getElementById("spock").hidden = true
    } else {
        document.getElementById("lizard").hidden = false
        document.getElementById("spock").hidden = false
        
    }
}

async function selectChoice(elem) {
    chosenShot = "chosen" + elem.id
    shot = elem.id
    resetShotChoice()
    document.getElementById(chosenShot).hidden = false
    document.getElementById("playButton").disabled = false
}

async function resetShotChoice(){
    let buttons = document.querySelectorAll(".chosenChoice button");
    for (let button of buttons) {
        button.hidden = true
    }
}

async function closeResults() {
    document.getElementById("results").close()
}

async function closeRules() {
    document.getElementById("rpsRules").close()
    document.getElementById("rpslsRules").close()
}

async function showRules() {
    if(game == "rps") {
        document.getElementById("rpsRules").showModal()
    } else {
        document.getElementById("rpslsRules").showModal()
    }
}

async function resetGame() {
    location.reload(true)
}