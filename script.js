/* this allows for the contents of the project container to change to 
give more information on the project and links to github */

function showDetails(containerId) {
  const projectContainer = document.getElementById(containerId);
  if (containerId === 'TU-DB-project') {
    projectContainer.innerHTML = 'Triangle Ultimate Youth Database: Worked with a local non-profit to create a small database of youth participants and program location information to determine the effect of location on accessibility factors for youth programs. Languages: Python, SQL';
  } else if (containerId === 'battleship') {
    projectContainer.innerHTML = 'Battleship: Created an online version of battleship played against the computer. Languages: Javascript, CSS';
  } else if (containerId === 'python-projects') {
    projectContainer.innerHTML = 'Python Projects: Series of projects completed for INLS 560: Programming for Information Science. Languages: Python';
  } else if (containerId === 'sas-projects') {
    projectContainer.innerHTML = 'SAS Projects: Series of projects completed for BIOS669, a Biostatistics class focusing on SAS. Languages: SAS';
  } else if (containerId === 'personal-website') {
    projectContainer.innerHTML = 'Personal Website: You are looking at it! Click to see the code. Languages: HTML, CSS, Javascript';
  } else if (containerId === 'memory-game') {
    projectContainer.innerHTML = 'Memory Game: A fun memory game made using React. Languages: Javascript';
  } else if (containerId === 'library') {
    projectContainer.innerHTML = 'Library: A personal virtual library that uses form validation and DOM manipulation techniques. Languages: HTML,CSS, Javascript';
  } else if (containerId === 'weather-app') {
    projectContainer.innerHTML = 'Chapel Hill Weather App: A live weather app that displays the current weather in Chapel Hill, NC. Languages: Javascript, CSS';
  } else if (containerId === 'tech-a-sketch') {
    projectContainer.innerHTML = 'Tech-A-Sketch: A virtual version of a childhood classic toy. Languages: Javascript, CSS';
  } else if (containerId === 'cv-app') {
    projectContainer.innerHTML = 'CV App: A React application that allows user to enter information to be shown in an example CV. Languages: Javascript, HTML, CSS';
  } else if (containerId === 'comp-126') {
    projectContainer.innerHTML = 'COMP 126 Assignments: Series of projects completed for COMP 126, a web development class. Languages: HTML and CSS';
  } else if (containerId === 'calculator') {
    projectContainer.innerHTML = 'Calculator: An online simple calculator. Languages: Javascript, HTML and CSS';
  } else if (containerId === 'rock-paper-scissors') {
    projectContainer.innerHTML = 'Rock Paper Scissors: A virtual version of rock-paper-scissors played against the computer. Languages: Javascript, HTML and CSS';
  } else if (containerId === 'cutting-corners') {
    projectContainer.innerHTML = 'Cutting Corners: A blog outlining some of my personal favorite, cheap recipes. Check it out if you are looking for some easy meal-prep ideas! Languages: HTML and CSS';
  } else if (containerId === 'react-restaurant') {
    projectContainer.innerHTML = 'React Restaurant: A simple app that demonstrates how a fake restaurant could display their information using a React application. Languages: Javascript, HTML and CSS';
  }
}
