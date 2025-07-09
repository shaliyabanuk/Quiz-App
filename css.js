const cssQuestions = [
    {
      question: "What does CSS stand for?",
      answers: ["Computer Style Sheets", "Cascading Style Sheets", "Creative Style Sheets"],
      correct: 1
    },
    {
      question: "Which property is used to change text color?",
      answers: ["text-color", "font-color", "color"],
      correct: 2
    },
    {
      question: "How do you add a background color in CSS?",
      answers: ["color: red;", "bgcolor: red;", "background-color: red;"],
      correct: 2
    }
  ];
  let cssCurrent = 0;
  let cssScore = 0;
  const cssQuestionContainer = document.getElementById("question-container");
  const cssNextBtn = document.getElementById("next-btn");
  const cssScoreContainer = document.getElementById("score-container");
  function cssShowQuestion() {
    const q = cssQuestions[cssCurrent];
    cssQuestionContainer.innerHTML = `<p>${q.question}</p>` +
      q.answers.map((a, i) =>
        `<button class="answer" onclick="cssSelectAnswer(${i})">${a}</button>`
      ).join("");
  }
  function cssSelectAnswer(index) {
    if (index === cssQuestions[cssCurrent].correct) {
      cssScore++;
    }
    cssNextBtn.style.display = "inline-block";
    document.querySelectorAll(".answer").forEach((btn, i) => {
      btn.disabled = true;
      if (i === cssQuestions[cssCurrent].correct) btn.style.backgroundColor = "green";
      else if (i === index) btn.style.backgroundColor = "red";
    });
  }
  cssNextBtn.addEventListener("click", () => {
    cssCurrent++;
    if (cssCurrent < cssQuestions.length) {
      cssShowQuestion();
      cssNextBtn.style.display = "none";
    } else {
      cssQuestionContainer.innerHTML = "";
      cssNextBtn.style.display = "none";
      cssScoreContainer.innerHTML = `<h3>Score: ${cssScore} / ${cssQuestions.length}</h3>`;
    }
  });
  cssShowQuestion();
  