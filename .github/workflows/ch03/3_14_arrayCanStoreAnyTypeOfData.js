/*
Массивы могут хранить данные любого типа.

Каждый элемент массива может хранить данные любого типа , а также другие массивы. 
Элементы массива также могут содержать функции и объекты JavaScript .

Хотя в массиве можно хранить данные любого типа, вы также можете хранить элементы, содержащие данные разных типов, вместе в одном массиве.

*/

/*
Тип данных переменной — это тип данных, которые переменная может хранить, и какие операции можно выполнять со значением переменной. 
тип данных JS:

number (здесь же и NaN)
string
boolean 
undefined
null
symbol

*/
let element = [];

element[0] = "apple";
element[1] = 4+8;
element[2] = 3;
element[3] = element[2] * element[1];

// console.log(element);  // [ 'apple', 12, 3, 36 ]

let i=[]; 
i[0]=12; 
i[1]=2; 
i[2]=3; 
i[4]=i[1]*i[5]; 
i[5]=55; 

console.log(i);  // [ 12, 2, 3, <1 empty item>, NaN, 55 ]

let y=[]; 

y[0]=12; 
y[1]=2; 
y[2]=3; 
y[3]=33; 
y[4]=y[1]*y[5]; 
y[5]=55; 

console.log(y);  // [ 12, 2, 3, 33, NaN, 55 ]

let z=[]; 
z[0]=12; 
z[1]=2; 
z[2]=3; 
z[3]=33; 
z[4]=z[1]*z[3]; 
z[5]=55; 

console.log(z);  // [ 12, 2, 3, 33, 66, 55 ]

let newArr = new Array(7, 8, 10);

let array = [7, 9 , 20 ];

array[10] = 99;


console.log(array.length);
array.length = 22;
console.log(array.length);
console.log(array);

console.log(`newArr = ${newArr}`);

console.log(array[4]);
