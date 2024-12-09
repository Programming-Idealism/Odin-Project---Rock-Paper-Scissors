'use strict'

// Psuedocode:

// 1). Create a function for the computer's choice
// 2). Create a function for the player's choice
// 3). Create a score for both the player and computer
// 4). Create a function that initiates the Game
// 5). Create a function that determines who won

const container = document.querySelector('.container')
const h1Element = document.createElement('h1')
const flexContainer = document.createElement('div')
const btn1 = document.createElement('button')
const btn2 = document.createElement('button')
const btn3 = document.createElement('button')
const result = document.createElement('div')
const reset = document.createElement('button')

btn1.classList.add('btn')
btn2.classList.add('btn')
btn3.classList.add('btn')
reset.classList.add('reset-btn')
result.classList.add('result')
flexContainer.classList.add('flex-container')

flexContainer.appendChild(btn1)
flexContainer.appendChild(btn2)
flexContainer.appendChild(btn3)


container.appendChild(h1Element)
container.appendChild(flexContainer)
container.appendChild(result)
container.appendChild(reset)

btn1.textContent = 'Rock'
btn2.textContent = 'Paper'
btn3.textContent = 'Scissors'
reset.textContent = 'Restart Game'
h1Element.textContent = `Let's play Rock-Paper-Scissors against the good ol' computer!`

reset.style.display = 'none'

btn1.addEventListener('click', () => playRound('rock'))
btn2.addEventListener('click', () => playRound('paper'))
btn3.addEventListener('click', () => playRound('scissors'))

reset.addEventListener('click', resetGame)


let humanScore = 0
let computerScore = 0
let gameCount = 0


function getComputerChoice(choice) {
    choice = Math.floor(Math.random() * 3)
    if (choice === 0) {
        return `rock`
    } else if (choice === 1) {
        return `paper`
    } else {
        return `scissors`
    }
}



function playRound(humanChoice, computerChoice) {
    computerChoice = getComputerChoice()
    gameCount++
    let outputMessage = ''
    outputMessage += `The player has choosen: <strong>${humanChoice}</strong><br>`
    outputMessage += `The computer has choosen: <strong>${computerChoice}</strong><br>`
    if (humanChoice === 'Invalid input!') outputMessage += 'Invalid output try again!<br>'
    if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        outputMessage += `<strong>You win this round!</strong><br>`
    }
    else if (humanChoice === computerChoice) {
        outputMessage += `<strong>It's a tie!</strong> <br>`
    }
    else {
        computerScore++
        outputMessage += `<strong>You've lost this round!</strong> <br>`
    }
    outputMessage += `Player score: ${humanScore} | Computer score: ${computerScore}<br>`
    outputMessage += `Round: ${gameCount}/5<br>`
    if (gameCount === 5) {
        if (humanScore > computerScore) {
            outputMessage += `<span>Game Over! You are the winner!</span>`
        } else if (humanScore < computerScore) {
            outputMessage += `<span>Game Over! You are the loser!</span>`
        } else {
            outputMessage += `<span>Game Over! It's a tie!</span>`
        }
        gameCount = 0
        humanScore = 0
        computerScore = 0
        reset.style.display = 'block'
        btn1.disabled = true
        btn2.disabled = true
        btn3.disabled = true
    }
    result.innerHTML = outputMessage
}

function resetGame() {
    gameCount = 0
    humanScore = 0
    computerScore = 0
    result.innerHTML = ''
    reset.style.display = 'none'

    btn1.disabled = false
    btn2.disabled = false
    btn3.disabled = false
}



