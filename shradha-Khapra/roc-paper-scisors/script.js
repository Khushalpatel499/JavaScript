let userScore = 0;
let compScore = 0;

//now se what to access

const choices = document.querySelectorAll(".choice");
const msg = document.querySelector("#msg");

//access user score and comp score
const userScorePara = document.querySelector("#user-score");
const compScorePara = document.querySelector("#comp-score");

const genComputerChoice = () => {
  const options = ["rock", "paper", "scissors"];
  const randIdx = Math.floor(Math.random() * 3);
  return options[randIdx];
  //rock,paper,scissors
};

//draw game
const drawGame = () => {
  console.log("Game was draw");
  msg.innerText = "Game was Draw. Play again";
  msg.style.backgroundColor = "#081b31";
};

const showWinner = (userWin, userChoice, compChoice) => {
  if (userWin) {
    console.log("you win!");
    userScore++;
    userScorePara.innerText = userScore;
    msg.innerText = `You win! your ${userChoice} beats ${compChoice}`;
    msg.style.backgroundColor = "green";
  } else {
    console.log("you lose");
    compScore++;
    compScorePara.innerText = compScore;
    msg.innerText = `You lose! ${compChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};
const playGame = (userChoice) => {
  //generate computer choice
  const compChoice = genComputerChoice();
  if (userChoice === compChoice) {
    drawGame();
  } else {
    let userWin = true;
    if (userChoice === "rock") {
      //comp can have only two choice becuase comp can't choice rock then it should be draw
      userWin = compChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,scissors
      userWin = compChoice === "scissors" ? false : true;
    } else {
      //rock,paper
      userWin = compChoice === "rock" ? false : true;
    }
    showWinner(userWin, userChoice, compChoice);
  }
};
//user choice
choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const getId = choice.getAttribute("id");
    console.log(getId, choice);
    playGame();
  });
});
