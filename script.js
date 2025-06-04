document.addEventListener("DOMContentLoaded", function () {
    const button = document.querySelector('button[type="button"]');
    if (button) {
      button.addEventListener("click", checkQuiz);
    }
  });

  document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".flip-card");
  
    cards.forEach((card) => {
      card.addEventListener("click", () => {
        card.classList.toggle("flipped");
      });
    });
  });
  
  function toggleFact(id) {
  const fact = document.getElementById(id);
  if (fact.style.display === "none" || fact.style.display === "") {
    fact.style.display = "block";
  } else {
    fact.style.display = "none";
  }
}

  function checkQuiz() {
    let score = 0;
  
    const answers = {
      q1: "d",
      q2: "b",
      q3: "c",
      q4: "a",
      q5: "d"
    };
  
    for (let key in answers) {
      const selected = document.querySelector(`input[name="${key}"]:checked`);
      if (selected && selected.value === answers[key]) {
        score++;
      }
    }
  
    const result = document.getElementById("quizResult");
    if (result) {
      result.textContent = `You got ${score} out of 5 correct.`;
      result.style.display = "block";
    }
  }
  