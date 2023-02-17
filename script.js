/* this allows for the contents of the project container to change to 
give more information on the project and links to github */

function showDetails(containerId) {
  const projectContainer = document.getElementById(containerId);
  if (containerId === 'TU-DB-project') {
    projectContainer.innerHTML = 'Worked with a local non-profit to create a small database of youth participants and program location information to determine the effect of location on accessibility factors for youth programs. Languages: Python, SQL';
  } else if (containerId === 'battleship') {
    projectContainer.innerHTML = 'Created an online version of battleship played against the computer. Languages: Javascript, CSS';
  } else if (containerId === 'python-projects') {
    projectContainer.innerHTML = 'Series of projects completed for INLS 560: Programming for Information Science. Languages: Python';
  } else if (containerId === 'sas-projects') {
    projectContainer.innerHTML = 'Series of projects completed for BIOS669, a Biostatistics class focusing on SAS. Languages: SAS';
  } else if (containerId === 'personal-website') {
    projectContainer.innerHTML = 'You are looking at it! Click to see the code. Languages: HTML, CSS, Javascript';
  } else if (containerId === 'memory-game') {
    projectContainer.innerHTML = 'A fun memory game made using React. Languages: Javascript';
  } else if (containerId === 'library') {
    projectContainer.innerHTML = 'A personal virtual library that uses form validation and DOM manipulation techniques. Languages: HTML,CSS, Javascript';
  } else if (containerId === 'weather-app') {
    projectContainer.innerHTML = 'A live weather app that displays the current weather in Chapel Hill, NC. Languages: Javascript, CSS';
  } else if (containerId === 'tech-a-sketch') {
    projectContainer.innerHTML = 'A virtual version of a childhood classic toy. Languages: Javascript, CSS';
  } else if (containerId === 'cv-app') {
    projectContainer.innerHTML = 'A React application that allows user to enter information to be shown in an example CV. Languages: Javascript, HTML, CSS';
  } else if (containerId === 'comp-126') {
    projectContainer.innerHTML = 'Series of projects completed for COMP 126, a web development class. Languages: HTML and CSS';
  } else if (containerId === 'calculator') {
    projectContainer.innerHTML = 'An online standard calculator. Languages: Javascript, HTML and CSS';
  } else if (containerId === 'rock-paper-scissors') {
    projectContainer.innerHTML = 'An online version of rock-paper-scissors against the computer. Languages: Javascript, HTML and CSS';
  } else if (containerId === 'cutting-corners') {
    projectContainer.innerHTML = 'A simple blog outlining some of my personal favorite, cheap recipes. Check it out if you are looking for some easy meal-prep ideas! Languages: HTML and CSS';
  } else if (containerId === 'react-restaurant') {
    projectContainer.innerHTML = 'A simple app that demonstrates how a fake restaurant could display their information. Languages: Javascript, HTML and CSS';
  }
}
