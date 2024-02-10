// тест на заполнение массивов в JavaScript:

/*
// Вопросы для теста
let questions = [
    "Как добавить элемент в конец массива?",
    "Как удалить последний элемент из массива?",
    "Как добавить элемент в начало массива?",
    "Как удалить первый элемент из массива?"
];

// Варианты ответов
let options = [
    ["array.push(element)", "array.pop()", "array.unshift(element)", "array.shift()"],
    ["array.push(element)", "array.pop()", "array.unshift(element)", "array.shift()"],
    ["array.push(element)", "array.pop()", "array.unshift(element)", "array.shift()"],
    ["array.push(element)", "array.pop()", "array.unshift(element)", "array.shift()"]
];

// Правильные ответы
let answers = [0, 1, 2, 3];

// Функция для вывода вопросов и вариантов ответов
function displayQuestion(index) {
    console.log(questions[index]);
    for (let i = 0; i < options[index].length; i++) {
        console.log((i+1) + ". " + options[index][i]);
    }
}

// Функция для проверки ответа
function checkAnswer(index, userAnswer) {
    let correctAnswer = answers[index];
    if (userAnswer === correctAnswer) {
        console.log("Правильно!");
    } else {
        console.log("Неправильно. Правильный ответ: " + options[index][correctAnswer]);
    }
}

// // Пример использования
for (let i = 0; i < questions.length; i++) {
    displayQuestion(i);
    let userAnswer = parseInt(prompt("Введите номер правильного ответа (1, 2, 3 или 4):"));
    checkAnswer(i, userAnswer - 1);
}
*/
/*
Этот код представляет собой простой тест с 4 вопросами о методах работы с массивами в JavaScript. Он выводит каждый вопрос и варианты ответов, после чего запрашивает у пользователя номер правильного ответа. После ответа на все вопросы тест выводит результаты.
*/
/*
Задача 05: Область тестирования программных продуктов активно развивается и появляются новые названия профессии тестировщик. С помощью какого метода можно добавить название профессии SDET в конец массива testerPositions:
*/
/* дан массив
let  testerPositions = [
    "Quality Assurance Engineer",
    "Software Tester",
    "Test Automation Engineer",
    "Quality Analyst",
    "QA Tester",
    "Test Engineer",
    "Quality Control Analyst",
];
*/
/*
Варианты ответа:
1) testerPositions.push("SDET"), 
2) testerPositions.pop(),
3) testerPositions.unshift("SDET"), 
4) testerPositions.shift()
*/
// Верный ответ 1) testerPositions.push("SDET")

/*
Правильный ответ: 1) testerPositions.push("SDET").

Метод `push()` используется для добавления одного или нескольких элементов в конец массива. В данном случае, `testerPositions.push("SDET")` добавит строку "SDET" в конец массива `testerPositions`, соответственно, добавляя новое название профессии "SDET" в массив.
Краткое описание остальных методов и результаты их применения к массиву `testerPositions`:

2) `testerPositions.pop()`: Этот метод удаляет последний элемент из массива и возвращает его. Если применить `testerPositions.pop()`, то элемент "Quality Control Analyst" будет удален из массива, и метод вернет этот удаленный элемент.

3) `testerPositions.unshift("SDET")`: Этот метод добавляет один или несколько элементов в начало массива и возвращает новую длину массива. Если применить `testerPositions.unshift("SDET")`, то строка "SDET" будет добавлена в начало массива, а возвращаемое значение будет новой длиной массива.

4) `testerPositions.shift()`: Этот метод удаляет первый элемент из массива и возвращает его. Если применить `testerPositions.shift()`, то элемент "Quality Assurance Engineer" будет удален из массива, и метод вернет этот удаленный элемент.

Результаты применения каждого из этих методов к массиву `testerPositions`:

- Результат `testerPositions.pop()`: Элемент "Quality Control Analyst" будет удален из массива, и метод вернет этот удаленный элемент.
- Результат `testerPositions.unshift("SDET")`: Строка "SDET" будет добавлена в начало массива, а возвращаемое значение будет новой длиной массива.
- Результат `testerPositions.shift()`: Элемент "Quality Assurance Engineer" будет удален из массива, и метод вернет этот удаленный элемент.
*/
/*
Кстати, метод .push() может добавлять несколько элементов сразу

*/
let testerPositions = [
    "Quality Assurance Engineer",
    "Software Tester",
    "Test Automation Engineer"
];

testerPositions.push("Quality Analyst", "QA Tester", "Test Engineer");

console.log(testerPositions);

/*
результат выполнения
[
  'Quality Assurance Engineer',
  'Software Tester',
  'Test Automation Engineer',
  'Quality Analyst',
  'QA Tester',
  'Test Engineer'
]
*/
