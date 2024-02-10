let s = "Knowledge of built-in JavaScript methods speeds up a tester's work."; // задана строка
let newS; // заводим новую переменную для хранения измененной строки
console.log(s); // вывели в консоль строку s
newS = s.toUpperCase(); // метод переводит все буквы в верхний регистр - но мы его работу не видим.
console.log(newS); // выводим на консоль результат работы метода
console.log(s);  // выводим начальное значение строки - строка не изменилась.