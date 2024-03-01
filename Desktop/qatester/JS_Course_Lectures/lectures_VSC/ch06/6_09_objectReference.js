/*
JavaScript ES5 Object Methods
Методы объекта JavaScript ES5

ECMAScript 5 (2009) добавил в JavaScript множество новых объектных методов.

Управление объектами
// Create object with an existing object as prototype

Object.create()


// Adding or changing an object property
Object.defineProperty(object, property, descriptor)

// Adding or changing object properties
Object.defineProperties(object, descriptors)

// Accessing Properties
Object.getOwnPropertyDescriptor(object, property)

// Returns all properties as an array
Object.getOwnPropertyNames(object)

// Accessing the prototype
Object.getPrototypeOf(object)

// Returns enumerable properties as an array
Object.keys(object)

*/

/*
Защита объектов***************************************

// Prevents adding properties to an object
Object.preventExtensions(object)

// Returns true if properties can be added to an object
Object.isExtensible(object)

// Prevents changes of object properties (not values)
Object.seal(object)

// Returns true if object is sealed
Object.isSealed(object)

// Prevents any changes to an object
Object.freeze(object)

// Returns true if object is frozen
Object.isFrozen(object)
*/

/*
Изменение значения свойства***************************
Синтаксис

Object.defineProperty(object, property, {value : value})
*/

/*
В этом примере изменяется значение свойства:

Пример
*/
const personChange = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

console.log(personChange.language);  // EN

// Change a property
Object.defineProperty(personChange, "language", {value : "NO"});

console.log(personChange.language);  // NO
/*
Изменение метаданных************************************
ES5 позволяет изменять следующие метаданные свойств:
*/
writable : true      // Property value can be changed
enumerable : true    // Property can be enumerated
configurable : true  // Property can be reconfigured
writable : false     // Property value can not be changed
enumerable : false   // Property can be not enumerated
configurable : false // Property can be not reconfigured

/*
ES5 позволяет изменять геттеры и сеттеры:****************

// Defining a getter
get: function () { return language }

// Defining a setter
set: function(value) { language = value }
*/
/*
В этом примере язык становится доступным только для чтения:
*/
Object.defineProperty(personChange, "language", {writable:false});
/*
Этот пример делает язык неперечислимым:
*/

Object.defineProperty(personChange, "language", {enumerable:false});

/*
Перечисление всех свойств
В этом примере перечислены все свойства объекта:

Пример

const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};
*/
Object.defineProperty(personChange, "language", {enumerable:false});
Object.getOwnPropertyNames(personChange);  // Returns an array of properties

/*
Перечисление перечисляемых свойств
В этом примере перечислены только перечисляемые свойства объекта:

Пример

const person = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};
*/
Object.defineProperty(personChange, "language", {enumerable:false});
Object.keys(personChange);  // Returns an array of enumerable properties

/*
Добавление свойства
В этом примере к объекту добавляется новое свойство:

Пример
*/

// Create an object:
const personHere = {
  firstName: "John",
  lastName : "Doe",
  language : "EN"
};

// Add a property
Object.defineProperty(personHere, "year", {value:"2008"});

/*
Добавление геттеров и сеттеров
Этот Object.defineProperty()метод также можно использовать для добавления геттеров и сеттеров:

Пример

*/
//Create an object
const personJohn = {firstName:"John", lastName:"Doe"};

// Define a getter
Object.defineProperty(personJohn, "fullName", {
  get: function () {return this.firstName + " " + this.lastName;}
});

/*
Контрпример
Пример
*/
// Define object
const objCounter = {counter:0};

// Define setters
Object.defineProperty(objCounter, "reset", {
  get : function () {this.counter = 0;}
});
Object.defineProperty(objCounter, "increment", {
  get : function () {this.counter++;}
});
Object.defineProperty(objCounter, "decrement", {
  get : function () {this.counter--;}
});
Object.defineProperty(objCounter, "add", {
  set : function (value) {this.counter += value;}
});
Object.defineProperty(objCounter, "subtract", {
  set : function (i) {this.counter -= i;}
});

// Play with the counter:
objCounter.reset;
objCounter.add = 5;
objCounter.subtract = 1;
objCounter.increment;
objCounter.decrement;

/*
Spread syntax позволяет расширить доступные для итерации элементы (например, массивы или строки) в местах

// Для литералов объекта (новое в ECMAScript 2018):

let objClone = { ...obj };
*/