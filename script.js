

console.log("Hello World!");

let gameWinner = "z";
//let rndWinner = "a";
let userScore = 0;
let compScore = 0;
let ties = 0;
    let winner = "a";
    let rndWinner = "b";



const btnRock = document.querySelector("#btnRock");
const btnPaper = document.querySelector("#btnPaper");
const btnScissors = document.querySelector("#btnScissors");

const rndResult = document.querySelector("ul");
const gmScore = document.querySelector("ul");


function resetGame()    {
    let resetScore = 0;
    userScore = resetScore;
    compScore=resetScore;
    document.getElementById("userScore").textContent = resetScore;
    document.getElementById("compScore").textContent = resetScore;

    let resetMsg = "Play Again! Make selection above - first to 5 wins!";
    document.getElementById("rndWinner").textContent = resetMsg;


    let uImg = document.getElementById("userImage");
    uImg.src = "./images/default.png";
    let cImg = document.getElementById("compImage");
    cImg.src = "./images/default.png";
}

function getCompImg(str)    {
    console.log(str);
    if (str === "Rock") {
        return "./images/rock.png";
    } else if (str === "Paper") {
        return "./images/paper.png";
    } else  {
        return "./images/scissors.png";
    }
};

function showGameWinner(gameWinner)   {

    let gameWinMsg = gameWinner + " wins!";
    document.getElementById("rndWinner").textContent = gameWinMsg;

    

    if (gameWinner === "User")  {
        let uImg = document.getElementById("userImage");
        uImg.src = "./images/winner.png";
        let cImg = document.getElementById("compImage");
        cImg.src = "./images/loser.png";
        alert("User Wins!");

    } else  {
        let uImg = document.getElementById("userImage");
        uImg.src = "./images/loser.png";
        let cImg = document.getElementById("compImage");
        cImg.src = "./images/winner.png";
        alert("Computer Wins!");
    };

 
};

function askPlayAgain() {
     if (confirm("Do you want to play again?"))  {
        resetGame();
    } else  {
        alert("Let's just play again anyway...");
        resetGame();
    };
};

function updateScore(winner)  {

    let tempWin = winner;

    if (winner === 't') {
        tempWin = "Tie! No winner, select again...";
    } else if (winner === 'u')    {
        tempWin = "User won last round!";
    } else  {
        tempWin = "Computer won last round!";
    }
    document.getElementById("rndWinner").textContent = tempWin;

    document.getElementById("userScore").textContent = userScore;
    document.getElementById("compScore").textContent = compScore;

    if (userScore >= 5) {
        showGameWinner("User");
    } else if (compScore >= 5) {
        showGameWinner("Computer");
    };
};


btnRock.addEventListener("click", () =>    {

    const userChoice = "Rock";
    console.log(userChoice);
    let compChoice = getComputerChoice();
    console.log(compChoice);

    document.getElementById("userChoice").textContent = userChoice;
    document.getElementById("compChoice").textContent = compChoice;
    
    let tempImgSrc = getCompImg(compChoice);
    console.log(tempImgSrc);
    let cImg = document.getElementById("compImage");
    console.log(cImg);
    cImg.src = tempImgSrc;

    let uImg = document.getElementById("userImage");
    uImg.src = "./images/rock.png";

    const rndWinner = (playRound(userChoice, compChoice));
    console.log(rndWinner);

    if (rndWinner === 't')  {
                ties++;
        }   else if (rndWinner === 'u') {
                userScore++;
        }   else    {
                compScore++;
    }
console.log(userScore);
console.log(compScore);

   
    updateScore(rndWinner);

    //btnRock.focus();

});

btnPaper.addEventListener("click", () =>    {

    const userChoice = "Paper";
    console.log(userChoice);

    let compChoice = getComputerChoice();
    console.log(compChoice);

    document.getElementById("userChoice").textContent = userChoice;
    document.getElementById("compChoice").textContent = compChoice;

    let tempImgSrc = getCompImg(compChoice);
    let cImg = document.getElementById("compImage");
    cImg.src = tempImgSrc;

    let uImg = document.getElementById("userImage");
    uImg.src = "./images/paper.png";

    const rndWinner = (playRound(userChoice, compChoice));
    console.log(rndWinner);

        if (rndWinner === 't')  {
                ties++;
        }   else if (rndWinner === 'u') {
                userScore++;
        }   else    {
                compScore++;
    }
console.log(userScore);
console.log(compScore);

    updateScore(rndWinner);

});


btnScissors.addEventListener("click", () =>    {

    const userChoice = "Scissors";
    console.log(userChoice);

    let compChoice = getComputerChoice();
    console.log(compChoice);

    document.getElementById("userChoice").textContent = userChoice;
    document.getElementById("compChoice").textContent = compChoice;

    let tempImgSrc = getCompImg(compChoice);
    let cImg = document.getElementById("compImage");
    cImg.src = tempImgSrc;

    let uImg = document.getElementById("userImage");
    uImg.src = "./images/scissors.png";

    const rndWinner = (playRound(userChoice, compChoice));
    console.log(rndWinner);

        if (rndWinner === 't')  {
                ties++;
        }   else if (rndWinner === 'u') {
                userScore++;
        }   else    {
                compScore++;
    }
console.log(userScore);
console.log(compScore);

    updateScore(rndWinner);

});


console.log(userScore);
console.log(compScore);



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





















//let userChoice = getUserChoice();
//console.log(userChoice);
/*function playGame(numRnds) {

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

    
gameWinner = playGame(1);
console.log(gameWinner);

*/
    
    
    