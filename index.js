const fs = require('fs');
const inquirer = require('inquirer');
const { inherits } = require('util');
const generatePage = require('./dist/generatePage');

// Write the prompts for the different situations

inquirer
    .prompt([
        {
            type: 'input',
            name: 'manager',
            message: 'What is the name of your team manager' 
        },
        {
            type: 'input',
            name: 'employeeId',
            message: 'what is the employee ID of your team manager'
        },
        {
            type: 'input',
            name: 'email',
            message: 'What is the email address of your team manager'
        },
        {
            type: 'input',
            name: 'office',
            message: 'What is your office number of your team manager'
        },
        {
            type: 'list',
            name: 'menu',
            message: 'Look at the menu below and choose an option',
            choices: ['add engineer', 'add intern', 'finish building my team' ]
        },
    ]) 
    .then((answers) => {
        if (answers.menu === 'add engineer') {
            return inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'engineerName',
                        message: 'what is the name of your engineer'
                    },
                    {
                        type: 'input',
                        name: 'engineerEmail',
                        message: 'What is the email of your engineer'
                    },
                    {
                        type: 'input',
                        name: 'github',
                        message: 'What is the github username for the '
                    },
                    {
                        type: 'list',
                        name: 'menuTwo',
                        message: 'Look at the menu below and choose an option',
                        choices: ['add engineer', 'add intern', 'finish building my team']
                    }
                ]);
        }
        else if (answers.menu === 'add intern') {
            return inquirer
                .prompt([
                    {
                        type: 'input',
                        name: 'internName',
                        message: 'What is the name of your intern'
                    },
                    {
                        type: 'input',
                        name: 'internId',
                        message: 'What is the ID number of your intern'
                    },
                    {
                        type: 'input',
                        name: 'internEmail',
                        message: 'What is the email of your intern'
                    },
                    {
                        type: 'input',
                        name: 'internGithub',
                        message: 'What is the github username for your intern'
                    },
                    {
                        type: 'list',
                        name: 'menuThree',
                        message: 'Look at the menu below and choose an option',
                        choices: ['add engineer', 'add intern', 'finish building my team']
                    }
                ]);            
        } 
});
