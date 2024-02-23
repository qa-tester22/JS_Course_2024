/**
 * Working with Methods
 * 
 * Работа с методами

Методы — это свойства с функциями для их значений. Вы определяете метод так же, как и любую функцию. Единственное отличие состоит в том, что метод присваивается свойству объекта. 
Создадим объект с несколькими свойствами, одно из которых является методом.
 */

let sandwich = {
    meat: "",
    cheese: "",
    bread: "",
    condiment: "",
    makeSandwich: function (meat, cheese, bread, condiment) {
        sandwich.meat = meat;
        sandwich.cheese = cheese;
        sandwich.bread = bread;
        sandwich.condiment = condiment;
        let mySandwich = sandwich.bread + ", " + sandwich.meat + ", " + sandwich.cheese + ", " + sandwich.condiment;
        return mySandwich;
    }
};

console.log(sandwich.makeSandwich()); // undefined, undefined, undefined, undefined

console.log(sandwich.makeSandwich("chicken", "cheddar", "white bread", "tomato")); // white bread, chicken, cheddar, tomato

/*
Чтобы вызвать метод makeSandwich объекта-сэндвича, вы можете использовать запись через точку так же, как при доступе к свойству, но с круглыми скобками и параметрами, указанными после имени метода.


*/
// лучшая практика - заводить переменную

let sandwichOrder = sandwich.makeSandwich("ham", "cheddar", "wheat", "spicy mustard");

console.log(sandwichOrder);

/***************************************************************
 * Using this *
 * ************
 * Используя это this

Ключевое слово this является сокращением для ссылки на содержащий объект метода. 
Заменим каждый экземпляр имени объекта сэндвич  на это this. Когда функция makeSandwich вызывается как метод объекта-сэндвича, JavaScript понимает, что это относится к объекту-сэндвичу.
 */

// sandwich.makeSandwich("turkey", "swiss", "sourdough", "mayonnaise");

sandwich = {
    meat: "",
    cheese: "",
    bread: "",
    condiment: "",
    makeSandwich: function (meat, cheese, bread, condiment) {
        this.meat = meat;
        this.cheese = cheese;
        this.bread = bread;
        this.condiment = condiment;
        mySandwich = this.bread + ", " + this.meat + ", " + this.cheese + ", " + this.condiment;

        return mySandwich;
    }
}

sandwichOrder = sandwich.makeSandwich("turkey", "swiss", "sourdough", "mayonnaise");

console.log(sandwichOrder);

/**
 * Результат использования ключевого слова this вместо конкретного имени объекта в этом случае будет точно таким же.

Это становится очень полезным, когда у вас есть функция, которая может применяться к нескольким различным объектам. В этом случае ключевое слово this будет ссылаться на объект, внутри которого оно вызвано, а не быть привязано к конкретному объекту.

Далее вы узнаете о функциях-конструкторах и наследовании, оба из которых доступны благодаря скромному оператору this.

 */

