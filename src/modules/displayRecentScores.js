const scoreList = document.querySelector('.scores-list');

const displayRecentScores = (data) => {
  let li = '';
  data.forEach((item) => {
    li += `<li class="list-item">
     <p class="list-name">${item.user}<span>:</span></p>
     <p class="list-score">${item.score}</p>
 </li>`;
  });
  scoreList.innerHTML = li;
};

export default displayRecentScores;