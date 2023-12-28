const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");


// array of questions for user
const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of the project?'
    },
    {
      type: 'input',
      name: 'installation',
      message: 'What are the required installation steps for the project?'
    },
    {
      type: 'input',
      name: 'usage',
      message: 'What is the usage of the website?'
    },
    {
      type: 'input',
      name: 'link',
      message: 'What is the link to the application?'
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Anyone or resources to credit for?'
    },
    {
      type: 'input',
      name: 'license',
      message: 'What license is being used?'
    }
  ];
  
  // function to write README file
  function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data);
  }
  
  // function to initialize program
  function init() {
    inquirer
      .prompt(questions)
      .then((answers) => {
        // Generate markdown content based on user answers
        const markdownContent = generateMarkdown(answers);
        
        // Write the generated content to a README file
        const outputPath = path.join(__dirname,`output`, 'README.md'); // Change the output path as needed
        writeToFile(outputPath, markdownContent);
  
        console.log('README.md successfully generated!');
      })
      .catch((err) => {
        console.error('Error occurred:', err);
      });
  }
  
  // function call to initialize program
  init();