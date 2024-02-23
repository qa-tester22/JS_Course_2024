//  Методы массивов. примеры решений для каждого из предложенных заданий:

// 1. Array length:
// Задание 1.1
/*
Создайте массив `numbers` и используйте свойство `length`, чтобы определить, сколько элементов находится в массиве.
   */
   const numbers = [1, 2, 3, 4, 5];
   console.log(numbers.length); // Выведет 5
   
   /*
   // Задание 1.2
   Напишите функцию `arrayLength`, которая принимает массив в качестве аргумента и возвращает его длину.
   */
    function arrayLength(arr) {
       return arr.length;
    }

// 2. Array toString():
   // Задание 2.1
   /*
   Создайте массив `colors` с несколькими цветами и используйте метод `toString()`, чтобы преобразовать его в строку.
   */
   const colors = ['red', 'green', 'blue'];
   console.log(colors.toString()); // Выведет "red,green,blue"

   // Задание 2.2
  /*
   Напишите функцию `arrayToString`, которая принимает массив чисел в качестве аргумента и возвращает строку, представляющую этот массив.
*/
   function arrayToString(arr) {
    return arr.toString();
}


// 3. Array at():
   
   // Задание 3.1
   /*
   Создайте массив `letters` и используйте метод `at()` для получения элемента массива по индексу.
   */

   const letters = ['a', 'b', 'c', 'd'];
   console.log(getElementAtIndex(letters, 2)); // Выведет 'c'
   
   // Задание 3.2
   /*
   Напишите функцию `getElementAtIndex`, которая принимает массив и индекс в качестве аргументов и возвращает элемент массива по указанному индексу.
   */
   function getElementAtIndex(arr, index) {
    return arr.at(index);
}

   // Задание 3.3 В следующем примере представлена функция, которая возвращает последний элемент переданного массива

   // Массив со значениями
const cart = ["apple", "banana", "pear"];

// Функция, которая возвращает последний элемент переданного массива
function returnLast(arr) {
  return arr.at(-1);
}

// Получить последний элемент нашего массива 'cart'
const item1 = returnLast(cart);
console.log(item1); // Выведет: 'pear'

// Добавить элемент в наш массив 'cart'
cart.push("orange");
const item2 = returnLast(cart);
console.log(item2); // Выведет: 'orange'

   

// 4. Array join():
   
   // Задание 4.1.
   /*
   Создайте массив `words` и используйте метод `join()`, чтобы объединить его элементы в строку с пробелами между ними чтобы получилось предложение.
   */
   const words = ['hello', 'world', 'how', 'are', 'you'];
   console.log(arrayJoin(words)); // Выведет "hello, world, how, are, you"

   
   // Задание 4.2
   /*
Напишите функцию `arrayJoin`, которая принимает массив строк и объединяет их в одну строку с заданным разделителем.
   */
function arrayJoin(arr) {
    return arr.join(', ');
}

  
   // Задание 4.3: 
   /*
   Создайте из массива ["In this syllabus, the following five test levels are described:", "component testing,", "component integration testing,", "system testing,", "system integration testing,", "acceptance testing."] следующий текст:  

   "In this syllabus, the following five test levels are described: the component testing, the component integration testing, the system testing, the system integration testing, the acceptance testing."
   */

// 5. Array pop():
   
   // Задание 5.1
   /*
   Создайте массив `items` и используйте метод `pop()`, чтобы удалить последний элемент из него.
   */
   const items = ['apple', 'banana', 'orange'];
   console.log(removeLastElement(items)); // Выведет 'orange'
   
   // Задание 5.2
   /*
   Напишите функцию `removeLastElement`, которая принимает массив и удаляет последний элемент из него.
   */

   function removeLastElement(arr) {
    return arr.pop();
}


// 6. Array push():
   
   // Задание 6.1
   /*
   Создайте массив `fruit` и используйте метод `push()`, чтобы добавить новый фрукт в конец массива.
   */
 
   const fruit = ['apple', 'banana', 'orange'];
   addNewItem(fruit, 'grape');
   console.log(fruit); // Выведет ['apple', 'banana', 'orange', 'grape']
   
   
   // Задание 6.2
   /*
   Напишите функцию `addNewItem`, которая принимает массив и новый элемент, и добавляет этот элемент в конец массива.
   */

   function addNewItem(arr, newItem) {
    arr.push(newItem);
    return arr;
}
   

// 7. Array shift():
   
   // Задание 7.1
/*
Создайте массив `names` и используйте метод `shift()`, чтобы удалить первый элемент из него.
*/
   
const names = ['John', 'Jane', 'Tom'];
   console.log(removeFirstElement(names)); // Выведет 'John'

   // Задание 7.2
   /*
   Напишите функцию `removeFirstElement`, которая принимает массив и удаляет первый элемент из него.
   */

   function removeFirstElement(arr) {
    return arr.shift();
}


// 8. Array unshift():
   
   // Задание 8.1
   /*
   Создайте массив `cities` и используйте метод `unshift()`, чтобы добавить новый город в начало массива.
   */
   function addNewFirstElement(arr, newItem) {
       arr.unshift(newItem);
       return arr;
   }
   
   // Задание 8.2
   /*
   Напишите функцию `addNewFirstElement`, которая принимает массив и новый элемент, и добавляет этот элемент в начало массива.
   */

   const cities = ['New York', 'London', 'Tokyo'];
   addNewFirstElement(cities, 'Paris');
   console.log(cities); // Выведет ['Paris', 'New York', 'London', 'Tokyo']


