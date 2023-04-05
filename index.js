// Import inquirer, fs, and functions from other files
const inquirer = require("inquirer");
const fs = require("fs");
const {
  generateMarkdown,
  renderLicenseBadge,
  renderLicenseLink,
  renderLicenseSection,
  renderTableOfContents,
  renderQuestionsSection,
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
  {
    type: "input",
    message: "Enter your github username: ",
    name: "github",
    title: "Questions",
  },
  {
    type: "input",
    message: "Enter your email: ",
    name: "email",
    title: "Questions",
  },
];

// Function to write to readme file
function writeToFile(data) {
  // formats data using formatdata() fn
  const formatted = formatData(data);
  // Creates document and prints the info generated using markdown fn
  fs.appendFile("README.md", generateMarkdown(formatted), (err) =>
    err ? console.error(err) : console.log("success")
  );
}

// Function to format readme file
function formatData(data) {
  //returns an array of titles and values
  // Initialize empty array to hold answers
  var answers = [];
  // Iterate through questions and format accordingly
  for (let i = 0; i < questions.length; i++) {
    const currentQ = questions[i];
    // Creates empty string to hold section information
    var answer = "";
    // Conditional that filters through different section needs
    if (currentQ.name === "title") {
      // Store section in answer var
      answer = {
        title: data[currentQ.name],
        value: "",
      };
    } else if (currentQ.name === "license") {
      // Store section in answer var
      var licenseBadge = renderLicenseBadge(data[currentQ.name]);
      var licenseLink = renderLicenseLink(data[currentQ.name]);
      var licenseSection = renderLicenseSection(data[currentQ.name]);
      answer = {
        title: currentQ.title,
        value: `${licenseBadge}\n${licenseSection}\n${licenseLink}`,
      };
    } else if (currentQ.name === "contents" && data[currentQ.name]) {
        // Store section in answer var
        answer = {
        title: currentQ.title,
        value: renderTableOfContents(questions),
      };
    } else if (currentQ.name === "contents" && !data[currentQ.name]) {
      // Skip if user chooses to
      continue;
    } else if (currentQ.name === "github") {
      // Store section in answer var
      answer = {
        title: currentQ.title,
        value: renderQuestionsSection(
          data[currentQ.name],
          data[questions[i + 1].name]
        ),
      };
    } else if (currentQ.name === "email") {
      continue;
    } else {
      // Store section in answer var for all other sections
      answer = {
        title: currentQ.title,
        value: data[currentQ.name],
      };
    }
    // Push to answers array
    answers.push(answer);
  }
  // Return formatted answers
  return answers;
}

// Function to initialize app
function init() {
  inquirer.prompt(questions).then(writeToFile);
}

// Function call to initialize app
init();
