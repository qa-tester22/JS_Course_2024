console.log("***_Object_Properties*********************");
/*
Properties are the most important part of any JavaScript object.

JavaScript Properties
Properties are the values associated with a JavaScript object.
Свойства — это значения, связанные с объектом JavaScript.

A JavaScript object is a collection of unordered properties.
Объект JavaScript представляет собой набор неупорядоченных свойств.

Свойства обычно можно изменять, добавлять и удалять, но некоторые из них доступны только для чтения.

Properties can usually be changed, added, and deleted, but some are read only.
*******************************
Доступ к свойствам JavaScript

Синтаксис доступа к свойству объекта:

objectName.property      // person.age
        или

objectName["property"]   // person["age"]
        или

objectName[expression]   // x = "age"; person[x]
Результатом выражения должно быть имя свойства.

*/

const niceLight = "green";

const trafficLight = {
    stopLight: "red",
    attention: "yellow",
    [niceLight]: "green"
};

console.log(trafficLight); // { stopLight: 'red', attention: 'yellow', green: 'green' }

/*
Accessing JavaScript Properties
The syntax for accessing the property of an object is:
*/
// objectName.property      // person.age

trafficLight.stopLight;

console.log(trafficLight.stopLight);  // red

/*
или
objectName["property"]   // person["age"]
*/

trafficLight["attention"];

console.log(trafficLight["attention"]);   // yellow

/*
или
objectName[expression]   // x = "age"; person[x]
Свойство объекта назначено с помощью переменной
*/

trafficLight[niceLight];

console.log(trafficLight[niceLight]);  // green


console.log("***Object_Loop_for...in_***************** ");
/*
JavaScript for...in Loop
The JavaScript for...in statement loops through the properties of an object.
JavaScript для... в цикле

Оператор JavaScript for...in циклически перебирает свойства объекта.
Syntax
*/
const object = {};

for (let variable in object) {
  // code to be executed
}

/*
The block of code inside of the for...in loop will be executed once for each property.
Блок кода внутри цикла for...inбудет выполнен один раз для каждого свойства.
Looping through the properties of an object:
Перебираем свойства объекта:
*/

const count = {
    one: "first",
    two: "second",
    tree: "third",
    four: "fourth"
};
let text = "";

for (let x in count) {
     text += " " + count[x];
};

console.log("You can count:" + text + "."); // You can count: first second third fourth.

console.log("***Adding_New_Properties**Добавление новых свойств***************");

/* 
Adding New Properties
Добавление новых свойств
Вы можете добавить новые свойства к существующему объекту, просто присвоив ему значение.

Предположим, что объект person уже существует — затем вы можете присвоить ему новые свойства:
*/
const person = {
    fname:" John",
    lname:" Doe",
    age: 25,
    eyeColor: "blue"
  };

  person.nationality = "Russian";

console.log(person);  // { fname: ' John', lname: ' Doe', age: 25, eyeColor: 'blue', nationality: 'Russian' }

console.log("***Deleting_Properties*****************");

/*
Deleting Properties
The delete keyword deletes a property from an object:
*/

delete person.age;

console.log(person);  // { fname: ' John', lname: ' Doe', eyeColor: 'blue', nationality: 'Russian' }

// or delete person["age"];

delete person["eyeColor"];

console.log(person);  // { fname: ' John', lname: ' Doe', nationality: 'Russian' }

/*
The delete keyword deletes both the value of the property and the property itself.

After deletion, the property cannot be used before it is added back again.

The delete operator is designed to be used on object properties. It has no effect on variables or functions.

The delete operator should not be used on predefined JavaScript object properties. It can crash your application.

Ключевое delete слово удаляет как значение свойства, так и само свойство.

После удаления свойство нельзя будет использовать, пока оно не будет добавлено снова.

Оператор delete предназначен для использования со свойствами объекта. Это не влияет на переменные или функции.

Оператор delete не следует использовать для предопределенных свойств объекта JavaScript. Это может привести к сбою вашего приложения.
*/

delete trafficLight[niceLight];

