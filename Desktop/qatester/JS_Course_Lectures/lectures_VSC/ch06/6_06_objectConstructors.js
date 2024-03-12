/*
Конструкторы объектов JavaScript
Пример
*/

function Person (first, last, age, eye) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eye;
}
/*
Примечания
Считается хорошей практикой называть функции-конструкторы первой буквой в верхнем регистре.

Об этом
В конструкторе-функции this не имеет значения. Это замена нового объекта. Значение this станет новым объектом при создании нового объекта.

Типы объектов (схемы - чертежи) (классы)************************
Object Types (Blueprints) (Classes)
Предыдущие примеры ограничены. Они создают только отдельные объекты.

Иногда нам нужен « схема - чертеж » для создания множества объектов одного и того же «типа».

Способ создания «типа объекта» — использовать функцию конструктора объекта .

В приведенном выше примере function Person()— функция конструктора объекта.

Объекты одного типа создаются путем вызова функции-конструктора с new ключевым словом:
*/

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");

console.log(`My father is ${myFather.firstName}.`);
console.log(myMother);
/*
Что это this?
В JavaScript this ключевое слово относится к объекту .

Какой объект зависит от того, как this вызывается (используется или вызывается).

Ключевое this слово относится к разным объектам в зависимости от того, как оно используется:

В методе объекта this ссылается на объект .
Отдельно this относится к глобальному объекту .
В функции this относится к глобальному объекту .
В функции в строгом режиме this есть undefined.
В событии this относится к элементу , получившему событие.
Такие методы call(), как apply(), и bind() могут ссылаться this на любой объект .

this не является переменной. Это ключевое слово. Вы не можете изменить значение this.

Добавление свойства к объекту***************************
Adding a Property to an Object
Добавить новое свойство к существующему объекту легко:

Пример
*/
myFather.nationality = "English";

console.log(myFather.nationality);  //  English
console.log(myMother.nationality);  // undefined
/*
Свойство будет добавлено в myFather. Не моей матери. (Ни одному другому человеку не возражает).

Добавление метода к объекту******************************
Adding a Method to an Object

Добавить новый метод к существующему объекту легко:

Пример
*/

myFather.name = function () {
  return this.firstName + " " + this.lastName;
};

console.log(myFather.name());  //  John Doe
console.log(myMother.name());  // undefined


/*
Метод будет добавлен в myFather. Не моей матери. (Ни одному другому человеку не возражает).

Добавление свойства в конструктор*********************
Adding a Property to a Constructor

Вы НЕ СМОЖЕТЕ ДОБАВИТЬ новое свойство в конструктор объекта ТАК ЖЕ , КАК  вы добавляете новое свойство в существующий объект:

Пример
*/
Person.nationality = "Russian";

console.log(myFather.nationality);  //  English
console.log(myMother.nationality);  // undefined

/*
Чтобы добавить новое свойство в конструктор, вы должны добавить его в функцию конструктора:

Пример
*/

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

/*
Таким образом, свойства объекта могут иметь значения по умолчанию.

Добавление метода в конструктор
Ваша функция-конструктор также может определять методы:

Пример
*/

function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
}
/*
Вы НЕ СМОЖЕТЕ ДОБАВИТЬ новый метод в конструктор объекта ТАК ЖЕ , КАК  вы добавляете новый метод в существующий объект.
*/
console.log(myFather.name());  //  John Doe
console.log(myMother.name());  // Sally Rally


/*
Добавление методов в конструктор объекта должно выполняться внутри функции-конструктора:

Пример
*/

function Person(firstName, lastName, age, eyeColor) {
  this.firstName = firstName; 
  this.lastName = lastName;
  this.age = age;
  this.eyeColor = eyeColor;
  this.name = function() {
    return this.firstName + " " + this.lastName;
  };
  this.changeFirstName = function (name) {
    this.firstName = name;
  };
}

/*
Функция ChangeFirstName() присваивает значение имени свойству LastName человека Person.

Теперь вы можете попробовать:
*/
myMother.changeFirstName("Ann");

console.log(myMother.firstName);
console.log(myFather.firstName);
/*
JavaScript знает, о каком человеке вы говорите, «заменив» это на myMother .

Встроенные конструкторы JavaScript**********************
Built-in JavaScript Constructors
В JavaScript есть встроенные конструкторы для собственных объектов:

new String()    // A new String object
new Number()    // A new Number object
new Boolean()   // A new Boolean object
new Object()    // A new Object object
new Array()     // A new Array object
new RegExp()    // A new RegExp object
new Function()  // A new Function object
new Date()      // A new Date object
Объекта Math() нет в списке. Math является глобальным объектом. Ключевое new слово нельзя использовать на Math.

Вы знали?***********************************************
Как вы можете видеть выше, в JavaScript есть объектные версии примитивных типов данных String, Numberи Boolean. Но нет смысла создавать сложные объекты. Примитивные значения работают намного быстрее:

Используйте строковые литералы ""вместо new String().

Используйте числовые литералы 50 вместо new Number().

Используйте логические литералы true / false вместо new Boolean().

Используйте литералы объектов {} вместо new Object().

Используйте литералы массива [] вместо new Array().

Используйте литералы шаблонов /()/ вместо new RegExp().

Используйте функциональные выражения () {} вместо new Function().

Пример
*/

let x1 = "";             // new primitive string
let x2 = 0;              // new primitive number
let x3 = false;          // new primitive boolean

const x4 = {};           // new Object object
const x5 = [];           // new Array object
const x6 = /()/          // new RegExp object
const x7 = function(){}; // new function

/*
Строковые объекты*************************************
Обычно строки создаются как примитивы:
*/
let firstName1 = "John"

/*
Но строки также можно создавать как объекты с помощью newключевого слова:
*/
let firstName2 = new String("John")
/*
Узнайте, почему строки не следует создавать как объекты, в главе « Строки JS» .
*/

console.log(typeof firstName1);  // string

console.log(typeof firstName2);  // object
/*

Числовые объекты***************************************
Обычно числа создаются как примитивы:
*/

let xxx = 30;
/*
Но числа также можно создавать как объекты, используя new ключевое слово:
*/
let yyy = new Number(30)
/*

Узнайте, почему числа не следует создавать как объекты, в главе «Числа JS» .
*/

console.log(typeof xxx);  // number

console.log(typeof yyy);  // object

/*
Логические объекты*************************************
Обычно логические значения создаются как примитивы:
*/
let xBool = false;
/*
Но логические значения также можно создавать как объекты, используя newключевое слово:
*/

let yBool = new Boolean(false);

/*
Узнайте, почему логические значения не следует создавать как объекты, в главе JS Booleans .
*/

console.log(typeof xBool);  // boolean

console.log(typeof yBool);  // object
