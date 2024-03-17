/*
Задача 17.
Пример с использованием функционального выражения:
*/

const operations = {
  add: function(x, y) { return x + y; },
  subtract: function(x, y) { return x - y; },
  multiply: function(x, y) { return x * y; },
  divide: function(x, y) { return x / y; }
};

const calculate = function(x, y, operation) {
  if (typeof operations[operation] !== 'function') {
    return "Invalid operation";
  }
  return operations[operation](x, y);
};

console.log(calculate(5, 3, 'add')); // Вариант ответа 1
console.log(calculate(10, 4, 'subtract')); // Вариант ответа 2
console.log(calculate(6, 2, 'multiply')); // Вариант ответа 3
console.log(calculate(8, 2, 'divide')); // Вариант ответа 4

/*
Варианты ответов:

1. 8
2. 6
3. 12
4. 4

Какой из этих ответов верный?
*/
/*
 пример JavaScript кода, связанный с вопросом:
*/

// Пример самовызывающейся функции (Immediately Invoked Function Expression - IIFE)
(function() {
  console.log("Эта функция вызывается автоматически!");
})();

/*
// Пример самовызывающейся функции (Immediately Invoked Function Expression - IIFE)
Задача 17. Какая функция используется в приведенном коде?
*/


(function() {
  console.log("Эта функция вызывается очень интересно!");
})();


/*
Варианты Ответов:
1. Это пример самовызывающейся функции, которые вызываются только после завершения другой функции.
2. Это пример функций также известных как «Немедленно вызываемые функциональные выражения» или «Самовызывающиеся анонимные функции». Эти функции вызываются автоматически в коде, поэтому их называют «Самовызывающиеся функции».
3. Это пример Immediately Invoked Function Expression функции, которые вызываются только по необходимости в коде, их также называют «Автоматические функции».
4. Это пример IIFE функции, которые вызываются только по запросу пользователя.

Выберите один ответ:
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если вообще ничего не понятно - задавайте вопросы в комментариях
:one:   :two:   :three:   :four:
*/

/*
Ответ 1 является верным. Самовызывающиеся функции, также известные как IIFE, вызываются автоматически в коде без явного вызова. Они часто используются для изоляции переменных и создания приватной области видимости.
*/


const week = ['Monday', 'Tuesday', 'Friday'];
const otherWeek = week;
otherWeek.push('Sunday');
console.log(otherWeek);  // ['Monday', 'Tuesday', 'Friday', 'Sunday'];
console.log(week);  //   ['Monday', 'Tuesday', 'Friday', 'Sunday'];