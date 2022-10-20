import './style.css';
import APIURL from './modules/API_URL.js';
import sendData from './modules/sendData.js';
import displayRecentScores from './modules/displayRecentScores.js';

const form = document.querySelector('#form');
const refreshBtn = document.querySelector('.refresh-btn');
const inputName = document.querySelector('.input-name');
const inputScore = document.querySelector('.input-number');

const showAPI = async () => {
  const res = await fetch(`${APIURL}`);
  const data = await res.json();
  displayRecentScores(data.result);
};

form.addEventListener('submit', (e) => {
  e.preventDefault();
  if (!inputName.value || !inputScore.value) return;
  sendData();
  inputName.value = '';
  inputScore.value = '';
});

refreshBtn.addEventListener('click', showAPI);