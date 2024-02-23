/**
Методы массивов

1. [Array] length - свойство массива, property   46 row
2. Array toString()
3. [Array] at()                                      row
4. [Array] join()
5. [Array] pop()
6. [Array] push()
7. [Array] shift()
8. [Array] unshift()
9. Array delete()
10. [Array] concat()
11. [Array] copyWithin()
12. [Array] flat()
13. [Array] splice()
14. [Array] toSpliced()
15. [Array] slice()

problem solving

1. Array length - свойство массива, property   27 string
2. Array toString()
3. Array at()
4. Array join()
5. Array pop()
6. Array push()
7. Array shift()
8. Array unshift()
9. Array delete()
10. Array concat()
11. Array copyWithin()
12. Array flat()
13. Array splice()
14. Array toSpliced()
15. Array slice()


*/

const arr = [17, 'test', true, 'last'];
// arr = "array";

// arr = [17, 'test', true, 'last'];
console.log(typeof arr);
/*
краткое описание методов массива в JavaScript:

1. Array length: Cвойство массива length, которое возвращает или устанавливает количество элементов в массиве. 
Значение данного свойства 32-битное безнаковое целое число, которое всегда численно больше чем самый наибольший индекс в массиве.

Пример использования: 
*/

// let arr =  [17, 'test', true, 'last'];

console.log(arr);

const newArr = [];

arr.length; 

let arrLength = arr.length;

console.log(`1. Метод - свойство array.length :  arrLength = ${arrLength} и  
original array is arr = ${arr}.`);

const arrNumbers = [1, 2, 3];

console.log("Длина массива [1, 2, 3] = " + arrNumbers.length + ";"); // Выведет 3

/*
Свойство length является целым числом с положительным знаком и значением, меньшим чем 2 в степени 32.
2 в 32 степени = 4 294 967 296. Если больше - будет ошибка RangeError: Invalid array length
*/
newArr.length = Math.pow(2, 32) - 1;  //устанавливает длину массива меньше 2 в 32 степени

console.log(`newArr.length = ${newArr.length}`);  //4294967295

/*
В любой момент вы можете установить свойство length для обрезки массива. Когда вы расширяете массив, изменяя его свойство length, реальное количество элементов в массиве увеличивается; например, если вы установите свойство length в 3, когда оно равно 2, массив будет из 3 элементов, где значение третьего элемента будет равно undefined .

свойство length ничего не говорит о количестве определённых значений в массиве. 
*/
arrNumbers.length = 7;

console.log("Но сейчас Длина массива [1, 2, 3] = " + arrNumbers.length); // Выведет 7

console.log(` При длине массива = 7 arrNumbers[5] = ${arrNumbers[5]};`); //  undefined;

arrNumbers.length = 2;

console.log(arrNumbers);  //[ 1, 2 ]

/*
2. Array toString(): Метод toString() возвращает строку, представляющую исходный массив и его элементы, разделенные запятыми. Пример использования: 
*/
console.log(`2. Метод array.toString :  `);

const arrToString = [1, 2, 3]; 

console.log(arrToString.toString()); // Выведет "1,2,3"
console.log(typeof arrToString.toString()); // Выведет string;
console.log(typeof arrToString); // Выведет object;

/*
3. Array at(): Метод at() возвращает значение элемента массива по указанному индексу. 
Особенность: может принимать отрицательные индексы для отсчета элемента массива с конца массива (что не может arr[-1] ). 
Пример использования: 
*/

console.log(`3. Метод array.at() :  `);

const arrAt = [1, 2, 3]; 
let atIndex = 1;
let atIndexNegative = -1;
console.log(`Массив arrAt = ${arrAt} при положительном индексе at(${atIndex}) = ${arrAt.at(atIndex)}, а при отрицательном индексе at(${atIndexNegative}) = ${arrAt.at(atIndexNegative)};`); // Выведет 2 и 3

/*
at - возвращает Элемент массива, соответствующий переданному индексу. Если переданный индекс не может быть найден, возвращает undefined.

Обычной практикой является получении числа элементов массива length и последующее вычисление значения индекса — например, array[array.length - 1]. Метод at() разрешает относительную индексацию, поэтому может быть сокращено до array.at(-1).
*/

console.log(`Массив arrAt = ${arrAt} может итерироваться через длину length - at(arrAt.length - ${atIndex}) = ${arrAt.at(arrAt.length - atIndex)},`); // Выведет 3;

/*
В следующем примере представлена функция, которая возвращает последний элемент переданного массива
*/
// arr[0];  arr[arr.length - 1]

