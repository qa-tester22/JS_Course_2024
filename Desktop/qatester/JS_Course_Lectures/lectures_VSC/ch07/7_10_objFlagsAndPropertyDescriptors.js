// "use strict" 
/*
(JS современный учебник https://learn.javascript.ru/)
Флаги и дескрипторы свойств Объектов.

Объекты могут содержать свойства.

Как минимум свойство - это пара «ключ-значение». Но на самом деле свойство объекта гораздо мощнее и гибче.

Но есть дополнительные флаги конфигурации для свойств, 
и можно свойство незаметно превратить в специальные функции – геттеры и сеттеры.

Флаги свойств******************************************
Помимо значения value, свойства объекта имеют три специальных атрибута (так называемые «флаги»).

writable – если true, свойство можно изменить, иначе оно только для чтения.

enumerable – если true, свойство перечисляется в циклах, в противном случае циклы его игнорируют.

configurable – если true, свойство можно удалить, а эти атрибуты можно изменять, иначе этого делать нельзя.

Мы ещё не встречали эти атрибуты, потому что обычно они скрыты. Когда мы создаём свойство «обычным способом», все они имеют значение true. Но мы можем изменить их в любое время.

Сначала посмотрим, как получить их текущие значения.

Метод Object.getOwnPropertyDescriptor позволяет получить полную информацию о свойстве.

Его синтаксис:
*/
let obj = {};
let descriptor = Object.getOwnPropertyDescriptor(obj, "PropertyName");
/*
obj - Объект, из которого мы получаем информацию.
propertyName - Имя свойства
Возвращаемое значение – это объект, так называемый «дескриптор свойства»: он содержит значение свойства и все его флаги.
*/

const user = {
    name: "John"
};

let userDescriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(userDescriptor);  // { value: 'John', writable: true, enumerable: true, configurable: true }

console.log(JSON.stringify(userDescriptor, null, 2));  
/*
выведет:
{
  "value": "John",
  "writable": true,
  "enumerable": true,
  "configurable": true
}

В данном контексте `null, 2` является параметром форматирования для метода `JSON.stringify()`. Этот метод преобразует JavaScript объект или значение в JSON строку.

Вот как выглядит его сигнатура:

JSON.stringify(value, replacer?, space?)


- `value`: Обязательный параметр. JavaScript объект или значение, которое нужно преобразовать в JSON строку.
- `replacer`: Опциональный параметр. Функция, которая управляет тем, какие значения будут включены в JSON строку или заменены на другие значения. Может быть массивом строк или функцией.
- `space`: Опциональный параметр. Определяет отступы (пробелы или табуляции) в выводе. Может быть числом (определяющим количество пробелов) или строкой (символом, используемым для отступов).

В данном случае `null` указывает, что никакие значения не должны быть заменены, а `2` указывает на количество пробелов, которые следует использовать для отступа в JSON строке. Таким образом, результат будет отформатирован с использованием двух пробелов для отступа. Это улучшает читаемость вывода JSON, делая его более удобным для восприятия.

Чтобы изменить флаги, мы можем использовать 
метод Object.defineProperty.

Его синтаксис:
*/

Object.defineProperty(obj, "propertyName", {descriptor});

/*
obj, propertyName - Объект и его свойство, для которого нужно применить дескриптор.
descriptor - Применяемый дескриптор.
Если свойство существует, defineProperty обновит его флаги. В противном случае метод создаёт новое свойство с указанным значением и флагами; если какой-либо флаг не указан явно, ему присваивается значение false.

Например, здесь создаётся свойство lastName, все флаги которого имеют значение false:
*/

Object.defineProperty(user, "lastName", {
    value: "Doe"
});

userDescriptor = Object.getOwnPropertyDescriptor(user, "lastName");

console.log(JSON.stringify(userDescriptor, null, 2));

/*
{
  "value": "Doe",
  "writable": false,
  "enumerable": false,
  "configurable": false
}
Все флаги - false

Если это не то, что нам нужно, надо присвоить им значения true в параметре descriptor.
*/

Object.defineProperty(user, "age", {value: 25, enumerable: true});

userDescriptor = Object.getOwnPropertyDescriptor(user, "age");

console.log(JSON.stringify(userDescriptor, null, 2));

/*
выведет:
{
  "value": 25,
  "writable": false,
  "enumerable": true,
  "configurable": false
}
*/

