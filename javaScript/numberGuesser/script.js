let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

function generateTarget(){
    return Math.floor(Math.random()*9);
}
function compareGuesses(human,computer,secret){
    /*checks if the difference between the huamn guess 
    and the secret number is smaller than the difference 
    between the computer guess and the secret number
    */
    if((human-secret)<(computer-secret)){
        return true;
    }else {return false;}
}
console.log(compareGuesses(1,2,3));