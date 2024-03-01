/*
JavaScript Object Prototypes

Прототипы объектов JavaScript
Все объекты JavaScript наследуют свойства и методы прототипа.
Прототипы - это механизм, с помощью которого объекты JavaScript наследуют свойства друг от друга. 

JavaScript часто описывают как язык прототипного наследования — каждый объект, имеет объект-прототип, который выступает как шаблон, от которого объект наследует методы и свойства. Объект-прототип так же может иметь свой прототип и наследовать его свойства и методы и так далее. Это часто называется цепочкой прототипов и объясняет почему одним объектам доступны свойства и методы которые определены в других объектах.

Точнее, свойства и методы определяются в свойстве prototype функции-конструктора объектов, а не в самих объектах.

В JavaScript создаётся связь между экземпляром объекта и его прототипом (свойство __proto__, которое является производным от свойства prototype конструктора), а свойства и методы обнаруживаются при переходе по цепочке прототипов.

Мы использовали конструктор объекта :

Пример
*/
function PersonConstr (first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}

const myFather = new PersonConstr("John", "Doe", 50, "blue");
const myMother = new PersonConstr("Sally", "Rally", 48, "green");

/*
Также мы узнали, что нельзя добавить новое свойство в существующий конструктор объекта:

Пример
*/
PersonConstr.nationality = "English";  // не работает

/*
Чтобы добавить новое свойство в конструктор, вы должны добавить его в функцию конструктора:

Пример
*/
function PersonConstr(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
  this.nationality = "English";
}

/*
Наследование прототипа**********************************
Prototype Inheritance

Все объекты JavaScript наследуют свойства и методы прототипа:

Date объекты наследуют от Date.prototype
Array объекты наследуют от Array.prototype
PersonConstr объекты наследуют от PersonConstr.prototype

 Object.prototype находится на вершине цепочки наследования прототипа:

Date объекты, Array объекты и PersonConstr объекты наследуются от Object.prototype.

Добавление свойств и методов к объектам******************
Иногда вам нужно добавить новые свойства (или методы) ко всем существующим объектам данного типа.

Иногда вам нужно добавить новые свойства (или методы) в конструктор объекта.

Использование свойства прототипа***********************
Свойство JavaScript prototype позволяет добавлять новые свойства в конструкторы объектов:

Пример

function PersonConstr(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
*/
PersonConstr.prototype.nationality = "English";


console.log(myFather.nationality);  // John Doe

console.log(myMother.nationality);  // Sally Rally

/*
Свойство JavaScript prototype также позволяет добавлять новые методы в конструкторы объектов:

Пример
function Person(first, last, age, eyecolor) {
  this.firstName = first;
  this.lastName = last;
  this.age = age;
  this.eyeColor = eyecolor;
}
*/

PersonConstr.prototype.name = function() {
  return this.firstName + " " + this.lastName;
};
/*
Изменяйте только свои собственные прототипы. Никогда не изменяйте прототипы стандартных объектов JavaScript.

*/

console.log(myFather.name());  // John Doe

console.log(myMother.name());  // Sally Rally
/*
Снова create()
 метод Object.create() может использоваться для создания нового экземпляра объекта.

Например, попробуйте это в консоли JavaScript предыдущего примера:
*/

let personSon = Object.create(myMother);
/*
На самом деле create() создаёт новый объект из указанного объекта-прототипа. Здесь person2 создаётся с помощью person1 в качестве объекта-прототипа. Это можно проверить, введя в консоли следующее:
*/

console.log(personSon.__proto__);

/*
Это вернёт объект .
PersonConstr {
  firstName: 'Sally',
  lastName: 'Rally',
  age: 48,
  eyeColor: 'green',
  nationality: 'English'
}
*/

/*
что произойдёт, если вы вызываете метод в myMother, который фактически определён в Object? Например:
*/


console.log(myMother.valueOf());  // тот же конструктор объекта PersonConstr

/*
Этот метод — Object.valueOf()наследуется myMother, потому что его конструктором является PersonConstr(), а прототипом PersonConstr() является Object(). valueOf() возвращает значение вызываемого объекта — попробуйте и убедитесь! В этом случае происходит следующее:

Сначала браузер проверяет, имеет ли объект myMother доступный в нем метод valueOf(), как определено в его конструкторе PersonConstr().
Это не так, поэтому следующим шагом браузер проверяет, имеет ли прототип объекта (Object()) конструктора PersonConstr() доступный в нем метод valueOf(). Так оно и есть, поэтому он вызывается, и все хорошо!
*/