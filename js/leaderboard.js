fetch('https://api.steezecalculator.com/api/leaderboard')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }
    return response.json();
  })
  .then(data => {
    data.sort((a, b) => b.score - a.score);
    const top10 = data.slice(0, 5);
    const leaderboardDiv = document.getElementById('hallOfFame');
    leaderboardDiv.innerHTML = '';

    top10.forEach(entry => {
      const entryP = document.createElement('p');
      entryP.textContent = `${entry.name} got ${entry.score} of 100`;
      entryP.className = 'text-sm mb-3 font-bold text-[#2e4681]';
      leaderboardDiv.appendChild(entryP);
    });
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  