/*
In JavaScript, objects are king. If you understand objects, you understand JavaScript.

In JavaScript, almost "everything" is an object.

Booleans can be objects (if defined with the new keyword)
Numbers can be objects (if defined with the new keyword)
Strings can be objects (if defined with the new keyword)
Dates are always objects
Maths are always objects
Regular expressions are always objects
Arrays are always objects
Functions are always objects
Objects are always objects
All JavaScript values, except primitives, are objects.
*/

/*
JavaScript Primitives

A primitive value is a value that has no properties or methods.

3.14 is a primitive value

A primitive data type is data that has a primitive value.

JavaScript defines 7 types of primitive data types:

string
number
boolean
null
undefined
symbol
bigint
*/

/*
Immutable
Primitive values are immutable (they are hardcoded and cannot be changed).

Неизменный
Примитивные значения неизменяемы (они жестко закодированы и не могут быть изменены).

если x = 3,14, вы можете изменить значение x, но не можете изменить значение 3,14.

if x = 3.14, you can change the value of x, but you cannot change the value of 3.14.

Value	   Type	        Comment
"Hello"	   string	    "Hello" is always "Hello"
3.14	   number	    3.14 is always 3.14
true	   boolean	    true is always true
false	   boolean	    false is always false
null	   null         (object)	null is always null
undefined  undefined	undefined is always undefined

нет свойств и методов
*/

console.log(typeof "Hello");
console.log(typeof 3.14);
console.log(typeof true);
console.log(typeof false);
console.log(typeof null);
console.log(typeof undefined);
// Создаем Symbol с описанием "mySymbol"
const firstSymbol = Symbol("mySymbol");

console.log(typeof firstSymbol);  // symbol

console.log('_Objects_are_veriables*****************************');
console.log('**********************************');

/*
Objects are Variables
Объекты являются переменными
JavaScript variables can contain single values:
*/

let firstPerson = "John Doe";
console.log(firstPerson);
/*
JavaScript variables can also contain many values.
Objects are variables too. But objects can contain many values.

Object values are written as 
name : value pairs (name and value separated by a colon).
*/

let onePerson = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};
console.log(onePerson);
/*
A JavaScript object is a collection of named values

It is a common practice to declare objects with the const keyword.
*/

const person = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};
console.log(person);

/*
Object Properties
Именованные значения в объектах JavaScript называются свойствами .
The named values, in JavaScript objects, are called properties.


Property --|--	Value
-----------|-----------
firstName--|--- John
lastName --|--	Doe
age	     --|--  50
eyeColor --|--	blue
------------------------

Методы объекта
Методы — это действия , которые можно выполнять над объектами.

Свойства объекта могут быть как примитивными значениями, так и другими объектами и функциями.

Метод объекта — это свойство объекта, содержащее определение функции .

*/

const otherPerson = {
    firstName: "John",
    lastName: "Doe",
    age: 50,
    eyeColor: "blue",
    fullName: function() {
        return this.firstName + " " + this.lastName;
    }
};

console.log(otherPerson);

/*
Property --|--	Value
-----------|-----------
firstName--|--- John
lastName --|--	Doe
age	     --|--  50
eyeColor --|--	blue
fullName --|--  function() {return this.firstName + " " + this.lastName;}
------------------------
JavaScript objects are containers for named values, called properties and methods.

Объекты JavaScript — это контейнеры для именованных значений, называемых свойствами и методами.
*/
console.log('Creating_Objects*****************************');
console.log('**********************************');



/*
Creating a JavaScript Object
With JavaScript, you can define and create your own objects.

There are different ways to create new objects:

 -1- Create a single object, using an object literal.
 -2- Create a single object, with the keyword new.
 -3- Define an object constructor, and then create objects of the constructed type.
 -4- Create an object using Object.create().
 
********* 
 -1- Using an Object Literal

 This is the easiest way to create a JavaScript Object.

Using an object literal, you both define and create an object in one statement.

An object literal is a list of name:value pairs (like age:50) inside curly braces {}.

The following example creates a new JavaScript object with four properties:
*/
const person2 = {
    firstName:"John", 
    lastName:"Doe", 
    age:50, 
    eyeColor:"blue"
};

/*
Spaces and line breaks are not important. An object definition can span multiple lines:

This example creates an empty JavaScript object, and then adds 4 properties:
*/

const months = {};

months.firstMonth = "January";
months.secondMonth = "February";
months.thirdMonth = "March";

