// Тип данных переменной — это тип данных, которые переменная может хранить, и какие операции можно выполнять со значением переменной. Например, число 10, используемое в предложении, отличается от числа 10, используемого в уравнении. 

let tenNumber = 10;
let tenWord = "10";
console.log(tenNumber === tenWord); // false
console.log(tenNumber == tenWord); // true
console.log(tenNumber = tenWord);  // 10
console.log(typeof (tenNumber));  // string

// Типы данных — это способ, с помощью которого JavaScript различает значения, которые должны быть словами, и значения, которые следует рассматривать как математические выражения.

// Если вы подумаете обо всех типах данных, с которыми вы работаете ежедневно — круговых диаграммах, рецептах, рассказах, газетных статьях и т. д. — вы увидите, насколько велика вероятность того, что все может стать очень сложным, когда речь идет о данных. Щедрые создатели JavaScript решили максимально упростить для вас задачу. 

// JS имеет всего пять основных типов данных.

// Более того, JavaScript — это так называемый слабо типизированный язык. Что означает свободная типизация, так это то, что вам даже не нужно сообщать JavaScript или даже знать, будет ли создаваемая вами переменная содержать слово, абзац, число или другой тип данных.

let myNumber = 10;
myNumber = "ten";
console.log(myNumber);

// Слабая типизация не означает, что JavaScript не различает слова и числа.
//  JavaScript просто дружелюбно относится к этому и выполняет работу по выяснению того, какой тип данных вы храните в своих переменных, в основном «за кулисами».


//JavaScript recognizes five primitive data types:

//1. String: Represents a sequence of characters, enclosed within single or double quotes.

let hello = "Hello, world!"

//2. Number: Represents numeric values, including integers and floating-point numbers.

let digit = 777;

//3. Boolean: Represents a logical value indicating true or false.

let boolean = true;

// 4. Undefined: Represents a variable that has been declared but has not been assigned a value yet.

console.log(undefined);

//5. Null: Represents the intentional absence of any value or object.

console.log(null);

// Additionally, in JavaScript, there is a special primitive type called `Symbol`, which represents a unique identifier. However, it's not usually considered among the basic types when discussing the fundamental primitives, as it's less commonly used in everyday programming tasks.
/*
`Symbol` is a primitive data type in JavaScript introduced in ECMAScript 2015 (ES6). It represents a unique and immutable value that may be used as the key for an object property. Symbols are unique, meaning that no two symbols can ever be equal to each other, even if they have the same description.

Here are some key points about symbols:
*/
//1. Uniqueness: Each symbol value returned from `Symbol()` is unique. Even if two symbols have the same description, they are distinct values.


const symbol1 = Symbol('future');
const symbol2 = Symbol('future');
console.log(symbol1 === symbol2); // false


// 2. Immutable: Symbols are immutable and unique. Once created, their value cannot be changed.
// Неизменяемость: символы неизменяемы и уникальны.

// 3. Property keys: Symbols are often used as unique property keys for objects. This helps avoid naming collisions in objects with multiple contributors or when working with built-in JavaScript objects.
// Ключи свойств. Символы часто используются в качестве уникальных ключей свойств объектов. Это помогает избежать конфликтов имен в объектах с несколькими участниками или при работе со встроенными объектами JavaScript.


const myObj = {};
const mySymbol = Symbol('mySymbol');
myObj[mySymbol] = 'Hello';
console.log(myObj[mySymbol]); // 'Hello'


// 4. Hidden Symbol Properties: Symbols can be used to define non-enumerable object properties. This means that they won't show up in iterations over object properties.
// Свойства скрытых символов. Символы можно использовать для определения неперечислимых свойств объекта. Это означает, что они не будут отображаться при итерациях свойств объекта.


const obj = {};
const symbol = Symbol('hidden');
obj[symbol] = 'value';
for (let prop in obj) {
    console.log(prop); // nothing will be logged, because symbol is not enumerable
}


// 5. Well-known Symbols: JavaScript also has some predefined symbols, known as "well-known symbols", which are used to customize the behavior of some built-in features, such as iterator, symbol to string conversion, etc.
// Хорошо известные символы. В JavaScript также есть несколько предопределенных символов, известных как «хорошо известные символы», которые используются для настройки поведения некоторых встроенных функций, таких как итератор, преобразование символов в строки и т. д.

const iterator = myObj[Symbol.iterator];

console.log(iterator);  // undefind

const myOtherObj = {};
const otherSymbol = Symbol('hidden');
myOtherObj[otherSymbol] = 'value';

if (myOtherObj.hasOwnProperty(Symbol.iterator)) {
    const iterator = myOtherObj[Symbol.iterator];
    console.log(iterator.toString() + " iterator");
} else {
    console.log("Symbol.iterator is not defined in myOtherObj");
}
// Symbol.iterator is not defined in myOtherObj

// Symbols are typically used in scenarios where unique identifiers are required, such as in library code, to create private members in objects, or to define specialized behaviors in objects or classes.
// Символы обычно используются в сценариях, где требуются уникальные идентификаторы, например, в библиотечном коде, для создания частных членов в объектах или для определения специального поведения в объектах или классах.

/*
В JavaScript существуют следующие типы данных:

1. **Число (Number)**: Представляет числовые значения, включая целые числа и числа с плавающей запятой.
   
   Пример: `42`

2. **Строка (String)**: Представляет последовательность символов, заключенную в одинарные или двойные кавычки.
   
   Пример: `"Привет, мир!"`

3. **Логическое значение (Boolean)**: Представляет логическое значение истинности или ложности.
   
   Пример: `true`

4. **Неопределенное значение (Undefined)**: Представляет переменную, которая была объявлена, но ей не было присвоено значение.
   
   Пример: `undefined`

5. **Null**: Представляет отсутствие значения или ничто.
   
   Пример: `null`

6. **Символ (Symbol)**: Представляет уникальный и неизменяемый идентификатор. Введен в ECMAScript 2015 (ES6).
   
   Пример: `Symbol('foo')`

Это основные типы данных в JavaScript, которые используются для представления различных видов информации в программе.
*/