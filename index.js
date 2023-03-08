const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the employee\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the employee\'s id number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the employee\'s email?',
    },
    {
        type: 'list',
        name: 'role',
        message: 'What is the employee\'s role?',
        choices: ['Employee', 'Manager', 'Engineer', 'Intern'],
    },
    {
        type: 'input',
        name: 'office_number',
        message: 'What is the manager\'s office number?',
        when: (answers) => answers.role === 'Manager',
    },
    /*   {
          type: 'list',
          name: 'options',
          message: 'Would you like to:',
          choices: ['Build an engineer?', 'Build an intern', 'Finish building your team?'],
      }, */
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github?',
        when: (answers) => answers.role === 'Engineer',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
        when: (answers) => answers.role === 'Intern'
    },
    {
        type: 'confirm',
        name: 'add',
        message: 'Would you like to add another employee?',
    }
];



inquirer.prompt(questions)
    .then(answers => {
        if (answers.add) {
            teamArray.push(answers);
            inquirer.prompt(questions);             
        } else if (!answers.add) {
            teamArray.push(answers);
            console.log(teamArray);
        }
    });




/* function writeInfo(data) {
    fs.writeFile('./dist/startinglineup.html', data, (err) => {
        if (err) {
            throw error;
        } else {
            console.log('File created!');
        }
    })
};

function init() {
    inquirer.prompt(questions)
        .then(answers => {
            const webPage = renderWebPage(answers);
            writeInfo(data);

        })
} */