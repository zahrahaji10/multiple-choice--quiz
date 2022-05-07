function addScores() {
  let scores = JSON.parse(localStorage.getItem("allScores"));
  let table = document.querySelector(".score-board");
  table.innerHTML = `<tr><td>${scores.name}</td><td>${scores.score}</td></tr>`;
}

addScores();
