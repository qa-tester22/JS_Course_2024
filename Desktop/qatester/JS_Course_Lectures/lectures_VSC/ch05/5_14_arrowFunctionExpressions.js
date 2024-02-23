/*
Arrow function expressions

В общем случае, функция — это "подпрограмма", которую можно вызывать из внешнего (или внутреннего, в случае рекурсии) по отношению к функции кода. 
Как и сама программа, функция состоит из последовательности инструкций, называемой телом функции. Значения могут быть переданы в функцию, а функция вернёт значение.

В JavaScript функции являются объектами первого класса, то есть: они являются объектами и с ними можно взаимодействовать и передавать их точно так же как любой другой объект. Если быть точным, функции — это объекты Function.

Функция в JavaScript специальный тип объектов, позволяющий формализовать средствами языка определённую логику поведения и обработки данных.
*/

/*
Функции вида "function declaration statement"

Объявление функции (function definition, или function declaration, или function statement) состоит из ключевого слова function и следующих частей:

 - Имя функции.
 - Список параметров (принимаемых функцией) заключённых в круглые скобки () и разделённых запятыми.
 - Инструкции, которые будут выполнены после вызова функции, заключают в фигурные скобки { }.
*/

function myFunc(theObject) {
    theObject.make = "Toyota";
};

const myCar = {
    make: "Honda",
    model: "Accord",
    year: 1998
};

let x, y;

x = myCar.make;  // x получает значение "Honda"

myFunc(myCar);

y = myCar.make;  // y получает значение "Toyota"
// (свойство было изменено функцией)

console.log(y);  // Toyota

console.log(typeof myFunc);  // function

/*
Функции вида "function definition expression"

Функция вида "function declaration statement" по синтаксису является инструкцией (statement), ещё функция может быть вида "function definition expression". 
Такая функция может быть анонимной (она не имеет имени). Например, функция square может быть вызвана так:
*/

const exFunc = function (theObject) {
    theObject.make = "Toyota";
};

console.log(myCar.make);  // Toyota
console.log(myCar.make = "Niva");  // Niva

exFunc(myCar);
console.log(myCar.make);  // Toyota

/*
Однако, имя может быть и присвоено для вызова самой себя внутри самой функции и для отладчика (debugger) для идентифицированные функции в стек-треках (stack traces; "trace" — "след" / "отпечаток").
*/



const exFunction = function carMake(theObject) {
    theObject.make = "Toyota";

};

console.log(myCar.make = "BMW"); // BMW
exFunction(myCar);
// carMake(myCar);  // ReferenceError: carMake is not defined
console.log(myCar.make); // Toyota


console.log("*****************")

// функцию можно вызвать внути ее самой
// например, для расчета факториала

let factorial = function fac(n) {
    return n < 2 ? 1 : n * fac(n - 1);
};

console.log(factorial(3));  // 6
// Это рекурсивная функция - вызывает сама себя.

/*
Область видимости функции — функция, в котором она определена, или целая программа, если она объявлена по уровню выше.
*/

/*
Стрелочные функции
(Arrow functions)

Стрелочные функции — функции вида "arrow function expression" (неверно fat arrow function) — имеют укороченный синтаксис по сравнению с function expression и лексически связывает значение this. Стрелочные функции всегда анонимны. 

На введение стрелочных функций повлияли два фактора:  
 -  более короткие функции и 
 - лексика this.

Более короткие функции
В некоторых функциональных паттернах приветствуется использование более коротких функций. Сравните:
*/

const a = ["Hydrogen", "Helium", "Lithium", "Beryllium"];

let a2 = a.map(function (s) {
    return s.length;
});

console.log(a2); // [ 8, 6, 7, 9 ]

let a3 = a.map((s) => s.length);

console.log(a3);  // [ 8, 6, 7, 9 ]

