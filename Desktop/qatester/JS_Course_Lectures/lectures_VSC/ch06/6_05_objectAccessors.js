/*
JS Object Accessors (Getters and Setters)
Средства доступа к объектам JavaScript

Средства доступа JavaScript (геттеры и сеттеры)
ECMAScript 5 (ES5 2009) представил геттеры и сеттеры.

Геттеры и сеттеры позволяют определять средства доступа к объектам (вычисляемые свойства = Computed Properties).

JavaScript Getter (ключевое слово get)
В этом примере свойство используется lang для get значения свойства language.

Пример
*/
// Create an object:

const personGet = {
    firstName: "John",
    lastName: "Doe",
    language: "en",
    get lang() {
        return this.language;
    }
};

console.log(personGet.lang);
// Display data from the object using a getter:
// document.getElementById("demo10").innerHTML = personGet.lang;
/*
JavaScript Setter (ключевое слово set)*******************
В этом примере используется свойство lang для установки set значения свойства language.

*/
const personSet = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang;
  }
};

// Set an object property using a setter:
personSet.lang = "rus";

// Display data from the object:
// document.getElementById("demo11").innerHTML = personSet.language;
console.log(personSet.language);
/*
Функция JavaScript или геттер?****************************
В чем разница между этими двумя примерами?

Пример 1
*/

const person111 = {
    firstName: "John",
    lastName: "Doe",
    fullName111: function() {
        return this.firstName + " " + this.lastName;
    }
};

// Display data from the object using a method:
console.log(person111.fullName111())
// document.getElementById("demo12").innerHTML = person111.fullName111();
// Пример 2
const person222 = {
  firstName: "John",
  lastName: "Doe",
  get fullName222() {
    return this.firstName + " " + this.lastName;
  }
};

// Display data from the object using a getter:
// document.getElementById("demo14").innerHTML = person222.fullName222;
console.log(person222.fullName222);
/*
Пример 1: доступ к полному имени как к функции: person1.fullName111().

В примере 2 доступ к полному имени осуществляется как к свойству: person222.fullName222.

Второй пример предоставляет более простой синтаксис.

Качество данных****************************************

JavaScript может обеспечить лучшее качество данных при использовании геттеров и сеттеров.

Использование lang свойства в этом примере возвращает значение свойства language в верхнем регистре:

Пример
*/
// Create an object:
const person333 = {
  firstName: "John",
  lastName: "Doe",
  language: "en",
  get lang() {
    return this.language.toUpperCase();
  }
};

// Display data from the object using a getter:
// document.getElementById("demo15").innerHTML = person333.lang;

console.log(person333.lang);

/*
При использовании lang свойства в этом примере в свойстве сохраняется значение в верхнем регистре language:

Пример
*/

const person444 = {
  firstName: "John",
  lastName: "Doe",
  language: "",
  set lang(lang) {
    this.language = lang.toUpperCase();
  }
};

// Set an object property using a setter:
person444.lang = "spain";

// Display data from the object:
// document.getElementById("demo16").innerHTML = person444.language;

/*
Зачем использовать геттеры и сеттеры?**********************
 - Это дает более простой синтаксис
 - Он обеспечивает одинаковый синтаксис для свойств и методов.
 - Это может обеспечить лучшее качество данных
 - Это полезно для того, чтобы делать что-то за кулисами.


 Object.defineProperty() Метод****************************
Этот Object.defineProperty() метод также можно использовать для добавления геттеров и сеттеров:

Контрпример
*/

// Define object

const obj = {counter : 0};
// Define setters and getters

Object.defineProperty(obj, "reset", {
    get : function () {this.counter = 0;}
});

Object.defineProperty(obj, "increment", {
    get : function () {this.counter++;}
});

Object.defineProperty(obj, "decrement", { 
    get : function () {this.counter--;}
});

Object.defineProperty(obj, "add", {
    set : function (value) {this.counter += value;}
});

Object.defineProperty(obj, "subtract", {
    set : function (value) {this.counter -= value;}
});


// Play with the counter:

obj.reset;
console.log("reset: counter = " + obj.counter);
obj.add = 5;
console.log("add: counter = " + obj.counter);
obj.subtract = 1;
console.log("subtract: counter = " + obj.counter);
obj.increment;
console.log("increment: counter = " + obj.counter);
obj.decrement;

console.log("decrement: counter = " + obj.counter);

