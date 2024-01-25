// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
const generateMarkdown = require('./utils/generateMarkdown.js')
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
    },
    {
        type: 'input',
        name: 'description',
        message: 'Give a short description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message: 'What are the installation instructions for this application?'
    },
    {
        type: 'input',
        name: 'usage',
        message: 'What is the intended usage for this application?'
    },
    {
        type: 'input',
        name: 'contributions',
        message: 'What are the contribution guidelines for this application?'
    },
    {
        type: 'input',
        name: 'testing',
        message: 'What are the testing instructions for this application?'
    },
    {
        type: 'input',
        name: 'githubUsername',
        message: 'What is your GitHub username?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose a license for your project from the list.',
        choices: ['MIT License', 'GNU General Public License v3', 'Apache License 2', 'None']
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter your email address.'
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile(fileName, data, (err) => err ? console.error(err)
        : console.log('Successfully created your README.md file!')
    );
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((answers) => {
        const readMeContent = generateMarkdown(answers)
        writeToFile('README.md', readMeContent);
    })
}

// Function call to initialize app
init();
