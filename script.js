let playerName = '';
let playerScore = 0;
let computerScore = 0;
let roundsWonByPlayer = 0;
let roundsWonByComputer = 0;

document.getElementById("startbutton").addEventListener('click', startGame);
document.getElementById("nextround").addEventListener('click', nextRound);

function startGame() {
    playerName = document.getElementById("username").value;
    document.getElementById("playername").innerText = playerName;
    if (playerName === '') {
        playerName = "User";
    }

    document.querySelector('.intro').style.display = 'none';
    document.querySelector('.gameblock').style.display = 'flex';
    nextRound();
}
function nextRound() {
    playerScore = Math.floor((Math.random() * 100) + 1);
    computerScore = Math.floor((Math.random() * 100) + 1);

    document.getElementById('player1points').innerText = playerScore;
    document.getElementById('player2points').innerText = computerScore;

    if (playerScore > computerScore) 
    {
        roundsWonByPlayer++;
        document.getElementById('player1score').innerText = roundsWonByPlayer;
    } 
    else if (computerScore > playerScore) 
    {
        roundsWonByComputer++;
        document.getElementById('player2score').innerText = roundsWonByComputer;
    } 
    else 
    {
        roundsWonByPlayer++;
        document.getElementById('player1score').innerText = roundsWonByPlayer;
        roundsWonByComputer++;
        document.getElementById('player2score').innerText = roundsWonByComputer;
    }

    if (roundsWonByPlayer === 3) 
    {
        setTimeout(() => {
            setTimeout(() => {
                alert(`${playerName} стає переможцем! Вітаємо!`);
                resetGame();
            }, 500); 
        }, 0); 
    } 
    else if (roundsWonByComputer === 3) 
    {
        setTimeout(() => {
            setTimeout(() => {
                alert(`Комп'ютер стає переможцем! Спробуйте ще раз!`);
                resetGame();
            }, 500); 
        }, 0); 
    }
}
function resetGame() {
    roundsWonByPlayer = 0;
    roundsWonByComputer = 0;
    document.getElementById('player1score').innerText = roundsWonByPlayer;
    document.getElementById('player2score').innerText = roundsWonByComputer;
    document.getElementById('player1points').innerText = 0;
    document.getElementById('player2points').innerText = 0;
}
