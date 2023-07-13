const questions = [
    {
      question: "Qual é o maior problema ambiental enfrentado pelos oceanos?",
      options: ["Poluição", "Aquecimento Global", "Pesca excessiva", "Desmatamento"],
      answer: 0
    },
    {
      question: "Qual é a maior causa de poluição nos oceanos?",
      options: ["Plástico", "Petróleo", "Metais pesados", "Produtos químicos"],
      answer: 0
    },
    {
      question: "Qual é o principal responsável pelo aumento do nível do mar?",
      options: ["Desmatamento", "Aquecimento Global", "Pesca excessiva", "Poluição"],
      answer: 1
    }
  ];
  
  const quizContainer = document.getElementById('quiz-container');
  const questionElement = document.getElementById('question');
  const optionsElement = document.querySelector('.options');
  const submitButton = document.getElementById('submit-btn');
  
  let currentQuestion = 0;
  let score = 0;
  
  function loadQuestion() {
    const currentQuiz = questions[currentQuestion];
    questionElement.textContent = currentQuiz.question;
    optionsElement.innerHTML = '';
  
    currentQuiz.options.forEach((option, index) => {
      const li = document.createElement('li');
      const button = document.createElement('button');
      button.textContent = option;
      button.setAttribute('aria-checked', 'false');
      button.addEventListener('click', () => {
        selectOption(index, li);
      });
      li.appendChild(button);
      optionsElement.appendChild(li);
    });
  
    animateIn(optionsElement);
  }
  
  function selectOption(selectedIndex, selectedLi) {
    const currentQuiz = questions[currentQuestion];
    const correctIndex = currentQuiz.answer;
  
    if (selectedIndex === correctIndex) {
      score++;
      selectedLi.classList.add('correct');
    } else {
      selectedLi.classList.add('incorrect');
      optionsElement.children[correctIndex].classList.add('correct');
    }
  
    disableOptions();
    showSubmitButton();
  }
  
  function disableOptions() {
    const options = optionsElement.children;
    for (let i = 0; i < options.length; i++) {
      const button = options[i].querySelector('button');
      button.disabled = true;
      button.removeAttribute('aria-checked');
    }
  }
  
  function showSubmitButton() {
    submitButton.style.display = 'block';
    animateIn(submitButton);
    submitButton.focus();
  }
  
  function animateIn(element) {
    element.style.opacity = 1;
  }
  
  function animateOut(element) {
    element.style.opacity = 0;
  }
  
  function showNextQuestion() {
    animateOut(submitButton);
    currentQuestion++;
  
    if (currentQuestion < questions.length) {
      setTimeout(() => {
        loadQuestion();
      }, 500);
    } else {
      setTimeout(() => {
        showResult();
      }, 500);
    }
  }
  
  function showResult() {
    quizContainer.innerHTML = `
      <h1>Você completou o quiz!</h1>
      <p>Sua pontuação: ${score}/${questions.length}</p>
      <a class="voltar" href="https://kauamessias.github.io/Ocean-Preserve/">Voltar para a pagina inicial</a>
    `;
    
  }
  
  loadQuestion();
  submitButton.addEventListener('click', showNextQuestion);
