/*
for, arrays
задача 10:
*/

// const numbers = [1, 2, 3, 4, 5];
// console.log(numbers);

// let sum = 0;
// console.log(sum);

// for (let i = 0; i < numbers.length; i++) {
//     if (i % 2 !== 0) {
//         sum += numbers[i];
//     }
// }

// console.log(sum);

/*
Вопрос-тест:

Каков будет результат выполнения данного кода?

1) 9
2) 6
3) 3
4) 15

Выберите один ответ:
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить.
:one:   :two:   :three:   :four: 

Объяснение:

В данном коде используется цикл `for` для итерации по элементам массива `numbers`. Условие `if` проверяет, является ли индекс `i` нечетным числом. Если да, то текущий элемент массива прибавляется к переменной `sum`. Таким образом, суммируются только нечетные элементы из массива. Результат будет равен сумме чисел с нечетными индексами массива, то есть [1, 2, 3, 4, 5] : 2 + 4 = 6. Ответ: 2) 6.

Код выполняет следующее:

1. Создает массив `numbers` с числами от 1 до 5.
2. Инициализирует переменную `sum` с начальным значением 0.
3. Затем запускается цикл `for`, который итерирует через каждый элемент массива `numbers`.
4. Внутри цикла проверяется условие `if (i % 2 !== 0)`, которое определяет, является ли текущий индекс `i` нечетным числом.
5. Если индекс нечетный, то текущий элемент массива добавляется к переменной `sum`.
6. После завершения цикла выводится значение переменной `sum`.

Так как в массиве `numbers` нечетные числа находятся под индексами 1 и 3 (это числа 2 и 4), то прибавляются эти числа к переменной `sum`, в результате чего `sum` будет равно 2 + 4 = 6.

Ответ: 2) 6.

*/


const numbers = [1, 2, 3, 4, 5]; 
// indexex =     0  1  2  3  4

console.log(`An array numbers = ${numbers} was created. `);

let sum = 0;
console.log(`Firstly, sum is ${sum}.`);

console.log(`numbers.length = ${numbers.length}`);

// for ( Entry let i = 0 ; condition < , > , === , == , !== , != ; What should I do? i = i + 1); 

for (let i = 0; i < numbers.length; i++) {   // from i = 0 to i = 5
    console.log(`Iterator i is ${i}.`);
    if (i % 2 !== 0) {
        sum += numbers[i];  // sum = sum + numbers[i];
        console.log(`Now sum is ${sum}`);
        console.log(`Iterator i is ${i} and numbers[${i}] = ${numbers[i]}.`);
    } else {
        console.log(false);
    }
}

console.log(`Result of sum = ${sum}.`);

/*
An array numbers = 1,2,3,4,5 was created. 
Firstly, sum is 0.
numbers.length = 5
Iterator i is 0.
false
Iterator i is 1.
Now sum is 2
Iterator i is 1 and numbers[1] = 2.
Iterator i is 2.
false
Iterator i is 3.
Now sum is 6
Iterator i is 3 and numbers[3] = 4.
Iterator i is 4.
false
Result of sum = 6
*/

