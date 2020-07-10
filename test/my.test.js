// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { getRandomThrow, checkResults } from '../get-random-throw.js';

const test = QUnit.test;

test('it should take in a number and return that number squared', function(assert) {
        //Arrange
        // Set up your parameters and expectations
    const expected = true;
        //Act 
        // Call the function you're testing and set the result to a const
    const actual = getRandomThrow();
        //Assert
        // Make assertions about what is expected versus the actual result
    assert.equal(expected, actual === 'rock' || actual === 'paper' || actual === 'scissors');
});

test('it should check the users throw against the computer throw', function(assert) {
   //Arrange
    // Set up your parameters and expectations
    const userThrow = 'rock';
    const computerThrow = 'rock';
    const expected = 'DRAW';
    
    const userThrow2 = 'paper';
    const computerThrow2 = 'rock';
    const expected2 = 'WIN!';

    const userThrow3 = 'paper';
    const computerThrow3 = 'scissors';
    const expected3 = 'LOSE';
  
        //Act 
        // Call the function you're testing and set the result to a const
    const results = checkResults(userThrow, computerThrow);
    const results2 = checkResults(userThrow2, computerThrow2);
    const results3 = checkResults(userThrow3, computerThrow3);

        //Assert
        // Make assertions about what is expected versus the actual result
    assert.equal(results, expected);
    assert.equal(results2, expected2);
    assert.equal(results3, expected3);

});
