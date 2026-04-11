function getRandomObject() {
    let randomNumber = Math.random();
    if(randomNumber<=0.33) {
        return "Rock";
    }else if(randomNumber>0.33 && randomNumber<= 0.66) {
        return "Paper";
    }else {
        return "Scissors";
    }
}

function getComputerChoice(){
    let randomObject = getRandomObject();
    return randomObject;
}

function getHumanChoice() {
    let userAnswer = prompt("Choose: Rock/Paper/Scissors");
    let userAnswerLowerCase = userAnswer.toLowerCase();
    let firstCapitalLetter = userAnswerLowerCase.charAt(0).toUpperCase()
    let restOfTheWord = userAnswerLowerCase.slice(1);
    let finalOutput = firstCapitalLetter.concat(restOfTheWord);
    return finalOutput;
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;
    function playRound(humanChoice, computerChoice) {
        if(humanChoice === "Rock" && computerChoice === "Rock") {
            console.log("It's a tie! Rock-Rock");
        }else if(humanChoice === "Rock" && computerChoice === "Paper") {
            console.log("You lose! Paper beats Rock");
            computerScore++;
        }else if(humanChoice === "Rock" && computerChoice === "Scissors") {
            console.log("You win! Rock beats Scissors");
            humanScore++;
        }else if(humanChoice === "Paper" && computerChoice === "Paper") {
            console.log("It's a tie! Paper-Paper");
        }else if(humanChoice === "Paper" && computerChoice === "Rock") {
            console.log("You win! Paper beats Rock");
            humanScore++;
        }else if(humanChoice === "Paper" && computerChoice === "Scissors") {
            console.log("You lose! Scissors beats Paper");
            computerScore++;
        }else if(humanChoice === "Scissors" && computerChoice === "Scissors") {
            console.log("It's a tie! Scissors-Scissors");
        }else if(humanChoice === "Scissors" && computerChoice === "Paper") {
            console.log("You win! Scissors beats Paper");
            humanScore++;
        }
        else if(humanChoice === "Scissors" && computerChoice === "Rock") {
            console.log("You lose! Rock beats Scissors");
            computerScore++;
        }            
    }

    for(let i=1; i<=5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`User Score: ${humanScore}`);
        console.log(`Computer Score:${computerScore}`);
    
    }

}

playGame();
