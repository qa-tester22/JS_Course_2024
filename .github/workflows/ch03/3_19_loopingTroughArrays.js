/*
Looping through arrays
Перебор массивов


Перебор массивов

Как вы можете себе представить, работа с несколькими значениями массивов путем ввода имени массива и индексного номера через некоторое время может утомить ваши пальцы. К счастью, существуют более простые способы работы со всеми элементами массива. Самый распространенный метод — использование программной конструкции, называемой циклом.

Также можно работать с несколькими элементами массива, используя встроенные функции JavaScript для работы с массивами.


*/

let alphabet = [];

alphabet[0] = 'a';

console.log(`alphabet with alphabet[0]: ${alphabet}`);

alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];

console.log(`alphabet with letters: ${alphabet}`);

// используем цикл 

alphabet = []
for (let i = 97; i <= 122; i++) {
    alphabet.push(String.fromCharCode(i));
    console.log(`alphabet with for-loop: ${alphabet}`);
}

console.log(`alphabet with for-loop: ${alphabet}`);
