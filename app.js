import { throwValue, checkResults } from './computer-throw.js';

const submitButton = document.getElementById('submit');
const userChoiceDisplay = document.getElementById('user-choice');
const computerChoiceDisplay = document.getElementById('computer-choice');
const winLossStatement = document.getElementById('win-loss-statement');
const totalWinsDisplay = document.getElementById('total-wins');
const totalLossessDisplay = document.getElementById('total-losses');
const totalDrawsDisplay = document.getElementById('total-draws');
const totalMatchesDisplay = document.getElementById('total-matches');
const resetButton = document.getElementById('reset-button');

let totalWins = 0;
let totalLosses = 0;
let totalDraws = 0;
let totalMatches = 0;

totalWinsDisplay.textContent = totalWins;
totalLossessDisplay.textContent = totalLosses;
totalDrawsDisplay.textContent = totalDraws;
totalMatchesDisplay.textContent = totalMatches;

const updateResults = (matchResult) => {
    if (matchResult === 'win'){
        totalWins += 1;
    } else if (matchResult === 'loss'){
        totalLosses += 1;
    } else if (matchResult === 'draw'){
        totalDraws += 1;
    }
    totalMatches += 1;
    totalWinsDisplay.textContent = totalWins;
    totalLossessDisplay.textContent = totalLosses;
    totalDrawsDisplay.textContent = totalDraws;
    totalMatchesDisplay.textContent = totalMatches;
};

const setWinLossStatement = (matchResult) => {
    switch (matchResult){
        case 'win':
            winLossStatement.textContent = 'YOU!';
            break;
        case 'loss':
            winLossStatement.textContent = 'THE COMPUTER!';
            break;
        case 'draw':
            winLossStatement.textContent = 'NOBODY! IT\'S A DRAW!'; 
    }
};

const updateChoiceDisplays = (userChoice, computerChoice, matchResult) => {
    userChoiceDisplay.textContent = userChoice;
    computerChoiceDisplay.textContent = computerChoice;
    setWinLossStatement(matchResult);
};

const runMatch = () => {
    const selectedRadioValue = document.querySelector('input:checked');
    const userChoice = selectedRadioValue.value;
    const computerChoice = throwValue(Math.floor(Math.random() * 3));
    const matchResult = checkResults(userChoice, computerChoice);
    updateChoiceDisplays(userChoice, computerChoice, matchResult);
    updateResults(matchResult);
    setWinLossStatement(matchResult);
};

const resetScore = () => {
    totalWins = 0;
    totalLosses = 0;
    totalDraws = 0;
    totalMatches = 0;
    totalWinsDisplay.textContent = totalWins;
    totalLossessDisplay.textContent = totalLosses;
    totalDrawsDisplay.textContent = totalDraws;
    totalMatchesDisplay.textContent = totalMatches;
    userChoiceDisplay.textContent = '';
    computerChoiceDisplay.textContent = '';
};

submitButton.addEventListener('click', runMatch);
resetButton.addEventListener('click', resetScore);