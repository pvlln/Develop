const {
  MITLicense,
  GNULicense,
  apacheLicense,
} = require('./licenses.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeText = "";
  if(license.title === "MIT License"){
    badgeText = `![${license.title}](${MITLicense.badgeLink})`;
  }else if (license.title === "GNU GPLv3"){
    badgeText = `![${license.title}](${GNULicense.badgeLink})`;
  }else if(license.title === "Apache License"){
    badgeText = `![${license.title}](${apacheLicense.badgeLink})`;
  }else{
    badgeText = 'No badge available.'
  }
  return badgeText;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = "";
  if(license.title === "MIT License"){
    licenseLink = `![${license.title}](${MITLicense.link})`;
  }else if (license.title === "GNU GPLv3"){
    licenseLink = `![${license.title}](${GNULicense.link})`;
  }else if(license.title === "Apache License"){
    licenseLink = `![${license.title}](${apacheLicense.link})`;
  }else{
    licenseLink = 'License link not available.'
  }
  return licenseLink;
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string

function renderLicenseSection(license) {
  var licenseSection = "";
  if(license === "MIT License"){
    licenseSection = MITLicense;
  }else if (license === "GNU GPLv3"){
    licenseSection = GNULicense;
  }else if(license === "Apache License"){
    licenseSection = apacheLicense;
  }else{
    licenseSection = 'This project is not covered under any license.'
  }
  return licenseSection;
}

function renderTableOfContents(){
  
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(answers) {
  var markdown = ""

  answers.forEach(({ title, value }) => {
    markdown += `## ${title} \n ${value} \n`;
  });

  return markdown;
}

module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection, renderTableOfContents};
