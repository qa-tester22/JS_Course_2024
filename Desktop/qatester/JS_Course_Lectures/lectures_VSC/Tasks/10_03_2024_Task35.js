/*
Задача 35. Подсчет символов в строке. 
*/

// Конструктор StringJS
function StringJS(value) {
    this.value = value;

    this.countCharacters = function() {
        return this.value.length;
    };
}

let str = "testing";

/*
Вопрос:
"Как можно подсчитать количество символов в строке с использованием конструктора StringJS?";

Варианты ответов:

    1. new StringJS(str).length();
    2. let strObj = new StringJS(str); strObj.count();
    3. new StringJS(str).countCharacters();
    4. str.size(this.countCharacters());

    Выберите один ответ.
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
:one:   :two:   :three:   :four:

******************************************************************************************************


*/


/*
Правильный ответ: 3. new StringJS(str).countCharacters();

*/
let strObj = new StringJS(str);

// console.log(new StringJS(str).length()); // TypeError: (intermediate value).length is not a function
// console.log(strObj.count()); // TypeError: strObj.count is not a function
console.log(new StringJS(str).countCharacters());  // 7
// console.log(str.size(this.countCharacters()));  // TypeError: this.countCharacters is not a function

/*
Верный ответ на вопрос о том, как подсчитать количество символов в строке с использованием конструктора `StringJS`, это вариант ответа номер 3: `new StringJS(str).countCharacters();`. Вот почему:

1. **new StringJS(str).length();**: Этот вариант неверен, потому что `length` в этом контексте не является методом, определенным в конструкторе `StringJS`. Кроме того, строка `str` внутри объекта `StringJS` не является методом, поэтому вызов `length()` вызовет ошибку.

2. **let strObj = new StringJS(str); strObj.count();**: Этот вариант также неверен, потому что метод `count()` не определен в конструкторе `StringJS`. Вызов этого метода приведет к ошибке.

3. **new StringJS(str).countCharacters();**: Этот вариант правильный. Мы создаем новый объект `StringJS` с переданной строкой `str`, затем вызываем метод `countCharacters()`, который определен в конструкторе `StringJS`, чтобы подсчитать количество символов в строке.

4. **str.size(this.countCharacters());**: Этот вариант неверен, потому что метод `size()` не является стандартным методом для строк в JavaScript. Кроме того, `this.countCharacters()` также вызовет ошибку, так как `this` в данном контексте не указывает на объект `StringJS`.



let strObj = new StringJS(str);

console.log(strObj.countCharacters());  // 7

console.log(new StringJS(str).countCharacters());  // 7 
*/

/*
Если вы хотите использовать метод `countCharacters` без создания экземпляра объекта `StringJS`, то его можно просто вызвать, передав строку в качестве аргумента. Вот так:


function StringJS(value) {
    this.value = value;

    // Метод для подсчета количества символов в строке
    this.countCharacters = function() {
        return this.value.length;
    };
}

// Вызываем метод countCharacters, передавая строку в качестве аргумента
console.log(new StringJS("testing").countCharacters()); // Выведет: 7, так как строка "testing" содержит 7 символов


Этот код создает экземпляр объекта `StringJS` с помощью конструктора, а затем сразу же вызывает его метод `countCharacters` для строки "testing", без явного создания переменной для хранения экземпляра объекта.

Для использования конструктора `StringJS` и его метода `countCharacters` вы можете создать новый экземпляр объекта `StringJS`, передав ему строку в качестве аргумента. Затем вы можете вызвать метод `countCharacters` для получения количества символов в этой строке. Вот пример:


function StringJS(value) {
    this.value = value;

    // Метод для подсчета количества символов в строке
    this.countCharacters = function() {
        return this.value.length;
    };
}

// Создаем новый экземпляр объекта StringJS
const strObj = new StringJS("testing");

// Вызываем метод countCharacters для подсчета количества символов в строке
console.log(strObj.countCharacters()); // Выведет: 7, так как строка "testing" содержит 7 символов


В этом примере мы создаем экземпляр объекта `StringJS`, передавая строку "testing" в качестве аргумента. Затем мы вызываем метод `countCharacters`, чтобы подсчитать количество символов в этой строке.
*/

/*
Вопрос:
"Как можно подсчитать количество символов в строке с использованием конструктора StringJS?";

Варианты ответов

    1. "length()",
    2. "count()",
    3. "size()",
    4. "countCharacters()"

*/

/*
метод `countCharacters` внутри конструктора `StringJS`:


// Конструктор StringJS
function StringJS(value) {
    this.value = value;

    // Метод для подсчета количества символов в строке
    this.countCharacters = function() {
        return this.value.length;
    };
}

// Задаем вопрос теста
const question = "Как можно подсчитать количество символов в строке с использованием конструктора StringJS?";

// Варианты ответов
const options = [
    "length()",
    "count()",
    "size()",
    "countCharacters()"
];

// Правильный ответ
const correctAnswerIndex = 3;

// Проверяем ответ студента
function checkAnswer(studentAnswer) {
    return studentAnswer === correctAnswerIndex;
}

// Пример использования
const studentAnswer = 3;
console.log("Студент ответил правильно:", checkAnswer(studentAnswer));
/*
Теперь метод `countCharacters` встроен непосредственно в конструктор `StringJS`. Он будет доступен для каждого экземпляра объекта `StringJS`, созданного с использованием этого конструктора.
*/

/*
пример вопроса с использованием конструктора строк `StringJS`:


// Конструктор StringJS
function StringJS(value) {
    this.value = value;
}

// Метод для подсчета количества символов в строке
StringJS.prototype.countCharacters = function() {
    return this.value.length;
};

// Задаем вопрос теста
const question = "Как можно подсчитать количество символов в строке с использованием конструктора StringJS?";

// Варианты ответов
const options = [
    "length()",
    "count()",
    "size()",
    "countCharacters()"
];

// Правильный ответ
const correctAnswerIndex = 3;

// Проверяем ответ студента
function checkAnswer(studentAnswer) {
    return studentAnswer === correctAnswerIndex;
}

// Пример использования
const studentAnswer = 3;
console.log("Студент ответил правильно:", checkAnswer(studentAnswer));

/*
В этом примере мы создали вопрос о том, как можно подсчитать количество символов в строке с использованием конструктора строк `StringJS`. Правильный ответ - это метод `countCharacters()`, который мы добавили в прототип `StringJS`.
*/


/*
пример теста JavaScript с использованием строковых методов и конструктора с четырьмя вариантами ответа, где нужно выбрать правильный вариант:


// Генерация случайной строки
function generateRandomString(length) {
    const characters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
}

// Генерация случайного числа от 0 до max
function generateRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

// Создание случайной строки
const randomString = generateRandomString(5);
const randomIndex = generateRandomNumber(randomString.length);

// Варианты ответов
const options = [
    randomString.charAt(randomIndex),
    randomString.substring(randomIndex, randomIndex + 1),
    randomString.slice(randomIndex, randomIndex + 1),
    randomString.substr(randomIndex, 1)
];

// Выбор правильного ответа
const correctAnswer = options[generateRandomNumber(4)];

// Вывод вариантов ответов
options.forEach((option, index) => {
    console.log(`${index + 1}. ${option}`);
});

// Вывод правильного ответа
console.log(`Правильный ответ: ${correctAnswer}`);

/*
Этот код создает случайную строку и случайный индекс в этой строке. Затем он предоставляет четыре варианта ответов, каждый из которых использует разные строковые методы для получения символа по случайному индексу. После этого он выбирает случайный вариант как правильный ответ и выводит все варианты ответов и правильный ответ в консоль.
*/