/*
Только для чтения**************************************

Сделаем свойство user.name доступным только для чтения. Для этого изменим флаг writable:
*/
// let user = {
//   name: "John"
// };
/*
"use strict" - работает только на 1-ой строке
Строгий режим (`"use strict"`) должен быть указан до того, как интерпретатор JavaScript начнет исполнять код. Поэтому он должен быть либо в начале файла, либо в начале функции.

Если вы попытаетесь добавить `"use strict"` в середину кода, то это приведет к синтаксической ошибке. Например, такой код вызовет ошибку:

function myFunction() {
  console.log("Before strict mode");
  "use strict"; // Эта строка вызовет ошибку
  console.log("After strict mode");
}
myFunction();


Как правило, `"use strict"` помещается в начало файла или в начало функции. Это позволяет установить строгий режим для всего файла или для отдельной функции, где он будет действовать на весь код в пределах этой области видимости.
*/
Object.defineProperty(user, "name", {writable: false});

// поменяем имя

user.name = "Tom";  // "use strict" используем TypeError: Cannot assign to read only property 'name' of object '#<Object>'

console.log(user);  // { name: 'John', age: 25 }

Object.defineProperty(user, "name", {value: "Tom"});

userDescriptor = Object.getOwnPropertyDescriptor(user, "name");

console.log(JSON.stringify(userDescriptor, null, 2));
/*
Когда вы используете `Object.defineProperty` для определения свойства объекта и устанавливаете его как `writable: false`, это означает, что значение этого свойства не может быть изменено. Однако, если существует свойство с таким же именем и оно было определено ранее, прежде чем вы установили его как `writable: false`, то изменение значения этого свойства будет игнорироваться, но не вызовет ошибку.

В вашем примере, когда вы пытаетесь изменить значение `user.name` на `"Tom"`, это изменение игнорируется, потому что `name` было определено сначала как записываемое свойство, и только потом было переопределено как неизменяемое.

Однако, когда вы используете `Object.defineProperty` с параметром `{value: "Tom"}`, это принудительно устанавливает новое значение свойства, несмотря на то, что оно было определено как неизменяемое ранее. В результате, значение `user.name` изменяется на `"Tom"`.

доступное только для чтения свойство 'name'
Теперь никто не сможет изменить имя пользователя, если только не обновит соответствующий флаг новым вызовом defineProperty.

Ошибки появляются только в строгом режиме
В нестрогом режиме, без use strict, мы не увидим никаких ошибок при записи в свойства «только для чтения» и т.п. Но эти операции всё равно не будут выполнены успешно. Действия, нарушающие ограничения флагов, в нестрогом режиме просто молча игнорируются.

Вот тот же пример, но свойство создано «с нуля»:
*/

user.job = "QA";

userDescription = Object.getOwnPropertyDescriptor(user, "job");

console.log(JSON.stringify(userDescription, null, 2));
/*
выведет:
{
  "value": "QA",
  "writable": true,
  "enumerable": true,
  "configurable": true
}
  // для нового свойства, заданного через Object.defineProperty() необходимо явно указывать все флаги, для которых значение true:
  writable: true,
  enumerable: true,
  configurable: true


  Неперечислимое свойство*******************************
выведем свойства объекта user
*/

for(let key in user) {
    console.log(key);
}

console.log(user.toString());  // [object Object]
/*
выведет:
name
age
job

Теперь добавим собственный метод toString к объекту user.

Встроенный метод toString в объектах – неперечислимый, его не видно в цикле for..in. Но если мы напишем свой собственный метод toString, цикл for..in будет выводить его по умолчанию:
*/

user.toString = function () {
    return this.name;
}

for(let key in user) {
    console.log(key);
}

/*
выведет:
name
age
job
toString


// По умолчанию оба свойства выведутся:
for (let key in user) alert(key); // name, toString
Если мы этого не хотим, можно установить для свойства enumerable:false. Тогда оно перестанет появляться в цикле for..in аналогично встроенному toString, и записанному нами lastName:
*/

Object.defineProperty(user, "toString", {
    enumerable: false
});

for(let key in user) {
    console.log(key);
}

/*
выведет:
name
age
job


// Теперь наше свойство toString пропало из цикла:
for (let key in user) alert(key); // name
Неперечислимые свойства также не возвращаются 
Object.keys:
*/
console.log(Object.keys(user)); // [ 'name', 'age', 'job' ]

// можно вернуть

/*
Object.defineProperty(user, "lastName", {
    enumerable: true
});  // TypeError: Cannot redefine property: lastName
*/

/*
Ошибка TypeError: Cannot redefine property: lastName возникает потому, что вы пытаетесь повторно определить свойство lastName, которое уже существует в объекте user.

Чтобы избежать этой ошибки, вы можете использовать Object.defineProperty() только для тех свойств, которые ещё не определены в объекте.

Если вы хотите изменить атрибуты существующего свойства, вам нужно сначала удалить его с помощью delete, а затем определить его заново с новыми атрибутами.
*/
delete user.lastName;  // не удалит writable: false
/*
Object.defineProperty(user, "lastName", {
    value: "Doe",
    enumerable: true
});

TypeError: Cannot redefine property: lastName

Если свойство lastName было определено с помощью Object.defineProperty() с атрибутом writable: false, то его нельзя будет удалить или перезаписать. В таком случае вам нужно будет использовать другие подходы или структуры данных для достижения вашей цели.

Один из возможных подходов - это создание нового объекта с новыми свойствами, которые вы хотите добавить или изменить, и затем копирование существующих свойств в новый объект, а также добавление новых свойств. Вот пример такого подхода:
*/