/*
Лексика this

До стрелочных функций каждая новая функция определяла своё значение this (новый объект в случае конструктора, undefined в strict mode, контекстный объект, если функция вызвана как метод объекта, и т.д.). Это оказалось раздражающим с точки зрения объектно-ориентированного стиля программирования.
*/
/*
function User() {
    // Конструктор User() определяет `this` как самого себя.
    this.age = 0;

    setInterval(function growUp() {
         // Без strict mode функция growUp() определяет `this`
    // как global object, который отличается от `this`
    // определённого конструктором User().
        this.age++;
        console.log(self); // Выводим значение объекта в консоль
    }, 100);
};

let p = new User();  

console.log(p);  // User { age: 0 } и просто висит программа
*/
/*
В ECMAScript 3/5 эта проблема была исправлена путём присвоения значения this переменной, которую можно было бы замкнуть.
*/

/*
function User () {
    let self = this; // Некоторые выбирают `that` вместо `self`.
    // Выберите что-то одно и будьте последовательны.

    self.age = 0;
    
    setInterval(function growUp() {
        // Колбэк ссылается на переменную `self`,
    // значением которой является ожидаемый объект.
    self.age++;
    console.log(self); // Выводим значение объекта в консоль
    }, 100);
};

let q = new User();

console.log(q);
*/
/*
Альтернативой может быть связанная функция (bound function), с которой можно правильно вручную определить значение this для функции growUp().

В arrow function значением this является окружающий его контекст, так следующий код работает ожидаемо:
*/

function User() {
    this.age = 0;

    setInterval(() => {
        this.age++;  // |this| должным образом ссылается на объект Person
        console.log(this);
    }, 100);
};

// let r = new User();

// Еще пример
// Декларируем функцию 
function square(num) {
    return num * num;
}

console.log(square(5));

// Пишем функцию-выражение
const square2 = function (num) {
    return num * num;
}

console.log(square2(5));

// Заменяем слово function на стрелку =>
const square3 = (num) => {
    return num * num;
}

console.log(square3(5));

// Убираем скобки () и {}, убираем return
const square4 = num => num * num;

console.log(square4(5)); 

// Если 2 и больше параметров - возвращаем скобки ()

const square5 = (num1, num2) => num1 * num2;

console.log(square5(5,10));  // 50

let number1 = 5;
let number2 = 10;
console.log(((number1, number2) => (number1 * number2)));  // не запустили на исполнение [Function (anonymous)]
console.log(((number1, number2) => (number1 * number2))()); // не передали аргументы NaN
console.log(((number1, number2) => (number1 * number2))(number1, number2));  // 50

console.log(((number1, number2) => (number1 * number2))(5, 10));  // 50

/*
Сводка

Выражения стрелочных функций имеют более короткий синтаксис по сравнению с функциональными выражениями и лексически привязаны к значению this (но не привязаны к собственному this, arguments, super, или new.target). 

Выражение стрелочных функций не позволяют задавать имя, поэтому стрелочные функции анонимны, если их ни к чему не присвоить.

Синтаксис

Базовый синтаксис

(param1, param2, ..., paramN) => { statements }

(param1, param2,..., paramN) => expression
// эквивалентно: (param1, param2, …, paramN) => { return expression; }

// Круглые скобки не обязательны для единственного параметра:
(singleParam) => { statements }
singleParam => { statements }

// Функция без параметров нуждается в круглых скобках:
() => { statements }
() => expression
// Эквивалентно: () => { return expression; }
*/


/*
Расширенный синтаксис

// Когда возвращаете литеральное выражение объекта, заключите тело в скобки
param => (({foo: bar})

// Остаточные параметры и параметры по умолчанию поддерживаются
(param1, param2, ... rest) => { statements }
(param1 = defaultValue1, param2, ..., paramN = defaultValueN) => { statements }

// Деструктуризация тоже поддерживается
*/
let f = ([a,b] = [1, 2], {x: c} = {x: a + b}) => a + b + c;
f()
console.log(f()); //   6
/*
в этом коде используется деструктуризация как часть параметров стрелочной функции. Давайте разберемся:

1. `([a, b] = [1, 2])`: Это деструктуризация массива. Мы указываем, что переменные `a` и `b` должны быть извлечены из массива `[1, 2]`. Если массив `[1, 2]` не задан, используются значения по умолчанию `1` и `2`. В данном случае деструктуризация устанавливает `a = 1` и `b = 2`.

2. `{x: c} = {x: a + b}`: Это деструктуризация объекта. Мы указываем, что переменная `c` должна быть извлечена из свойства `x` объекта `{x: a + b}`. Значение `x` в объекте вычисляется как сумма `a` и `b` (т.е., `x = 1 + 2 = 3`). В результате деструктуризации переменная `c` примет значение `3`.

3. `=> a + b + c`: Это тело стрелочной функции, которое возвращает сумму переменных `a`, `b` и `c`.

Таким образом, результат выполнения функции `f()` будет `1 + 2 + 3 = 6`. И при выводе `console.log(f());` будет выведено `6` в консоль.
*/