// Массив со значениями
const cart = ["apple", "banana", "pear"];

// Функция, которая возвращает последний элемент переданного массива
function returnLast(arr) {
  return arr.at(-1);
}

// Получить последний элемент нашего массива 'cart'
const item1 = returnLast(cart);
console.log(item1); // Выведет: 'pear'

// Добавить элемент в наш массив 'cart'
cart.push("orange");
const item2 = returnLast(cart);

console.log(item2); // Выведет: 'orange'
console.log(returnLast(["apple", "banana", "pear", "orange"])); // Выведет: 'orange'

/*
4. Array join(): Метод join() объединяет все элементы массива в строку с использованием указанного разделителя и возвращает эту строку. 
Пример использования: 
*/
const elements = ['Fire', , 'Air', 'Water']; 

console.log(`4. Метод array.join() :  `);

console.log(elements.join());  // Выведет: "Fire,Air,Water"

console.log(elements.join(""));  // Выведет: "FireAirWater"


console.log(elements.join(' | ')); // Выведет "Fire | Air | Water"

console.log(elements.join(', and ')); // Выведет: "Fire, and Air, and Water"

/*
Параметр, передаваемый в скобки join(), Определяет строку, разделяющую элементы массива. В случае необходимости тип разделителя приводится к типу Строка. Если он не задан, элементы массива разделяются запятой ','. Если разделитель - пустая строка, элементы массива ничем не разделяются в возвращаемой строке.

Если arr.length == 0, то будет возвращена пустая строка.
 Элемент массива с типом undefined или null преобразуется в пустую строку.

*/

/*
5. Array pop(): Метод pop() удаляет последний элемент из массива и возвращает его значение. 
Пример использования: 
*/

console.log(`5. Метод array.pop() :  `);

const arrPop = [1, 2, 3]; 
// console.log(arrPop.pop()); // Выведет 3;
console.log(arrPop);   // [ 1, 2 ];
/*
Если вы вызовете pop() на пустом массиве, он вернёт значение undefined.
*/
console.log(9 - arrPop.pop()); // 6
console.log([].pop());   //  undefined
/*
[ 1, 2, 3 ]
6
*/

/*
6. Array push(): Метод push() добавляет один или несколько элементов в конец массива и возвращает новую длину массива length. 
Пример использования: 
*/

console.log(`6. Метод array.push() :  `);

// const arr = [1, 2, 3]; 
console.log(arr.push(4, 6, 8)); // Выведет 4 и в конец массива добавит 4 [1, 2, 3, 4]-изменит массив
console.log(arr);  // [ 17, 'test', true, 'last', 4 ]
/*
[
   17,   'test',
   true, 'last',
   4,    6,
   8
 ]
*/

/*
7. Array shift(): Метод shift() удаляет первый элемент из массива и возвращает его значение. 
Пример использования: 
*/

console.log(`7. Метод array.shift() :  `);

// const arr = [1, 2, 3]; 
console.log(arr.shift()); // Выведет 1 и удалит нулевой элемент массива, изменит массив [2,3]

/*
8. Array unshift(): Метод unshift добавляет один или несколько элементов в начало массива и возвращает новую длину массива length. 
Пример использования: 
*/

console.log(`8. Метод array.unshift() :  `);

// const arr = [1, 2, 3]; 
console.log(arr.unshift(0)); // Выведет 4 и добавит 0 вначало массива. изменит массив [0,1,2,3]
console.log(arr);

/*
9. Array delete(): В JavaScript нет метода Array.delete(). 
Оператор `delete` в JavaScript используется для удаления свойств объекта. В случае массива, он также может использоваться для удаления элемента из массива, но при этом оставляет индекс пустым, а не сокращает размер массива. Возвращает true, false .

Пример использования оператора `delete` для удаления элемента из массива:
*/

console.log(`9. Метод delete array[] :  `);

const fruits = ['apple', 'banana', 'orange'];
delete fruits[0];
console.log(fruits); // Выведет [ <1 empty item>, 'banana', 'orange' ]

/*
Обратите внимание, что элемент с индексом 0 был удален, и в результате в массиве появилось пустое значение. Однако, размер массива остается неизменным.

Таким образом, хотя оператор `delete` может быть использован для удаления элемента из массива, часто более предпочтительными методами являются `splice()`, `pop()`, `shift()` или переназначение элемента на `undefined`, если вы хотите сохранить длину массива и избежать пустых значений.

/*
10. Array concat(): Метод concat объединяет два или более массивов и возвращает новый массив. Пример использования: 
*/

