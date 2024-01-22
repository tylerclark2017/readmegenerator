// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
   {
    type: 'input',
    name: 'githubUsername',
    message: 'What is your GitHub username?'
},
   {
    type: 'input',
    name: 'description',
    message: 'What was your motivation for creating this application, and what problem is it meant to solve?'
   },
   {
    type: 'input',
    name: 'lessonsLearned',
    message: "What lessons have you learned while developing this application?"
   },
   {
    type: 'input',
    name: 'challenges',
    message: 'Did you face any challenges while building your application?'
   },

   {
    type: 'input',
    name: 'successes',
    message: 'What are some successes you had while building your application?'
   },
   {
    type: 'input',
    name: 'githubProjectLink',
    message: 'Include links to the GitHub repository and GitHub Pages URL for this project.'
},
{
    type: 'input',
    name: 'screenshots',
    message: 'Include any relevant screenshots here.'
},
{
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project from the list.',
    choices: ['MIT License','GNU General Public License v3','Apache License 2', 'None']
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
        const readmeContent = generateReadMe (answers);
        writeToFile('README.md', readmeContent);
    });
}

// Function call to initialize app
init();
