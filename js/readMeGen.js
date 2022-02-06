const inquirer = require('inquirer');
const fs = require('fs');

const generateREADME = ({ name, email, project, description, choices, linkedin}) =>  ` 
# Project Title - ${project}



## Description

${description}


## Getting Started

### Technologies Used

* 

### Installing


## Authors

Contributors names and contact info

Name: ${name}

Email: ${email}

Linked in: ${linkedin}





## Version History

* ${choices}


## License

`



inquirer
.prompt([
    {
    type: 'input',
    message: 'Authors full name?',
    name: 'name',
    },
    {
    type: 'input',
    message: 'Authors Email?',
    name: 'email',
    },
    {
    type: 'input',
    message: 'Project Title?',
    name: 'project',
    },
    {
    type: 'input',
    message: 'Project Description?',
    name: 'description',
    },
    {
    type: 'checkbox',
    message: 'What technologies used?',
    name: 'choices',
    choices: ['JavaScript', 'CSS', 'HTML', 'Ruby', 'Python', 'C++'],
    },
    
    
])
.then(answers => fs.writeFile("./result/README.md", generateREADME(answers), err => err ? console.log(err) : console.log("File Made")))
