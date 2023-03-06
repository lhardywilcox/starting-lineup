const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');


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
        type: 'input',
        name: 'role',
        message: 'What is the employee\'s role?',
    },
    {
        type: 'input',
        name: 'office number',
        message: 'What is the employee\'s office number?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the employee\' github?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the employee\'s school?',
    },
]

function writeInfo(data) {
    fs.writeFile('./dist/employeeData', data, (err) => {
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
            const webPage = generatePage(answers);
            writeInfo(data);

        })
}