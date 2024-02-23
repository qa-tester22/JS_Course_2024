/**
 * Deleting Properties
 * Удаление свойств

Удалить свойства объектов можно с помощью оператора удаления. 
Как работает этот оператор.
 */

let myObject = {
    var1 : "the value",
    var2 : "another value",
    var3 : "yet another"
};

console.log(myObject); // { var1: 'the value', var2: 'another value', var3: 'yet another' }

// delete var2 from myObject
delete myObject.var2;

// try to write the value of var2
// document.write(myObject.var2); // result is an error

console.log(myObject.var2); // undefined
