
let ComScore = document.querySelector('.Cscr');
let PerScore = document.querySelector('.Pscr');
let result = document.querySelector('.result');
const Buttons = document.querySelectorAll('button');


let userscore = 0;
let computerscore = 0;



Buttons.forEach((button) => { button.addEventListener('click', function(){
    const playerchoise = button.id;
    console.log(playerchoise);
    const computerChoise = computerPlay();
    console.log(computerChoise);
    playGame(playerchoise, computerChoise);

    })
});


function computerPlay(){
    let moves = ['rock', 'paper', 'scissor'];
    return moves[Math.floor(Math.random() * moves.length)];
}
    
function playRound(playerSelection, computerSelection){
    if (playerSelection === 'rock' && computerSelection === 'rock') {
        result.textContent = 'it is a tie'; 
    } else if (playerSelection === 'rock' && computerSelection === 'paper') {
        computerscore++;
        ComScore.textContent = `Computer Score: ${computerscore}`;
        result.textContent = 'Computer Wins! paper beats rock';
    } else if (playerSelection === 'rock' && computerSelection === 'scissor'){
        userscore++;
        PerScore.textContent = `Person Score: ${userscore}`;
        result.textContent = 'You win! Rock beats scissor';
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        userscore++;
        PerScore.textContent = `Person Score: ${userscore}`;
        result.textContent = 'You win! paper beats rock';
    } else if(playerSelection === 'paper' && computerSelection === 'paper'){
        result.textContent = 'It is a tie';
    } else if (playerSelection === 'paper' && computerSelection === 'scissor'){
        computerscore++;
        ComScore.textContent = `Computer Score: ${computerscore}`;
        result.textContent = 'Computer wins! scissor cuts paper';
    } else if (playerSelection === 'scissor' && computerSelection === 'rock') {
        computerscore++;
        ComScore.textContent = `Computer Score: ${computerscore}`;
        result.textContent = 'Computer wins! rock smashes scissor';
    } else if (playerSelection === 'scissor' && computerSelection === 'paper') {
        userscore++;
        PerScore.textContent = `Person Score: ${userscore}`;
        result.textContent = 'You win! scissor cuts paper';
    } else if (playerSelection === 'scissor' && computerSelection === 'scissor') {
        result.textContent = 'It is a tie';
    } else {
        result.textContent = 'Please choose the right move';
    }
}


function playGame(playerchoise, computerChoise){
    let playerSelection = playerchoise;
    let computerSelection = computerChoise;
    playRound(playerSelection, computerSelection);

    if (userscore == 5) {
        result.textContent = 'Yeah! You beat computer';
        userscore = 0
        computerscore = 0;
        PerScore.textContent = `Person Score: ${userscore}`;
        ComScore.textContent = `Computer Score: ${computerscore}`;
    } else if (computerscore == 5){
        result.textContent = 'Computer beats human What we gonna do now?';
        userscore = 0
        computerscore = 0;
        ComScore.textContent = `Computer Score: ${computerscore}`;
        PerScore.textContent = `Person Score: ${userscore}`;
    }

}









































