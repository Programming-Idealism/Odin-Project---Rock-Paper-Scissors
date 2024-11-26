'use strict'

// Psuedocode:

// 1). Create a function for the computer's choice
// 2). Create a function for the player's choice
// 3). Create a score for both the player and computer
// 4). Create a function that initiates the Game
// 5). Create a function that determines who won

let humanScore = 0
let computerScore = 0

// console.log(getComputerChoice())

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


// console.log(getHumanChoice())

function getHumanChoice() {
    let userInput = prompt('Will you choose rock, paper or scissors?')
    userInput = userInput.toLowerCase()
    if (!isNaN((userInput))) return 'Invalid input!'
    if (userInput === 'rock' || userInput === 'paper' || userInput === 'scissors') {
        return userInput
    } else return 'Invalid input!'
}

// console.log(playRound())

function playRound(humanChoice, computerChoice) {
    humanChoice = getHumanChoice()
    computerChoice = getComputerChoice()
    console.log(`The player has choosen: ${humanChoice}`)
    console.log(`The computer has choosen: ${computerChoice}`)
    if (humanChoice === 'Invalid input!') return 'Invalid input please try again!'
    if (humanChoice === 'rock' && computerChoice === 'scissors' || humanChoice === 'paper' && computerChoice === 'rock' || humanChoice === 'scissors' && computerChoice === 'paper') {
        humanScore++
        console.log(`Player score is: ${humanScore}`)
        return 'You win!'
    }
    else if (humanChoice === computerChoice) return `It's a Tie`
    else {
        computerScore++
        console.log(`Computer score is: ${computerScore}`)
        return 'You lost!'
    }
}

console.log(playGame())

function playGame() {
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
    console.log(playRound())
}
