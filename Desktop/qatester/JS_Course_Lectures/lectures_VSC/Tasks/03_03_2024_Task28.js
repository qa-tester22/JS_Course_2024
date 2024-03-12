/*
Задача 28.
Конструкторы в JavaScript - это функции, которые используются для создания и инициализации объектов. Они определяют свойства и методы, которые будут у объектов, созданных с их помощью.

В JavaScript нет четкого различия между функциями и конструкторами. Когда вы создаете функцию и используете ее с оператором new, она становится конструктором. Внутри конструктора this ссылается на новый созданный объект.
*/

// Конструктор, создающий объект с методами для работы со строками
function StringProcessor() {}

StringProcessor.prototype.countOccurrences = function (str, substring) {
    let count = 0;
    let index = str.indexOf(substring);
 
    while (index !== -1) {
        count++;
        index = str.indexOf(substring, index + 1);
    }
    return count;
};

// Создание экземпляра объекта StringProcessor
const stringProcessor = new StringProcessor();

// Использование метода countOccurrences
const inputString = 'abababab';
const substringToCount = 'ab';
const occurrencesCount = stringProcessor.countOccurrences(inputString, substringToCount);
console.log(occurrencesCount); 

/*
Вопрос: Какую функцию выполняет метод `countOccurrences` в конструкторе `StringProcessor`?

1. Он проверяет, существует ли заданная подстрока в строке.
2. Он выполняет сложение двух строк и возвращает результат.
3. Он подсчитывает количество вхождений заданной подстроки в строку.
4. Он преобразует строку к нижнему регистру и удаляет из неё все пробелы.


   Выберите один ответ.
   / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
   :one:   :two:   :three:   :four:
 
   //**************************************************************************************
   // Правильный ответ: 3)

   В этом примере мы определяем метод `countOccurrences`, который принимает строку `str` и подстроку `substring`. Мы используем метод `indexOf()` для поиска первого вхождения подстроки в строку. Затем мы используем цикл `while`, чтобы продолжать поиск следующих вхождений, начиная с позиции, следующей за предыдущим найденным вхождением.
Таким образом, `countOccurrences` в конструкторе `StringProcessor` подсчитываем количество вхождений подстроки `ab` в строку `abababab`.

(Ответ 3)
*/



/*

// Конструктор, создающий объект с методами для работы со строками
function StringProcessor() {}

// Метод для подсчета количества вхождений подстроки в строку
StringProcessor.prototype.countOccurrences = function (str, substring) {
    let count = 0;
    let index = str.indexOf(substring);
    // Продолжаем поиск подстроки, пока она не будет найдена
    while (index !== -1) {
        count++;
        // Продолжаем поиск с позиции, следующей за найденной подстрокой
        index = str.indexOf(substring, index + 1);
    }
    return count;
};

// Создание экземпляра объекта StringProcessor
const stringProcessor = new StringProcessor();

// Использование метода countOccurrences
const inputString = 'abababab';
const substringToCount = 'ab';
const occurrencesCount = stringProcessor.countOccurrences(inputString, substringToCount);
console.log(occurrencesCount); // Output: 4


В этом примере мы определяем метод `countOccurrences`, который принимает строку `str` и подстроку `substring`. Мы используем метод `indexOf()` для поиска первого вхождения подстроки в строку. Затем мы используем цикл `while`, чтобы продолжать поиск следующих вхождений, начиная с позиции, следующей за предыдущим найденным вхождением.

Таким образом, мы подсчитываем количество вхождений подстроки в строку.
*/