/*
Использование оператора new - нельзя
Стрелочные функции не могут быть использованы как конструктор и вызовут ошибку при использовании с new:
*/

let arrow = new (function () {})();
// переменной "arrow" будет присвоено значение экземпляра анонимной функции

// let arrow2 = new (() => {})();
// будет выброшено исключение
// Uncaught TypeError: (intermediate value) is not a constructor

/*
Тело функции
Тело стрелочной функции может иметь краткую (concise body) или блочную (block body) форму.

Блочная форма не возвращает значение, необходимо явно вернуть значение.
*/
let aFunc = (x) => x * x; // краткий синтаксис,
// неявно возвращает результат

let bFunc = (x, y) => {
    return x + y;
}; // блочный синтаксис,
// явно возвращает результат

/*
Возвращаемые объектные строки (литералы)

Помните о том, что возвращаемые объектные строки используют сокращённый синтаксис: 
params => {object:literal} 
будет работать не так, как ожидается.
*/

let cFunc = () => { foo: 1 };
// Вызов func() возвращает undefined!

console.log(cFunc());  // undefined

// let dFunc = () => { foo: function() {} };
// SyntaxError: function statement requires a name

// console.log(dFunc());

/*
Это происходит потому что код в скобках ({}) распознаётся как цепочка выражений (т.е. foo трактуется как наименование, а не как ключ в объектной строке).

Не забывайте оборачивать скобками объектные строки.
*/

let eFunc = () => ({ foo: 1});

/*
Разрывы строк

Стрелочная функция не может содержать разрывы строк между параметрами и стрелкой.
*/

// let fFunc = ()
            // => 1;
// SyntaxError: Unexpected token '=>'

/*
Разбор порядка следования

Поскольку стрелка в стрелочной функции не является оператором, то стрелочные функции имеют специальные правила разбора (парсинга), которые взаимодействуют с приоритетами операторов иначе, чем в обычных функциях.
*/

let callback;

callback = callback || function() {};  // ok

// callback = callback || () => {};  // SyntaxError: Malformed arrow function parameter list // SyntaxError: invalid arrow-function arguments

callback = callback || (() => {});   // ok


// Больше примеров

let empty = () => {};  // // Пустая стрелочная функция возвращает undefined

console.log(empty());  // undefined

console.log((() => "foobar")()); //  foobar
        // (Это Immediately Invoked Function Expression

let simple = (z) => (z > 15 ? 15 : z);
console.log(simple(16));  // 15

console.log(simple(10));  // 10

let max = (a, b) => (a > b ? a : b);

// Удобные операции над массивами: filter, map, ...

let arr = [5, 6, 13, 0, 1, 18, 23];

let sum = arr.reduce((a, b) => a + b);

console.log(sum);  // 66

let even = arr.filter((v) => v % 2 == 0);

console.log(even);  // [ 6, 0, 18 ]

let double = arr.map((v) => v * 2);

console.log(double);  // [
                        //  10, 12, 26, 0,
                        //  2, 36, 46
                     //   ]
/*
 // Более короткие цепочки promise-ов
 promise
    .then((a) => {
        //.../
    });                    
    .then((b) => {
        // ... /
    });
*/

    // Стрелочные функции без параметров, которые визуально легче разбирать

setTimeout(() => {
    console.log("Я буду раньше");
    setTimeout(() => {
        // deeper code
        console.log("Я буду позже");
    }, 1);
}, 1);

// Я буду раньше
// Я буду позже

