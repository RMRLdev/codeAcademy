let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*9);
}
function getAbsoluteDistance(num1,num2){
    return num1-num2;
}
function compareGuesses(human,computer,secret){
    if(human<0||human>9){
        alert("please use a number between 0 and 9");
    }
    /*checks if the difference between the huamn guess 
    and the secret number is smaller than the difference 
    between the computer guess and the secret number
    */
    if(getAbsoluteDistance(human,secret)<getAbsoluteDistance(computer-secret)){
        return true;
    }else {return false;}
}
function updateScore(winner){
    if(winner==='human'){
        humanScore++;
    }else if(winner==='computer'){
        computerScore++;
    }else{
        console.log("error");
    }
}
function advanceRound(){
    currentRoundNumber++;
}