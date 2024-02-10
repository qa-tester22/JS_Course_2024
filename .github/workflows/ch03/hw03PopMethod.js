let homeArray = [17, "test", true, [4, 5], "last"];
let newHomeArray; // для хранения измененного массива

console.log(`homeArray = ${homeArray}`); // homeArray = 17,test,true,4,5,last

//The pop() method removes the last element from an array

newHomeArray = homeArray.pop(); 

console.log(`newHomeArray = ${newHomeArray}`); // newHomeArray = last - возвращает последний удаленный элемент из массива

console.log(`homeArray = ${homeArray}`); // homeArray = 17,test,true,4,5
                                        // Метод .pop() изменил начальный массив.