// If there is no license, return an empty string


function renderLicenseBadge(lisense) {
  let lisenseBadge = '';
  if (license != 'None') {
    lisenseBadge = '![License Badge](https://shields.io/badge/license-' + license
  }

  return lisenseBadge;
}


function renderLicenseLink(lisense) {
  let licenseLink = '';

  switch (license) {
    case 'MIT':
      licenseLink = 'https://mit-license.org/';
      break;
    case 'BSD':
      licenseLink = 'https://opensource.org/licenses/BSD-3-Clause';
      break;
    case 'GPL':
      licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html';
      break;
    case 'Apache':
      licenseLink = 'https://www.apache.org/licenses/LICENSE-2.0.html';
      break;
    default:
      licenseLink = '';
      break;
  }

  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  let licenseSection = '';

  //create license section if license was selected
  if (license != 'None') {
    licenseSection += '##License/n'
    licenseSection += 'Please see' + renderLicenseLink(license) + ' to get detailed information for this license\n';
  }

  return licenseSection;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description
  ${data.about}
  ## Motivation
  ${data.motivation}
  ## Purpose
  ${data.purpose}
  ## Lisense
  ${data.license}
  ## Languages
  ${data.languages}
  ## Conatact me
  If you need to contact me use this email: </br>
  ${data.email}</br>
  You can check out my GitHub below: </br>
  https://github.com/${data.github}
`;
}

module.exports = generateMarkdown;