console.log(`10. Метод array.concat() :  `);

const arr1 = [1, 2];
const arr2 = [3, 4];
console.log(arr1.concat(arr2)); // Выведет [1, 2, 3, 4]
console.log(arr1, arr2);  // [ 1, 2 ] [ 3, 4 ]

/*
11. Array copyWithin(): Метод copyWithin копирует часть массива внутри него самого, смещая и перезаписывая существующие элементы, и возвращает измененный массив. Пример использования:
*/

console.log(`11. Метод array.copyWithin() :  `);

const arrWithin = [1, 2, 3, 4, 5];
console.log(arrWithin.copyWithin(0, 3)); // Выведет [4, 5, 3, 4, 5]

/*
arr.copyWithin(target, start[, end = this.length])
arr.copyWithin(*индекс - куда начать копировать*, *индекс - откуда начать копировать*, *индекс - до куда копировать (или до конца, если не указан), не включая сам индекс*);

Если аргумент start является отрицательным, он трактуется как length+start где length — это длина массива. Если аргумент end является отрицательным, он трактуется как length+end.
*/

console.log([1, 2, 3, 4, 5].copyWithin(0, -2, -1)); // [4, 2, 3, 4, 5]

/*
12. Array flat(): Метод flat() возвращает новый массив, в котором все подмассивы в исходном массиве "сплющены" в указанную глубину. Пример использования:
*/

console.log(`12. Метод array.flat() :  `);

const arrFlat = [1, 2, [3, 4]];
console.log(arrFlat.flat()); // Выведет [1, 2, 3, 4]

/*
let newArray = arr.flat(depth = *На сколько уровней вложенности уменьшается мерность исходного массива. По умолчанию 1.*);
*/
const arrFlat1 = [1, 2, [3, 4]];
console.log(arrFlat1.flat()); // [1, 2, 3, 4]

let arrFlat2 = [1, 2, [3, 4, [5, 6]]]; 
console.log(arrFlat2.flat(1));  // [1, 2, 3, 4, [5, 6]]

let arrFlat3 = [1, 2, [3, 4, [5, 6]]];
console.log(arrFlat3.flat(2));  // [1, 2, 3, 4, 5, 6]

let arrFlat4 = [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]];
console.log(arrFlat4.flat(Infinity));
// [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

/*
Метод flat удаляет пустые слоты из массива:
*/
const arrFlat5 = [1, 2, , 4, 5];
console.log(arrFlat5.flat()); // [1, 2, 4, 5]

/*
13. Array splice() сращивание: Метод splice() изменяет содержимое массива, удаляя существующие элементы и/или добавляя новые элементы в его место, и возвращает удаленные элементы. Пример использования: 
*/

console.log(`13. Метод array.splice() :  `);

const arrSplice = [1, 2, 3, 4, 5];
console.log(arrSplice.splice(2, 1, 'a', 'b')); // Выведет [3]
console.log(arrSplice);  // [ 1, 2, 'a', 'b', 4, 5 ]

const fruitsSplice = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");


/*
array.splice(start[, deleteCount[, item1[, item2[, ...]]]]);

array.splice(start[*индекс - откуда начинаем менять*, *сколько удалять*, *что добавить*)

start = Индекс, по которому начинает изменять массив. Если больше длины массива, реальный индекс будет установлен на длину массива. Если отрицателен, указывает индекс элемента с конца.

deleteCount = (Необязательный) Целое число, показывающее количество старых удаляемых из массива элементов. Если deleteCount равен 0, элементы не удаляются. В этом случае вы должны указать как минимум один новый элемент. Если deleteCount больше количества элементов, оставшихся в массиве, начиная с индекса start, то будут удалены все элементы до конца массива.

itemN = (Необязательный) Необязательные параметры. Добавляемые к массиву элементы. Если вы не укажете никакого элемента, splice() просто удалит элементы из массива.
*/

// Удаляет 0 элементов по индексу 2 и вставляет "drum"

const myFish = ["angel", "clown", "mandarin", "sturgeon"];
const removed = myFish.splice(2, 0, "drum");

console.log(removed); // myFish равен ["angel", "clown", "drum", "mandarin", "sturgeon"]
// removed равен [], ничего не удалено

// Удаляет 1 элемент по индексу 3

const myFish1 = ["angel", "clown", "drum", "mandarin", "sturgeon"];
const removed1 = myFish1.splice(3, 1);

console.log(removed1);
// removed1 равен ["mandarin"]
// myFish1 равен ["angel", "clown", "drum", "sturgeon"]

