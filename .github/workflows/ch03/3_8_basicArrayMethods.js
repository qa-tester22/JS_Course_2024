const fruitsMethods = ["Banana", "Orange", "Apple", "Mango"];

// The length property returns the length (size) of an array

let size = fruitsMethods.length;

console.log(size);  // 4

//  The JavaScript method toString() converts an array to a string of (comma separated) array values.

let arrayToString = fruitsMethods.toString();

console.log(arrayToString);  // Banana,Orange,Apple,Mango

// JavaScript Array at() ES2022 intoduced the array method at()

let elementAtArray = fruitsMethods.at(2);

console.log(elementAtArray);   // Apple

// The at() method returns an indexed element from an array.
// The at() method returns the same as [].

console.log(fruitsMethods[2]);  // Apple

//  The negative bracket indexing like [-1] is not possible to access elements from the end of an object / array / string.

// The at() method was introduced in ES2022 to solve this problem.

console.log(fruitsMethods[-2]);  // undefined 


let negativeElementAtArray = fruitsMethods.at(-2);

console.log(elementAtArray);   // Apple

// The join() method also joins all array elements into a string.

// It behaves just like toString(), but in addition you can specify the separator

let joinArrayElements =  fruitsMethods.join(" * and * ");
console.log(joinArrayElements);  // Banana * and * Orange * and * Apple * and * Mango

// When you work with arrays, it is easy to remove elements and add new elements.

// This is what popping and pushing is:

// Popping items out of an array, or pushing items into an array.

// The pop() method removes the last element from an array

let popElement = fruitsMethods.pop();
console.log(popElement);  // Mango - The pop() method returns the value that was "popped out"
console.log(fruitsMethods);  // [ 'Banana', 'Orange', 'Apple' ]

let pushElement = fruitsMethods.push('Mango');
console.log(pushElement);  // 4 - The push() method returns the new array length
console.log(fruitsMethods);  // [ 'Banana', 'Orange', 'Apple', 'Mango' ]

// The shift() method removes the first array element and "shifts" all other elements to a lower index.

let shiftArrayElement = fruitsMethods.shift();

console.log(shiftArrayElement);  // Banana - The shift() method returns the value that was "shifted out"
console.log(fruitsMethods);  // [ 'Orange', 'Apple', 'Mango' ]

// The unshift() method adds a new element to an array (at the beginning), and "unshifts" older elements

let unshiftElement = fruitsMethods.unshift('Lemon');

console.log(unshiftElement);  // 4 
console.log(fruitsMethods);   // [ 'Lemon', 'Orange', 'Apple', 'Mango' ]

// Changing Elements
// Array elements are accessed using their index number:
// Array indexes start with 0:
// [0] is the first array element
// [1] is the second
// [2] is the third ...

fruitsMethods[0] = 'Kiwi';  
console.log(fruitsMethods);  // [ 'Kiwi', 'Orange', 'Apple', 'Mango' ]

// The length property provides an easy way to append a new element to an array

fruitsMethods[fruitsMethods.length] = "Kiwi";
console.log(fruitsMethods);  // [ 'Kiwi', 'Orange', 'Apple', 'Mango', 'Kiwi' ]

let deleteElement = delete fruitsMethods[8];
console.log(deleteElement);  // true
console.log(fruitsMethods); //  [ <1 empty item>, 'Orange', 'Apple', 'Mango', 'Kiwi' ]  - Using delete() leaves undefined holes in the array.

let arrayToDelete = delete fruitsMethods[3];

console.log(arrayToDelete);
console.log(fruitsMethods);



