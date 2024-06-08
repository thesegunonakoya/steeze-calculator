const check = document.getElementById("steeze");
const refresh = document.getElementById('refresh');

// Consolidated event listener for form submission and score calculation
check.addEventListener('submit', e => {
    e.preventDefault(); // Prevent default form submission behavior

    let user = 0;
    const score = document.getElementById("score");
    let logo = document.getElementById('name').value.trim().toUpperCase();

    if (logo === "") {
        logo = "unknown human being";
    }

    const userAnswers = [check.q1.value, check.q2.value, check.q3.value, check.q4.value, check.q5.value];

    const first = ['B', 'C', 'A', 'A', 'A'];
    const second = ['D', 'F', 'B', 'B', 'B'];  // 20 points each
    const third = ['C', 'E', 'E', 'C', 'C'];   // 30 points each
    const fourth = ['E', 'A', 'D', 'D', 'D'];  // 40 points each
    const fifth = ['A', 'B', 'F', 'E', 'E'];   // 50 points each
    const sixth = ['F', 'D', 'C', 'F', 'F'];   // -20 points each

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

    if (user < 30) {
        score.textContent = `${logo}, see your score ${user} u don dey fuck up o `;
        score.classList.add('style');
    } else if (user > 30 && user <= 49) {
        score.textContent = `${logo}, see your score ${user} wetin be this na `;
        score.classList.add('style2');
    } else if (user > 50 && user <= 70) {
        score.textContent = `${logo}, see your score ${user} ur steeze dey go oo`;
        score.classList.add('style3');
    } else if (user > 71 && user <= 89) {
        score.textContent = `${logo}, see your score ${user} osheyy but e remain small o`;
        score.classList.add('style4');
    } else if (user > 90) {
        score.textContent = `${logo}, see your score ${user} agba of all steeze`;
        score.classList.add('style5');
    }

    check.reset();
});

refresh.addEventListener('click', function() {
    check.reset();
    document.getElementById("score").textContent = "0";
    document.getElementById("score").className = '';
    window.scrollTo(0, 0);
});
