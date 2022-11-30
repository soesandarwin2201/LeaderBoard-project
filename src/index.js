import './index.css';
import { postData, getData } from './modules/getapi.js';

const form = document.getElementById('add-form');
const container = document.getElementById('scores-container');
const name = document.getElementById('name');
const score = document.getElementById('score');
const refreshBtn = document.getElementById('refresh-btn');

const displayScore = (person, personScore) => {
  const tableRow = document.createElement('tr');
  tableRow.classList.add('person-1');
  tableRow.innerHTML = `
   <td class="title">${person}</td>
   <span> : </span>
   <td class="scores">${personScore}</td>`.trim();

  container.appendChild(tableRow);
};

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const person = name.value;
  const personScore = score.value;
  await postData({
    user: person,
    score: Number(personScore),
  });

  name.value = '';
  score.value = ' ';
});

refreshBtn.addEventListener('click', async () => {
  container.innerHTML = ' ';
  const scores = await getData();
  scores.result.forEach((score) => {
    displayScore(score.user, score.score);
  });
});