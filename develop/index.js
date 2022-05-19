// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer")

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)',
    },
    {
        type: 'input',
        name: 'About',
        message: 'Enter the about section (Required)',
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation to make this? (Required)'
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'What does your project do?',
    },
    {
        type: 'input',
        name: 'languages',
        message: 'What languages did you use?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?',
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

// TODO: Create a function to initialize app
function init() { 
    
}

// Function call to initialize app
init();
