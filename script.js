

console.log("Hello World!");

let gameWinner = "z";
//let rndWinner = "a";


function getComputerChoice()    {
    let x=(Math.floor(Math.random() * 9) + 1);  //rand 0-1 times 9 = 0-9, floor 0-8, plus 1 = 1-9

    if (x <= 3)  { 
        return "Rock";          //1,2,3 = Rock
    } else if (x >= 7)  {
        return "Paper";         //7,8,9 = Paper
    } else {
        return "Scissors"       //4,5,6 = Scissors
    }
    //return x;    used in testing randomNum generator
}

//let compChoice = getComputerChoice();
//console.log(compChoice);

function getUserChoice()    {

    let choiceStr = prompt("Enter your choice (R / P / S");
    
    if ((choiceStr === 'r') || (choiceStr === 'R'))   {
        return "Rock";
    }  else if ((choiceStr === 'p') || (choiceStr === 'P'))   {
        return "Paper";
    }   else if ((choiceStr === 's') || (choiceStr === 'S'))   {
        return "Scissors";
    } else{
                return "Invalid";
    }


}

//let userChoice = getUserChoice();
//console.log(userChoice);
function playGame(numRnds) {

    let userScore = 0;
    let compScore = 0;
    let winner = "a";
    let rndWinner = "b";

    function playRound(userChoice, compChoice)  {

        if ((userChoice.toLowerCase() === 'rock') && (compChoice.toLowerCase() === 'rock')){
                console.log("Tie! Play Again!");
                return "t";
        }   else if ((userChoice.toLowerCase() === 'rock') && (compChoice.toLowerCase() === 'paper')){
                //console.log("You Lose! Paper beats Rock. Better luck next time!");
                return "c";
        }   else if ((userChoice.toLowerCase() === 'rock') && (compChoice.toLowerCase() === 'scissors')){
                //console.log("You Win! Rock beats Scissors.");
                return "u";
        }   else if ((userChoice.toLowerCase() === 'paper') && (compChoice.toLowerCase() === 'rock')) {
                //console.log("You Win! Paper beats Rock.");
                return "u";
        }   else if ((userChoice.toLowerCase() === 'paper') && (compChoice.toLowerCase() === 'paper'))  {
                console.log("Tie! Play Again!");
                return "t";
        }   else if ((userChoice.toLowerCase() === 'paper') && (compChoice.toLowerCase() === 'scissors'))  {
                //console.log("You Lose! Scissors beats Paper. Better luck next time!");
                return "c";
        }   else if ((userChoice.toLowerCase() === 'scissors') && (compChoice.toLowerCase() === 'rock'))  {
                //console.log("You Lose! Rock beats Scissors. Better luck next time!");
                return "c";
        }   else if ((userChoice.toLowerCase() === 'scissors') && (compChoice.toLowerCase() === 'paper'))  {
                //console.log("You Win! Scissors beats Paper.");
                return "u";
        }   else if ((userChoice.toLowerCase() === 'scissors') && (compChoice.toLowerCase() === 'scissors'))  {
                console.log("Tie! Play Again!");
                return "t"
        }   else{
            return "Something strange wackadoodle happened..."
        }
    // do stuff in here to play the round
    }

    for (i=1; i<=numRnds; i++)   {

        const userChoice = getUserChoice();
        //console.log(userChoice);
        const compChoice = getComputerChoice();
        //console.log(compChoice);

        rndWinner = (playRound(userChoice, compChoice));
    
        if (rndWinner === 't')  {
                i--;
        }   else if (rndWinner === 'u') {
                userScore++;
        }   else    {
                compScore++;
        }

        

    }
    
    if (userScore === compScore)  {
        winner = "Tie! You ran an even number of games."
    } else if (userScore > compScore)   {
        winner = "User wins!   " + userScore + " to " + compScore;
    } else  {
        winner = "Computer wins!   " + compScore + " to " + userScore;
    }
    
    //console.log(winner);
    //console.log(userScore);
    //console.log(compScore);

    return winner;
}

    
gameWinner = playGame(5);
console.log(gameWinner);


    
    
    