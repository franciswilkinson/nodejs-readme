const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'Title of project?',
    },
    {
      type: 'input',
      name: 'Description',
      message: 'Enter a short description:',
    },
    {
      type: 'input',
      name: 'Installation',
      message: 'Enter instructions for installation:',
    },
    {
      type: 'input',
      name: 'Usage',
      message: 'Write how your project might be used:',
    },
    {
      type: 'list',
      message: 'Which license does your app use?',
      name: 'License',
      choices: ['MIT', 'ISC', 'The Unlicense'],
    },
    {
      type: 'input',
      name: 'Contribute',
      message: 'If you welcome contributions, explain here:',

    },
    {
      type: 'input',
      name: 'Tests',
      message: 'If there are any tests, write about them here. Otherwise, type N/A:',
    },
    {
      type: 'input',
      name: 'Questions',
      message: 'For questions or comments, what email would you like to use?',
    },
    {
      type: 'input',
      name: 'Github',
      message: 'What is your Github username?',
    },

];

// function to initialize program and to write README file
function init() {
  inquirer.prompt(questions)
  .then((answers) => {
    fs.writeFile('./output/README.md', generateMarkdown(questions, answers), (err) => {
      console.log(err);
    })
  });
}

// function call to initialize program
init();

 
  