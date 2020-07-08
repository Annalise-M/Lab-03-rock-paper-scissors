// import functions and grab DOM elements

const button = document.querySelector('#guess-button');

const results = document.querySelector('#displayed-results');

// initialize state
let winsData = 0;
let totalGuesses = 0;

// set event listeners to update state and DOM
button.addEventListener('click', () => {
    
    totalGuesses++;

    const checkedRadio = document.querySelector('input:checked');
    const userGuess = checkedRadio.value;

    let correctGuess = null;

    const myNumber = Math.random();


    // generate a random correct answer: heads or tails
    
    
    Math.random(Math.random() * 3.3333);

    // we need to compar the user guess to the correct answer
    totalGuesses.textContent = "total: " + totalGuesses;
    wins.textContent = "total: " + totalGuesses;
    losses.textContent = "total: " + totalGuesses;
    current.textContent = "total: " + lossesData;
});