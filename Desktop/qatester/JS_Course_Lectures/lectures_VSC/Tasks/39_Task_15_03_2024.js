/*
Задача 39. Наш веселый пес. ООП , Классы, экземпляры, наследование
*/
class Animal {
  constructor(name) {
    this.name = name;
  }

  makeSound() {
    console.log(`${this.name} издает звук.`);
  }
}

class Dog extends Animal {
  constructor(name, breed) {
    super(name);
    this.breed = breed;
  }

  makeSound() {
    console.log(`${this.name} лает.`);
  }

  displayBreed() {
    console.log(`${this.name} - это ${this.breed}.`);
  }
}

const animal = new Animal('Животное');
const dog = new Dog('Барсик', 'Дворняжка');

dog.makeSound();
/*
Вопрос: Что выведется на экран при вызове метода makeSound() для экземпляра dog?

Варианты ответа:
1. "Животное издает звук."
2. "Барсик лает."
3. "Барсик издает звук."
4. Ошибка: метод makeSound() не определен для класса Dog.

Выберите один ответ.
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
:one:   :two:   :three:   :four:

*************************************************************************************************
Правильный ответ: 2. "Барсик лает."

При вызове метода `makeSound()` для экземпляра `dog` будет выведено:

2. "Барсик лает."

Объяснение:
Класс `Dog` наследует класс `Animal`, поэтому имеет доступ ко всем методам и свойствам класса-родителя. Однако, когда у дочернего класса определён метод с тем же именем, что и у родительского, метод дочернего класса переопределяет метод родительского класса. Таким образом, метод `makeSound()` в классе `Dog` переопределён и выводит другое сообщение, несмотря на то, что он унаследован от класса `Animal`.
*/

/*
использование классов и наследование в JavaScript:
*/

// Определение базового класса
class Animal2 {
  constructor(name) {
    this.name = name;
  }

  // Метод базового класса
  speak() {
    console.log(`${this.name} издает звук.`);
  }
}

// Определение подкласса, который наследует от Animal
class Dog2 extends Animal2 {
  constructor(name, breed) {
    // Вызов конструктора родительского класса
    super(name);
    this.breed = breed;
  }

  // Переопределение метода speak()
  speak() {
    console.log(`${this.name} лает.`);
  }

  // Новый метод подкласса
  displayBreed() {
    console.log(`${this.name} - это ${this.breed}.`);
  }
}

// Создание экземпляров классов
const animal2 = new Animal2('Животное');
const dog2 = new Dog2('Барсик', 'Дворняжка');

// Вызов методов
animal2.speak(); // Вывод: Животное издает звук.
dog2.speak();    // Вывод: Барсик лает.
dog2.displayBreed(); // Вывод: Барсик - это Дворняжка.

/*
В этом примере класс `Animal` определяет базовый функционал, а класс `Dog` наследует этот функционал и расширяет его, добавляя новые методы и свойства. Когда вызывается метод `speak()` для экземпляра класса `Dog`, вызывается переопределенная версия метода `speak()` из класса `Dog`, а не из базового класса `Animal`.
*/