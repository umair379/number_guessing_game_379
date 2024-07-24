#! /usr/bin/env node
import inquirer from "inquirer";
// 1) computer will generate a random number
// 2) user input for guessing number
// 3) compare user input with computer generated number and show result
// const randomNumber = 13;
const randomNumber = Math.floor(Math.random() * 6 + 1);
const answers = await inquirer.prompt([
    {
        name: "userguessingnumber",
        type: "number",
        message: "please guess a number between (1 to 6)",
    },
]);
if (answers.userguessingnumber === randomNumber) {
    console.log("congratulation! you guessed right number.");
}
else {
    console.log("you guessed wrong number");
}
