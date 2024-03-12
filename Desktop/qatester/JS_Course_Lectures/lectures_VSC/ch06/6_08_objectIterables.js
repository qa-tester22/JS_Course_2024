/*
JavaScript Iterables
терации JavaScript
Итерируемые объекты — это объекты, которые можно перебирать с помощью for..of.

Технически итерации должны реализовывать этот Symbol.iteratorметод.

Итерация по строке**************************************
Iterating Over a String
Вы можете использовать for..of цикл для перебора элементов строки:

Пример
*/

for (const x of "QA_Tester") {
  // code block to be executed
  console.log(x);
}

/*
Q
A
_
T
e
s
t
e
r


Итерация по массиву
Iterating Over an Array
Вы можете использовать for..of цикл для перебора элементов массива:

Пример
*/
let text = "";

for (const x of [1,2,3,4,5]) {
  // code block to be executed
  text += x + " | ";
}

console.log(text);  // 1 | 2 | 3 | 4 | 5 | 

/*
Итераторы JavaScript************************************
JavaScript Iterators

Протокол итератора iterator protocol  определяет , как создать последовательность значений из объекта. sequence of values from an object.

Объект становится итератором , когда реализует next() метод.

Метод next() должен возвращать объект с двумя свойствами:

value (the next value) - значение (следующее значение)
done (true or false) - сделано (правда или ложь)

value -	Значение, возвращаемое итератором
(может быть опущено, если значение Done истинно).
done - 	true , если итератор завершил работу,
        false , если итератор создал новое значение


Домашнее, итерируемое**********************************
Home Made Iterable
Эта итерация возвращает бесконечные значения: 
10,20,30,40,.... Каждый раз next() вызывается:

Пример
// Home Made Iterable
*/

function myNumbers() {
  let n = 0;
  return {
    next: function() {
      n += 10;
      return {value: n, done: false};
    }
  };
}

// Create Iterable
const n = myNumbers();
n.next(); // Returns 10
n.next(); // Returns 20
n.next(); // Returns 30
console.log(n.next());   //  { value: 40, done: false }

/*
Проблема с самодельной итерацией:

Он не поддерживает for..of оператор JavaScript.

Итерируемый объект JavaScript — это объект, имеющий Symbol.iterator .

Это Symbol.iterator - функция, которая возвращает next() функцию.

Итерацию можно перебирать с помощью кода:

for (const x of iterable) { }

Пример
*/
// Create an Object
myNumbers = {};

// Make it Iterable
myNumbers[Symbol.iterator] = function() {
  let n = 0;
  done = false;
  return {
    next() {
      n += 10;
      if (n == 100) {done = true}
      return {value: n, done: done};
    }
  };
}

/*
Теперь вы можете использовать  for..of
*/

let numberText = "Iterator | ";
for (const num of myNumbers) {
  // Any Code Here
    numberText += num + " > "
}

console.log(numberText);  // Iterator | 10 > 20 > 30 > 40 > 50 > 60 > 70 > 80 > 90 > 

/*
Метод Symbol.iterator вызывается автоматически for..of.

Но мы также можем сделать это «вручную»:

Пример
*/
let iterator = myNumbers[Symbol.iterator]();


while (true) {
  const result = iterator.next();
  if (result.done) break;
  // Any Code Here
  console.log(result);
}

/*
{ value: 10, done: false }
{ value: 20, done: false }
{ value: 30, done: false }
{ value: 40, done: false }
{ value: 50, done: false }
{ value: 60, done: false }
{ value: 70, done: false }
{ value: 80, done: false }
{ value: 90, done: false }
*/