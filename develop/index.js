// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require("inquirer")
const path = require('path');
const generateMarkdown = require('./utils/generateMarkdown');
const licenses = ['None', 'MIT', 'BSD', 'GPL', 'Apache']

// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the title of your project? (Required)'
    },
    {
        type: 'input',
        name: 'about',
        message: 'Enter the about section.'
    },
    {
        type: 'input',
        name: 'motivation',
        message: 'What was your motivation to make this?'
    },
    {
        type: 'input',
        name: 'purpose',
        message: 'What does your project do?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Select the type of license you are using.',
        choices: ['MIT', 'BSD', 'GPL', 'Apache', 'None']
    },
    {
        type: 'input',
        name: 'languages',
        message: 'What languages did you use?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email?'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is your GitHub username?'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
   return fs.writeFileSync(path.join(process.cwd(), fileName), data);
};

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((inquirerAnswers) => {
        console.log(inquirerAnswers)
        writeToFile("README.md", generateMarkdown(inquirerAnswers));
    })
}

// Function call to initialize app
init();
