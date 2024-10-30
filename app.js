const targetNumber = Math.floor(Math.random() * 10) + 1;
let attempts = 1;

document.getElementById("submitGuess").onclick = function () {
    const userGuess = document.getElementById("guessField").value;

    if (userGuess == targetNumber) {
        alert(`CONGRATULATIONS!!! You guessed it in ${attempts} attempts.`);
    } else if (userGuess > targetNumber) {
        attempts++;
        alert("OOPS! Try a smaller number.");
    } else {
        attempts++;
        alert("OOPS! Try a greater number.");
    }
};
