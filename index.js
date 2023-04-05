// Import inquirer, fs, and functions from other files
const inquirer = require("inquirer");
const fs = require("fs");
const {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  renderTableOfContents
} = require("./utils/generateMarkdown");

// Store questions in objects inside an array
const questions = [
  {
    type: "input",
    message: "What is the title of your project?",
    name: "title",
    title: "Title",
  },
  {
    type: "confirm",
    message: "Would you like to include a table of contents?",
    name: "contents",
    title: "Contents",
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
    title: "Installation",
  },
  {
    type: "input",
    message: "Enter your contribution guidelines: ",
    name: "contribution",
    title: "Contribution",
  },
  {
    type: "input",
    message: "Enter your usage information: ",
    name: "usage",
    title: "Usage",
  },
  {
    type: "list",
    message: "Enter your licensing agreement:",
    choices: ["MIT License", "GNU GPLv3", "Apache License", "No License"],
    name: "license",
    title: "License",
  },
  {
    type: "input",
    message: "Enter your contribution guidelines: ",
    name: "contribution",
    title: "Contribution",
  },
  {
    type: "input",
    message: "Enter your test instructions: ",
    name: "testing",
    title: "Testing",
  },
];

// Function to write to readme file
function writeToFile(data) {
  const formatted = formatData(data);
  fs.appendFile("README.md", generateMarkdown(formatted), (err) =>
    err ? console.error(err) : console.log("success")
  );
}

// Function to format readme file
function formatData(data) {
  //returns an array of titles and values
  answers = [];
  for (let i = 0; i < questions.length; i++) {
    const currentQ = questions[i];
    var answer = '';
    if (currentQ.name === 'license') {
        var licenseBadge = renderLicenseBadge(data[currentQ.name]);
        var licenseLink = renderLicenseLink(data[currentQ.name]);
        var licenseSection = renderLicenseSection(data[currentQ.name]);
        answer = {
            title: currentQ.title,
            value: `${licenseBadge}\n${licenseSection}\n${licenseLink}`
        }
    } else if(currentQ.name === 'contents' && (data[currentQ.name])){
        answer = {
            title: currentQ.title,
            value: renderTableOfContents(questions),
        }
    }else if (currentQ.name === 'contents' && (!data[currentQ.name])) {
        continue;
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
