// Hoisting - подъем, всплытие.
 
// console.log(sum(7, 12));  // вызываем функцию до ее объявления.

// a = 7;
// b = 12;
// c = a + b;

// console.log(`${a} | ${b} | ${c}`);

// // let a, b, c;

// var a = 7, b = 12, c = a + b;

// var a = 9, b = 22, c = a - b;


// // const a = 7, b = 12, c = a + b;

// // const a = 9, b = 11, c = a - b;

// console.log(`${a} | ${b} | ${c}`);

function sum (a, b) {
   let c = a + b;
   return c
}