const newUser = Object.assign({}, user, {lastName: "Doe"});

console.log(JSON.stringify(Object.keys(newUser), null, 2));

/*
выведет:
[
  "name",
  "age",
  "job",
   "lastName"
]
попробуем через цикл
*/
for (let key in newUser) {
    console.log(key);
}

/*
выведет: 
name
age
job
lastName

узнаем количество свойств в объекте
*/
console.log(Object.keys(user).length);  // 3? на самом деле 5 - 2 скрытых lastName, toString
console.log(Object.getOwnPropertyNames(user).length); // 5
console.log(Object.getOwnPropertyNames(newUser).length); // 4

console.log(Object.getOwnPropertyNames(user)); // [ 'name', 'lastName', 'age', 'job', 'toString' ]
console.log(Object.getOwnPropertyNames(newUser)); // [ 'name', 'age', 'job', 'lastName' ]


/*

Неконфигурируемое свойство******************************

Флаг неконфигурируемого свойства (configurable:false) иногда предустановлен для некоторых встроенных объектов и свойств.

Неконфигурируемое свойство не может быть удалено, его атрибуты не могут быть изменены.

Например, свойство Math.PI – только для чтения, неперечислимое и неконфигурируемое:
*/

let piDescriptor = Object.getOwnPropertyDescriptor(Math, "PI");

console.log(JSON.stringify(piDescriptor, null, 2));
/*
выведет:
{
    "value": 3.141592653589793,
    "writable": false,
    "enumerable": false,
    "configurable": false
  }

То есть программист не сможет изменить значение Math.PI или перезаписать его.
*/
Math.PI = 3;

/*
Math.PI = 3; // Ошибка, потому что writable: false

// delete Math.PI тоже не сработает
Мы также не можем изменить writable:
*/
console.log(delete Math.PI);  // false

/*
// Ошибка, из-за configurable: false
*/

// Object.defineProperty(Math, "PI", {writable: true});  // TypeError: Cannot redefine property: PI

/*
Мы абсолютно ничего не можем сделать с Math.PI.

Определение свойства как неконфигурируемого – это дорога в один конец. Мы не можем изменить его обратно с помощью defineProperty.

Обратите внимание: configurable: false не даст изменить флаги свойства, а также не даст его удалить. При этом можно изменить значение свойства.

В коде ниже свойство user.name является неконфигурируемым, но мы все ещё можем изменить его значение (т.к. writable: true).
*/
Object.defineProperty(user, "name", {
    writable: true, 
    enumerable: true,
    configurable: false
});

user.name = "Peter";

console.log(Object.getOwnPropertyDescriptor(user, "name"));

/*
вывел:
{
  value: 'Peter',
  writable: true,
  enumerable: true,
  configurable: false
}
попробуем удалить имя:
*/

console.log(delete user.name);  // false
/*
delete user.name; // Ошибка
А здесь мы делаем user.name «навечно запечатанной» константой, как и встроенный Math.PI:

let user = {
  name: "John"
};
*/

Object.defineProperty(user, "age", {
    writable: false,
    configurable:false
});

console.log(user.age = 30);
console.log(delete user.age);  // false

/*
Object.defineProperty(user, "name", {
  writable: false,
  configurable: false
});

 В этом случае, когда вы используете `Object.defineProperty()` для определения свойства `age` с атрибутами `writable: false` и `configurable: false`, это означает, что вы устанавливаете атрибуты `writable` и `configurable` для существующего свойства `age`.

Однако, когда вы пытаетесь изменить значение свойства `age` с помощью `user.age = 30;`, это не приведет к изменению значения, поскольку свойство было определено с атрибутом `writable: false`. В этом случае, при попытке изменения значения будет проигнорирована, и операция будет успешно выполнена, но новое значение не будет установлено.

Кроме того, попытка удалить свойство `age` с помощью `delete user.age;` также не удалится, потому что свойство было определено с атрибутом `configurable: false`, и его нельзя удалить.

Таким образом, хотя операции установки значения и удаления будут выполнены без ошибок, но свойство `age` останется неизменным и неудаляемым, в соответствии с определенными атрибутами.
*/
console.log(JSON.stringify(user["age"], null, 2)); // 25

