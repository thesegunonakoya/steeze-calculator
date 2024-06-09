const check = document.getElementById("steeze");
const refresh = document.getElementById('refresh');
const scoreContainer = document.getElementById('score-container');
const errorMessage = document.getElementById('error-message');
const optionsErrorMessage = document.getElementById('qerror-message');

check.addEventListener('submit', async (e) => {
  e.preventDefault();

  const logoInput = document.getElementById('name');
  let logo = logoInput.value.trim();

  // Clear error messages
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
  document.getElementById("refresh").textContent = "[ Take another test ]";

  let user = 0;
  const score = document.getElementById("score");

  const first = ['B', 'C', 'A', 'B', 'B'];
  const second = ['D', 'F', 'B', 'D', 'E'];
  const third = ['C', 'E', 'E', 'E', 'C'];
  const fourth = ['E', 'A', 'D', 'F', 'F'];
  const fifth = ['A', 'B', 'F', 'C', 'D'];
  const sixth = ['F', 'D', 'C', 'A', 'A'];

  userAnswers.forEach((answer, index) => {
    if (answer === first[index]) {
      user += 10;
    } else if (answer === second[index]) {
      user += 20;
    } else if (answer === third[index]) {
      user += 30;
    } else if (answer === fourth[index]) {
      user += 40;
    } else if (answer === fifth[index]) {
      user += 50;
    } else if (answer === sixth[index]) {
      user -= 20;
    }
  });

  // Display appropriate message based on user score
  if (user < 0) {
    score.textContent = `you this ${logo} or whatever they are calling you, you got ${user} out of 300, steeze saw you and left the country! you peasant! `;
    
  } else if (user > 0 && user <= 50) {
    score.textContent = `you this ${logo} or what are they calling you, you manage score ${user} out of 300, steeze see you for left pass right! god forbid!`;
    
  } else if (user > 50 && user <= 100) {
    score.textContent = `you this ${logo} or what is that your name again, you manage score ${user} out of 300, your steeze still dey really learn work and we dont like it!! `;
    
  } else if (user > 100 && user <= 150) {
    score.textContent = `you this ${logo} or what is that your name again, you got ${user} out of 300, you try but your steeze still dey gba, yeye dey smell, you can do better!`;
    
  } else if (user > 150 && user <= 200) {
    score.textContent = `you this ${logo}, agba! twale! you got ${user} out of 300, you dey represent small small, your steeze dey learn work sha!`;
    
  } else if (user > 200 && user <= 249) {
    score.textContent = `you this ${logo}, agba! 002! you got ${user} out of 300, your get steeze oo, but e con be like say e dey hide`;
    
  } else if (user === 250) {
    score.textContent = `you this ${logo} ehnnn, you got all ${user} out of 300, you are the agba of all steeze and we might need your autograph o! 20 meter for you! but first try get 300 at least!`;

  }

  window.scrollTo(0, 0);

  try {
    if (user >= 200) { 
      const response = await fetch('https://steeze-api.vercel.app/api/submit-score', {
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
