/*
Деструктуризация Destructing Arrays
Для более сложного присваивания в JavaScript есть синтаксис деструктуризации - это выражение, которое позволяет извлекать данные из массивов или объектов, используя синтаксис, который зеркалирует конструкторы массивов и литералы объектов.
*/
let foo = ["one", "two", "three"];

// без деструктуризации
// let one = foo[0];
// let two = foo[1];
// let three = foo[2];

// с деструктуризацией
let [one, two, three] = foo;

let a = 2;
let b = 7;

let arr = [a, b]   // [ 2, 7 ]
console.log(arr);  // [ 2, 7 ]

[a, b] = [b, a]; //  [ 2, 7 ] = [ 7, 2 ]  - деструктуризация
console.log(a);  //  7

function calculate (firstOperand, secondOperand) {

    const divide = firstOperand / secondOperand;
    const add = firstOperand + secondOperand;
    const subtract = firstOperand - secondOperand;
    const multiply = firstOperand * secondOperand;
    // const divide = firstOperand / secondOperand;

    return [add, subtract, multiply, divide];
};

// console.log(add, subtract, multiply, divide);

const [add, subtract, multiply, divide] = calculate(2, 4);

console.log(`Sum = ${add}, 
Difference = ${subtract}, 
Product = ${multiply}, 
Quotient = ${divide}`);

[x, y, z] = [a, 99, b];  // - объявленные переменные включаем в массив, и не имеет значение их порядок

console.log([x, y, z]);   // [ 7, 99, 2 ] 

[three, one, two] = foo;   // - присваиваем значение массива, и имеет значение порядок элементов.

console.log([three, one, two]);   // [ 'one', 'two', 'three' ] 

/*
Деструктурирующее присваивание – это специальный синтаксис, который позволяет нам «распаковать» массивы или объекты в несколько переменных, так как иногда они более удобны.

Деструктуризация также прекрасно работает со сложными функциями, которые имеют много параметров, значений по умолчанию и так далее.
*/

let [firstName, lastName] = "Дуня Минтрофанова".split(' ');
console.log(firstName);

console.log(lastName);

/*
«Деструктуризация» не означает «разрушение».
«Деструктурирующее присваивание» не уничтожает массив. Оно вообще ничего не делает с правой частью присваивания, его задача – только скопировать нужные значения в переменные.

Это просто короткий вариант записи:
*/

// let [firstName, lastName] = arr;
// let firstName = arr[0];
// let lastName = arr[1];

// Нежелательные элементы массива также могут быть отброшены с помощью дополнительной запятой:

let [operandOne, operandTwo, , plus] = [3, 7, 15, 3 + 7, 7 + 15, 3 + 15];

console.log(operandOne + " + " + operandTwo + " = " + plus);  // 3 + 7 = 10

/*
Обычно, если массив длиннее, чем список слева, «лишние» элементы опускаются.

Например, здесь берутся только первые элементы, а остальные просто игнорируются.
*/
/*
Если мы хотим не просто получить первые значения, но и собрать все остальные, то мы можем добавить ещё один параметр, который получает остальные значения, используя оператор «остаточные параметры» – троеточие ("..."):
*/
let [item1, item2, ...rest] = [3, 7, 15, 3 + 7, 7 + 15, 3 + 15];  // Переменная rest является массивом из оставшихся элементов.

console.log(rest);  // [ 15, 10, 22, 18 ]

/*
// Значения по умолчанию
Если в массиве меньше значений, чем в присваивании, то ошибки не будет. Отсутствующие значения считаются неопределёнными:
*/

let [testTypeOne, testTypeTwo, testTypeThree, testTypeFour] = [];

console.log(`${testTypeOne}, ${testTypeTwo}, ${testTypeThree}, ${testTypeFour}.`)  // undefined, undefined, undefined, undefined.
/*
Если мы хотим, чтобы значение «по умолчанию» заменило отсутствующее, мы можем указать его с помощью =
*/
let [testTypeFirst = 'functional', testTypeSecond = 'non-functional', testTypeThird, testTypeFourth] = [];

console.log(`${testTypeFirst}, ${testTypeSecond}, ${testTypeThird}, ${testTypeFourth}.`)

/*
Значения по умолчанию могут быть гораздо более сложными выражениями или даже функциями. Они выполняются, только если значения отсутствуют.
*/

let [testType1 = 'functional', testType2 = 'non-functional', testType3 = console.log("I do't know."), testType4] = [];

console.log(`${testType1}, ${testType2}, ${testType3}, ${testType4}.`);

testType3 = 'alpha testing';

console.log(`${testType1}, ${testType2}, ${testType3}, ${testType4}.`);

[testType1 = 'functional', testType2 = 'non-functional', testType3 = console.log("I do't know."), testType4] = [,, , "beta testing"];

console.log(`${testType1}, ${testType2}, ${testType3}, ${testType4}.`);  // I do't know.
// functional, non-functional, undefined, beta testing.
