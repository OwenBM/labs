let home = 0
let away = 0

function homePlus1() {
    home += 1
    // console.log("Home Score is ", home)
    HomeScore()
}
function homePlus2() {
    home += 2
    HomeScore()
}
function homeMinus1() {
    home -= 1
    HomeScore()
}

function awayPlus1() {
    away += 1
    // console.log("Away Score is ", away)
    AwayScore()
}
function awayPlus2() {
    away += 2
    AwayScore()
}
function awayMinus1() {
    away -= 1
    AwayScore()
}

function resetScore() {
    let trueHomeScore = document.getElementById("home-score")
    trueHomeScore.innerText = 0
    let trueAwayScore = document.getElementById("away-score")
    trueAwayScore.innerText = 0
    // theres no way this is the intended solution
}

function HomeScore() {
    let trueHomeScore = document.getElementById("home-score")
    trueHomeScore.innerText = home
}
function AwayScore() {
    let trueAwayScore = document.getElementById("away-score")
    trueAwayScore.innerText = away
}


