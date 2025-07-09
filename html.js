const htmlQuestions = [
    {
      question: "What does HTML stand for?",
      answers: ["Hyper Text Markup Language", "High Text Machine Language", "Hyperlink Markup Language"],
      correct: 0
    },
    {
      question: "Which tag is used to create a hyperlink?",
      answers: ["&lt;a&gt;", "&lt;link&gt;", "&lt;href&gt;"],
      correct: 0
    },
    {
      question: "Which tag is used for inserting an image?",
      answers: ["&lt;image&gt;", "&lt;img&gt;", "&lt;src&gt;"],
      correct: 1
    }
  ];
  let current = 0;
  let score = 0;
  const questionContainer = document.getElementById("question-container");
  const nextBtn = document.getElementById("next-btn");
  const scoreContainer = document.getElementById("score-container");
  function showQuestion() {
    const q = htmlQuestions[current];
    questionContainer.innerHTML = `<p>${q.question}</p>` +
      q.answers.map((a, i) =>
        `<button class="answer" onclick="selectAnswer(${i})">${a}</button>`
      ).join("");
  }
  function selectAnswer(index) {
    if (index === htmlQuestions[current].correct) {
      score++;
    }
    nextBtn.style.display = "inline-block";
    document.querySelectorAll(".answer").forEach((btn, i) => {
      btn.disabled = true;
      if (i === htmlQuestions[current].correct) btn.style.backgroundColor = "green";
      else if (i === index) btn.style.backgroundColor = "red";
    });
  }
  nextBtn.addEventListener("click", () => {
    current++;
    if (current < htmlQuestions.length) {
      showQuestion();
      nextBtn.style.display = "none";
    } else {
      questionContainer.innerHTML = "";
      nextBtn.style.display = "none";
      scoreContainer.innerHTML = `<h3>Score: ${score} / ${htmlQuestions.length}</h3>
      <button class="back-btn" onclick=\"location.href='index.html'\" class=\"nav-btn\">Home</button>
      <button class="back-btn" onclick=\"location.reload()\" class=\"nav-btn\">Try Again</button>`;
      
    }
  });
  showQuestion();