console.log(months);  // { firstMonth: 'January', secondMonth: 'February', thirdMonth: 'March' }

/*
 - 2- Using the JavaScript Keyword new
The following example create a new JavaScript object using new Object(), and then adds 4 properties:
*/
const week = new Object();

week.firstDay = "Monday";
week.secondDay = "Tuesday";
week.weekend = ["Saturday", "Sunday"];
week.workDay = {
    1: week.firstDay, 
    2: week.secondDay, 
    3: "Wednesday", 
    4: "Thursday", 
    5: "Friday"
};

console.log(week);
/*
{
  firstDay: 'Monday',
  secondDay: 'Tuesday',
  weekend: [ 'Saturday', 'Sunday' ],
  workDay: {
    '1': 'Monday',
    '2': 'Tuesday',
    '3': 'Wednesday',
    '4': 'Thursday',
    '5': 'Friday'
  }

  The examples above do exactly the same.
But there is no need to use new Object().
For readability, simplicity and execution speed, use the object literal method.

JavaScript Objects are Mutable
Objects are mutable: They are addressed by reference, not by value.

If person is an object, the following statement will not create a copy of person:

Объекты JavaScript изменяемы
Объекты изменяемы: к ним обращаются по ссылке, а не по значению.

Если person является объектом, следующий оператор не создаст копию person:
  */

const x = week;

/*
Объект x не является копией week. Это week. 
И x, и week — один и тот же объект.

Любые изменения x также изменят week, поскольку x и week — один и тот же объект.
*/

x.weekend = "Sunday";

console.log(x);
console.log(week);
/*

{  firstDay: 'Monday',  secondDay: 'Tuesday',  weekend: 'Sunday',  workDay: {    '1': 'Monday',    '2': 'Tuesday',    '3': 'Wednesday',    '4': 'Thursday',    '5': 'Friday'  } }

{  firstDay: 'Monday',  secondDay: 'Tuesday',  weekend: 'Sunday',  workDay: {    '1': 'Monday',    '2': 'Tuesday',    '3': 'Wednesday',    '4': 'Thursday',
    '5': 'Friday'  } }
*/