console.log(trafficLight);  // { stopLight: 'red', attention: 'yellow' } но может работать не правильно.

console.log("***Nested_Objects*****************");
/*
Nested Objects
Values in an object can be another object:
Вложенные объекты
Значения в объекте могут быть другим объектом:
*/

const myObj = {
    name: "John",
    age: 30,
    cars: {
        car1: "Ford",
        car2: "BMW",
        car3: "Fiat"
    }
};

/*
You can access nested objects using the dot notation or the bracket notation:
*/

myObj.cars.car2;

myObj.cars["car2"];

myObj["cars"]["car2"];

let prop1 = "cars";
let prop2 = "car2";
myObj[prop1][prop2];

console.log(myObj.cars.car2);         // BMW
console.log(myObj.cars["car2"]);      // BMW 
console.log(myObj["cars"]["car2"]);   // BMW
console.log(myObj[prop1][prop2]);     // BMW
// console.log(myObj.prop1.prop2);  // нельзя TypeError: Cannot read properties of undefined (reading 'prop2')

console.log("***Nested_Arrays_and_Objects*****************");
/*

Nested Arrays and Objects
Values in objects can be arrays, and values in arrays can be objects:
*/

const alphabet = {
    language: "English",
    lettersNumber: 26,
    letters: [
        {name: "vowels", liters: ['A', 'E', 'I', 'O', 'U']},
        {name: "consonant", liters: ['B', 'C', 'D', 'F', 'G', 'H', 'J', 'K', 'L', 'M', 'N', 'P', 'Q', 'R', 'S', 'T', 'V', 'W', 'X', 'Y', 'Z']},
        {name: "combinations", liters: ["th", "sh", "ch"]}
    ],
    isUpperCase: true,
    isLowerCase: true,
    hasЪ: false 
}

console.log(alphabet);
/*
{
    language: 'English',
    lettersNumber: 26,
    letters: [
      { name: 'vowels', liters: [Array] },
      { name: 'consonant', liters: [Array] },
      { name: 'combinations', liters: [Array] }
    ],
    isUpperCase: true,
    isLowerCase: true,
    'hasЪ': false
  }
*/

// To access arrays inside arrays, use a for-in loop for each array:
// Чтобы получить доступ к массивам внутри массивов, используйте цикл for-in для каждого массива:
let x = "";
for (let i in alphabet.letters) {
    x += alphabet.letters[i].name + ": ";
    for (let j in alphabet.letters[i].liters) {
        x += alphabet.letters[i].liters[j] + ", ";
    };
    x += "\n";
};

console.log(x);

/*
vowels: A, E, I, O, U, 
consonant: B, C, D, F, G, H, J, K, L, M, N, P, Q, R, S, T, V, W, X, Y, Z, 
combinations: th, sh, ch,
*/

/*
Property Attributes
All properties have a name. In addition they also have a value.

The value is one of the property's attributes.

Other attributes are: enumerable, configurable, and writable.

These attributes define how the property can be accessed (is it readable?, is it writable?)

In JavaScript, all attributes can be read, but only the value attribute can be changed (and only if the property is writable).

( ECMAScript 5 has methods for both getting and setting all property attributes)

Prototype Properties
JavaScript objects inherit the properties of their prototype.

The delete keyword does not delete inherited properties, but if you delete a prototype property, it will affect all objects inherited from the prototype.

*******************
Атрибуты свойства
Все свойства имеют имя. Кроме того, они также имеют значение.

Значение является одним из атрибутов свойства.

Другие атрибуты: перечисляемые, настраиваемые и записываемые.

Эти атрибуты определяют, как можно получить доступ к свойству (доступно ли оно для чтения?, доступно ли для записи?).

В JavaScript все атрибуты можно читать, но изменять можно только атрибут value (и только если свойство доступно для записи).

(В ECMAScript 5 есть методы для получения и установки всех атрибутов свойств)
*********************
Свойства прототипа
Объекты JavaScript наследуют свойства своего прототипа.

Ключевое слово delete не удаляет унаследованные свойства, но если вы удалите свойство прототипа, это повлияет на все объекты, унаследованные от прототипа.
*/