// 9. Array delete(): (Отсутствует в стандартном API JavaScript)
/*
два задания с использованием оператора `delete` для массива:

9.1. Удаление элемента по индексу:
   Напишите функцию `removeItemByIndex`, которая принимает массив и индекс элемента, который нужно удалить, и использует оператор `delete`, чтобы удалить элемент с указанным индексом из массива.

*/

// Задание 9.1.

   function removeItemByIndex(arr, index) {
       delete arr[index];
       return arr;
   }

   // Пример использования
//    const numbers = [1, 2, 3, 4, 5];
   console.log(removeItemByIndex(numbers, 2)); // Удалит элемент с индексом 2 (значение 3) из массива и вернет массив без этого элемента
  
/*
2. Очистка массива:
   Напишите функцию `clearArray`, которая принимает массив и использует оператор `delete`, чтобы удалить все его элементы и сделать массив пустым.
*/
  // Задание 9.2.

   function clearArray(arr) {
       for (let i = 0; i < arr.length; i++) {
           delete arr[i];
       }
       return arr;
   }

   // Пример использования
   const fruits = ['apple', 'banana', 'orange'];
   console.log(clearArray(fruits)); // Удалит все элементы из массива и вернет пустой массив
  
/*
Оператор `delete` можно использовать для удаления элементов из массива, но обычно он не используется для этой цели, так как он оставляет пустые слоты в массиве. Вместо этого, чаще используются методы, такие как `splice()`, `pop()`, `shift()`, чтобы удалить элементы и изменить размер массива.
*/

// 10. Array concat():
   // Задание 10.1
   /*
   Создайте два массива `arr1` и `arr2` и используйте метод `concat()`, чтобы объединить их в один массив.
   */

   function concatArrays(arr1, arr2) {
       return arr1.concat(arr2);
   }
   
   // Задание 10.2
   /*
   Создайте два массива `arr1` и `arr2` и используйте метод `concat()`, чтобы объединить их в один массив.
   */

   const arr1 = [1, 2, 3];
   const arr2 = [4, 5, 6];
   console.log(concatArrays(arr1, arr2)); // Выведет [1, 2, 3, 4, 5, 6]

  
/*
11. Array copyWithin():
   - Задание 1:
  */
     function copyWithinExample(arr) {
         return arr.copyWithin(0, 2, 4); // Копирует элементы с индексами 2 и 3 в начало массива
     }

     // Пример использования
     const numbers = [1, 2, 3, 4, 5];
     console.log(copyWithinExample(numbers)); // Выведет [3, 4, 3, 4, 5]
  
/*
   - Задание 2:
     */
     const numbers = [1, 2, 3, 4, 5];
     numbers.copyWithin(2, 0, 2); // Копирует элементы с индексами 0 и 1 в начало массива
     console.log(numbers); // Выведет [1, 2, 1, 2, 5]
     
/*
12. Array flat():
   - Задание 1:
  */
     function flattenArray(arr) {
         return arr.flat();
     }

     // Пример использования
     const nestedArray = [1, [2, 3], [4, [5, 6]]];
     console.log(flattenArray(nestedArray)); // Выведет [1, 2, 3, 4, 5, 6]
  
/*
   - Задание 2:
     */
     const nestedArray = [1, [2, 3], [4, [5, 6]]];
     console.log(nestedArray.flat(2)); // Выведет [1, 2, 3, 4, 5, 6]
     
/*
13. Array splice():
   - Задание 1:
  */
     function removeElements(arr, start, deleteCount) {
         arr.splice(start, deleteCount);
         return arr;
     }

     // Пример использования
     const fruits = ['apple', 'banana', 'orange', 'kiwi'];
     console.log(removeElements(fruits, 1, 2)); // Удалит элементы с индекса 1 (banana) и 2 (orange)
    

//    - Задание 2:
    
     const fruits = ['apple', 'banana', 'orange', 'kiwi'];
     fruits.splice(1, 2, 'grape', 'pineapple'); // Удалит элементы с индекса 1 (banana) и 2 (orange), и вставит 'grape' и 'pineapple' на их место
     console.log(fruits); // Выведет ['apple', 'grape', 'pineapple', 'kiwi']
/*

     14. Array toSpliced(): 
     - Задание 14.1: Создайте массив `months` и используйте метод `splice()`, чтобы удалить несколько элементов из массива и вставить новые элементы на их место.
    - Задание 14.2: Напишите функцию `removeElementsSafely`, которая принимает массив и использует метод `toSpliced()`, чтобы удалить элементы из массива по заданному индексу и количеству элементов.
    */
    
/*
15. Array slice():
   - Задание 15.1:
*/
   const letters = ['a', 'b', 'c', 'd', 'e'];
   const slicedLetters = letters.slice(1, 4); // Выберет буквы с индексами 1, 2 и 3
   console.log(slicedLetters); // Выведет ['b', 'c', 'd']

   - Задание 15.2:

   function getSubarray(arr, start, end) {
    return arr.slice(start, end);
}

// Пример использования
const letters = ['a', 'b', 'c', 'd', 'e'];
console.log(getSubarray(letters, 1, 4)); // Выведет ['b', 'c', 'd']


