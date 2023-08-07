// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  // Implement code to return the corresponding license badge based on the provided license.
  // Example:
  if (license === 'MIT') {
    return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
  } else if (license === 'Apache') {
    return '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  // Implement code to return the corresponding license link based on the provided license.
  // Example:
  if (license === 'MIT') {
    return 'Licensed under the [MIT License](https://opensource.org/licenses/MIT).';
  } else if (license === 'Apache') {
    return 'Licensed under the [Apache License 2.0](https://opensource.org/licenses/Apache-2.0).';
  } else {
    return '';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  // Implement code to return the complete license section based on the provided license.
  // Example:
  if (license) {
    return `
## License
${renderLicenseLink(license)}
    `;
  } else {
    return '';
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

## Description
${data.description || ''}


## Table of Contents

  * [Screenshots](#screenshots)
  * [Usage](#usage)
  * [Installation](#installation)
  * [Credits](#credits) 
  * [Link](#link)
  * [License](#license)


## Screenshots
${data.screenshots || '' }

## Usage
${data.usage || ''}

## Installation
${data.installation || ''}

## Credits
${data.credits   || ''}

## Link
${data.link  || ''}

${renderLicenseSection(data.license)}
${data.license || ''}
`;
}

module.exports = generateMarkdown;
