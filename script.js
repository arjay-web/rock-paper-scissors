const btnPick = document.querySelectorAll(".btnPick");
const message = document.querySelector("#message");
const scoreBoardComputer = document.querySelector(".computerScore");
const scoreBoardHuman = document.querySelector(".humanScore");

let humanScore = 0;
let computerScore = 0;
scoreBoardHuman.textContent = humanScore;
scoreBoardComputer.textContent = computerScore;

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

function playRound(humanChoice, computerChoice){
    if(humanChoice === computerChoice){
        return message.textContent =  `It's a draw`;
    }

    if((humanChoice === "Rock" && computerChoice === "Scissors")||
    (humanChoice === "Paper" && computerChoice === "Rock") ||
    (humanChoice === "Scissors" && computerChoice === "Paper") 
    ){
        message.textContent = `1 point for you: ${humanChoice} beats ${computerChoice}`
        humanScore++;
        scoreBoardHuman.textContent = humanScore;
    }else if((computerChoice === "Rock" && humanChoice === "Scissors")||
    (computerChoice === "Paper" && humanChoice === "Rock") ||
    (computerChoice === "Scissors" && humanChoice === "Paper")){
        message.textContent = `1 point for computer: ${computerChoice} beats ${humanChoice}`
        computerScore++;
        scoreBoardComputer.textContent = computerScore;
    }
     
}

function resetGame(){
    humanScore = 0;
    computerScore = 0;
    scoreBoardHuman.textContent = humanScore;
    scoreBoardComputer.textContent = computerScore;
}

btnPick.forEach(button=>{
    button.addEventListener('click', ()=>{
        const computerSelection = getComputerChoice();
        playRound(button.value, computerSelection)
        if(humanScore === 5 || computerScore === 5){
            if(humanScore === 5){
                message.textContent = `You win!!! With the score of ${humanScore}:${computerScore}`
            }else{
                message.textContent = `Computer win!!! With the score of ${computerScore}:${humanScore}`
            }
            resetGame();
        }
    })
})
