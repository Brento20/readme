const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({name, what, how, who, choices, email, github}) =>  ` 
# ${answers.project} 



## Description

${what}

${how}

${answers.who}


## Getting Started

### Technologies Used

* ${choices}

### Installing


## Authors

Contributors names and contact info

Name: ${name}

Email: ${email}

Github: ${github}





## Version History




## License

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
    { // TECH
    type: 'checkbox',
    message: 'What technologies used?',
    name: 'choices',
    choices: ['JavaScript', 'CSS', 'HTML', 'Ruby', 'Python', 'C++'],
    },
    
    
])
.then(answers => fs.writeFile("./result/README.md", generateREADME(answers), err => err ? console.log(err) : console.log("File Made")))
