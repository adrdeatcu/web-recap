const roundText = document.querySelector("#roundText");
let roundResult = document.querySelector("#roundResult");
let score = document.querySelector("#score");

const rockButton = document.querySelector("#rockButton");
const paperButton = document.querySelector("#paperButton");
const scissorsButton = document.querySelector("#scissorsButton");

let humanScore = 0;
let computerScore = 0;

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

//FUNCTION FOR PROMT ANSWER
/*function getHumanChoice() { 
    let userAnswer = prompt("Choose: Rock/Paper/Scissors");
    let userAnswerLowerCase = userAnswer.toLowerCase();
    let firstCapitalLetter = userAnswerLowerCase.charAt(0).toUpperCase()
    let restOfTheWord = userAnswerLowerCase.slice(1);
    let finalOutput = firstCapitalLetter.concat(restOfTheWord);
    return finalOutput;
}*/


function playRound(humanChoice, computerChoice) {
    
    if(humanChoice === "Rock" && computerChoice === "Rock") {
        roundResult.textContent = "It's a tie! Rock-Rock";
        score.textContent = `${humanScore} - ${computerScore}`;
    }else if(humanChoice === "Rock" && computerChoice === "Paper") {
        roundResult.textContent = "You lose! Paper beats Rock";
        computerScore++;
        score.textContent = `${humanScore} - ${computerScore}`;
    }else if(humanChoice === "Rock" && computerChoice === "Scissors") {
        roundResult.textContent = "You win! Rock beats Scissors";
        humanScore++;
        score.textContent = `${humanScore} - ${computerScore}`;
    }else if(humanChoice === "Paper" && computerChoice === "Paper") {
        roundResult.textContent = "It's a tie! Paper-Paper";
        score.textContent = `${humanScore} - ${computerScore}`;
    }else if(humanChoice === "Paper" && computerChoice === "Rock") {
        roundResult.textContent = "You win! Paper beats Rock";
        humanScore++;
        score.textContent = `${humanScore} - ${computerScore}`;
    }else if(humanChoice === "Paper" && computerChoice === "Scissors") {
        roundResult.textContent = "You lose! Scissors beats Paper";
        computerScore++;
        score.textContent = `${humanScore} - ${computerScore}`;
    }else if(humanChoice === "Scissors" && computerChoice === "Scissors") {
        roundResult.textContent = "It's a tie! Scissors-Scissors";
        score.textContent = `${humanScore} - ${computerScore}`;
    }else if(humanChoice === "Scissors" && computerChoice === "Paper") {
        roundResult.textContent = "You win! Scissors beats Paper" ;
        humanScore++;
        score.textContent = `${humanScore} - ${computerScore}`;
    }
    else if(humanChoice === "Scissors" && computerChoice === "Rock") {
        roundResult.textContent = "You lose! Rock beats Scissors";
        computerScore++;
        score.textContent = `${humanScore} - ${computerScore}`;
    }            
}


function gameOver() {
    rockButton.disabled = true;
    paperButton.disabled = true;
    scissorsButton.disabled = true;
    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    resetButton.classList.add("resetButton");
    roundText.appendChild(resetButton);
}

function resetGame() {
    rockButton.disabled = false;
    paperButton.disabled = false;
    scissorsButton.disabled = false;
    humanScore = 0;
    computerScore = 0;
    roundResult.textContent = "";
    score.textContent = "";
    
}


rockButton.addEventListener("click", () => {
    playRound("Rock", getComputerChoice());
    if(humanScore >=5 || computerScore >=5) {
        gameOver();
        let resetButton = document.querySelector(".resetButton");
        resetButton.addEventListener("click", () =>{
            resetGame();
            roundText.removeChild(resetButton);
        })
    }
});
        
paperButton.addEventListener("click", () =>{
    playRound("Paper", getComputerChoice());
    if(humanScore >=5 || computerScore >=5) {
        gameOver();
        let resetButton = document.querySelector(".resetButton");
        resetButton.addEventListener("click", () =>{
            resetGame();
            roundText.removeChild(resetButton);
        })
    }
});
        
scissorsButton.addEventListener("click", () =>{
    playRound("Scissors", getComputerChoice());
    if(humanScore >=5 || computerScore >=5) {
        gameOver();
        let resetButton = document.querySelector(".resetButton");
        resetButton.addEventListener("click", () =>{
            resetGame();
            roundText.removeChild(resetButton);
        })
    }
});




    


