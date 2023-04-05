const {
  MITLicense,
  GNULicense,
  apacheLicense,
} = require('./licenses.js');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  var badgeText = "";
  if(license === "MIT License"){
    badgeText = `![${license}](${MITLicense.badgeLink})`;
  }else if (license === "GNU GPLv3"){
    badgeText = `![${license}](${GNULicense.badgeLink})`;
  }else if(license === "Apache License"){
    badgeText = `![${license}](${apacheLicense.badgeLink})`;
  }else{
    badgeText = 'No badge available.'
  }
  return badgeText;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  var licenseLink = "";
  if(license === "MIT License"){
    licenseLink = `![${license}](${MITLicense.link})`;
  }else if (license === "GNU GPLv3"){
    licenseLink = `![${license}](${GNULicense.link})`;
  }else if(license === "Apache License"){
    licenseLink = `![${license}](${apacheLicense.link})`;
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
    licenseSection = MITLicense.text;
  }else if (license === "GNU GPLv3"){
    licenseSection = GNULicense.text;
  }else if(license === "Apache License"){
    licenseSection = apacheLicense.text;
  }else{
    licenseSection = 'This project is not covered under any license.'
  }
  return licenseSection;
}

function renderTableOfContents(questions){
  var contents;
  for (let i=0; i<questions.length; i++){
    contents += `${i}. [${questions[i].title}](#${questions[i].title}) \n`;
  }
  return contents;
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
