const badge1 = "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
const badge2 = "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)";
const badge3 = "[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)";

let badge = "";

// function to generate markdown for README
function generateMarkdown(questions, answers) {
  // Conditional statement to pick which badge to display.
  if (`${answers.License}` === 'MIT') {
    badge = `${badge1}`;
  }
  else if (`${answers.License}` === 'ISC'){
    badge = `${badge2}`;
  }
  else {
    badge = `${badge3}`;
  }
  //returns the formatted text for the README.md file
  return `# ${answers.title} \n`
  + badge + `
  ## ${questions[1].name}
  - ${answers.Description}

  ## Table of Contents
  - [${questions[2].name}](#installation)
  - [${questions[3].name}](#usage)
  - [${questions[4].name}](#license)
  - [${questions[5].name}](#contribute)
  - [${questions[6].name}](#tests)
  - [${questions[7].name}](#questions)

  ## ${questions[2].name}
  - ${answers.Installation}

  ## ${questions[3].name}
  - ${answers.Usage}

  ## ${questions[4].name}
  - Please refer to the ${answers.License} license in the repo.

  ## ${questions[5].name}
  - ${answers.Contribute}

  ## ${questions[6].name}
  - ${answers.Tests}

  ## ${questions[7].name}
  - Feel free to contact me if you have any questions or feedback: 
    - ${answers.Questions} 
    - https://github.com/${answers.Github}
`;
}

module.exports = generateMarkdown;
