// generateReadme function populating the README.md
function generateReadme(answers) {
  return `
    <h1 align="center">${answers.projTitle} 👋</h1>
      
    ## Description
    🔍 ${answers.description}
    
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Questions](#questions)
    
    ## Installation
    💾 ${answers.installation}
    
    ## Usage
    💻 ${answers.usage}
    
    ## License
    ![badge](https://img.shields.io/badge/license-${answers.license}-brightgreen)
    <br />
    This application is covered by the ${answers.license} license. 
    
    ## Contributing
    👪 ${answers.contributing}
    
    
    ## Contact
    Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
    <br />
    ✉️ Email me with any questions: ${answers.email}<br /> 
    `;
}


module.exports = generateReadme;