/*
// теперь невозможно изменить user.age или его флаги
// всё это не будет работать:
Object.defineProperty(user, "name", { value: "Pete" });
Ошибки отображаются только в строгом режиме
В нестрогом режиме мы не увидим никаких ошибок при записи в свойства «только для чтения» и т.п. Эти операции всё равно не будут выполнены успешно. Действия, нарушающие ограничения флагов, в нестрогом режиме просто молча игнорируются.
*/
const person = {
    name: "Tony",
    age: 77
};

console.log(delete person.age);  // true - удаление прошло
console.log(person);             // { name: 'Tonny' }

// добавим возраст опять

Object.defineProperty(person, "age", {
    value: 25,
    enumerable: true})

// изменим возраст
console.log(person.age = 30);

console.log(JSON.stringify(person, null, 2));

console.log(delete person.age);

/*
Метод Object.defineProperties***************************

Существует метод Object.defineProperties(obj, descriptors), который позволяет определять множество свойств сразу.

Его синтаксис:

Object.defineProperties(obj, {
    prop1: descriptor1,
    prop2: descriptor2,
    //...
});
*/
// Например:
let tester = {};

Object.defineProperties(tester, {
    name: { value: "John", writable: false, enumerable: true },
    surname: { value: "Smith", writable: false, enumerable: true },
    // ...
});

console.log(tester);  // { name: 'John', surname: 'Smith' }
/*
Таким образом, мы можем определить множество свойств одной операцией.

Object.getOwnPropertyDescriptors************************

Чтобы получить все дескрипторы свойств сразу, можно воспользоваться методом 
Object.getOwnPropertyDescriptors(obj).

Вместе с Object.defineProperties этот метод можно использовать для клонирования объекта вместе с его флагами:
*/

let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(obj));

/*
Обычно при клонировании объекта мы используем присваивание, чтобы скопировать его свойства:
*/

for (let key in user) {
    clone[key] = user[key]
}

console.log(clone);  // { name: 'Peter', age: 25, job: 'QA' }

/*
for (let key in user) {
  clone[key] = user[key]
}
…Но это не копирует флаги. Так что если нам нужен клон «получше», предпочтительнее использовать Object.defineProperties.

Другое отличие в том, что for..in игнорирует символьные и неперечислимые свойства, а Object.getOwnPropertyDescriptors возвращает дескрипторы всех свойств.

Глобальное запечатывание объекта************************

Дескрипторы свойств работают на уровне конкретных свойств.

Но ещё есть методы, которые ограничивают доступ ко всему объекту:

Object.preventExtensions(obj)
Запрещает добавлять новые свойства в объект.

Object.seal(obj)
Запрещает добавлять/удалять свойства. Устанавливает configurable: false для всех существующих свойств.

Object.freeze(obj)
Запрещает добавлять/удалять/изменять свойства. Устанавливает configurable: false, writable: false для всех существующих свойств.


А также есть методы для их проверки:

Object.isExtensible(obj)
Возвращает false, если добавление свойств запрещено, иначе true.

Object.isSealed(obj)
Возвращает true, если добавление/удаление свойств запрещено и для всех существующих свойств установлено configurable: false.

Object.isFrozen(obj)
Возвращает true, если добавление/удаление/изменение свойств запрещено, и для всех текущих свойств установлено configurable: false, writable: false.
На практике эти методы используются редко.
*/

// пример использования этих методов:


let objEx = {
  prop1: 42,
  prop2: "hello"
};

// Запрещаем добавление новых свойств
Object.preventExtensions(objEx);

// Проверяем, можно ли добавлять новые свойства
console.log(Object.isExtensible(objEx)); // Выводит: false

// Запрещаем добавление/удаление свойств и устанавливаем configurable: false для всех существующих свойств
Object.seal(objEx);

// Проверяем, запечатан ли объект
console.log(Object.isSealed(objEx)); // Выводит: true

// Запрещаем добавление/удаление/изменение свойств и устанавливаем configurable: false, writable: false для всех существующих свойств
Object.freeze(objEx);

// Проверяем, заморожен ли объект
console.log(Object.isFrozen(objEx)); // Выводит: true

// Попытка изменить свойство в замороженном объекте
objEx.prop1 = 100; // Не произойдет изменений, так как объект заморожен

// Попытка добавить новое свойство в запечатанный объект
objEx.newProp = true; // Не произойдет добавления, так как объект запечатан

// Попытка удалить свойство из запечатанного объекта
delete objEx.prop2; // Не произойдет удаления, так как объект запечатан

/*
В этом примере объект `objEx` сначала был запрещен к расширению с помощью `Object.preventExtensions()`, затем был запечатан с помощью `Object.seal()`, и, наконец, был заморожен с помощью `Object.freeze()`. Каждый раз мы проверяем статус объекта с помощью соответствующих методов.
*/
