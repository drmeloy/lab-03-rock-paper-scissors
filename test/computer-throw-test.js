import { throwValue, checkResults } from '../computer-throw.js';

const test = QUnit.test;

test('throwValue will return rock when given 0', function(assert) {
    const num = 0;

    const throwResult = throwValue(num);

    assert.equal(throwResult, 'rock');
});

test('throwValue will return paper when given 1', function(assert) {
    const num = 1;

    const throwResult = throwValue(num);

    assert.equal(throwResult, 'paper');
});

test('throwValue will return rock when given 2', function(assert) {
    const num = 2;

    const throwResult = throwValue(num);

    assert.equal(throwResult, 'scissors');
});

test('checkResults will return draw when userChoice === computerChoice', function(assert) {
    const userChoice = 'rock';
    const computerChoice = 'rock';

    const matchResult = checkResults(userChoice, computerChoice);

    assert.equal(matchResult, 'draw');
});

test('checkResults will return loss when userChoice === rock && computerChoice === paper', function(assert) {
    const userChoice = 'rock';
    const computerChoice = 'paper';

    const matchResult = checkResults(userChoice, computerChoice);

    assert.equal(matchResult, 'loss');
});

test('checkResults will return win when userChoice === rock && computerChoice === scissors', function(assert) {
    const userChoice = 'rock';
    const computerChoice = 'scissors';

    const matchResult = checkResults(userChoice, computerChoice);

    assert.equal(matchResult, 'win');
});

test('checkResults will return loss when userChoice === paper && computerChoice === scissors', function(assert) {
    const userChoice = 'paper';
    const computerChoice = 'scissors';

    const matchResult = checkResults(userChoice, computerChoice);

    assert.equal(matchResult, 'loss');
});

test('checkResults will return win when userChoice === paper && computerChoice === rock', function(assert) {
    const userChoice = 'paper';
    const computerChoice = 'rock';

    const matchResult = checkResults(userChoice, computerChoice);

    assert.equal(matchResult, 'win');
});

test('checkResults will return loss when userChoice === scissors && computerChoice === rock', function(assert) {
    const userChoice = 'scissors';
    const computerChoice = 'rock';

    const matchResult = checkResults(userChoice, computerChoice);

    assert.equal(matchResult, 'loss');
});

test('checkResults will return win when userChoice === scissors && computerChoice === paper', function(assert) {
    const userChoice = 'scissors';
    const computerChoice = 'paper';

    const matchResult = checkResults(userChoice, computerChoice);

    assert.equal(matchResult, 'win');
});