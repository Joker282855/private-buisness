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
        name: 'name',
        message: 'what is the name of your engineer or intern'
    },
    {
        type: 'input',
        name: 'number',
        message: 'What is the id of your engineer or intern'
    },
    {
        type: 'input',
        name: 'address',
        message: 'What is the email of your engineer or intern'
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the github username of your engineer or school of your intern'
    },
    {
        type: 'list',
        name: 'menuTwo',
        message: 'Look at the menu below and choose an option',
        choices: ['add engineer', 'add intern', 'finish building my team' ]
    },
    {
        type: 'input',
        name: 'nameTwo',
        message: 'What is the name of your intern or engineer'
    },
    {
        type: 'input',
        name: 'idTwo',
        message: 'What is the ID number of your intern or engineer'
    },
    {
        type: 'input',
        name: 'addressTwo',
        message: 'What is the email of your intern or engineer'
    },
    {
        type: 'input',
        name: 'school',
        message: 'Where did your intern attend school or what is the github link of your engineer'
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