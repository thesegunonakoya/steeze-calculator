const check = document.getElementById("steeze");
const refresh = document.getElementById('refresh');
const scoreContainer = document.getElementById('score-container');
const errorMessage = document.getElementById('error-message');
const optionsErrorMessage = document.getElementById('qerror-message');

check.addEventListener('submit', async (e) => {
  e.preventDefault();

  document.getElementById('freshNotice').style.display = 'none';

  const logoInput = document.getElementById('name');
  let logo = logoInput.value.trim();

  errorMessage.style.display = 'none';
  optionsErrorMessage.style.display = 'none';

  if (!logo) {
    errorMessage.style.display = 'block';
    scoreContainer.style.display = 'none';
    window.scrollTo(0, 0);
    logoInput.focus();
    return;
  }

  const userAnswers = [check.q1.value, check.q2.value, check.q3.value, check.q4.value, check.q5.value];
  if (userAnswers.some(answer => answer === "")) {
    optionsErrorMessage.style.display = 'block';
    window.scrollTo(0, 0);
    return;
  }

  scoreContainer.style.display = 'block';
  document.getElementById("refresh").textContent = "Test Again";

  let user = 0;
  const score = document.getElementById("score");

  const first = ['A', 'B', 'F', 'C', 'D'];
  const second = ['E', 'E', 'A', 'F', 'C'];
  const third = ['B', 'A', 'E', 'E', 'F'];
  const fourth = ['D', 'F', 'D', 'B', 'E'];
  const fifth = ['F', 'C', 'B', 'D', 'B'];
  const sixth = ['C', 'D', 'C', 'A', 'A'];

  userAnswers.forEach((answer, index) => {
    if (answer === first[index]) {
      user += 18;
    } else if (answer === second[index]) {
      user += 13;
    } else if (answer === third[index]) {
      user += 7;
    } else if (answer === fourth[index]) {
      user += 4;
    } else if (answer === fifth[index]) {
      user += 1;
    } else if (answer === sixth[index]) {
      user -= 10;
    }
  });


  if (user < 0) {
    score.innerHTML = `<h2 class="text-xl">You scored ${user} out of 100!</h2> <h3 class="text-base mt-3">${logo}, Steeze saw your score, shook its head in disbelief, gave up on life, and booked the next flight out of Nigeria! You peasant!</h3> `;
    
  } else if (user > 0 && user <= 29) {
    score.innerHTML = `<h2 class="text-xl">You scored ${user} out of 100!</h2> <h3 class="text-base mt-3">${logo}, Steeze took one look at you and decided to retire! You need more than steeze, my friend; you need a miracle!</h3> `;
    
  } else if (user > 30 && user <= 49) {
    score.innerHTML = `<h2 class="text-xl">You scored ${user} out of 100!</h2> <h3 class="text-base mt-3">${logo}, Your steeze is like trying to drive a danfo without knowing the route — lost and confused! It needs a GPS and a prayer to find its way!</h3> `;
    
  } else if (user > 50 && user <= 69) {
    score.innerHTML = `<h2 class="text-xl">You scored ${user} out of 100!</h2> <h3 class="text-base mt-3">${logo}, You try, but your steeze is still struggling, it's like a faulty generator — loud and inefficient. Time for an upgrade! </h3> `;
    
  } else if (user > 70 && user <= 79) {
    score.innerHTML = `<h2 class="text-xl">You scored ${user} out of 100!</h2> <h3 class="text-base mt-3">${logo}, You dey try small small, but your steeze dey learn work sha! E be like say e need extra lessons for steeze school! Send in your jamb score ASAP!</h3> `;
    
  } else if (user > 80 && user <= 89) {
    score.innerHTML = `<h2 class="text-xl">You scored ${user} out of 100!</h2> <h3 class="text-base mt-3">${logo}, You have steeze, but it's like it's playing hide and seek, like a ghost in broad daylight — your steeze is shy, hiding in plain sight! </h3> `;
    
  } else if (user === 90 && user >= 90) {
    score.innerHTML = `<h2 class="text-xl">You scored ${user} out of 100!</h2> <h3 class="text-base mt-3">${logo}, You're the agba of all steeze! We might need your autograph soon o!</h3> `;

  }

  window.scrollTo(0, 0);

  try {
    if (user >= 80 ) { 
      const response = await fetch('https://api.steezecalculator.com/api/submit-score', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: logo, score: user })
      });
      const data = await response.json();
      console.log('Score submission response:', data);
    } else {
      console.log('Score is below 200, not submitting to the database.');
    }
  } catch (error) {
    console.error('Error storing score:', error);
  }
  

  check.reset();
});

refresh.addEventListener('click', () => {
  check.reset();
  document.getElementById("score").textContent = "Take the test to get a steeze score!";
  document.getElementById("score").className = '';
  document.getElementById("refresh").textContent = "";
  errorMessage.style.display = 'none';
  optionsErrorMessage.style.display = 'none';
  scoreContainer.style.display = 'none';
  window.scrollTo(0, 0);
});
