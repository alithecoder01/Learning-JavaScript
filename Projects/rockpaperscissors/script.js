// Computer choice
function getComputerChoice() {
  const choices = [`Rock`, `Paper`, `Scissors`];
  const randomNumber = Math.floor(Math.random() * choices.length);
  return choices[randomNumber];
}

// human wins - getResult('Rock', 'Scissors') 👉 1
// human loses - getResult('Scissors', 'Rock') 👉 -1
// human draws - getResult('Rock', 'Rock') 👉 0
function getResult(playerChoice, computerChoice) {
  const choices = [`Rock`, `Paper`, `Scissors`];
  let score = 0;

  // All situations where human draws, set `score` to 0
  if (playerChoice === computerChoice) {
    score = 0;
  }

  // All situations where human wins, set `score` to 1
  // make sure to use else ifs here
  if (playerChoice == choices[0] && computerChoice == choices[2]) {
    score = 1;
  } else if (playerChoice == choices[1] && computerChoice == choices[0]) {
    score = 1;
  } else if (playerChoice == choices[2] && computerChoice == choices[1]) {
    score = 1;
  }

  // Otherwise human loses (aka set score to -1)
  if (playerChoice == choices[0] && computerChoice == choices[1]) {
    score = -1;
  } else if (playerChoice == choices[1] && computerChoice == choices[2]) {
    score = -1;
  } else if (playerChoice == choices[2] && computerChoice == choices[0]) {
    score = -1;
  }

  // return score
  return score;
}

// ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
function showResult(score, playerChoice, computerChoice) {
  const result = document.getElementById("result");
  if (score == -1) {
    result.innerText = "You Lose!";
  } else if (score == 1) {
    result.innerText = "You Won!";
  } else if (score == 0) {
    result.innerText = "it's Draw!";
  }

  const displayChoices = document.getElementById("hands");
  displayChoices.innerText = `Your Choice: ${playerChoice}, Computer Choice: ${computerChoice}`;
}

// ** Calculate who won and show it on the screen **
function onClickRPS(playerChoice) {
  const choices = [`Rock`, `Paper`, `Scissors`];
  const com = getComputerChoice(choices);
  const ply = playerChoice;
  let score = getResult(ply, com);
  showResult(score, ply, com);
}

// ** Make the RPS buttons actively listen for a click and do something once a click is detected **
function playGame() {
  // use querySelector to select all RPS Buttons
  const rpsButton = document.querySelector("rpsButton");
  // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *

  // 1. loop through the buttons using a forEach loop
  // 2. Add a 'click' event listener to each button
  // 3. Call the onClickRPS function every time someone clicks
  // 4. Make sure to pass the currently selected rps button as an argument

  // Add a click listener to the end game button that runs the endGame() function on click
}

// ** endGame function clears all the text on the DOM **
function endGame() {}

playGame();
