const inquirer = require('inquirer');
const fs = require('fs');

const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

const teamArray = [];

const mgrQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team manager\'s ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team manager\'s email?',
    },
    {
        type: 'input',
        name: 'office_number',
        message: 'What is the manager\'s office number?',
    },
];

const menuQuestion = [
    {
        type: 'list',
        name: 'options',
        message: 'Would you like to:',
        choices: ['Build an engineer?', 'Build an intern', 'Finish building your team?'],
    },
];

const engQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team engineer\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team engineer\'s ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team engineer\'s email?',
    },
    {
        type: 'input',
        name: 'github',
        message: 'What is the engineer\'s github?',
        when: (answers) => answers.role === 'Engineer',
    },
];

const intQuestions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is the team intern\'s name?',
    },
    {
        type: 'input',
        name: 'id',
        message: 'What is the team intern\'s ID number?',
    },
    {
        type: 'input',
        name: 'email',
        message: 'What is the team intern\'s email?',
    },
    {
        type: 'input',
        name: 'school',
        message: 'What is the intern\'s school?',
        when: (answers) => answers.role === 'Intern',
    },
];

inquirer.prompt(mgrQuestions)
    .then(answers => {
        teamArray.push(answers);
        console.log(teamArray);
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