const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./src/generatePage');

// Array that will hold the quesiton for the file generation

const information = [
    {
        type: 'input',
        name: 'manager',
        message: 'What is the name of your team Manager' 
    },
    {
        type: 'input',
        name: 'employeeId',
        message: 'what is your employee ID'
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is your email address'
    },
    {
        type: 'input',
        name: ''
    }
]

// Create a function to write an HTML file

// Create a function to initallize the HTML file

// Function call to initallize app

