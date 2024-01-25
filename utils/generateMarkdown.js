// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return '![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)';
  } else if (license ==='GNU General Public License v3') {
    return '![License: GPL v3](https://img.shields.io/badge/license-GNU%20GPLv3-blue.svg)';
  } else if (license === 'Apache License 2.0') {
    return '![License: Apache License 2.0](https://img.shields.io/badge/license-Apache%20License%202.0-blue.svg)';
    } else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'None') {
    return ''
  } 
  else {
    return '* [License](#license)';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==='MIT License') {
    return `## License
    This project is licensed under the MIT License.`;
  } else if (license ==='GNU General Public License v3') {
    return `## License
    This project is licensed under the GNU General Public License v3.0`
  } else if (license === 'Apache License 2.0') {
    return `## License
    This project is licensed under Apache License Version 2.0`;
  }
  else {
    return `## License`
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
  

  
## Table of Contents
${renderLicenseLink()}
- [Description](#description)
- [Installation](#installation)
- [Usage](#usage)
- [Contributions](#Contributions)
- [Testing](#testing)
- [Questions](#questions)

## Description
${data.description}

## Installation
${data.installation}

## Usage
${data.usage}

## Contributions
${data.contributions}

## Testing
${data.testing}

## License
${renderLicenseSection(data.license)}

## Questions
If you have any questions, please contact me at ${data.email}. You can find more of my work at [${data.githubUsername}](https://github.com/${data.githubUsername}).

### User Email
${data.email}

### User GitHub Profile
${data.githubUsername}

`
}

module.exports = generateMarkdown;
