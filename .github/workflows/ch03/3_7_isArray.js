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