/*
arrSplice.splice(*индекс, куда нужно добавить элемент*, *сколько элементов удалить*, *элементы к добавлению*)
The first parameter (2) defines the position where new elements should be added (spliced in).

The second parameter (0) defines how many elements should be removed.

The rest of the parameters ("Lemon" , "Kiwi") define the new elements to be added.

Удаляет элементы без дыр в массиве:
array.splice(*индекс, куда нужно добавить элемент*, *сколько элементов удалить*)
Using splice() to Remove Elements
With clever parameter setting, you can use splice() to remove elements without leaving "holes" in the array:

Example
*/
const fruitSplice = ["Banana", "Orange", "Apple", "Mango"];
console.log(fruitSplice.splice(0, 1));
/*
The first parameter (0) defines the position where new elements should be added (spliced in).

The second parameter (1) defines how many elements should be removed.

The rest of the parameters are omitted. No new elements will be added.
*/

// Удаляет 1 элемент по индексу -2


const myFish7 = ["angel", "clown", "mandarin", "sturgeon"];
const removed7 = myFish7.splice(-2, 1);

// myFish равен ["angel", "clown", "sturgeon"]
// removed равен s ["mandarin"]
// Удаляет все элементы после индекса 2 (включительно)

const myFish5 = ["angel", "clown", "mandarin", "sturgeon"];
const removed5 = myFish5.splice(2);

// myFish5 равен ["angel", "clown"]
// removed5 равен ["mandarin", "sturgeon"]

/*
14. Array toSpliced(): Метод toSpliced() Возвращает новый массив с удалёнными и/или заменёнными элементами без изменения исходного массива.
ES2023 added the Array toSpliced() method as a safe way to splice an array without altering the original array.

The difference between the new toSpliced() method and the old splice() method is that the new method creates a new array, keeping the original array unchanged, while the old method altered the original array.

Example
*/
console.log(`14. Метод array.toSpliced() :  `);

const months = ["Jan", "Feb", "Mar", "Apr"];
const spliced = months.toSpliced(0, 1);

const months7 = ["Jan", "Mar", "Apr", "May"];

// Inserting an element at index 1
const months2 = months7.toSpliced(1, 0, "Feb");
console.log(months2); // ["Jan", "Feb", "Mar", "Apr", "May"]

// Deleting two elements starting from index 2
const months3 = months2.toSpliced(2, 2);
console.log(months3); // ["Jan", "Feb", "May"]

// Replacing one element at index 1 with two new elements
const months4 = months3.toSpliced(1, 1, "Feb", "Mar");
console.log(months4); // ["Jan", "Feb", "Mar", "May"]

// Original array is not modified
console.log(months7); // ["Jan", "Mar", "Apr", "May"]


/*
15. Array slice(): Метод slice() возвращает новый массив, содержащий копию части исходного массива от начального до конечного индекса (не включая конечный). Пример использования:
*/

console.log(`15. Метод array.slice() :  `);

// const arr = [1, 2, 3, 4, 5]; 
console.log(arr.slice(2)); // Выведет [3, 4, 5]


// let arr =  [17, 'test', true, 'last'];
temporaryArr = arr.slice(); //  [ 17, 'test', true, 'last' ] - slice() используют для копирования массива.
console.log(temporaryArr);

//  newArr = [];

arrLength = arr.length;

console.log(`Метод arr.length:  arrLength = ${arrLength} и  
arr = ${arr}.`);

/*
Это методы массивов в JavaScript, которые могут быть полезны при работе с массивами.
*/

