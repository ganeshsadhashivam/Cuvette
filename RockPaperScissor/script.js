const rock = document.getElementById("rock");
const paper = document.getElementById("paper");
const scissor = document.getElementById("scissor");
const gamesRules = document.getElementById("crossign");

const rulesSection = document.getElementById("game-rules");
// console.log(rulesSection);

const rulesText = document.getElementById("rules");
//all buttons

const allbuttons = document.querySelectorAll("img");

//lines

const lineOne = document.getElementById("line-box-1");
const lineTwo = document.getElementById("line-box-2");
const lineThree = document.getElementById("line-box-3");

//result
const resultWin = document.getElementById("result");
const movesLeft = document.getElementById("moves");

//selected button option message

const rockSelected = document.getElementById("rock-selected");
const paperSelected = document.getElementById("paper-selected");
const scissorSelected = document.getElementById("scissor-selected");

//score updation
let playerScore = document.getElementById("player-score");
let computerScore = document.getElementById("computer-score");
playerScore.innerText = 0;
computerScore.innerText = 0;

//playagain

const playAgain = document.getElementById("play-again");

//next button

const nextButton = document.getElementById("next");

//after winning by player
const totalContent = document.getElementById("total-content");
console.log(totalContent);

//moves
let moves = 10;

//design
function playerOption(selectedOpt) {
  console.log(selectedOpt);
  if (selectedOpt === "rock") {
    rock.style.outline = "1px solid green";
    rock.style.outlineWidth = "30px";
    rockSelected.textContent = "you Picked";
  } else if (selectedOpt === "scissor") {
    scissor.style.outline = "1px solid green";
    scissor.style.outlineWidth = "30px";
    scissorSelected.textContent = "you Picked";
  } else {
    paper.style.outline = "1px solid green";
    paper.style.outlineWidth = "30px";
    paperSelected.textContent = "you Picked";
  }
  setTimeout(() => {
    if (selectedOpt === "rock") {
      rock.style.outline = "none";
      rock.style.outlineWidth = "0px";
      rockSelected.textContent = null;
    } else if (selectedOpt === "scissor") {
      scissor.style.outline = "none";
      scissor.style.outlineWidth = "0px";
      scissorSelected.textContent = null;
    } else {
      paper.style.outline = "none";
      paper.style.outlineWidth = "0px";
      paperSelected.textContent = null;
    }
  }, 2500);
}

function computerOption(selectedOpt) {
  console.log("computer selected", selectedOpt);
  if (selectedOpt === "paper") {
    paper.style.outline = "1px solid green";
    paper.style.outlineWidth = "30px";
    paperSelected.textContent = "computer Picked";
  } else if (selectedOpt === "scissor") {
    scissor.style.outline = "1px solid green";
    scissor.style.outlineWidth = "30px";
    scissorSelected.textContent = "computer Picked";
  } else {
    rock.style.outline = "1px solid green";
    rock.style.outlineWidth = "30px";
    rockSelected.textContent = "computer Picked";
  }
  setTimeout(() => {
    if (selectedOpt === "rock") {
      rock.style.outline = "none";
      rock.style.outlineWidth = "0px";
      rockSelected.textContent = null;
    } else if (selectedOpt === "scissor") {
      scissor.style.outline = "none";
      scissor.style.outlineWidth = "0px";
      scissorSelected.textContent = null;
    } else {
      paper.style.outline = "none";
      paper.style.outlineWidth = "0px";
      paperSelected.textContent = null;
    }
  }, 2500);
}

//Player

function player(Event) {
  lineOne.style.display = "none";
  lineTwo.style.display = "none";
  lineThree.style.display = "none";
  // console.log(Event.target.alt);

  let playerSelected = "";
  playerSelected = Event.target.alt;
  playerOption(playerSelected);
  console.log("playerselected", playerSelected);
  const char = false;
  moves--;
  computer(playerSelected);
}

//computer

function computer(playerSelected) {
  // const randomNumber = Math.floor((Math.random() * 10) / 4);
  const randomNumber = Math.floor(Math.random() * 3);
  console.log(randomNumber);
  const computerSelected = allbuttons[randomNumber].alt;
  console.log("computerselected", computerSelected);
  computerOption(computerSelected);
  moves--;
  checkSelectedButtons(playerSelected, computerSelected);
}

//comparing the buttons selected

let playerscore = 0;
let computerscore = 0;
function checkSelectedButtons(playerSelected, computerSelected) {
  console.log(playerSelected, computerSelected);

  if (moves === 0) {
    movesLeft.textContent = "gameOver";
    winner();
  } else {
    movesLeft.textContent += moves;
  }
  if (playerSelected !== computerSelected) {
    if (playerSelected === "rock" && computerSelected === "paper") {
      computerScore.innerHTML = ++computerscore;
    } else if (playerSelected === "paper" && computerSelected === "rock") {
      playerScore.innerHTML = ++playerscore;
    } else if (playerSelected === "paper" && computerSelected === "scissor") {
      computerScore.innerHTML = ++computerscore;
    } else if (playerSelected === "scissor" && computerSelected === "paper") {
      playerScore.innerHTML = ++playerscore;
    } else if (playerSelected === "scissor" && computerSelected === "rock") {
      computerScore.innerHTML = ++computerscore;
    } else if (playerSelected === "rock" && computerSelected === "scissor") {
      playerScore.innerHTML = ++playerscore;
    }
  }
  console.log(playerSelected !== computerSelected);
}

//winner
function winner() {
  console.log(playerscore, computerscore);
  if (playerscore > computerscore) {
    resultWin.textContent = "You Won !";
    playerWon();
  } else if (playerscore < computerscore) {
    resultWin.textContent = "Computer Won !";
    playAgain.style.display = "inline";
  } else if (playerscore === computerscore) {
    resultWin.textContent = "Match Tie";
    playAgain.style.display = "inline";
  }
}

//hiderules

function hideRules() {
  rulesSection.style.display = "none";
  gamesRules.style.display = "none";
}

//show Rules
function showRules() {
  rulesSection.style.display = "inline";
  gamesRules.style.display = "inline";
}

//player won
function playerWon() {
  totalContent.style.display = "none";
  const section = document.createElement("section");
  const img = document.createElement("img");
  document.append(section);
  section.appendChild(img);
  img.setAttribute("src");
  document.appendChild(section);
}
rock.addEventListener("click", player);
paper.addEventListener("click", player);
scissor.addEventListener("click", player);
gamesRules.addEventListener("click", hideRules);
rulesText.addEventListener("click", showRules);
nextButton.addEventListener("click", playerWon);
