document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript loaded');

  const formDetails = document.querySelector('#new-item-form');
  formDetails.addEventListener('submit', handleFormSubmit);

  const formDelete = document.querySelector('#delete-form');
  formDelete.addEventListener('submit', handleFormDelete);
})



const handleFormSubmit = function (event) {
  event.preventDefault();
  const resultForm = document.querySelector('#lidiv');
  const newListItem = document.createElement('li');
  newListItem.setAttribute('style', 'white-space: pre;');
  let moons, type;
  switch (this.planet_name.value) {
  case 'Mercury':
    moons = 0;
    type = 'rocky';
    break;
  case "Venus":
    moons = 0;
    type = 'rocky';
    break;
  case "Earth":
    moons = 1;
    type = 'rocky';
    break;
  case "Mars":
    moons = 2;
    type = 'rocky';
    break;
  case "Jupiter":
    moons = 79;
    type = 'gas giant';
    break;
  case "Saturn":
    moons = 23;
    type = 'gas giant';
    break;
  case "Uranus":
    moons = 27;
    type = 'gas giant';
  case "Neptune":
    moons = 14;
    type = 'gas giant';
  case "Dwarf Planet Pluto":
    moons = 1;
    type = 'icy/rocky';
}
  newListItem.textContent = `
    Planet: ${this.planet_name.value} \r\n
    Best thing about it: ${this.best_thing.value} \r\n
    Anything else? ${this.free_input.value} \r\n
    Number of Moons: ${moons} \r\n
    Type: ${type}
  `;


  newListItem.classList.add("media-card");

  resultForm.appendChild(newListItem);


  formDetails = document.querySelector('#new-item-form');
  formDetails.reset();
};

const handleFormDelete = function (event){
  event.preventDefault();
  // const resultForm = document.querySelector('#reading-list');
  const resultFormul = document.querySelector('#planet-list-ul');
  // resultForm.removeChild(resultFormul);
  resultFormul.innerHTML = '';
  planetcount = 1;
}
