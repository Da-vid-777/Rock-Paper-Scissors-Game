let scoreOne = 0
let scoreTwo = 0
const buttons = document.querySelectorAll('.btn'); 
const playerPickDisplay = document.getElementById('player-pick'); 
const computerPickDisplay = document.getElementById('computer-pick');
const result = document.getElementById('result')

//function to generate the computer's choice
function getComputerChoice(){
    const randomNum = Math.floor(Math.random()*3);
    const choices = ['Rock','Paper','Scissors'];
    return choices[randomNum]; //this returns the computer's choice based on the random number
}




//Adding event listener to all buttons
buttons.forEach(button => {
    button.addEventListener('click', function() {
        const playerChoice = this.textContent; // Get the text of the button clicked
        playerPickDisplay.textContent = `Player's Pick: ${playerChoice}`; 
        const computerChoice = getComputerChoice();

        computerPickDisplay.textContent = `Computer's Pick: ${computerChoice}`;



        function showScoreOne(){
            let playerScore = document.getElementById("pscore");
            playerScore.textContent = scoreOne;
        }


        function showScoreTwo(){
            let computerScore = document.getElementById("cscore");
            computerScore.textContent = scoreTwo;
        }



        if
        (
             playerChoice == 'Scissors' && computerChoice =='Paper'||
            playerChoice == 'Paper' &&  computerChoice =='Rock'||
            playerChoice == 'Rock' && computerChoice == 'Scissors'
        ) {
            document.getElementById("result").textContent = "You Won";
            scoreOne++ ;
            showScoreOne()

        } else if( playerChoice === computerChoice ) {
            document.getElementById("result").textContent = "A Tie"
        } else {
            document.getElementById("result").textContent = "You lost";
            scoreTwo++ ;
            showScoreTwo()
        }

    })
})


