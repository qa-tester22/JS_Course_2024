/*

Array.fromAsync()

Статический Array.fromAsync() метод создает новый, частично скопированный Array экземпляр из асинхронного итерируемого , итерируемого или массивоподобного объекта.

Синтаксис

Array.fromAsync(arrayLike)
Array.fromAsync(arrayLike, mapFn)
Array.fromAsync(arrayLike, mapFn, thisArg)
Параметры
arrayLike - Асинхронный итерируемый, или массивоподобный объект для преобразования в массив.

mapFn Необязательный - Функция, вызываемая для каждого элемента массива. Если это предусмотрено, каждое значение, добавляемое в массив, сначала передается через эту функцию, а mapFn вместо этого в массив добавляется возвращаемое значение (после ожидания ) . Функция вызывается со следующими аргументами:

element - Текущий элемент массива, который обрабатывается. Поскольку все элементы сначала ожидаются , это значение никогда не станет доступным .

index - Индекс текущего обрабатываемого элемента в массиве.

thisArg Необязательный - Значение, которое будет использоваться, как this при выполнении mapFn.

Возвращаемое значение 
Новый Promise, значением выполнения которого является новый Array экземпляр.

Описание
Array.fromAsync() позволяет создавать массивы из:

асинхронные итерируемые объекты (такие объекты, как ReadableStream и AsyncGenerator); или, если объект не является асинхронно итерируемым,
итерируемые объекты (такие объекты, как Map и Set); или, если объект не является итеративным,
массивоподобные объекты (объекты со length свойством и индексированные элементы).
Array.fromAsync()выполняет асинхронную итерацию способом, очень похожим на for await...of. Array.fromAsync()почти эквивалентен с Array.from()точки зрения поведения, за исключением следующего:

Array.fromAsync()обрабатывает асинхронные итерируемые объекты.
Array.fromAsync()возвращает значение Promise, соответствующее экземпляру массива.
Если Array.fromAsync()вызывается с неасинхронным итерируемым объектом, сначала ожидается каждый элемент, добавляемый в массив .
Если mapFn указан a, его ввод и вывод ожидаются внутри.
Array.fromAsync() и Promise.all() оба могут превратить итерацию обещаний в обещание массива. Однако есть два ключевых отличия:

Array.fromAsync() последовательно ожидает каждое значение, полученное от объекта. Promise.all() ожидает все значения одновременно.
Array.fromAsync() лениво выполняет итерацию и не получает следующее значение, пока не будет установлено текущее. Promise.all() заранее извлекает все значения и ожидает их всех.
Примеры
Массив из асинхронной итерации
*/

const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

// Array.fromAsync(asyncIterable).then((array) => console.log(array));  // [0, 1, 2, 3, 4]

// Массив из итерируемой синхронизации

// Array.fromAsync(
//   new Map([
//     [1, 2],
//     [3, 4],
//   ]),
// ).then((array) => console.log(array)); // [[1, 2], [3, 4]]

// Массив из итерации синхронизации, дающий обещания

Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));  // [1, 2, 3]

// Массив из объекта обещаний, подобного массиву

Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));  // [1, 2, 3]
/*
Использование mapFn
Как ввод, так и вывод mapFn ожидаются внутри Array.fromAsync().
*/

function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2),
).then((array) => console.log(array));  // [2, 4, 6]

/*
Сравнение с Promise.all()
Array.fromAsync() последовательно ожидает каждое значение, полученное от объекта. Promise.all() ожидает все значения одновременно.
*/

function* makeIterableOfPromises() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() time");
  await Array.fromAsync(makeIterableOfPromises());
  console.timeEnd("Array.fromAsync() time");
  // Array.fromAsync() time: 503.610ms

  console.time("Promise.all() time");
  await Promise.all(makeIterableOfPromises());
  console.timeEnd("Promise.all() time");
  // Promise.all() time: 101.728ms
})();

/*
Нет обработки ошибок для итераций синхронизации.
Как и в случае с for await...of, если итерируемый объект является итерируемым синхронизацией, и во время итерации выдается ошибка, метод return() базового итератора не будет вызван, поэтому итератор не закрывается.
*/
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield Promise.reject(3);
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    await Array.fromAsync(generatorWithRejectedPromises());
  } catch (e) {
    console.log("caught", e);
  }
})();
// caught 3
// No "called finally" message
/*
Если вам нужно закрыть итератор, for...of вместо этого вам нужно использовать цикл и await каждое значение самостоятельно.
*/

