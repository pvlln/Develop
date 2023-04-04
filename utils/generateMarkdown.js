// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeText = "";
  if(license === "MIT License"){
    badgeText = MITLicense.badge;
  }else if (license === "GNU GPLv3"){
    badgeText = GNULicense.badge;
  }else if(license === "Apache License"){
    badgeText = apacheLicense.badge;
  }else{
    badgeText = 'This project is not covered under any license.'
  }
  return badgeText;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = "";
  
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
const {
  MITLicense,
  GNULicense,
  apacheLicense,
} = require('./licenses.js');

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
  // Keep in mind license
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
