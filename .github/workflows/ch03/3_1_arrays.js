// An array is a special variable, which can hold more than one value:

const cars = ['Saab', 'Volvo', 'BMV'];

let car1 = "Saab";
let car2 = "Volvo";
let car3 = "BMW";

// Creating an Array
// Using an array literal is the easiest way to create a JavaScript Array.

// Syntax:

// const arrayName = [item1, item2, ...];      

// It is a common practice to declare arrays with the const keyword.

// Spaces and line breaks are not important. A declaration can span multiple lines:

const carsMultiLines = [
  "Saab",
  "Volvo",
  "BMW"
];

// You can also create an array, and then provide the elements:


const carsElements = [];
cars[0]= "Saab";
cars[1]= "Volvo";
cars[2]= "BMW";

/*
В JavaScript ключевые слова `let` и `const` используются для объявления переменных. Однако, когда вы работаете с массивами, объявление переменных `let` или `const` перед непосредственным присваиванием значений элементам массива не является обязательным.

В вашем примере, переменная `cars` объявлена с использованием `const`, что означает, что сам массив `cars` не может быть переопределен. Однако, каждый элемент массива может быть изменен.

Таким образом, когда вы пишете `cars[0] = "Saab"`, это изменяет значение первого элемента массива `cars` на `"Saab"`, но это не создает новую переменную и поэтому нет необходимости в использовании ключевых слов `let` или `const` перед этим оператором.

В JavaScript, синтаксис `let cars[0]` неверен и вызовет ошибку. Ключевые слова `let` и `const` используются для объявления переменных, а не для присвоения значений элементам массива. 

Здесь `let cars = [];` создает новую переменную `cars`, которая является пустым массивом. Затем каждому элементу массива `cars` присваивается значение с использованием синтаксиса 
*/

// cars[index] = value;  // item[item] = value;

// Using the JavaScript Keyword new

const carsNew = new Array("Saab", "Volvo", "BMW");

// Accessing Array Elements - You access an array element by referring to the index number:
// Changing an Array Element

const carsAccess = ["Saab", "Volvo", "BMW"];
let car = cars[0];  // создаем новую переменную и присваиваем ей значение одного элемента массива.

// Array indexes start with 0. [0] is the first element. [1] is the second element.

cars[0] = 'Opel';

// Converting an Array to a String
// The JavaScript method toString() converts an array to a string of (comma separated) array values.

let arrayToString = cars.toString();
console.log(typeof(cars));            // object
console.log(typeof(arrayToString));  // string
console.log(arrayToString);

console.log(cars);  // With JavaScript, the full array can be accessed by referring to the array name

// Array Elements Can Be Objects. Arrays are special kinds of objects.
// You can have objects in an Array. You can have functions in an Array. You can have arrays in an Array:
const myFunction = function() {
    console.log(myArray);
    return myArray;
};

let myArray  = [];
myArray[0] = Date.now;
myArray[1] = myFunction;
myArray[2] = cars;

myArray[1];
myFunction();

// если вы хотите вызвать функцию, хранящуюся в myArray[1], вы должны добавить круглые скобки:

myArray[1](); // Вызывает функцию myFunction() и печатает [ [Function: now], [Function: myFunction], [ 'Opel', 'Volvo', 'BMW' ] ]
// Итак, для вызова myFunction() (которая хранится в myArray[1]), вы должны использовать myArray[1]();, а не просто myArray[1];

//Это происходит из-за того, что в массиве `myArray` вы не вызываете функцию `Date.now`, а просто присваиваете саму функцию `Date.now` в качестве элемента массива. Аналогично, вы также просто присваиваете саму функцию `myFunction` в качестве другого элемента массива.

// Если вы хотите вызвать функцию и добавить её результат в массив, вам нужно вызвать функцию и добавить её возвращаемое значение в массив. Например:


let myNewArray  = [];
myNewArray[0] = Date.now(); // Вызываем функцию Date.now и добавляем её результат в массив
myNewArray[1] = myFunction(); // Вызываем функцию myFunction и добавляем её результат в массив
myNewArray[2] = cars;


// И в этом случае вы увидите ожидаемый результат. Однако, учтите, что вызов `Date.now()` возвращает текущую дату и время в виде временной метки, а вызов `myFunction()` вернет `undefined`, потому что `myFunction` не возвращает никакого значения.

console.log(myNewArray);

// Функция `Date.now()` возвращает количество миллисекунд, прошедших с начала эпохи Unix (00:00:00 UTC on 1 January 1970). Ваш результат `1707006726440` представляет собой количество миллисекунд с этого момента до текущего времени. 

// Чтобы расшифровать это значение в более читаемую дату и время, можно воспользоваться следующим JavaScript-кодом:

const milliseconds = 1707006726440;
const date = new Date(milliseconds);
console.log(date);


// Этот код создаст объект `Date`, представляющий дату и время, соответствующие указанным миллисекундам. Вывод будет в формате даты и времени, например: Sat Feb 03 2024 09:25:26 GMT+0000 (Coordinated Universal Time)
// Это время будет представлять момент, который соответствует указанным вами миллисекундам с начала эпохи Unix. 

// Array Properties and Methods
// The real strength of JavaScript arrays are the built-in array properties and methods:

cars.length   // Returns the number of elements
cars.sort()   // Sorts the array

// Если нужно, чтобы массив остался неизменным можно использовать В JavaScript для сортировки массива без изменения исходного массива  метод `slice()` для создания копии массива, а затем применить метод сортировки к этой копии. Вот пример:

const originalArray = [3, 1, 2];
const sortedArray = originalArray.slice().sort();


// В этом примере `slice()` создает копию исходного массива `originalArray`, а метод `sort()` сортирует эту копию. Исходный массив `originalArray` остается неизменным, а отсортированный массив сохраняется в переменной `sortedArray`.

// Есть новый метод toSprted(), который сортирует и не меняет исходный массив.

const months = ["Mar", "Jan", "Feb", "Dec"];
const sortedMonths = months.toSorted();
console.log(sortedMonths); // ['Dec', 'Feb', 'Jan', 'Mar']
console.log(months); // ['Mar', 'Jan', 'Feb', 'Dec']

const values = [1, 21, 10, 21, 2];
const sortedValues = values.toSorted();
console.log(sortedValues); // [1, 10, 2, 21, 21]
console.log(values); // [1, 21, 10, 21, 2]
values.sort();
console.log(values);  // изменили начальный массив [ 1, 10, 2, 21, 21 ]

// функция toReversed() создается массив items, содержащий элементы, а затем создается новый массив, обратный items. Массив items остается неизменным.

const items = [1, 2, 3];
console.log(items); // [1, 2, 3]

const reversedItems = items.toReversed();
console.log(reversedItems); // [3, 2, 1]
console.log(items); // [1, 2, 3]
items.reverse();
console.log(items);  // [ 3, 2, 1 ] изменили начальный массив  items

// The length property of an array returns the length of an array (the number of array elements).

const fruits = ["Banana", "Orange", "Apple", "Mango"];
let length = fruits.length;
console.log(length);   // 4

// Accessing the First Array Element
fruit = fruits[0];

// Accessing the Last Array Element
lastFruit = fruits[fruits.length - 1];