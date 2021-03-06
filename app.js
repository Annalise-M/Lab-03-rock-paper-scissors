import { getRandomThrow } from './get-random-throw.js';
import { checkResults } from './get-random-throw.js';

const guessButton = document.querySelector('#guess-button');
const resetButton = document.querySelector('#reset-button');
// const radio = document.querySelector('input:checked');
const numOfGames = document.querySelector('#num-of-games');
const numOfTies = document.querySelector('#num-of-ties');
const numOfWins = document.querySelector('#num-of-wins');
const numOfLosses = document.querySelector('#num-of-losses');

// initialize state
let totalGuesses = 0;
let gamesWon = 0;
let gamesLost = 0;
let gameTies = 0;

// set event listeners to update state and DOM
guessButton.addEventListener('click', () => {
    totalGuesses++;

    numOfGames.textContent = totalGuesses;

    const radios = document.querySelector('input:checked');
    let userGuess = radios.value;

    let computerChoice = getRandomThrow();
    checkResults(userGuess, computerChoice);

    if (checkResults(userGuess, computerChoice) === 'WIN!') {
        gamesWon++;
        numOfWins.textContent = gamesWon;
    } else if (
        checkResults(userGuess, computerChoice) === 'LOSE') {
        gamesLost++;
        numOfLosses.textContent = gamesLost;
    } else {
        gameTies++;
        numOfTies.textContent = gameTies;
    }
    // console.log(gamesWon, 'games won');
    // console.log(gameTies, 'game ties');
    // console.log(gamesLost, 'games lost');
    // console.log(totalGuesses, 'total guesses');

    numOfWins.textContent = `Wins: ${gamesWon}`;
    numOfTies.textContent = `Ties: ${gameTies}`;
    numOfLosses.textContent = `Losses: ${gamesLost}`;
    numOfGames.textContent = `Games Played: ${totalGuesses}`;
});

resetButton.addEventListener('click', () => {
    totalGuesses = 0;
    gamesWon = 0;
    gameTies = 0;
    gamesLost = 0;
        
    numOfWins.textContent = `Wins: ${gamesWon}`;
    numOfTies.textContent = `Ties: ${gameTies}`;
    numOfLosses.textContent = `Losses: ${gamesLost}`;
    numOfGames.textContent = `Games Played: ${totalGuesses}`;
});
