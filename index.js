const fs = require('fs');
const inquirer = require('inquirer');
const generatePage = require('./dist/generatePage');

// Write the prompts for the different situations

const information = [{
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
    {
        type: 'input',
        name: 'engineerName',
        message: 'what is the name of your engineer'
    },
    {
        type: 'input',
        name: 'engineerId',
        message: 'What is the id of your engineer'
    },
    {
        type: 'input',
        name: 'engineerEmail',
        message: 'What is the email of your engineer'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the github username of your engineer'
    },
    {
        type: 'list',
        name: 'menuTwo',
        message: 'Look at the menu below and choose an option',
        choices: ['add engineer', 'add intern', 'finish building my team' ]
    },
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
        name: 'internSchool',
        message: 'Where did your intern attend school'
    },
    {
        type: 'list',
        name: 'menuThree',
        message: 'Look at the menu below and choose an option',
        choices: ['add engineer', 'add intern', 'finish building my team' ]
    }
]


// create the function to write the html file
function writeToFile(fileName, data) {
    
    fs.writeFile(fileName, data, function(err) {
        console.log(fileName)
        console.log(data)
            if (err) {
                return console.log(err)
            } else {
                return console.log('Got the index file created. Hope it rocks your world')
            }
    })
}

// create the funciton that initalizes the HTML file creation
function teampage() {
    inquirer.prompt(information)
        .then(function(data) {
            writeToFile('index.html', generatePage(data));
            console.log(data);
        })
}

// use callback to initalize the app
teampage();