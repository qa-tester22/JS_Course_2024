/*
1. Задача.
1)	Определите класс Shape. 
Он имеет три свойства: name, sides, и sideLength. 
Этот класс моделирует только фигуры, все стороны которых имеют одинаковую длину, например квадрат или равносторонний треугольник.
2)	Добавьте конструктор в этот класс. 
Конструктор принимает аргументы для свойств name, sides и sideLength и инициализирует их.
3)	Добавьте в класс новый метод calcPerimeter(), который вычисляет ее периметр (длину внешнего края фигуры) и записывает результат в консоль.
4)	Создайте новый экземпляр класса Shape с именем square. 
Дайте name ему square, sides = 4 и sideLength = 5
5)	Вызовите свой calcPerimeter() метод в экземпляре, чтобы проверить, записывает ли он результаты вычислений в консоль браузера, как ожидалось.
6)	Создайте новый экземпляр Shape Called triangle с name -  triangle и sides of = 3,  sideLength = 3
7)	Вызовите  triangle.calcPerimeter(), чтобы убедиться, что все работает.
------------------------------------------------------------------------------------------------

4.	Задача.
1)	создать Square класс, который наследуется от Shape, и добавляет calcArea() метод, вычисляющий площадь квадрата. 
2)	Также настройте конструктор так, чтобы name свойству Square экземпляров объекта автоматически присваивалось значение square, а sides для свойства автоматически устанавливалось значение 4. Поэтому при вызове конструктора вам нужно просто предоставить свойство sideLength.
3)	Создайте экземпляр класса Square, вызываемого square с соответствующими значениями свойств, и вызовите его методы calcPerimeter() и calcArea(), чтобы показать, что он работает нормально.
------------------------------------------------------------------------------------------------
*/

/*
1. Задача. Решение.
*/
class Shape {
    name;
    sides;
    sideLength;

    constructor(name, sides, sideLength) {
        this.name = name;
        this.sides = sides;
        this.sideLength = sideLength;
    }

    calcPerimeter() {
        console.log(`The ${this.name} perimeter length is ${this.sides} * ${this.sideLength} = ${this.sides * this.sideLength}`);
        
    }
}

const square = new Shape ("square", 4, 5);

square.calcPerimeter();  // 20

const triangle = new Shape("triangle", 3, 3);

triangle.calcPerimeter();  // 9

/*
4. Задача.
*/

class Square extends Shape {
    

    constructor( sideLength) {
        super("square", 4, sideLength);
       
    }

    calcArea() {
        console.log(`The ${this.name} area is ${this.sideLength ** 2} squared.`);
        return;
    }
}

const square2 = new Square (8);

square2.calcPerimeter();  // 32

square2.calcArea();  // 64