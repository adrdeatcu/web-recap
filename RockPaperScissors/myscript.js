

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
    let userAnswer = prompt("Choose: Rock/Paper/Scissor");
    return userAnswer;
}

console.log(getComputerChoice());
console.log(getHumanChoice());