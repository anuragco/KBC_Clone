const isLoggedIn = sessionStorage.getItem('loggedIn');
if (!isLoggedIn) {
    // Redirect to the login page if not logged in
    window.location.href = './login.html';
}



let currentQuestionIndex = -1;
let countdown = 10; // Initial countdown time for each question
let countdownInterval; // Store the interval reference

function displayQuestion() {
    if (currentQuestionIndex < questions.length - 1) {
        clearInterval(countdownInterval); // Clear the previous interval
        resetAnswerStyles(); // Reset answer styles

        currentQuestionIndex++;
        const questionData = questions[currentQuestionIndex];
        document.getElementById('question').textContent = questionData.question;

        for (let i = 0; i < questionData.options.length; i++) {
            const answerElement = document.getElementById(`answer${String.fromCharCode(65 + i)}`);
            answerElement.textContent = questionData.options[i];
            answerElement.onclick = () => checkAnswer(i, questionData.correctAnswerIndex);
        }

        countdown = 60; // Set the countdown to 10 seconds for the new question
        updateCountdown();
    } else {
        alert("Quiz Finished!");
    }
}

function checkAnswer(selectedIndex, correctIndex) {
    clearInterval(countdownInterval); // Stop the countdown

    const answers = document.querySelectorAll('.option');
    const selectedAnswer = answers[selectedIndex];

    if (selectedIndex === correctIndex) {
        selectedAnswer.classList.add('correct-answer');
    } else {
        selectedAnswer.classList.add('wrong-answer');

        // Make all other options unselectable
        const answerOptions = document.querySelectorAll('.option');
        answerOptions.forEach((option, index) => {
            if (index !== selectedIndex) {
                option.style.pointerEvents = 'none';
            }
        });
    }
}

function resetAnswerStyles() {
    const answers = document.querySelectorAll('.option');
    answers.forEach(answer => {
        answer.classList.remove('correct-answer', 'wrong-answer');
        // Restore pointer events for all options
        answer.style.pointerEvents = 'auto';
    });
}

function updateCountdown() {
    const countdownElement = document.getElementById('countdown');
    countdownElement.textContent = countdown < 10 ? `0${countdown}` : countdown.toString();

    countdownInterval = setInterval(function () {
        countdown--;
        countdownElement.textContent = countdown < 10 ? `0${countdown}` : countdown.toString();
        if (countdown === 0) {
            clearInterval(countdownInterval);
            displayQuestion();
        }
    }, 1000); // Update every 1000ms (1 second)
}

document.getElementById('nextButton').addEventListener('click', displayQuestion);

displayQuestion(); // Display the first question on page load



var fifty = document.getElementById('fiflyfifly');

function fiflyfifly() {
    var visible = document.getElementById('cross-fiflyfifly');
    visible.style.display = 'block'; // Set to 'block' to make it visible
}

fifty.addEventListener('click', fiflyfifly);
//audio
var audioo = document.getElementById('audiancepoll');

function audio() {
    var visible = document.getElementById('cross-audiancepoll');
    visible.style.display = 'block'; // Set to 'block' to make it visible
}

audioo.addEventListener('click', audio);

//phonoffriend

var phono = document.getElementById('phonofriend');

function phone() {
    var visible = document.getElementById('cross-phonofriend');
    visible.style.display = 'block'; // Set to 'block' to make it visible
}

phono.addEventListener('click', phone);

// Our Guest 

var guest = document.getElementById('ourguest');

function ourguest() {
    var visible = document.getElementById('cross-ourguest');
    visible.style.display = 'block'; // Set to 'block' to make it visible
}

guest.addEventListener('click', ourguest);
