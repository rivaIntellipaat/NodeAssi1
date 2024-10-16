/**
 * Number guessing game
 * 
 * Take input from user and see if the user has guessed the number correctly
 * If the user guessed correctly, it is a win else lose
 * 
 * How to create a custom module
 * How to import and use it
 * 
*/
let { testNumber } = require('./game.js'); // JS destructuring

process.stdout.write("Welcome to the number guessing game!\n");
process.stdout.write("Guess a number between 1 to 10\n 1. Type 'quit' to quit the game\n 2. Guess the number....\n");

let play = (userInput) => {
    let input = userInput.toString().trim();
    testNumber(input);
}

process.stdin.on('data', play);