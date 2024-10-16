// game.js
const randomNumber = Math.floor(Math.random() * 10) + 1;

function testNumber(input) {
    if (input.toLowerCase() === 'quit') {
        process.stdout.write("Thanks for playing!\n");
        process.exit();
    }

    const guess = parseInt(input, 10);
    if (isNaN(guess)) {
        process.stdout.write("Please enter a valid number or 'quit' to exit.\n");
    } else if (guess < 1 || guess > 10) {
        process.stdout.write("Your guess must be between 1 and 10.\n");
    } else if (guess === randomNumber) {
        process.stdout.write("Congratulations! You've guessed the number correctly!\n");
        process.exit();
    } else {
        process.stdout.write("Wrong guess. Try again!\n");
    }
}

module.exports = { testNumber };