document.addEventListener('DOMContentLoaded', () => {
    const questionElement = document.getElementById('question');
    const guessInput = document.getElementById('guessInput');
    const submitBtn = document.getElementById('submitBtn');
    const feedbackElement = document.getElementById('feedback');
    const scoreElement = document.getElementById('score');

    let score = 0;
    let currentQuestion = {
        question: "What is the capital of France?",
        answer: "Paris"
    };

    submitBtn.addEventListener('click', () => {
        const userGuess = guessInput.value.trim();
        if (userGuess.toLowerCase() === currentQuestion.answer.toLowerCase()) {
            feedbackElement.textContent = "Correct!";
            feedbackElement.style.color = "green";
            score++;
        } else {
            feedbackElement.textContent = "Incorrect. Try again!";
            feedbackElement.style.color = "red";
        }
        scoreElement.textContent = `Score: ${score}`;
        guessInput.value = '';
        guessInput.focus();
    });
});
