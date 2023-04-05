// Import license info
const {
  MITLicense,
  GNULicense,
  apacheLicense,
} = require('./licenses.js');

// Renders license badges
function renderLicenseBadge(license) {
  // Initialize variable that stores string
  var badgeText = "";
  // Conditional that renders badge from user input
  if(license === "MIT License"){
    badgeText = `![${license}](${MITLicense.badgeLink})`;
  }else if (license === "GNU GPLv3"){
    badgeText = `![${license}](${GNULicense.badgeLink})`;
  }else if(license === "Apache License"){
    badgeText = `![${license}](${apacheLicense.badgeLink})`;
  }else{
    badgeText = 'No badge available.'
  }
  // Return badge text
  return badgeText;
}

// Renders license links
function renderLicenseLink(license) {
  // Initialize variable that stores string
  var licenseLink = "";
  // Conditional that renders link based on user input
  if(license === "MIT License"){
    licenseLink = `[${license}](${MITLicense.link})`;
  }else if (license === "GNU GPLv3"){
    licenseLink = `[${license}](${GNULicense.link})`;
  }else if(license === "Apache License"){
    licenseLink = `[${license}](${apacheLicense.link})`;
  }else{
    licenseLink = 'License link not available.'
  }
  // Return license link
  return licenseLink;
}

// Renders license section
function renderLicenseSection(license) {
  // Initialize variable that stores string
  var licenseSection = "";
  // Conditional that renders license text based on user input
  if(license === "MIT License"){
    licenseSection = MITLicense.text;
  }else if (license === "GNU GPLv3"){
    licenseSection = GNULicense.text;
  }else if(license === "Apache License"){
    licenseSection = apacheLicense.text;
  }else{
    licenseSection = 'This project is not covered under any license.'
  }
  // Return license link
  return licenseSection;
}

// Function that renders table of contents
function renderTableOfContents(questions){
  // Initialize variable 
  var contents = '';
  // Loop through headers and add to empty string
  for (let i=1; i<questions.length; i++){
    contents += `${i}. [${questions[i].title}](#${questions[i].title}) \n`;
  }
  // Return contents
  return contents;
}

// Function that renders questions section
function renderQuestionsSection(ghuser, email){
  // Initialize string with information and add variables inputted by user
  var questionsSection = `My github Username: ${ghuser} \n`;
  questionsSection += `Please find my github profile [here](https://github.com/${ghuser})\n`;
  questionsSection += `If you have any questions, please reach me at ${email}`;
  // Returns question section string
  return questionsSection;
}

// Function to generate markdown for README
function generateMarkdown(answers) {
  // Initialize string var
  var markdown = ""
  // Iterate through formatted answers and prints down onto markdown string
  answers.forEach(({ title, value }) => {
    markdown += `## ${title} \n ${value} \n`;
  });
  // Return markdown string
  return markdown;
}
// Export functions
module.exports = {generateMarkdown, renderLicenseBadge, renderLicenseLink, renderLicenseSection, renderTableOfContents, renderQuestionsSection};
