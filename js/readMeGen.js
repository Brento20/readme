const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ name, email, project, what, how, who, choices, github}) =>  ` 
# ${project} 



## Description

${what}

${how}

${who}


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
    {
    type: 'input',
    message: 'Authors Full Name?',
    name: 'name',
    },
    {
    type: 'input',
    message: 'Authors Email:',
    name: 'email',
    },

    {
    type: 'input',
    message: 'Github Username:',
    name: 'github',
    },

    {
    type: 'input',
    message: 'Project Title?',
    name: 'project',
    },
    {
    type: 'input',
    message: 'What problem will your application solve?',
    name: 'what',
    },
    {
    type: 'input',
    message: 'How will your application work?',
    name: 'how',
    },
    {
    type: 'input',
    message: 'Who will use your application solve?',
    name: 'who',
    },
    {
    type: 'checkbox',
    message: 'What technologies used?',
    name: 'choices',
    choices: ['JavaScript', 'CSS', 'HTML', 'Ruby', 'Python', 'C++'],
    },
    
    
])
.then(answers => fs.writeFile("./result/README.md", generateREADME(answers), err => err ? console.log(err) : console.log("File Made")))
