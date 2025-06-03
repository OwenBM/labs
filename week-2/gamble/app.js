let bankMoney = 100

// let bank = 100;

const players = [
    { teamNumber: 1, emoji: "🏃‍♂️", skill: 10, name: "D'Marcus Williums" },
    { teamNumber: 1, emoji: "🤾‍♂️", skill: 30, name: "Tyroil Smoochie-Wallace" },
    { teamNumber: 1, emoji: "🏇", skill: 88, name: "Jackmerius Tacktheratrix" },
    {
        teamNumber: 1,
        emoji: "🏌️‍♀️",
        skill: 15,
        name: "Javaris Jamar Javarison-Lamar",
    },
    { teamNumber: 1, emoji: "🏋️‍♂️", skill: 77, name: "D'Pez Poopsie" },
    { teamNumber: 1, emoji: "🏌️‍♂️", skill: 21, name: "D'Jasper Probincrux III" },
    { teamNumber: 1, emoji: "🤾", skill: 5, name: "Leoz Maxwell Jilliumz" },
    { teamNumber: 1, emoji: "🏂", skill: 99, name: "Hingle McCringleberry" },
    { teamNumber: 1, emoji: "🧘‍♀️", skill: 50, name: "L'Carpetron Dookmarriot" },
    { teamNumber: 1, emoji: "🚶‍♀️", skill: 1, name: "Xmus Jaxon Flaxon-Waxon" },
    { teamNumber: 2, emoji: "🏋️‍♀️", skill: 61, name: "Saggitariutt Jefferspin" },
    { teamNumber: 2, emoji: "🤺", skill: 34, name: "Quatro Quatro" },
    { teamNumber: 2, emoji: "🏄", skill: 71, name: "X-Wing @Aliciousness" },
    { teamNumber: 2, emoji: "🧜‍♂️", skill: 76, name: "Bisquiteen Trisket" },
    {
        teamNumber: 2,
        emoji: "🤸",
        skill: 47,
        name: "Scoish Velociraptor Maloish",
    },
    { teamNumber: 2, emoji: "⛹️‍♀️", skill: 23, name: "Donkey Teeth" },
    {
        teamNumber: 2,
        emoji: "🕴️",
        skill: 58,
        name: "T.J. A.J. R.J. Backslashinfourth V",
    },
    { teamNumber: 2, emoji: "💃", skill: 99, name: "Firstname Lastname" },
    { teamNumber: 2, emoji: "🧍‍♂️", skill: 3, name: "Dan Smith" },
    { teamNumber: 2, emoji: "🐅", skill: 100, name: "Tiger" },
];

function drawTeam1() {
    const team1Container = document.getElementById("team1");
    let team1Content = "";

    for (let player of players) {
        if (player.teamNumber === 1) {
            team1Content += `
        <div class="player">
            <span class="emoji">${player.emoji}</span>
            <span class="name">${player.name}</span>
            <span class="skill">Skill: ${player.skill}</span>
        </div>
        `;
        }
    }

    team1Container.innerHTML = team1Content;
}

function draftPlayers() {
    players.forEach(player => {
        const randomTeamNumber = Math.ceil(Math.random() * 2)
        player.teamNumber = randomTeamNumber
    })
    drawTeamOne()
    drawTeamTwo()
}
function drawTeamOne() {
    let teamOneEmojis = ""
    const teamOnePlayers = players.filter(player => player.teamNumber == 1)
    teamOnePlayers.forEach(player => teamOneEmojis += player.emoji)
    const teamOneElement = document.getElementById("team1")
    teamOneElement.innerText = teamOneEmojis
}
function drawTeamTwo() {
    let teamTwoEmojis = ""
    const teamTwoPlayers = players.filter(player => player.teamNumber == 2)
    teamTwoPlayers.forEach(player => teamTwoEmojis += player.emoji)
    const teamTwoElement = document.getElementById("team2")
    teamTwoElement.innerText = teamTwoEmojis
}


// function bet5Right() {
//     bankMoney -= 5
//     totalMoney()
// }

// function bet25Right() {
//     bankMoney -= 25
//     totalMoney()
// }

// function bet100Right() {
//     bankMoney -= 100
//     totalMoney()
// }
// // function betallRight() {
// //     bankMoney -= 5
// //     totalMoney()
// // }
// function bet5Left() {
//     bankMoney -= 5
//     totalMoney()
// }
// function bet25Left() {
//     bankMoney -= 25
//     totalMoney()
// }
// function bet100Left() {
//     bankMoney -= 100
//     totalMoney()
// }
// // function betallLeft() {
// //     bankMoney -= 5
// //     totalMoney()
// // }


function totalMoney() {
    let trueMoney = document.getElementById("totalMoney")
    trueMoney.innerText = bankMoney
}

function betTeam(teamNumber, betAmount) {
    if (betAmount > bankMoney) {
        window.alert("youre too broke rn friend")
        return
    }

    let yourTeamScore = 0
    let opposingTeamScore = 0

    players.forEach(player => {
        if (player.teamNumber == teamNumber) {
            yourTeamScore += player.skill
        }
        else {
            opposingTeamScore += player.skill
        }
    })

    if (yourTeamScore > opposingTeamScore) {
        bankMoney += betAmount
    }
    else if (opposingTeamScore > yourTeamScore) {
        bankMoney -= betAmount
    }
    checkIfBroke()
    draftPlayers()
    drawBankMoney()
}

function checkIfBroke() {
    if (bankMoney > 0) {
        return
    }

    const playAgain = window.confirm("you lose, start again")

    if (playAgain == true) {
        bankMoney = 100
    }
    else {
        window.close()
    }
}

function drawBankMoney() {
    const bankElem = document.getElementById("bankMoney")
    bankElem.innerText = `$${bankMoney}`
}

draftPlayers()
drawBankMoney()
