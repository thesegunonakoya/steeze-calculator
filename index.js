const check = document.getElementById("steeze");
const refresh = document.getElementById('refresh');


check.addEventListener('submit', e => {
    e.preventDefault();

    document.getElementById("refresh").textContent = "(Take another test)";

    let user = 0;
    const score = document.getElementById("score");
    let logo = document.getElementById('name').value.trim().toUpperCase();

    if (logo === "") {
        logo = "unknown human being since you no wan put your name";
    }

    const userAnswers = [check.q1.value, check.q2.value, check.q3.value, check.q4.value, check.q5.value];

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

    if (user < 0) {
        score.textContent = `you this ${logo} or whatever they are calling you, you got ${user} out of 250, steeze saw you and left the country! you peasant! `;
        score.classList.add('style');
    } else if (user > 0 && user <= 50) {
        score.textContent = `you this ${logo} or what are they calling you, you manage score ${user} out of 250, steeze see you for left pass right! god forbid!`;
        score.classList.add('style2');
    } else if (user > 50 && user <= 100) {
        score.textContent = `you this ${logo} or what is that your name again, you manage score ${user} out of 250, your steeze still dey really learn work and we dont like it!! `;
        score.classList.add('style3');
    } else if (user > 100 && user <= 150) {
        score.textContent = `you this ${logo} or what is that your name again, you got ${user} out of 250, you try but your steeze still dey gba, yeye dey smell, you can do better!`;
        score.classList.add('style4');
    } else if (user > 150 && user <= 200) {
        score.textContent = `you this ${logo}, agba! twale! you got ${user} out of 250, you dey represent small small, your steeze dey learn work sha!`;
        score.classList.add('style4');
    } else if (user > 200 && user <= 249) {
        score.textContent = `you this ${logo}, agba! 002! you got ${user} out of 250, your get steeze oo, but e con be like say e dey hide`;
        score.classList.add('style4');
    } else if (user === 250) {
        score.textContent = `you this ${logo} ehnnn, you got all ${user} out of 250, you are the agba of all steeze and we might need your autograph o! 20 meter for you! send your aza to wiz!`;
        score.classList.add('style5');
    }

    check.reset();
});

refresh.addEventListener('click', function() {
    check.reset();
    document.getElementById("score").textContent = "Take the test to get a steeze score!";
    document.getElementById("score").className = '';
    document.getElementById("refresh").textContent = "";
    window.scrollTo(0, 0);
});
