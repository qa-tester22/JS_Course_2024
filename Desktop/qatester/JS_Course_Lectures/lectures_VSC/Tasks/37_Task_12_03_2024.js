/*
Задача 37. Мощь классов JavaScript.
Вопрос:
Какой будет результат выполнения следующего кода?
*/

class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }

  getInfo() {
    return `This car is a ${this.make} ${this.model}.`;
  }
}

let myCar = new Car("Toyota", "Camry");
let anotherCar = new Car("Honda", "Accord");

console.log(myCar.getInfo());
console.log(anotherCar.getInfo());

/*
Варианты ответов:

1. "This car is a Toyota Camry." и "This car is a Honda Accord."
2. "This car is a Toyota Camry." и undefined
3. "This car is a Honda Accord." и undefined
4. TypeError: myCar.getInfo is not a function


Выберите один ответ.
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
:one:   :two:   :three:   :four:

******************************************************************************************************
---

В этом вопросе, верный ответ будет:

1. "This car is a Toyota Camry." и "This car is a Honda Accord."

Поскольку метод `getInfo()` доступен у обоих объектов `myCar` и `anotherCar`, результатом будут соответствующие строки с информацией о каждом автомобиле.
*/