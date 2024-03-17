// Задача 20. Объекты JS

  let person = {
    name: "John",
    age: 30
  };
  
  console.log(person.name);
/*
      Вопрос: "Что будет выведено в консоль?"

      Варианты ответов: 
        1.  { name: 'John', age: 30 }
        2.  "undefined"
        3.  "John"
        4.  "person.name"
  
        Выберите один ответ:
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
:one:   :two:   :three:   :four:
*/
/**
 * Ответ на вопрос: "Что будет выведено в консоль?"

Правильный ответ: 3. "John"

Объяснение: В данном коде создается объект `person` с двумя свойствами: `name` со значением `"John"` и `age` со значением `30`. После этого с помощью `console.log(person.name);` выводится значение свойства `name` объекта `person`, которое равно `"John"`.

 * Концепция использования точки (`.`) в JavaScript основана на том, что она позволяет обращаться к свойствам и методам объекта. В контексте объекта `person`, который определен как:


let person = {
    name: "John",
    age: 30
};


У объекта `person` есть два свойства: `name` и `age`. Для доступа к конкретному свойству объекта используется точка, за которой следует имя свойства. Например, чтобы получить значение свойства `name` объекта `person`, мы используем следующий синтаксис:


person.name


Это означает, что мы обращаемся к объекту `person` и запрашиваем его свойство `name`. В результате этого выражения будет получено значение свойства `name`, которое равно `"John"`. 

Поэтому, когда мы используем `console.log(person.name);`, мы говорим JavaScript вывести значение свойства `name` объекта `person`, которое в данном случае равно `"John"`.
 */



/**
пример решения задачи на JavaScript, где дан тест с 4 вариантами ответов, представленными в виде объектов:
*/


/**
const questions = [
    {
      code: `
  let person = {
    name: "John",
    age: 30
  };
  
  console.log(person.name);
      `,
      question: "Что будет выведено в консоль?",
      options: [
        { text: "John", correct: true },
        { text: "undefined", correct: false },
        { text: "30", correct: false },
        { text: "person.name", correct: false }
      ]
    }
  ];
  */
/**
// Подключаем модуль для работы с вводом/выводом в терминале
const readline = require('readline');

// Создаем интерфейс для чтения и записи
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Вопросы теста
const questions = [
  {
    question: "Какая функция используется для создания объекта в JavaScript?",
    options: [
      { text: "createObject()", correct: false },
      { text: "newObject()", correct: false },
      { text: "Object.create()", correct: true },
      { text: "buildObject()", correct: false }
    ]
  },
  {
    question: "Как получить количество свойств в объекте obj?",
    options: [
      { text: "obj.keys().length", correct: false },
      { text: "Object.keys(obj).length", correct: true },
      { text: "obj.length", correct: false },
      { text: "Object.length(obj)", correct: false }
    ]
  },
  {
    question: "Что такое JSON?",
    options: [
      { text: "JavaScript Object Notation", correct: true },
      { text: "JavaScript Oriented Notation", correct: false },
      { text: "JavaScript Object Naming", correct: false },
      { text: "JavaScript Objective Notation", correct: false }
    ]
  }
];

// Функция для проверки ответов
function checkAnswers() {
  let score = 0;

  questions.forEach((question, index) => {
    const answer = userAnswers[index];
    const selectedOptionIndex = parseInt(answer);
    
    if (question.options[selectedOptionIndex].correct) {
      score++;
    }
  });

  console.log(`Вы набрали ${score} из ${questions.length} баллов`);
}

// Функция для отображения теста
function renderQuiz() {
  questions.forEach((question, index) => {
    console.log(`${index + 1}. ${question.question}`);

    question.options.forEach((option, optionIndex) => {
      console.log(`   ${optionIndex + 1}. ${option.text}`);
    });
  });

  rl.question('Введите номера выбранных ответов через пробел: ', (answer) => {
    const selectedAnswers = answer.split(' ');
    for (let i = 0; i < selectedAnswers.length; i++) {
      userAnswers.push(parseInt(selectedAnswers[i]) - 1);
    }
    checkAnswers();
    rl.close();
  });
}

// Массив для хранения ответов пользователя
const userAnswers = [];

// Отображение теста при запуске скрипта
renderQuiz();
*/
/**
Вот правильные ответы для каждого вопроса:

1. Какая функция используется для создания объекта в JavaScript?
   - Правильный ответ: `Object.create()`

2. Как получить количество свойств в объекте obj?
   - Правильный ответ: `Object.keys(obj).length`

3. Что такое JSON?
   - Правильный ответ: "JavaScript Object Notation"
*/
/**
// Вопросы теста
var questions = [
  {
    question: "Какая функция используется для создания объекта в JavaScript?",
    options: [
      { text: "createObject()", correct: false },
      { text: "newObject()", correct: false },
      { text: "Object.create()", correct: true },
      { text: "buildObject()", correct: false }
    ]
  },
  {
    question: "Как получить количество свойств в объекте obj?",
    options: [
      { text: "obj.keys().length", correct: false },
      { text: "Object.keys(obj).length", correct: true },
      { text: "obj.length", correct: false },
      { text: "Object.length(obj)", correct: false }
    ]
  },
  {
    question: "Что такое JSON?",
    options: [
      { text: "JavaScript Object Notation", correct: true },
      { text: "JavaScript Oriented Notation", correct: false },
      { text: "JavaScript Object Naming", correct: false },
      { text: "JavaScript Objective Notation", correct: false }
    ]
  }
];

// Функция для проверки ответов
function checkAnswers() {
  var score = 0;
  var answers = document.querySelectorAll(".answer:checked");

  answers.forEach(function(answer, index) {
    var questionIndex = parseInt(answer.name);
    var selectedOptionIndex = parseInt(answer.value);

    if (questions[questionIndex].options[selectedOptionIndex].correct) {
      score++;
    }
  });

  alert("Вы набрали " + score + " из " + questions.length + " баллов");
}

// Функция для отображения теста
function renderQuiz() {
  var quizContainer = document.getElementById("quiz-container");

  questions.forEach(function(question, index) {
    var questionDiv = document.createElement("div");
    var questionTitle = document.createElement("h3");
    questionTitle.textContent = question.question;
    questionDiv.appendChild(questionTitle);

    question.options.forEach(function(option, optionIndex) {
      var optionLabel = document.createElement("label");
      var optionInput = document.createElement("input");
      optionInput.type = "radio";
      optionInput.className = "answer";
      optionInput.name = index;
      optionInput.value = optionIndex;
      optionLabel.appendChild(optionInput);
      optionLabel.append(" " + option.text);
      questionDiv.appendChild(optionLabel);
      questionDiv.appendChild(document.createElement("br"));
    });

    quizContainer.appendChild(questionDiv);
  });

  var submitButton = document.createElement("button");
  submitButton.textContent = "Проверить ответы";
  submitButton.onclick = checkAnswers;
  quizContainer.appendChild(submitButton);
}

// Отображение теста при загрузке страницы
window.onload = function() {
  renderQuiz();
};

/**
Этот код создает тест с несколькими вопросами, каждый из которых имеет 4 варианта ответов. После того, как пользователь выбирает ответы на вопросы и нажимает кнопку "Проверить ответы", программа подсчитывает количество правильных ответов и выводит сообщение с результатом.
*/