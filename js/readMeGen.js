const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({project, name, what, how, who, choices, email, github, license, install, versionComments,}) =>  ` 
# ${project} 
![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />

## Table of Contents
- [Description](#description)
- [Technologies Used](#Technologies)
- [Installing](#installing)

## Description:

*${what}*

*${how}*

*${who}*

<br>

---

## Technologies Used:

* ${choices}

<br>

---

## Installing:

* ${install}

<br>

---

## Author:

Please reach out to the author below if you would like to contribute to this code.

Name: ${name}

Email: ${email}

Github: ${github}

<br>

---

## Version History:

Version Comments: ${versionComments}

<br>

---

## License:
![badge](https://img.shields.io/badge/license-${license}-brightgreen)<br />

${license}

`

inquirer
.prompt([
    { // NAME
    type: 'input',
    message: 'Authors Full Name?',
    name: 'name',
    },
    { // EMAIL
    type: 'input',
    message: 'Authors Email:',
    name: 'email',
    },
    { // GITHUB USERNAME
    type: 'input',
    message: 'Github Username:',
    name: 'github',
    },
    { // PROJECT TITLE
    type: 'input',
    message: 'Project Title?',
    name: 'project',
    },
    { // WHAT
    type: 'input',
    message: 'What problem will your application solve?',
    name: 'what',
    },
    { // HOW 
    type: 'input',
    message: 'How will your application work?',
    name: 'how',
    },
    { // WHO
    type: 'input',
    message: 'Who will use your application solve?',
    name: 'who',
    },
    { // INSTALL
    type: 'input',
    message: 'Installation Process: ',
    name: 'install',
    },
    { // TECH
    type: 'checkbox',
    message: 'What technologies used?',
    name: 'choices',
    choices: ['JavaScript', 'CSS', 'HTML', 'Ruby', 'Python', 'C++'],
    },
    { // lICENSE
    type: "list",
    name: "license",
    message: "Declare licenses used: ",
    choices: [
        "MIT",
        "Mozilla",
        "Open"
    ]
    },
    { // VERSION COMMENTS
        type: 'input',
        message: 'More details about version: ',
        name: 'versionComments',
    },  
])
.then(answers => fs.writeFile("./result/README.md", generateREADME(answers), err => err ? console.log(err) : console.log("✔️ File Made")))
