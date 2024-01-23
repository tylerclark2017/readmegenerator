// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license === "MIT License") {
    return '![License: MIT]';
  } else if (license ==='GNU General Public License v3') {
    return '![License: GPL v3]';
  } else if (license === 'Apache License 2.0') {
    return '![License: Apache License 2.0]';
    } else {
      return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license === 'MIT License') {
    return 'https://opensource.org/licenses/MIT/'
  } else if (license === 'GNU General Public License v3') {
    return 'https://gnu.org/licenses/gpl-3.0';
  } else if (license === 'Apache License 2.0') {
    return 'https://www.apache.org/licenses/LICENSE-2.0';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license ==='MIT License') {
    return 'This project is licensed under the MIT License. Check the license link for more details.';
  } else if (license === 'GNU General Public License v3') {
    return `This project is licensed under the GNU General Public License v3. Check the license link for more details.`;
  } else if (license === 'Apache License 2.0') {
    return 'This project is licensed under the Apache License 2.0. Check the license link for more details.';
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

`;
}

module.exports = generateMarkdown;
