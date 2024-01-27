let badhe=prompt("enter the name of badhe");

let userscore = 0;
let compscore = 0;

const choices = document.querySelectorAll(".choice");

const vh = document.querySelector("#vh");

const userscorepara = document.querySelector("#userscore");
const compscorepara = document.querySelector("#compscore");

const gencompchoice = () => {
  // rock, paper, scissor
  const Option = ['rock', 'paper', 'scissor'];
  const randIdx = Math.floor(Math.random() * 3);
  return Option[randIdx];
};

const drawgame = () => {
  vh.innerText = "Game draw! Play again";
  vh.style.backgroundColor = "yellow";
};

const showWinner = (userwin, compchoice, userchoice) => {
  if (userwin) {
    userscore++;
    userscorepara.innerText = userscore;
    vh.innerText = `You win! Your ${userchoice} beats ${compchoice}`;
    vh.style.backgroundColor = "green";
  } else {
    compscore++;
    compscorepara.innerText = compscore;
    vh.innerText = `You lose!
     ${compchoice} beats your ${userchoice}`;
    vh.style.backgroundColor = "red";
  }
};

const playgame = (userchoice) => {
  console.log("userchoice=", userchoice);
  // generate a computer choice//AP please compuetr 
  const compchoice = gencompchoice();
  console.log("compchoice=", compchoice);

  if (userchoice === compchoice) {
    // draw game game to draw
    drawgame();
  } else {
    let userwin = true;
    if (userchoice === "rock") {
      userwin = compchoice === "paper" ? false : true;
    } else if (userchoice === "paper") {
      userwin = compchoice === "scissor" ? false : true;
    } else {
      // rock, paper  draw game
      userwin = compchoice === "rock" ? false : true;
    }
    showWinner(userwin, userchoice, compchoice);
  }
};

choices.forEach((choice) => {
  choice.addEventListener("click", () => {
    const userchoice = choice.getAttribute("id");
    playgame(userchoice);
  });
});
