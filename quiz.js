function checkAnswer() {
    // Function body
    let correctAnswer = "4";
    const selectedansweer = document.querySelector('input[name=quiz]:checked');
    const userAnswer = selectedansweer.value;
    if (userAnswer === correctAnswer)
    {
        feedback.textContent = "Correct! Well done.";
        feedback.style.color = "#28a745"
    }else {
        feedback.textContent = "That's incorrect. Try again!";
    }

}
const submitbutton = document.getElementById("submit-answer");
submitbutton.addEventListener("click",checkAnswer);
