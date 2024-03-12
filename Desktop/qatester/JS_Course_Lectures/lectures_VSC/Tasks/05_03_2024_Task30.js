/*
Задача 30. Что будет результатом работы кода?
*/
const person = {
  name: "John",
  age: 30,
  occupation: "Engineer",
  sayHello: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }
};

person.sayHello();

/*
Варианты ответов:
1. Hello, my name is John and I am 30 years old.
2. Hello, my name is ${person.name} and I am ${person.age} years old.
3. Hello, my name is ${this.name} and I am ${this.age} years old.
4. Hello, my name is undefined and I am undefined years old.


   Выберите один ответ.
   / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
   :one:   :two:   :three:   :four:

******************************************************************************************************
*/
/*
Правильный ответ: 1
Hello, my name is John and I am 30 years old.

Правильный ответ: 1. Hello, my name is John and I am 30 years old.

Объяснение: В методе `sayHello()` используется `this`, чтобы обращаться к свойствам объекта `person`. Когда метод `sayHello()` вызывается с помощью `person.sayHello()`, `this` внутри метода ссылается на сам объект `person`. Поэтому в результате выполнения кода выводится имя и возраст объекта `person`, которые заданы в свойствах объекта.

Решите обратную задачу:
Напишите программу для объекта-человека, который имеет имя, возраст, должность-профессию, и умеет вежливо представлять себя. Поделитесь своими вариантами кода.
*/