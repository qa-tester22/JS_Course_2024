/* JS Objects Methods*/

const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
        return this.firstName + " " + this.lastName;
    }
};

console.log(person.fullName());  // John Doe
/*
// this - ключевое слово
В этом примере это относится к объекту person .

Потому что FullName — это метод объекта person.
*/
/*
Что это this?

В JavaScript this ключевое слово относится к объекту .

Какой объект зависит от того, как this  вызывается (используется или вызывается).

Ключевое this слово относится к разным объектам в зависимости от того, как оно используется:

В методе объекта this ссылается на объект .
Отдельно this относится к глобальному объекту .
В функции this относится к глобальному объекту .
В функции в строгом режиме this есть undefined.
В событии this относится к элементу , получившему событие.
Такие методы call(), как apply(), и bind() могут ссылаться this на любой объект .
Примечание
this не является переменной. Это ключевое слово. Вы не можете изменить значение this.

1. В методе объекта `this` ссылается на объект:
*/

const personMan = {
  name: "John",
  greet: function() {
    console.log("Hello, my name is " + this.name);
  }
};

personMan.greet(); // Выведет: "Hello, my name is John"

/*
2. Отдельно `this` относится к глобальному объекту:
*/

// console.log(this === window); // Выведет: true (если код выполняется в браузере)

/*
3. В функции `this` относится к глобальному объекту:
*/

function showGlobalThis() {
//   return this === window; // Выведет: true (если код выполняется в браузере)
    return this;
}

// showGlobalThis();
console.log(showGlobalThis());
console.log("****");
console.log(this); // {}
/*
В среде выполнения JavaScript, когда код выполняется вне контекста объекта (например, в глобальной области видимости или в функции), `this` по умолчанию ссылается на глобальный объект, который в браузере является объектом `window`, а в среде выполнения Node.js - объектом `global`.

Таким образом, когда код выполняется в среде, где `this` ссылается на глобальный объект, вызов `console.log(this)` выведет пустой объект `{}`. Это связано с тем, что глобальный объект сам по себе является пустым объектом, когда он не содержит пользовательских свойств или методов, но это всё же объект.

В Visual Studio Code (VSCode) ваш код может быть запущен в среде, где `this` относится к глобальному объекту. Поэтому выводится `{}`.
*/

/*
4. В функции в строгом режиме `this` есть `undefined`:
*/

function showStrictThis() {
  'use strict';
  console.log(this === undefined); // Выведет: true
}

showStrictThis();

/*
5. В событии `this` относится к элементу, получившему событие:

html // 6_10_objThis.html
<button onclick="console.log(this.innerText)">Click me</button>


6. `call()`, `apply()` и `bind()` могут ссылаться `this` на любой объект:
*/

function greeting() {
  console.log("Hello, my name is " + this.name);
}

const person1 = { name: "Alice" };
const person2 = { name: "Bob" };

greeting.call(person1); // Выведет: "Hello, my name is Alice"
greeting.call(person2); // Выведет: "Hello, my name is Bob"

/*
Метод `apply()` вызывает функцию с указанным значением `this` и аргументами, представленными в виде массива.
*/

greeting.apply(person1); // Выведет: "Hello, my name is Alice"
greeting.apply(person2); // Выведет: "Hello, my name is Bob"

/*
Метод `bind()` создает новую функцию, связывая указанное значение `this` с функцией и возвращая эту функцию. Этот метод не вызывает функцию, а лишь создает новую функцию с привязанным значением `this`.
*/

const greetPerson1 = greeting.bind(person1);
const greetPerson2 = greeting.bind(person2);

greetPerson1(); // Выведет: "Hello, my name is Alice"
greetPerson2(); // Выведет: "Hello, my name is Bob"

/*
Обратите внимание, что `apply()` и `bind()` позволяют передавать аргументы в вызываемую функцию в виде массива (для `apply()`) или поочередно (для `bind()`). В этих примерах аргументы не используются, но при необходимости их можно добавить после объекта `this` в вызове `apply()` или в методе `bind()`.
*/
/*
Каждый из этих примеров демонстрирует различные контексты, в которых `this` может быть использовано в JavaScript.
*/
/*
this не является переменной. Это ключевое слово. Вы не можете изменить значение this.
*/
// this = "nameAlice";

// console.log(this); // SyntaxError: Invalid left-hand side in assignment


/************************************************
Методы JavaScript

Методы JavaScript — это действия, которые можно выполнять над объектами.

Метод JavaScript — это свойство, содержащее определение функции function definition.

Свойство   |  Ценить
Property   |  Value
имя	       |  Джон
фамилия	   |  Доу
возраст	   |  50
цвет глаз  |	 синий
полное имя |	function() {return this.firstName + " " + this.lastName;}

Методы — это функции, хранящиеся как свойства объекта.

Доступ к методам объекта************************
Доступ к методу объекта осуществляется с помощью следующего синтаксиса:

objectName.methodName()

Обычно вы описываете fullName() как метод объекта person, а fullName как свойство.

Свойство fullName будет выполняться (как функция) при вызове с помощью ().

В этом примере осуществляется доступ к методу fullName() объекта person:

Пример
*/
let personName = person.fullName();
console.log (personName);  // John Doe
/*
Если вы получите доступ к свойству fullName без (), оно вернет определение функции :

Пример
*/

let fullPersonName = person.fullName;
console.log(fullPersonName);  // [Function: fullName]
/*
Добавление метода к объекту***********
Добавить новый метод к объекту легко:

Пример
*/

person.getFatherName = function () {
  return "My father is " + this.firstName + " " + this.lastName;
};

console.log(person.getFatherName());  // My father is John Doe

/*
Использование встроенных методов*********
В этом примере используется toUpperCase()метод объекта String для преобразования текста в верхний регистр:
*/

let message = "Hello world!";
let x = message.toUpperCase();
/*
Значение x после выполнения приведенного выше кода будет:

HELLO WORLD!
Пример
*/
person.upperName = function () {
  return (this.firstName + " " + this.lastName).toUpperCase();
};

console.log(person.upperName());  // JOHN DOE
