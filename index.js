
//necessary consts for Node
const fs = require("fs");
const util = require("util");
const inquirer = require("inquirer");
const genREADME = require("./utils/genREADME");
const writeFileAsync = util.promisify(fs.writeFile);

//user input ReadMe questions 
function promptUser() {
    return inquirer.prompt([
        {
            type: "input",
            name: "projTitle",
            message: "Give a title for the Project",
        },
        {
            type: "input",
            name: "description",
            message: "Place project description here: "
        },
        {
            type: "input",
            name: "installation",
            message: "Installation instructions: ",
        },
        {
            type: "input",
            name: "usage",
            message: "What is the usage of this project?"
        },
        {
            type: "list",
            name: "license",
            message: "Apply necessary licenses: ",
            choices: [
                "Apache",
                "Academic",
                "GNU",
                "ISC",
                "MIT",
                "Mozilla",
                "Open"
            ]
        },
        {
            type: "input",
            name: "contributing",
            message: "Contributor list:"
        },
        {
            type: "input",
            name: "username",
            message: "Please enter your GitHub username: "
        },
        {
            type: "input",
            name: "email",
            message: "Please enter your email: "
        }
    ]);
}

// util.promisify / async funciton
async function init() {
    try {
        const answer = await promptUser();
        const genContent = genREADME(answer);
        await writeFileAsync('./dist/README.md', genContent);
        console.log('✔️  Successfully wrote to README.md');
    } catch (err) {
        console.log(err);
    }
}
init();