// TODO: Include packages needed for this application
//get answere from the user from
const inquirer= require('inquirer');
const fs=require('fs');
const values=require('path');
const utils=require('./utils/generateMarkdown.js');

// TODO: Create an array of questions for user input
const questions = [
    {
        type:"input",        
        message:"Title of the Project",
        name:"title"
    }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
