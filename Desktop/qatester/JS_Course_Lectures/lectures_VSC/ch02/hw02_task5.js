/*
5.      Всем известно определение тестирования / testing. Но у нас все слова в определении перемешались с определением цель тестирования (цель проведения тестирования) / test objective (The purpose for testing). Исправьте текст в соответствии с глосарием ISTQB:
testing – The process within the software development lifecycle that evaluates the quality of a component or system and related work products.
(тестирование – Процесс в рамках жизненного цикла разработки программного обеспечения, который оценивает качество компонента или системы, а также связанных с ними рабочих продуктов.)

wrongEnglishText = “testing – The process test within the objective software development The lifecycle purpose that evaluates for the testing quality of a component or system and related work products.”

wrongRussianText = “тестирование – Процесс в рамках жизненного цель цикла тестирования разработки программного цель обеспечения, проведения который оценивает качество компонента или системы, а также связанных с ними тестирования рабочих продуктов.”
// Используйте переменные, методы для строковых типов данных.
*/
let wrongEnglishText = 'testing – The process test within the objective software development The lifecycle purpose that evaluates for the testing quality of a component or system and related work products.';

let rightEnglishText = 'testing – The process within the software development lifecycle that evaluates the quality of a component or system and related work products.'

let wrongEnglishWords = 'test objective The purpose for testing'

// 1 способ:
// wrongEnglishText = rightEnglishText;

// console.log(wrongEnglishText);

let testIndex = wrongEnglishText.indexOf('test ')

console.log(testIndex);  // 0 - test без пробела; 22 - test с пробелом 

let slicedWord = wrongEnglishText.slice(0, 22);

console.log(slicedWord);

let withinIndex = wrongEnglishText.indexOf('within '); // 27

console.log(withinIndex); // 27

let objectiveIndex = wrongEnglishText.indexOf('objective '); // 38

console.log(objectiveIndex);  // 38 

slicedWord += wrongEnglishText.slice(27, 38);

console.log(slicedWord);

let softwareIndex = wrongEnglishText.indexOf('software '); // 48

console.log(softwareIndex); // 48

let theLifecycleIndex = wrongEnglishText.indexOf('The lifecycle '); // 69

console.log(theLifecycleIndex);  //  69

slicedWord += wrongEnglishText.slice(48, 69);

console.log(slicedWord);

let lifeIndex = wrongEnglishText.indexOf('life'); // 73

console.log(lifeIndex); // 73

let purposeIndex = wrongEnglishText.indexOf('purpose '); // 83

console.log(purposeIndex);  // 83 

slicedWord += wrongEnglishText.slice(73, 83);

console.log(slicedWord);


wrongEnglishText = wrongEnglishText.replace('for ', '');

wrongEnglishText = wrongEnglishText.replace("testing – The process test within the objective software development The lifecycle purpose ", slicedWord);

wrongEnglishText = wrongEnglishText.replace('testing quality', 'quality');


console.log(wrongEnglishText);
console.log(rightEnglishText);

