
function getComputerChoice(){
   let computerChoice = Math.floor(Math.random() * 3)
   if(computerChoice === 0){
    return "Rock";
   }else if(computerChoice === 1){
    return "Paper";
   }else{
    return "Scissors";
   }
}

function getHumanChoice (){
    let humanChoice = prompt("Input your pick");
  return humanChoice;
}

    let humanScore = 0;
    let computerScore = 0;

function playRound(humanChoice, computerChoice){
   const userChoice = humanChoice.charAt(0).toUpperCase() + humanChoice.slice(1).toLowerCase();
   if(userChoice === "Rock" && computerChoice === "Paper"){
    console.log("You Lose!!! Paper beats Rock");
    computerScore++;
   }else if(userChoice === "Rock" && computerChoice === "Scissors"){
    console.log("You Win!!! Rock beats Scissors");
    humanScore++;
   }else if(userChoice === "Rock" && computerChoice === "Rock"){
    console.log("Its a Draw!!!");
   }else if(userChoice === "Paper" && computerChoice === "Rock"){
    console.log("You Win!!! Paper beats Rock");
    humanScore++;
   }else if(userChoice === "Paper" && computerChoice === "Scissors"){
    console.log("You Lose!!! Scissors beats Paper");
    computerScore++;
   }else if(userChoice === "Paper" && computerChoice === "Paper"){
    console.log("Its a Draw");
   }else if(userChoice === "Scissors" && computerChoice === "Paper"){
    console.log("You Win!!! Scissors beats Paper");
    humanScore++;
   }else if(userChoice === "Scissors" && computerChoice === "Rock"){
    console.log("You Lose!!! Rock beats Scissors");
    computerScore++;
   }else{
    console.log("Its a Draw");
   }
}
let gameRound = 1;
function playGame(){
    
    if(gameRound <= 5){
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        gameRound++;
        console.log(`Human: ${humanScore} Computer: ${computerScore}`)
        playGame();
    }else if(gameRound === 6){
        if(humanScore > computerScore){
            console.log(`Human Win`);
        }else if(humanScore < computerScore){
            console.log(`Computer Win`);
        }else{
            console.log("We have a draw");
        }
    }

}

playGame();