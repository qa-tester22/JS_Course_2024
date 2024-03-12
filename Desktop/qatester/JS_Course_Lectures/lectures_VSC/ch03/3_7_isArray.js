// How to Recognize an Array
// A common question is: How do I know if a variable is an array?

// 1-ый способ. The problem is that the JavaScript operator typeof returns "object"

const anotherFruits = ['Banana', 'Orange', 'Apple'];

let type = typeof anotherFruits;

console.log(type);   // object
console.log(typeof type);  // string

//  To solve this problem ECMAScript 5 (JavaScript 2009) defined a new method Array.isArray()

let arrayType = Array.isArray(anotherFruits);
console.log(arrayType);   // true

console.log(Array.isArray(type));  // false

//  2-ой способ. Оператор instanceof возвращает true, если объект создан данным конструктором

let knowArray = anotherFruits instanceof Array;
console.log(knowArray);  // true

console.log(type in Array);  // false

/*
Метод Array.isArray() возвращает true, если объект является массивом и false, если он массивом не является.

Синтаксис
Array.isArray(obj)
Параметры
obj - Объект для проверки.

Возвращаемое значение - true если объект является Array; иначе, false.

Примеры
*/

// Все следующие вызовы вернут true
Array.isArray([]);
Array.isArray([1]);
Array.isArray(new Array());
// Малоизвестный факт: Array.prototype сам является массивом:
Array.isArray(Array.prototype);

// Все следующие вызовы вернут false
Array.isArray();
Array.isArray({});
Array.isArray(null);
Array.isArray(undefined);
Array.isArray(17);
Array.isArray("Array");
Array.isArray(true);
Array.isArray(false);
Array.isArray({ __proto__: Array.prototype });
/*
instanceof vs isArray
Когда проверяем экземпляр Array, Array.isArray предпочтительней, чем instanceof, потому что он работает и с iframes.

let iframe = document.createElement("iframe");
document.body.appendChild(iframe);
xArray = window.frames[window.frames.length - 1].Array;
let arr = new xArray(1, 2, 3); // [1,2,3]

// Correctly checking for Array
Array.isArray(arr); // true
// Considered harmful, because doesn't work through iframes
arr instanceof Array; // false

Полифил
Выполнение следующего кода перед любым другим кодом создаст метод Array.isArray(), если он ещё не реализован в браузере.

if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
*/