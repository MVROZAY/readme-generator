// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const path = require('path');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter the title of your project:',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Why did you build this project?:',
  },
  {
    type: "input",
    name: "screenshot",
    message: "Please provide the relative path to the image you want to use as the screenshot."
  },
  {
    type: 'input',
    name: 'usage',
    message: 'What did you learn?:',
  },
  {
    type: 'input',
    name: 'installation',
    message: 'List any packages used:',
  },
  {
    type: "input",
    name: "credits",
    message: "Please list any contributors.",
    default: "",
  },
  {
    type: "input",
    name: "link",
    message: "Please a live URL where a user can access your deployed application."
  },
  {
    type: "checkbox",
    name: "license",
    message: "Please select a license applicable to this project.",
    choices: ["MIT", "APACHE2.0", "none"],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error('Error writing to README file:', err);
    } else {
      console.log('README file generated successfully!');
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      const markdown = generateMarkdown(answers);
      writeToFile('README.md', markdown);
    })
    .catch((err) => {
      console.error('Error getting user input:', err);
    });
}

// Function call to initialize app
init();
