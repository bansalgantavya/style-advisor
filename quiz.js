
var questions = [
    "Do you prefer to spend time alone rather than with a large group of people?",
    "Do you focus on the present rather than thinking about the future?",
    "Do you trust reason rather than feelings?",
    "Do you prefer to have a few close friends rather than many acquaintances?",
    "Do you prefer to make decisions based on facts rather than values?",
    "Do you prefer to follow a plan rather than leave things to chance?",
    "Do you prefer to be organized rather than adapt to changing circumstances?",
    "Do you prefer to express yourself through actions rather than words?",
    "Do you prefer to stick to your routines rather than trying new things?",
    "Do you prefer to be decisive rather than open-minded?",
    "Do you prefer to be firm and assertive rather than gentle and accommodating?",
    "Do you prefer to be focused and determined rather than flexible and spontaneous?",
    "Do you prefer to be independent rather than rely on others?",
    "Do you prefer to be objective rather than subjective?",
    "Do you prefer to be reserved rather than outgoing?",
    "Do you prefer to be systematic rather than casual?"
];

var currentQuestionIndex = 0;
var answers = [];

function createQuestionElement(question) {
    var questionElement = document.createElement("div");
    questionElement.className = "question";
    questionElement.innerHTML = `
        <p>${question}</p>
        <button class="yesButton" onclick="answerQuestion('yes')">Yes</button>
        <button class="noButton" onclick="answerQuestion('no')">No</button>
    `;
    return questionElement;
}

function renderQuestion() {
    var questionsContainer = document.getElementById("questions");
    questionsContainer.innerHTML = '';
    questionsContainer.appendChild(createQuestionElement(questions[currentQuestionIndex]));
}

function answerQuestion(answer) {
    answers[currentQuestionIndex] = answer;
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        renderQuestion();
    } else {
        classifyMBTI();
    }
}

function classifyMBTI() {
    var introvert = answers[0] === 'yes';
    var sensing = answers[1] === 'yes';
    var thinking = answers[2] === 'yes';
    var judging = answers[3] === 'yes';

    var personalityType = "";
    
    // Determine personality type based on answers
    if (introvert) {
        if (sensing) {
            if (thinking) {
                if (judging) {
                    personalityType = "ISTJ";
                } else {
                    personalityType = "ISTP";
                }
            } else {
                if (judging) {
                    personalityType = "ISFJ";
                } else {
                    personalityType = "ISFP";
                }
            }
        } else {
            if (thinking) {
                if (judging) {
                    personalityType = "INTJ";
                } else {
                    personalityType = "INTP";
                }
            } else {
                if (judging) {
                    personalityType = "INFJ";
                } else {
                    personalityType = "INFP";
                }
            }
        }
    } else {
        if (sensing) {
            if (thinking) {
                if (judging) {
                    personalityType = "ESTJ";
                } else {
                    personalityType = "ESTP";
                }
            } else {
                if (judging) {
                    personalityType = "ESFJ";
                } else {
                    personalityType = "ESFP";
                }
            }
        } else {
            if (thinking) {
                if (judging) {
                    personalityType = "ENTJ";
                } else {
                    personalityType = "ENTP";
                }
            } else {
                if (judging) {
                    personalityType = "ENFJ";
                } else {
                    personalityType = "ENFP";
                }
            }
        }
    }
   

    // Redirect based on personality type
    var redirectUrl = "assets/" + personalityType.toLowerCase() + ".html";
    window.location.href = redirectUrl;
}

renderQuestion();