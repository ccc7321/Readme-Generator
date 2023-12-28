// function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}

  ## Installation
  ${data.installation}
  
  ## Usage
  ${data.usage}
  
  ## Link to Application
  [${data.link}](${data.link})
  
  ## Credits
  ${data.credits}
  
  ## License
  This project is licensed under the ${data.license} License.
`;
}

module.exports = generateMarkdown;
