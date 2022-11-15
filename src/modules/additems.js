import { addLocalStorage , getLocalStorage } from "./localStorage.js";

const submitBtn = document.getElementById('submit-btn');
const container = document.getElementById('scores-container');
const name = document.getElementById('name');
const score = document.getElementById('score');

function addScore(event) {
  // event.preventDefault();
  const person = name.value;
  const personScore = score.value;
  const id = Date.now().toString();

  if (person !== '' && personScore !== '') {
    const tableRow = document.createElement('tr');
    const attribute = document.createAttribute('data-id');
    attribute.value = id;
    tableRow.setAttributeNode(attribute);
    tableRow.classList.add('person-1');
    tableRow.innerHTML = `
   <td class="title">${person}</td>
   <span> : </span>
   <td class="scores">${personScore}</td>`.trim();

    container.appendChild(tableRow);
    addLocalStorage(id,person,personScore);
    name.value = '';
    score.value = '';
  }
}

function display() {
 let people = getLocalStorage();
 if(people.length > 0 ) {
  people.forEach((onePerson) => {
   displayScore(onePerson.id, onePerson.person, onePerson.personScore);
  });
 }
}

function displayScore( id, person, personScore ) {
  const tableRow = document.createElement('tr');
  const attribute = document.createAttribute('data-id');
  attribute.value = id;
  tableRow.setAttributeNode(attribute);
  tableRow.classList.add('person-1');
  tableRow.innerHTML = `
   <td class="title">${person}</td>
   <span> : </span>
   <td class="scores">${personScore}</td>`.trim();

  container.appendChild(tableRow);
}

export { addScore , displayScore , display };