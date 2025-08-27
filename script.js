

console.log("Hello World!");

let userScore = 0;
let compScore = 0;


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

function playRound(userChoice, compChoice)  {

    // do stuff in here to play the round

}

console.log(userScore);
console.log(compScore);

