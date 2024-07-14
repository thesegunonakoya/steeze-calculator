document.addEventListener('DOMContentLoaded', function () {

    function updateQuestion(containerId) {
      const container = document.getElementById(containerId);
      const questionElement = container.querySelector('h3');
      const optionsElements = container.querySelectorAll('label span');


      const questions = [
        {
          question: "1",
          options: [
            "1",
            "1",
            "1",
            "1",
            "1",
            "1"
          ]
        },
        {
            question: "You are at a wedding reception and they are about to start sharing jollof rice, but you notice there might not be enough for everyone. What do you do? 🤔",
            options: [
              "Quietly leave and find a nearby restaurant. I can't come and kill myself!",
              "Blame the government!",
              "Rush to the front as fast as i can and secure my portion. First come, first served!",
              "Scatter the reception and make sure there is no happily ever after!",
              "Bribe the server to make sure they save me a plate. I can't miss out on jollof!",
              "Curse the marriage and leave!"
            ]
          },
          {
            question: "4",
            options: [
              "4",
              "4",
              "4",
              "4",
              "4",
              "4"
            ]
          },
          {
            question: "6",
            options: [
              "6",
              "6",
              "6",
              "6",
              "6",
              "6"
            ]
          },
      ];


      const randomQuestion = questions[Math.floor(Math.random() * questions.length)];


      questionElement.textContent = randomQuestion.question;
      optionsElements.forEach((span, index) => {
        span.textContent = randomQuestion.options[index];
      });
    }


    updateQuestion('firstQuestion');
  });