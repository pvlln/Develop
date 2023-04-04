// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  renderTableOfContents
} = require("./utils/generateMarkdown");
// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    title: "Project Title ",
  },
  {
    type: "confirm",
    message: "Would you like to include a table of contents?",
    name: "contents",
    title: "Table of Contents ",
  },
  {
    type: "input",
    message: "Enter a description: ",
    name: "description",
    title: "Description ",
  },
  {
    type: "input",
    message: "Enter your installation instructions: ",
    name: "installation",
    title: "Installation Instructions",
  },
  {
    type: "input",
    message: "Enter your contribution guidelines: ",
    name: "contribution",
    title: "Contribution Guidelines",
  },
  {
    type: "input",
    message: "Enter your usage information: ",
    name: "usage",
    title: "Usage Information",
  },
  {
    type: "input",
    message: "Enter your licensing agreement: ",
    name: "license",
    title: "Contribution Guidelines",
  },
  {
    type: "input",
    message: "Enter your contribution guidelines: ",
    name: "contribution",
    title: "Contribution Guidelines",
  },
  {
    type: "input",
    message: "Enter your test instructions: ",
    name: "testing",
    title: "Test Instructions",
  },
];

// TODO: Create a function to write README file
function writeToFile(data) {
  const formatted = formatData(data);
  fs.appendFile("README.md", generateMarkdown(formatted), (err) =>
    err ? console.error(err) : console.log("success")
  );
}

function formatData(data) {
  //returns an array of titles and values
  answers = [];
  for (let i = 0; i < questions.length; i++) {
    const currentQ = questions[i];

    if (currentQ.name === 'license') {
        var licenseBadge = renderLicenseBadge(currentQ.name);
        var licenseLink = renderLicenseLink(currentQ.name);
        var licenseSection = renderLicenseSection(currentQ.name);

    } else if(currentQ.name === 'contents'){
        renderTableOfContents();
    }else {
      answer = {
        title: currentQ.title,
        value: data[currentQ.name],
      };
    }
    answers.push(answer);
  }
  return answers;
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();
