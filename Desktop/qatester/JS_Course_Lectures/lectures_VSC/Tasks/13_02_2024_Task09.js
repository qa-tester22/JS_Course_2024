/*
давайте напишем тесты для вашей функции `firstToLast`, используя метод `split()` для создания массива символов из строки. Вот как это можно сделать:
*/

function firstToLast(str, c) {
    let firstIndex = str.toLowerCase().indexOf(c.toLowerCase());
    let lastIndex = str.toLowerCase().lastIndexOf(c.toLowerCase());
    
    if (firstIndex === -1 || lastIndex === -1) {
      return -1;
    } else if (firstIndex === lastIndex) {
      return 0;
    } else {
      return lastIndex - firstIndex;
    }
  }
  

// Функция для тестирования
function testFirstToLast() {
  // Список тестовых случаев
  const testCases = [
    { str: "ababc", c: "a", expected: 2 },
    { str: "ababc", c: "c", expected: 0 },
    { str: "ababc", c: "d", expected: -1 },
    { str: "aBcD", c: "b", expected: 2 },
    { str: "aBcD", c: "A", expected: 0 },
    { str: "", c: "a", expected: -1 },
    { str: "abc", c: "", expected: -1 }
  ];

  // Пройдем по каждому тестовому случаю
  testCases.forEach((testCase, index) => {
    const { str, c, expected } = testCase;
    const result = firstToLast(str, c); // Вызов функции для теста
    // Проверка результата
    if (result === expected) {
      console.log(`Test case ${index + 1}: PASSED`);
    } else {
      console.log(`Test case ${index + 1}: FAILED. Expected ${expected}, got ${result}`);
    }
  });
}

// Вызов функции для тестирования
testFirstToLast();

/*
Этот код создает несколько тестовых случаев с различными входными данными и ожидаемыми результатами. Затем он проходит по каждому случаю, вызывает функцию `firstToLast` с соответствующими входными данными и проверяет, соответствует ли полученный результат ожидаемому результату.
*/
//*************************************************************************************************** */
/*
1 вариант вопроса
*/
// Рассмотрим следующую строку и код
const exampleString = "apple,orange,banana,grape";
const resultArray = exampleString.split(',');

console.log(resultArray);
// Какой будет результат выполнения кода выше?
/*
a) resultArray содержит массив: ["apple", "orange", "banana", "grape"]
b) resultArray содержит строку: "apple,orange,banana,grape"
c) resultArray содержит массив: ["apple", " orange", " banana", " grape"]
d) resultArray содержит массив: ["apple", "orange", "banana", "grape", ""]
*/
// ****************************************************************************************************
// 2 вариант вопроса

// Пример строки, которую мы будем разбивать
const str = "apple,banana,orange";

// Разбиваем строку на подстроки, используя запятую в качестве разделителя
const fruits = str.split(',');

// fruits теперь содержит массив подстрок ["apple", "banana", "orange"]
console.log(fruits); // Output: ["apple", "banana", "orange"]

/*
Каким образом метод split() может быть использован для обработки строк в JavaScript? Выберите верный вариант ответа:

a) split() используется для разделения строки на подстроки на основе указанного разделителя и возвращает массив этих подстрок.

b) split() используется для объединения нескольких строк в одну строку, разделенную указанным разделителем.

c) split() используется для удаления указанного символа из строки и возвращает новую строку без этого символа.

d) split() используется для поиска определенного подстроки в строке и возвращает индекс этой подстроки.

Корректный ответ: a) split() используется для разделения строки на подстроки на основе указанного разделителя и возвращает массив этих подстрок.
*/
/*
вопрос-тест с четырьмя вариантами ответа на тему использования метода `split()` в JavaScript, связанный с массивом `testingTypes`:
*/
/*
// Массив видов тестирования
const testingTypes = [
  "Unit Testing",
  "Integration Testing",
  "System Testing",
  "Acceptance Testing",
  "Regression Testing",
  "Load Testing",
  "Security Testing",
  "Compatibility Testing",
  "User Interface Testing",
  "Automated Testing"
];

// Пример использования метода split()
const testingTypesString = "Unit Testing,Integration Testing,System Testing,Acceptance Testing";

// Разбиение строки exampleString на подстроки с использованием метода split()
const splitResult = testingTypesString.split(',');

// Вопрос-тест
const question = `
Which of the following best describes the purpose of the split() method in JavaScript?
a) To separate a string into substrings based on a specified separator and return an array of these substrings.
b) To combine multiple strings into one string using a specified separator.
c) To remove a specified character from a string and return a new string without that character.
d) To search for a specific substring within a string and return its index.
`;

console.log(question);
*/
/*
Вопрос-тест:

Какое из перечисленных ниже утверждений лучше всего описывает цель метода `split()` в JavaScript?
a) Удалить указанный символ из строки и вернуть новую строку без этого символа.
b) Объединить несколько строк в одну строку с использованием указанного разделителя.
c) Разделить строку на подстроки на основе указанного разделителя и вернуть массив этих подстрок.
d) Искать определенную подстроку в строке и вернуть ее индекс.
*/

/*
Задача 08.
*/
const testingTypesString = "Unit Testing, Integration Testing, System Testing, Acceptance Testing";

const splitResult = testingTypesString.split(',');

console.log(splitResult);
/*
// Вопрос-тест

Что из следующего лучше всего описывает назначение метода Split() в JavaScript?
1) Удалить указанный символ из строки и вернуть новую строку без этого символа.
2) Объединить несколько строк в одну, используя указанный разделитель.
3) Разделить строку на подстроки на основе заданного разделителя и вернуть массив этих подстрок.
4) Чтобы найти определенную подстроку внутри строки и вернуть ее индекс.


Выберите один ответ:
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить.
:one:   :two:   :three:   :four: 
*/
/*
Назначение метода `split()` в JavaScript - это разделение строки на подстроки на основе заданного разделителя и возврат массива этих подстрок. Таким образом, правильный ответ на ваш вопрос-тест:

3) Разделить строку на подстроки на основе заданного разделителя и вернуть массив этих подстрок.

Пояснение: В данном коде `split()` используется для разделения строки `testingTypesString` по запятой (`,`), что приводит к созданию массива `splitResult`, содержащего подстроки, разделенные запятыми.

[
  'Unit Testing',
  ' Integration Testing',
  ' System Testing',
  ' Acceptance Testing'
]

*/
