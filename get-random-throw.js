export function getRandomThrow() {
    let getRandomThrow = Math.ceil(Math.random() * 3.3333);
    if (getRandomThrow === 1) {
        return 'rock';
    } else if (getRandomThrow === 2) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

export function checkResults(userThrow, computerThrow) {
    if (userThrow === computerThrow) {
        return 'DRAW';
    } 
    else if (userThrow === 'rock' && computerThrow === 'paper') {
        return 'LOSE';
    } else if (userThrow === 'rock' && computerThrow === 'scissors') {
        return 'WIN!';
    } else if (userThrow === 'paper' && computerThrow === 'rock') {
        return 'WIN!';
    } else if (userThrow === 'paper' && computerThrow === 'scissors') {
        return 'LOSE';
    } else if (userThrow === 'scissors' && computerThrow === 'paper') {
        return 'WIN!';
    } else if (userThrow === 'scissors' && computerThrow === 'rock') {
        return 'LOSE';
    }
}