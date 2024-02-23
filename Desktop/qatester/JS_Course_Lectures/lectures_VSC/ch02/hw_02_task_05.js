/*
Homework 02. 
Task 5.      Всем известно определение тестирования / testing. Но у нас все слова в определении перемешались с определением цель тестирования (цель проведения тестирования) / test objective (The purpose for testing). Исправьте текст в соответствии с глосарием ISTQB:
testing – The process within the software development lifecycle that evaluates the quality of a component or system and related work products.
(тестирование – Процесс в рамках жизненного цикла разработки программного обеспечения, который оценивает качество компонента или системы, а также связанных с ними рабочих продуктов.)

wrongEnglishText = “testing – The process test within the objective software development The lifecycle purpose that evaluates for the testing quality of a component or system and related work products.”

wrongRussianText = “тестирование – Процесс в рамках жизненного цель цикла тестирования разработки программного цель обеспечения, проведения который оценивает качество компонента или системы, а также связанных с ними тестирования рабочих продуктов.”
// Используйте переменные, методы для строковых типов данных.
*/
let wrongEnglishText = "testing – The process test within the objective software development The lifecycle purpose that evaluates for the testing quality of a component or system and related work products.";

let rightEnglishText = "testing – The process within the software development lifecycle that evaluates the quality of a component or system and related work products.";

let wrongWords = "test objective The purpose for testing";

// 1 способ:
// wrongEnglishText = rightEnglishText;

// 2 способ: replace

wrongEnglishText = wrongEnglishText.replace("test ", "").replace("objective ", "").replace('The lifecycle purpose ', 'lifecycle ').replace('for the testing ', 'the ');

if (wrongEnglishText === rightEnglishText) {
    console.log(true);
} else {
    console.log(false);
};

console.log(wrongEnglishText);
console.log(rightEnglishText);
