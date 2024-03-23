#! /usr/bin/env node
//  shebang


 import inquirer from "inquirer";


 const randomNumber = Math.floor(Math.random() * 6 + 1) 
 console.log("Welcome to Number Guessing Game")

 const answers = await inquirer.prompt([

    {
        name: "userGuessedNumber",
        type: "number",
        message: "Please guess a number between 1-6:",

    },
 ]); if(answers.userGuessedNumber === randomNumber){
    console.log("Congratulations! You guessed a right number.")
 }
 else{
    console.log("You guessed a wrong number.")

 }
//    console.log(answers)