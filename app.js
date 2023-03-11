let player1Score = 0
let player2Score = 0
let player1Turn = true

// Inside Score Board
const player1ScoreBox = document.getElementById('player-1-score')
const player2ScoreBox = document.getElementById('player-2-score')
// Inside Score text
const player1ScoreUpdate = document.getElementById('player-1-score-update')
const player2ScoreUpdate = document.getElementById('player-2-score-update')
// Message Text
const messageText = document.getElementById('message')
// Roll and Reset Button
const rollBtn = document.getElementById('roll-btn')
const restartBtn = document.getElementById('restart-btn')
// ScoreBox
const scoreBox1 = document.getElementById('score-box-1')
const scoreBox2 = document.getElementById('score-box-2')

rollBtn.addEventListener('click',startGame)
restartBtn.addEventListener('dblclick',startAgain)

function restartGame(){
    rollBtn.style.display = "none"
    restartBtn.style.display = "block"
}

function startGame(){
    let randomNumber = Math.floor(Math.random()*6)+1
    if (player1Turn){
        player1Score += randomNumber;
        player1ScoreUpdate.textContent = player1Score;
        player1ScoreBox.textContent = randomNumber;
        scoreBox1.classList.remove('active')
        scoreBox2.classList.add('active')
        messageText.textContent = "Player 2 Turn"
    }
    else{
        player2Score += randomNumber;
        player2ScoreUpdate.textContent = player2Score;
        player2ScoreBox.textContent = randomNumber;
        scoreBox2.classList.remove('active')
        scoreBox1.classList.add('active')
        messageText.textContent = "Player 1 Turn"
    }
    if (player1Score >=20){
        messageText.textContent = "Player 1 Won The Game"
        restartGame()
    }
    else if (player2Score >=20){
        messageText.textContent = "Player 2 Won The Game"
        restartGame()
    }
    player1Turn = !player1Turn 
}

function startAgain(){
    player1Score = 0
    player2Score = 0
    player1Turn = true
    messageText.textContent = "Player 1 Turn"
    scoreBox2.classList.remove('active')
    scoreBox1.classList.add('active')
    player1ScoreBox.textContent = "-";
    player2ScoreBox.textContent = "-";
    player1ScoreUpdate.textContent = "0";
    player2ScoreUpdate.textContent = "0";
    rollBtn.style.display = "block"
    restartBtn.style.display = "none"   
}