export const throwValue = (num) => {

    if (num === 0){
        return 'rock';
    } 
    
    if (num === 1){
        return 'paper';
    } 
    
    if (num === 2){
        return 'scissors';
    }
};

export const checkResults = (userChoice, computerChoice) => {

    if (userChoice === computerChoice){
        return 'draw';
    } 
    
    if (userChoice === 'rock' && computerChoice === 'paper'){
        return 'loss';
    } 
    
    if (userChoice === 'rock' && computerChoice === 'scissors'){
        return 'win';
    } 
    
    if (userChoice === 'paper' && computerChoice === 'scissors'){
        return 'loss';
    }

    if (userChoice === 'paper' && computerChoice === 'rock'){
        return 'win';
    }

    if (userChoice === 'scissors' && computerChoice === 'rock'){
        return 'loss';
    }

    if (userChoice === 'scissors' && computerChoice === 'paper'){
        return 'win';
    }
};

