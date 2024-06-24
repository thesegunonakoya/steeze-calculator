document.addEventListener('DOMContentLoaded', function() {

    const questions = document.querySelectorAll('.question');

    const shuffledQuestions = Array.from(questions).sort(() => 0.5 - Math.random());

    shuffledQuestions.slice(0, 2).forEach((question, index) => {
        question.classList.remove('hidden');
        
        document.getElementById('questions-container').appendChild(question);
    });
});
