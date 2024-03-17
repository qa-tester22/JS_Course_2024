/**
 * Задача 15:  Hoisting.   */
// Какой результат работы кода с функцией square, выполняющей возведение числа во вторую степень (в квадрат).
// var square = undefined; 
// let square


console.log(square(5)); 

let square = function (n) {
    return n * n;
};
console.log(square);
console.log(square(5));


/** 
Варианы ответов:

1. Поднятие переменной `square` в начало области видимости, но ошибка при попытке вызова `square(5)` из-за того, что `square` имеет значение `undefined`, а не функция.
2. Поднятие переменной `square` со значением `undefined`, но нет ошибки при попытке вызова `square(5)`, так как интерпретатор видит, что `square` является функцией.
3. Поднятие переменной `square` со значением `undefined` и ошибка при попытке вызова `square(5)`, потому что переменная `square` не определена.
4. Ошибка в строке `let square = function (n) { return n * n; };` из-за неправильного синтаксиса объявления функции.

Выберите один ответ:
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если вообще ничего не понятно - задавайте вопросы в комментариях
:one:   :two:   :three:   :four:

*/

/**
Правильный ответ: 1.

Объяснение:
 
// console.log(square); // square поднят со значением undefined. ReferenceError:Cannot access 'square' before initialization
// console.log(square(5)); // TypeError: square is not a function

let square = function (n) {
  return n * n;
};

console.log(square); // [Function: square].
console.log(square(5)); // 25

* Область видимости функции — функция, в которой она определена, или целая программа, если она объявлена по уровню выше.

Примечание: Это работает только тогда, когда объявлении функции использует вышеупомянутый синтаксис (т.е. function funcName(){}). Код ниже не будет работать. Имеется в виду то, что поднятие функции работает только с function declaration и не работает с function expression.

console.log(square); // square поднят со значением undefined.
console.log(square(5)); // TypeError: square is not a function
let square = function (n) {
  return n * n;
};


В этом коде происходит поднятие (hoisting) переменной `square`, но не функции `square`. Поднятие переменной означает, что переменная `square` объявляется в начале своей области видимости (в данном случае, это глобальная область видимости), но ей присваивается значение `undefined`, пока код не достигнет фактического объявления.

Однако, поскольку `square` в начале имеет значение `undefined`, а не функцию, при попытке вызвать `square(5)` в строке ниже происходит ошибка `TypeError`, потому что `undefined` не является функцией и не может быть вызвано.

Чтобы избежать ошибок, нужно объявить функцию до ее вызова или использовать function declaration вместо function expression.

 */

// console.log(square(5)); 

// // let square = function (n) {
//   return n * n;
// };

// console.log(square(5)); 
/* Этот код не будет работать, потому что есть в коде let a позже, чем начинаем использовать a:
// a = 5;

// console.log(a);
*/
// let a = 10;
// Этот код будет работать, потому что в коде нет let ,  начинаем использовать b:
b = 25; 

console.log(b);