console.log(`Symbol************************************************************************************************`);
{
/*
пример использования Symbol в JavaScript:
*/
// Создаем Symbol с описанием "mySymbol"
const mySymbol = Symbol("mySymbol");

// Создаем объект с использованием Symbol в качестве ключа
const obj = {
  [mySymbol]: "Значение, связанное с символом"
};

// Получаем доступ к значению, связанному с символом
console.log(obj[mySymbol]); // Выведет: Значение, связанное с символом

/*
В этом примере создается уникальный Symbol с описанием "mySymbol". Затем он используется в качестве ключа для объекта `obj`. 
Мы можем получить доступ к значению, связанному с символом, используя квадратные скобки и сам символ в качестве ключа. 
В результате выполнения кода выведется строка "Значение, связанное с символом".

Использование символов (Symbol) для хранения логина и пароля в файлах не является типичным подходом. Обычно для хранения логинов и паролей используются более безопасные методы, такие как хэширование паролей и хранение хэшей вместо самого пароля.

Однако,  в рамках учебного примера или для экспериментов, вы можете сделать это следующим образом:

1. Создаем символы для логина и пароля:
*/

const login = Symbol("login");
const password = Symbol("password");


// 2. Создаем объект, в котором будут храниться логины и пароли:

const userCredentials = {};   // Учетные данные пользователя

// 3. Используем символы для установки логина и пароля:

userCredentials[login] = "example_user";
userCredentials[password] = "example_password";

// 4. Для получения логина и пароля используем символы:

console.log(userCredentials[login]); // Выведет: example_user
console.log(userCredentials[password]); // Выведет: example_password

//  сразу включить в объект их не получится, нужно через присваивание - как с user

const adminLogin = Symbol("adminLogin");
const adminPassword = Symbol("adminPassword");

const adminCredentials = {
    adminLogin: "example_admin_login",
    adminPassword: "example_admin_password"
};

console.log(adminCredentials); // { adminLogin: 'example_admin_login', adminPassword: 'example_admin_password' }
console.log(userCredentials); //  { [Symbol(login)]: 'example_user',   [Symbol(password)]: 'example_password'  }

/*
Однако следует отметить, что такой подход не обеспечивает безопасности, потому что значения логина и пароля все еще могут быть прочитаны из объекта. Для хранения логинов и паролей рекомендуется использовать более безопасные методы, такие как хэширование паролей и использование баз данных с функциями аутентификации.


При использовании `Symbol(login)` как ключа в объекте вместе с обычным строковым ключом `'login'`, при итерации по ключам объекта (`for...in` или `Object.keys()`) оба ключа будут выведены.
*/

const myLogin = Symbol("myLogin");

const objLogin = {
  myLogin: "example_login",
  [myLogin]: "symbol_login",
  [Symbol("myLogin")]: "obj_symbol_login"
};

for (let key in objLogin) {
  console.log(key); //  Выведет: myLogin  - Symbol(myLogin) не выводится
}

// Обратите внимание, что при использовании `Object.keys(objLogin)` также будут возвращены не оба ключа:

console.log(Object.keys(objLogin)); // Выведет: ["myLogin"]

/*
Обращение к значению через `objLogin.myLogin`, будет получено только значение, связанное с обычным строковым ключом `'myLogin'`. Чтобы получить значение, связанное с символьным ключом `Symbol(myLogin)`, нужно обратиться напрямую к этому ключу:
*/

console.log(objLogin.myLogin); // Выведет: "example_login"
console.log(objLogin[myLogin]); // Выведет: "symbol_login"
console.log(objLogin["myLogin"]); // Выведет: "example_login"
console.log(objLogin[myLogin] == objLogin[Symbol("myLogin")]); // Выведет: false  - каждый раз создается новое
                                                                    //  значение symbol, даже если они одинаковые 
console.log(objLogin[Symbol("myLogin")]); // Выведет:  undefined

/*
При использовании `console.log(objLogin[myLogin])`, выведется только значение, связанное с символом `login`, а не ключ. То есть вывод будет содержать только `"symbol_login"`, потому что мы обращаемся к значению, связанному с символом `login`, используя его в качестве ключа объекта `obj`.

Если вы хотите вывести оба ключа, вам нужно просто вывести их сами, например:
*/

console.log("login: ", objLogin.myLogin); // Выведет: "login: example_login"
console.log("Symbol(login): ", objLogin[myLogin]); // Выведет: "Symbol(login): symbol_login"
 
/*
Таким образом, каждый `console.log` выведет ключ вместе с его значением.
*/

/*
Проблема в том, что при использовании цикла `for...in` выводятся только перечисляемые (enumerable) свойства объекта. 
По умолчанию свойства, созданные с помощью Symbol, являются не перечисляемыми.

Чтобы сделать символьное свойство перечисляемым, вы можете использовать метод `Object.defineProperty()` с параметром `enumerable`, установленным в `true`. Вот как это сделать:
*/

const safeLogin = Symbol("login");

const objSafeLogin = {
  safeLogin: "example_safe_login",
  [safeLogin]: "symbol_safe_login"
};

objSafeLogin[safeLogin] = "symbol_right_safe_login";

// Добавляем символьное свойство и делаем его перечисляемым
Object.defineProperty(objSafeLogin, safeLogin, { 
  value: "symbol_login", 
  enumerable: true 
});

for (let key in objSafeLogin) {
  console.log(key); // Выведет: safeLogin
}

console.log(objSafeLogin);   // { safeLogin: 'example_safe_login', [Symbol(login)]: 'symbol_login' }

/*
Теперь символьное свойство `myLogin` также будет выведено при использовании `for...in`.
*/

/*
Чтобы обойти объект и вывести все его значения, включая символьные свойства, через `obj.value`, нужно сначала получить все значения объекта и поместить их в массив. Затем этот массив значений можно пройти и вывести. Однако, учитывая, что символьные свойства по умолчанию не перечисляемые, они не будут включены в массив значений, если не будут использоваться специальные методы или свойства, такие как `Object.getOwnPropertySymbols()` или `Reflect.ownKeys()`.

Вот пример использования `Object.values()` для получения значений объекта (без учета символьных свойств):
*/

const objLogin1 = {
  myLogin: "example_login",
  [Symbol("myLogin")]: "symbol_login"
};

const values = Object.values(objLogin1);
console.log(values); // Выведет: ["example_login"]

/*
Как вы видите, только значение `"example_login"` было включено в массив `values`, а символьное свойство не было учтено.

Если вы хотите включить и символьные свойства в массив значений, то нужно использовать `Object.getOwnPropertySymbols()` или `Reflect.ownKeys()`:
*/

const symbols = Object.getOwnPropertySymbols(objLogin1);
const values1 = Object.values(objLogin1).concat(symbols.map(symbol => objLogin1[symbol]));

console.log(symbols); // Выведет: [ Symbol(myLogin) ]
console.log(values1); // Выведет: ["example_login", "symbol_login"]

/*
В этом примере мы объединяем массив значений объекта с массивом значений символьных свойств. Теперь оба значения, и `"example_login"`, и `"symbol_login"`, включены в массив `values`.
*/
console.log('************************************************************* ');
console.log('************************************************************* ');
/*
Symbol в JavaScript можно использовать не только в качестве ключей объекта, но и в других случаях. Вот несколько примеров:

1. Скрытые свойства объекта: Symbol можно использовать для создания "скрытых" свойств объекта, которые не будут видны при перечислении ключей объекта. Это может быть полезно для добавления приватных данных к объекту.
*/

const privateData = Symbol("privateData");
const privateObj = {};

// Присваиваем значение скрытому свойству
privateObj[privateData] = "Это скрытые данные";

// Получаем значение скрытого свойства
console.log(privateObj[privateData]); // Выведет: "Это скрытые данные"

// Но скрытое свойство не будет перечислено в Object.keys или при использовании for...in
console.log(Object.keys(privateObj)); // Выведет: []

for (let key in privateObj) {
  console.log(key); // Ничего не выведет
}

/*
2. Символы в глобальном реестре: В JavaScript существует глобальный реестр символов, который позволяет создавать и получать один и тот же символ по всей программе.
*/
// Получаем символ из глобального реестра
const globalSymbol = Symbol.for("globalSymbol");

// Получаем символ по его имени из глобального реестра
const sameGlobalSymbol = Symbol.for("globalSymbol");

// Символы одинаковы, потому что они были получены из глобального реестра
console.log(globalSymbol === sameGlobalSymbol); // Выведет: true

/*
3. Символьные итераторы: Символы могут быть использованы для определения итераторов для объектов.
*/

const iterableObject = {
  [Symbol.iterator]: function* () {
    yield 1;
    yield 2;
    yield 3;
  }
};

// Используем итератор для перебора значений объекта
for (let value of iterableObject) {
  console.log(value); // Выведет: 1, 2, 3
}

/*
Здесь используется генераторная функция, обозначенная с помощью символа `*`. Это специальный вид функции в JavaScript, который позволяет создавать итераторы. Генераторы представляют собой удобный способ создания итераторов без необходимости вручную реализовывать методы `next()` и `return()`.

В данном случае, у объекта `iterableObject` есть одно свойство, ключом которого является символ `Symbol.iterator`, а значением - генераторная функция. Это свойство указывает на функцию, которая будет вызвана, когда объект будет использоваться в контексте итерации, например, в цикле `for...of`.

Ключевое слово `function*` обозначает генераторную функцию. Оно позволяет определить функцию, которая может содержать ключевое слово `yield`, указывающее места, где функция может приостановить свое выполнение и возвратить значение.

В данном примере, генераторная функция возвращает значения 1, 2 и 3 поочередно при каждом вызове метода `next()` итератора. Когда все значения исчерпаны, итератор завершается.

Таким образом, ключ-значение у объекта `iterableObject`:

- Ключ: `Symbol.iterator`
- Значение: генераторная функция, которая возвращает значения 1, 2 и 3.
*/


/*
Это лишь несколько примеров использования символов в JavaScript. Символы могут быть полезны в различных сценариях, где требуется создание уникальных идентификаторов или добавление приватных свойств к объектам.
*/

/*
Ключевое слово `yield` в JavaScript используется в контексте генераторов функций и позволяет приостановить выполнение функции и вернуть значение на каждой итерации. Как переводится это слово на русский зависит от контекста, но обычно его переводят как "выдать" или "уступить". В контексте генераторов функций его можно интерпретировать как "выдать" значение из генератора.

Например, вот простой пример использования `yield` в генераторе функций:
*/

function* generatorFunction() {
  yield 1;
  yield 2;
  yield 3;
}

const generator = generatorFunction();

console.log(generator.next()); // { value: 1, done: false }
console.log(generator.next()); // { value: 2, done: false }
console.log(generator.next()); // { value: 3, done: false }
console.log(generator.next()); // { value: undefined, done: true }

/*
В этом примере `yield` используется для выдачи (или возврата) значения на каждой итерации генератора. Каждый вызов `generator.next()` вернет следующее значение в последовательности, а `done: true` указывает на завершение итераций генератора.
*/
}