(async () => {
  const arr = [];
  try {
    for (const val of generatorWithRejectedPromises()) {
      arr.push(await val);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// called finally
// caught 3


/*

Array.fromAsync()
The Array.fromAsync() static method creates a new, shallow-copied Array instance from an async iterable, iterable, or array-like object.

Syntax
JS
Copy to Clipboard
Array.fromAsync(arrayLike)
Array.fromAsync(arrayLike, mapFn)
Array.fromAsync(arrayLike, mapFn, thisArg)
Parameters
arrayLike
An async iterable, iterable, or array-like object to convert to an array.

mapFn Optional
A function to call on every element of the array. If provided, every value to be added to the array is first passed through this function, and mapFn's return value is added to the array instead (after being awaited). The function is called with the following arguments:

element
The current element being processed in the array. Because all elements are first awaited, this value will never be a thenable.

index
The index of the current element being processed in the array.

thisArg Optional
Value to use as this when executing mapFn.

Return value
A new Promise whose fulfillment value is a new Array instance.

Description
Array.fromAsync() lets you create arrays from:

async iterable objects (objects such as ReadableStream and AsyncGenerator); or, if the object is not async iterable,
iterable objects (objects such as Map and Set); or, if the object is not iterable,
array-like objects (objects with a length property and indexed elements).
Array.fromAsync() iterates the async iterable in a fashion very similar to for await...of. Array.fromAsync() is almost equivalent to Array.from() in terms of behavior, except the following:

Array.fromAsync() handles async iterable objects.
Array.fromAsync() returns a Promise that fulfills to the array instance.
If Array.fromAsync() is called with a non-async iterable object, each element to be added to the array is first awaited.
If a mapFn is provided, its input and output are internally awaited.
Array.fromAsync() and Promise.all() can both turn an iterable of promises into a promise of an array. However, there are two key differences:

Array.fromAsync() awaits each value yielded from the object sequentially. Promise.all() awaits all values concurrently.
Array.fromAsync() iterates the iterable lazily, and doesn't retrieve the next value until the current one is settled. Promise.all() retrieves all values in advance and awaits them all.
Examples
Array from an async iterable
JS
Copy to Clipboard
const asyncIterable = (async function* () {
  for (let i = 0; i < 5; i++) {
    await new Promise((resolve) => setTimeout(resolve, 10 * i));
    yield i;
  }
})();

Array.fromAsync(asyncIterable).then((array) => console.log(array));
// [0, 1, 2, 3, 4]
Array from a sync iterable
JS
Copy to Clipboard
Array.fromAsync(
  new Map([
    [1, 2],
    [3, 4],
  ]),
).then((array) => console.log(array));
// [[1, 2], [3, 4]]
Array from a sync iterable that yields promises
JS
Copy to Clipboard
Array.fromAsync(
  new Set([Promise.resolve(1), Promise.resolve(2), Promise.resolve(3)]),
).then((array) => console.log(array));
// [1, 2, 3]
Array from an array-like object of promises
JS
Copy to Clipboard
Array.fromAsync({
  length: 3,
  0: Promise.resolve(1),
  1: Promise.resolve(2),
  2: Promise.resolve(3),
}).then((array) => console.log(array));
// [1, 2, 3]
Using mapFn
Both the input and output of mapFn are awaited internally by Array.fromAsync().

JS
Copy to Clipboard
function delayedValue(v) {
  return new Promise((resolve) => setTimeout(() => resolve(v), 100));
}

Array.fromAsync(
  [delayedValue(1), delayedValue(2), delayedValue(3)],
  (element) => delayedValue(element * 2),
).then((array) => console.log(array));
// [2, 4, 6]
Comparison with Promise.all()
Array.fromAsync() awaits each value yielded from the object sequentially. Promise.all() awaits all values concurrently.

JS
Copy to Clipboard
function* makeIterableOfPromises() {
  for (let i = 0; i < 5; i++) {
    yield new Promise((resolve) => setTimeout(resolve, 100));
  }
}

(async () => {
  console.time("Array.fromAsync() time");
  await Array.fromAsync(makeIterableOfPromises());
  console.timeEnd("Array.fromAsync() time");
  // Array.fromAsync() time: 503.610ms

  console.time("Promise.all() time");
  await Promise.all(makeIterableOfPromises());
  console.timeEnd("Promise.all() time");
  // Promise.all() time: 101.728ms
})();
No error handling for sync iterables
Similar to for await...of, if the object being iterated is a sync iterable, and an error is thrown while iterating, the return() method of the underlying iterator will not be called, so the iterator is not closed.

JS
Copy to Clipboard
function* generatorWithRejectedPromises() {
  try {
    yield 0;
    yield Promise.reject(3);
  } finally {
    console.log("called finally");
  }
}

(async () => {
  try {
    await Array.fromAsync(generatorWithRejectedPromises());
  } catch (e) {
    console.log("caught", e);
  }
})();
// caught 3
// No "called finally" message
If you need to close the iterator, you need to use a for...of loop instead, and await each value yourself.

JS
Copy to Clipboard
(async () => {
  const arr = [];
  try {
    for (const val of generatorWithRejectedPromises()) {
      arr.push(await val);
    }
  } catch (e) {
    console.log("caught", e);
  }
})();
// called finally
// caught 3
*/