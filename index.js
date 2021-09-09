const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./dist/generatePage');

// Write the prompts for the different situations

const promptManager = () => {
    return inquirer.prompt([
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
        }
    ]);
};

const promptMenu = () => {
    return inquirer.prompt([
        {
            type: 'list',
            name: 'menuTwo',
            message: 'Look at the options below and chose an option',
            choices: ['add engineer', 'add intern', 'finish building my team']
        }
    ])
}

promptManager()
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
                    }
                ]);            
        }
        else {
            return 'Goodluck with your team'
        } 
    })
    .then(promptMenu)
    .then(menuAnswers => {
        if (menuAnswers.menuTwo === 'add engineer') {
            return inquirer
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
        }
        else if (menuAnswers.menuTwo === 'add intern') {
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
                        name: 'menu',
                        message: 'Look at the menu below and choose an option',
                        choices: ['add engineer', 'add intern', 'finish building my team' ]
                    }
                ])
        }
    })

