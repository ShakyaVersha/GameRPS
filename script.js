let userScore = 0;
let compScore = 0;

const choices = document.querySelectorAll(".seaser");
const msg = document.querySelector("#msg");
const getuserScore = document.querySelector(".userscore");
const getcompScore = document.querySelector(".compscore");


const showWinner = (userwin,userChoice,comChoice) => {
  if (userwin) {
    userScore++;
    getuserScore.innerText=userScore;
    msg.innerText = `You Win!! your ${userChoice} beats ${comChoice} `;
    msg.style.backgroundColor = "green";
  } else {
    compScore++;
    getcompScore.innerText = compScore;
    msg.innerText = `you  loos ooh no!! ${comChoice} beats your ${userChoice}`;
    msg.style.backgroundColor = "red";
  }
};

const drawGame = () => {
   msg.innerText = `game was draw ! `;
   msg.style.backgroundColor = "black";
   
};

const getComputerChoice = () => {
  // rock paper seasor
  const options = ["rock", "paper", "seasor"];
  const randInx = Math.floor(Math.random() * 3);
  return options[randInx];
};

const playGame = (userChoice) => {
  console.log("user Choice = ", userChoice);
  //computer ki choice bnao
  const comChoice = getComputerChoice();
  console.log("Computer Choice = ", comChoice);
  if (userChoice === comChoice) {
    //draw game
    drawGame();
  } else {
    let userwin = true;
    if (userChoice === "rock") {
      //seasor paper
      userwin = comChoice === "paper" ? false : true;
    } else if (userChoice === "paper") {
      //rock,seasor
      userwin = comChoice === "seasor" ? false : true;
    } else {
      //paper rock
      userwin = comChoice === "rock" ? false : true;
    }

    showWinner(userwin,userChoice,comChoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userChoice = choice.getAttribute("id");

    playGame(userChoice);
  });
});
