/*
операторы сравнения,
вложенные массивы,
вложенные циклы
спред оператор

деструктуризация

Методы массивов

*/

let arr =  [17, 'test', true, 'last'];
let temporaryArr = arr.slice(); //  [ 17, 'test', true, 'last' ]
console.log(temporaryArr);

let newArr = [];

let arrLength = arr.length;

console.log(`Метод arr.length:  arrLength = ${arrLength} и  
arr = ${arr}.`);


/*
 в JavaScript вы можете сравнивать массивы. Однако, когда вы сравниваете массивы с помощью операторов сравнения (===, !==, <, >, <=, >=), они будут сравниваться по ссылке, а не по содержимому. Это означает, что два массива будут считаться равными только в том случае, если они ссылаются на один и тот же объект в памяти.

В вашем коде проверка arr === arrLength и arr === arrPush не даст ожидаемого результата, так как она сравнивает сам массив arr с числом arrLength и результатом метода push() соответственно, а не их содержимое.

Если вам нужно сравнить содержимое массивов, вам следует использовать итерацию по элементам массивов и сравнивать их поочередно. Например, вы можете сравнивать их длины, а затем сравнивать каждый элемент:

Таким образом, вы можете сравнивать массивы, сравнивая их содержимое, а не только ссылки на них в памяти.
*/

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log("Массивы arr и newArr равны: " + arraysAreEqual(arr, newArr));


console.log("Массивы arr и temporaryArr равны: " + arraysAreEqual(arr, temporaryArr));

// arr.push()

let arrPush = temporaryArr.push('a');

console.log(`Метод arr.push('a'): arrPush = ${arrPush} и
temporaryArr = ${temporaryArr},
arr = ${arr}.`);

// проверка
console.log("Метод не изменил массив: " + arraysAreEqual(arr, temporaryArr));

temporaryArr = arr.slice();
let arrPushSomeVar = temporaryArr.push('b', 'c', 'd');

console.log(`Метод arr.push('b', 'c', 'd'): arrPush = ${arrPushSomeVar} и
temporaryArr = ${temporaryArr},
arr = ${arr}.`);

// проверка
console.log("Метод не изменил массив: " + arraysAreEqual(arr, arrPushSomeVar));




/*
 в JavaScript вы можете сравнивать массивы. Однако, когда вы сравниваете массивы с помощью операторов сравнения (===, !==, <, >, <=, >=), они будут сравниваться по ссылке, а не по содержимому. Это означает, что два массива будут считаться равными только в том случае, если они ссылаются на один и тот же объект в памяти.

В вашем коде проверка arr === arrLength и arr === arrPush не даст ожидаемого результата, так как она сравнивает сам массив arr с числом arrLength и результатом метода push() соответственно, а не их содержимое.

Если вам нужно сравнить содержимое массивов, вам следует использовать итерацию по элементам массивов и сравнивать их поочередно. Например, вы можете сравнивать их длины, а затем сравнивать каждый элемент:

Таким образом, вы можете сравнивать массивы, сравнивая их содержимое, а не только ссылки на них в памяти.
*/

function arraysAreEqual(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    for (let i = 0; i < arr1.length; i++) {
        if (arr1[i] !== arr2[i]) {
            return false;
        }
    }
    return true;
}

console.log("Массивы arr и newArr равны: " + arraysAreEqual(arr, newArr));


console.log("Массивы arr и temporaryArr равны: " + arraysAreEqual(arr, temporaryArr));

****************************
МДН MDN

Сравнение строк
Разработчики на C имеют для сравнения строк функцию strcmp(). В JavaScript вы просто используете операторы меньше и больше:

JS
Copy to Clipboard
var a = "a";
var b = "b";
if (a < b) {
  // true
  print(a + " меньше чем " + b);
} else if (a > b) {
  print(a + " больше чем " + b);
} else {
  print(a + " и " + b + " равны.");
}
Подобный результат также может быть достигнут путём использования метода localeCompare(), имеющегося у всех экземпляров String.