let targetNumber;
let attempts;
let score;

function startNewGame() {
    targetNumber = Math.floor(Math.random() * 100) + 1;
    attempts = 0;
    score = 0;
    document.getElementById('message').innerText = '';
    document.getElementById('result').innerText = '';
    document.getElementById('guess').value = '';
}

function checkGuess() {
    const userGuess = parseInt(document.getElementById('guess').value);

    if (isNaN(userGuess) || userGuess < 1 || userGuess > 100) {
        alert('Please enter a valid number between 1 and 100.');
        return;
    }

    attempts++;

    if (userGuess === targetNumber) {
        document.getElementById('result').innerText = `Congratulations! You guessed the number in ${attempts} attempts.`;
        score++;
        document.getElementById('message').innerText = `Score: ${score}`;
        startNewGame();
    } else if (userGuess < targetNumber) {
        document.getElementById('result').innerText = 'Too low. Try again.';
    } else {
        document.getElementById('result').innerText = 'Too high. Try again.';
    }
}

// Start a new game on page load
window.onload = startNewGame;
