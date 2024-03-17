/*
Задача 36. Возможноли делегированием метода или проксированием метода в объектах JS?
*/
// Объект John
let john = {
  name: "John",
  age: 30,
  greet: function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};

// Создание другого объекта Alice
let anotherPerson = {
  name: "Alice",
  age: 28,
  greet: john.greet 
};

console.log(anotherPerson.greet());
/*
 Вопрос:
Какой будет результат вызова метода greet у объекта anotherPerson?

Варианты ответов:
1. "Hello, my name is Alice and I am 28 years old."
2. "Hello, my name is John and I am 30 years old."
3. TypeError: anotherPerson.greet is not a function
4. "Hello, my name is undefined and I am undefined years old."


Выберите один ответ.
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
:one:   :two:   :three:   :four:

******************************************************************************************************

*/
/*
Правильный Ответ: 1. "Hello, my name is Alice and I am 28 years old."

При создании объекта `anotherPerson` мы копируем ссылку на функцию `greet` из объекта `john`. Это означает, что обе переменные (`john.greet` и `anotherPerson.greet`) теперь указывают на одну и ту же функцию в памяти.

В JavaScript контекст (`this`) в методах определяется во время вызова, а не во время определения функции. Поэтому когда `greet` вызывается через `anotherPerson`, контекстом (`this`) будет сам объект `anotherPerson`.

Таким образом, результат вызова метода `greet` у объекта `anotherPerson` будет:

1. "Hello, my name is Alice and I am 28 years old."

Потому что `this.name` и `this.age` будут ссылаться на свойства объекта `anotherPerson`, а не `john`.

В JavaScript, при создании объектов, вы можете присваивать функции (и другие значения) свойствам объекта, так же, как вы можете присваивать им строковые или числовые значения. Это возможно потому, что функции являются объектами первого класса в JavaScript, что означает, что они могут быть использованы так же, как и любые другие значения.

Поэтому при присвоении `greet: john.greet`, мы фактически копируем ссылку на метод `greet`, определенный в объекте `john`, в свойство `greet` объекта `anotherPerson`. Теперь оба объекта, `john` и `anotherPerson`, имеют свойство `greet`, которое указывает на одну и ту же функцию в памяти.

Это полезно в случаях, когда у вас есть несколько объектов, которые должны выполнять одинаковые операции, и вы хотите избежать дублирования кода. Вы просто ссылаетесь на функцию из другого объекта.



// Объект John
let John = {
  name: "John",
  age: 30,
  greet: function() {
    return `Hello, my name is ${this.name} and I am ${this.age} years old.`;
  }
};

// Создание объекта, использующего метод объекта John
let anotherPerson = {
  name: "Alice",
  age: 28,
  greet: John.greet // Использование метода greet из объекта John
};

// Вопрос:
Какой будет результат вызова метода greet у объекта anotherPerson?

Варианты ответов:
1. "Hello, my name is Alice and I am 28 years old."
2. "Hello, my name is John and I am 30 years old."
3. TypeError: anotherPerson.greet is not a function
4. "Hello, my name is undefined and I am undefined years old."

Ответ: 1. "Hello, my name is Alice and I am 28 years old."


В этом тесте правильный ответ будет "Hello, my name is Alice and I am 28 years old.", так как `anotherPerson` использует метод `greet` из объекта `John`.
*/