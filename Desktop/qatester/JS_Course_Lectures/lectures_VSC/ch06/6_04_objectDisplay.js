/*
Object Display
Объекты отображения JavaScript

Как отображать объекты JavaScript?
При отображении объекта JavaScript выводится [object Object] .

Пример
*/

const person = {
  name: "John",
  age: 30,
  city: "New York"
};

console.log("Hello " + person); // [object Object]
console.log(person); // { name: 'John', age: 30, city: 'New York' }

// document.getElementById("demo1").innerHTML = person;

/*
Некоторые распространенные решения для отображения объектов JavaScript:

Отображение свойств объекта по имени property
Отображение свойств объекта в цикле
Отображение объекта с помощью Object.values()
Отображение объекта с помощью JSON.stringify()


Отображение свойств объекта*************************
Свойства объекта могут отображаться в виде строки:

Пример

*/

// document.getElementById("demo2").innerHTML =
// person.name + ", " + person.age + ", " + person.city;

console.log(person.name + ", " + person.age + ", " + person.city);  // John, 30, New York

/*
Отображение объекта в цикле
Свойства объекта можно собирать в цикле:

Пример
*/

let txt = "";
for (let x in person) {
    txt += person[x] + " ";
}

// document.getElementById("demo3").innerHTML = txt;

console.log(txt);  // John 30 New York 

/*
Вы должны использовать person[x] в цикле.

person.x не будет работать (поскольку x — переменная).

Использование Object.values()*************************
Любой объект JavaScript можно преобразовать в массив, используя Object.values():
*/

const myArray = Object.values(person);
/*
myArray теперь представляет собой массив JavaScript, готовый к отображению:
*/

// document.getElementById("demo4").innerHTML = myArray;
console.log(myArray);  // [ 'John', 30, 'New York' ]

/*
Object.values()поддерживается во всех основных браузерах с 2016 года.

Использование JSON.stringify()***********************

Любой объект JavaScript можно преобразовать в строку (преобразовать в строку) с помощью функции JavaScript JSON.stringify():
*/

let myString = JSON.stringify(person);

/*
myString теперь представляет собой строку JavaScript, готовую к отображению:
*/
// document.getElementById("demo5").innerHTML = myString;

console.log(myString);  // {"name":"John","age":30,"city":"New York"}

/*
Результатом будет строка, следующая нотации JSON:

{"name":"Джон","возраст":50,"город":"Нью-Йорк"}

JSON.stringify() включен в JavaScript и поддерживается во всех основных браузерах.

Строковые даты*****************************************
JSON.stringify преобразует даты в строки:

Пример
*/

person.today = new Date();

let myDateString = JSON.stringify(person);

console.log(myDateString);  // {"name":"John","age":30,"city":"New York","today":"2024-02-29T06:34:56.521Z"}


// document.getElementById("demo6").innerHTML = myDateString;

/*
Стрингифицирующие функции
JSON.stringifyне будет переводить функции в строки:

Пример
*/
person.age = function () {return 35};

let myFunctionString = JSON.stringify(person);

console.log(person.age());  // 35
console.log(myFunctionString);

//  document.getElementById("demo7").innerHTML = myFunctionString;

/*
{"name":"John","city":"New York","today":"2024-02-29T06:53:41.715Z"}

{"name":"John","city":"New York","today":"2024-02-29T06:56:07.500Z"}

JSON.stringify will not stringify functions:

Это можно «исправить», если перед преобразованием в строку преобразовать функции в строки.
*/
person.age = person.age.toString();

let myAgeString = JSON.stringify(person);
// document.getElementById("demo8").innerHTML = myAgeString;
console.log(myAgeString);

/*
{"name":"John","age":"function () {return 35}","city":"New York","today":"2024-02-29T07:00:13.438Z"}

{"name":"John","age":"function () {return 35}","city":"New York","today":"2024-02-29T07:01:00.846Z"}

Стрингификация массивов*********************************
Также возможно преобразовать массивы JavaScript в строку:

Пример
*/

const arr = ["John", "Peter", "Sally", "Jane"];

let myArrString = JSON.stringify(arr);

console.log(typeof myArrString);  //  string

console.log(myArrString);  //  ["John","Peter","Sally","Jane"]

document.getElementById("demo9").innerHTML = myArrString;

/*
Результатом будет строка, следующая нотации JSON:

[«Джон», «Питер», «Салли», «Джейн»]
*/