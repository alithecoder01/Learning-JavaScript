const totalScore = { computerScore: 0, playerScore: 0 };

// Computer choice
function getComputerChoice() {
  const choices = [`Rock`, `Paper`, `Scissors`];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

// human wins - getResult('Rock', 'Scissors')  1
// human loses - getResult('Scissors', 'Rock')  -1
// human draws - getResult('Rock', 'Rock')  0
function getResult(playerChoice, computerChoice) {
  const choices = [`Rock`, `Paper`, `Scissors`];
  let score = 0;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0; // Draw
  } else if (playerChoice == choices[0] && computerChoice == choices[2]) {
    score = 1; // Win
  } else if (playerChoice == choices[1] && computerChoice == choices[0]) {
    score = 1; // Win
  } else if (playerChoice == choices[2] && computerChoice == choices[1]) {
    score = 1; // Win
  } else {
    score = -1; // Lose
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const result = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScore = document.getElementById("player-score");
  if (score == -1) {
    result.innerText = "You Lose!";
  } else if (score == 1) {
    result.innerText = "You Won!";
  } else if (score == 0) {
    result.innerText = "it's Draw!";
  }
  handsDiv.innerText = `Your Choice: ${playerChoice}, Computer Choice: ${computerChoice}`;
  playerScore.innerText = ` Your Score: ${totalScore["playerScore"]}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const choices = [`Rock`, `Paper`, `Scissors`];
  const comuterCh = getComputerChoice(choices);
  const ply = playerChoice;
  let score = getResult(ply, comuterCh);

  totalScore["playerScore"] += score;

  console.log(totalScore);
  showResult(score, ply, comuterCh);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButtons = document.querySelectorAll(".rpsButton");

  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  rpsButtons.forEach((rpsButton) => {
    rpsButton.onclick = () => onClickRPS(rpsButton.value);
  });

  // Add a click listener to the end game button that runs the endGame() function on click
  const endGameBtn = document.getElementById('endGameButton')
  endGameBtn.onclick = ()=> endGame(totalScore)
}

// ** endGame function clears all the text on the DOM **
function endGame(totalScore) {

  const result = document.getElementById("result");
  const handsDiv = document.getElementById("hands");
  const playerScore = document.getElementById("player-score");

  totalScore["computerScore"] = 0
  totalScore["playerScore"] = 0

  result.innerText=''
  handsDiv.innerText=''
  playerScore.innerText=''
  
}

playGame();