/*
 по два задания на каждый из перечисленных методов массива:

1. Array length:
   - Задание 1.1: Создайте массив `numbers` и используйте свойство `length`, чтобы определить, сколько элементов находится в массиве.
   - Задание 1.2: Напишите функцию `arrayLength`, которая принимает массив в качестве аргумента и возвращает его длину.

2. Array toString():
   - Задание 2.1: Создайте массив `colors` с несколькими цветами и используйте метод `toString()`, чтобы преобразовать его в строку.
   - Задание 2.2: Напишите функцию `arrayToString`, которая принимает массив чисел в качестве аргумента и возвращает строку, представляющую этот массив.

3. Array at():
   - Задание 3.1: Создайте массив `letters` и используйте метод `at()` для получения элемента массива по индексу.
   - Задание 3.2: Напишите функцию `getElementAtIndex`, которая принимает массив и индекс в качестве аргументов и возвращает элемент массива по указанному индексу.
    - Задание 3.3: Напишите  функцию, которая возвращает последний элемент переданного массива.

4. Array join():
   - Задание 4.1: Создайте массив `words` и используйте метод `join()`, чтобы объединить его элементы в строку с пробелами между ними чтобы получилось предложение.
   - Задание 4.2: Напишите функцию `arrayJoin`, которая принимает массив строк и объединяет их в одну строку с заданным разделителем.
   - Задание 4.3: Создайте из массива ["In this syllabus, the following five test levels are described:", "component testing,", "component integration testing,", "system testing,", "system integration testing,", "acceptance testing."] следующий текст:  

   "In this syllabus, the following five test levels are described: the component testing, the component integration testing, the system testing, the system integration testing, the acceptance testing."

5. Array pop():
   - Задание 5.1: Создайте массив `items` и используйте метод `pop()`, чтобы удалить последний элемент из него.
   - Задание 5.2: Напишите функцию `removeLastElement`, которая принимает массив и удаляет последний элемент из него.

6. Array push():
   - Задание 6.1: Создайте массив `fruit` и используйте метод `push()`, чтобы добавить новый фрукт в конец массива.
   - Задание 6.2: Напишите функцию `addNewItem`, которая принимает массив и новый элемент, и добавляет этот элемент в конец массива.

7. Array shift():
   - Задание 7.1: Создайте массив `names` и используйте метод `shift()`, чтобы удалить первый элемент из него.
   - Задание 7.2: Напишите функцию `removeFirstElement`, которая принимает массив и удаляет первый элемент из него.

8. Array unshift():
   - Задание 8.1: Создайте массив `cities` и используйте метод `unshift()`, чтобы добавить новый город в начало массива.
   - Задание 8.2: Напишите функцию `addNewFirstElement`, которая принимает массив и новый элемент, и добавляет этот элемент в начало массива.

9. Array delete(): (Нет такого метода в стандартном API JavaScript)

два задания с использованием оператора `delete` для массива:


   - Задание 9.1. Удаление элемента по индексу:
   Напишите функцию `removeItemByIndex`, которая принимает массив и индекс элемента, который нужно удалить, и использует оператор `delete`, чтобы удалить элемент с указанным индексом из массива. 

   - Задание 9.2. Очистка массива:
Напишите функцию `clearArray`, которая принимает массив и использует оператор `delete`, чтобы удалить все его элементы и сделать массив пустым.

10. Array concat():
   - Задание 10.1: Создайте два массива `arr1` и `arr2` и используйте метод `concat()`, чтобы объединить их в один массив.
   - Задание 10.2: Напишите функцию `concatArrays`, которая принимает два массива и возвращает новый массив, объединяя их.

11. Array copyWithin():
   - Задание 11.1: Создайте массив `numbers` и используйте метод `copyWithin()`, чтобы скопировать элементы из одной части массива в другую.
   - Задание 11.2: Напишите функцию `copyWithinExample`, которая принимает массив и копирует часть массива внутри него самого, смещая и перезаписывая существующие элементы, используя метод `copyWithin()`.

12. Array flat():
   - Задание 12.1: Создайте массив `nestedArray` с вложенными массивами и используйте метод `flat()`, чтобы преобразовать его в одномерный массив.
   - Задание 12.2: Напишите функцию `flattenArray`, которая принимает массив, содержащий вложенные массивы, и использует метод `flat()`, чтобы "сплющить" массив до одномерного массива.

13. Array splice():
   - Задание 13.1: Создайте массив `fruits` и используйте метод `splice()`, чтобы удалить несколько элементов из массива и вставить новые элементы на их место.
   - Задание 13.2: Напишите функцию `removeElements`, которая принимает массив и использует метод `splice()`, чтобы удалить элементы из массива по заданному индексу и количеству элементов.

14. Array toSpliced(): 
    - Задание 14.1: Создайте массив `months` и используйте метод `splice()`, чтобы удалить несколько элементов из массива и вставить новые элементы на их место.
   - Задание 14.2: Напишите функцию `removeElementsSafely`, которая принимает массив и использует метод `toSpliced()`, чтобы удалить элементы из массива по заданному индексу и количеству элементов.

15. Array slice():
   - Задание 15.1: Создайте массив `letters` и используйте метод `slice()`, чтобы выбрать только определенные буквы из массива.
   - Задание 15.2: Напишите функцию `getSubarray`, которая принимает массив и возвращает подмассив, используя метод `slice()`, чтобы выбрать элементы из определенного диапазона индексов.

Каждое задание направлено на использование конкретного метода массива и демонстрацию его функциональности.
*/