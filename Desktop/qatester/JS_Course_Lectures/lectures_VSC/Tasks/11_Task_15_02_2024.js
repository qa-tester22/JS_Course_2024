/*
метод `replace()`, мы можем воспользоваться методом `split()` для разбиения строки на массив по разделителю, а затем методом `join()` для объединения массива обратно в строку с заменой соответствующего элемента. 
*/
/*
let question = "Какая функция отвечает за обеспечение качества продукции на всех этапах производства?";
let answers = [
    "Quality check",
    "Quality assurance",
    "Quality management",
    "Quality control"
];

// Находим индекс варианта ответа, который нужно заменить
let indexToReplace = answers.indexOf("Quality control");

// Заменяем "Quality control" на "Quality assurance"
if (indexToReplace !== -1) {
    let replacedAnswer = answers[indexToReplace].split("Quality control").join("Quality assurance");
    answers[indexToReplace] = replacedAnswer;
}

console.log(question);
console.log("Варианты ответов:");
console.log(answers.join("\n"));
/*
Этот код также заменяет "Quality control" на "Quality assurance" в массиве ответов и выводит результаты на консоль, но использует методы `split()` и `join()` для этого.
*/
/*
let resumeText = "Тестировщик хочет исправить в резюме слова 'Quality control' на 'Quality assurance'.";
// let correctedResume = resumeText.split("Quality control").join("Quality assurance");
resumeText.split("Quality control").join("Quality assurance");

// console.log(correctedResume);
console.log(resumeText);
*/

/*


// Исходный текст резюме
*/
/*
let resumeText = "Тестировщик хочет исправить в резюме слова 'Quality control' на 'Quality assurance'.";

// Варианты ответов
let options = [
    "resumeText.split('Quality control').join('Quality assurance')",
    "resumeText.replace('Quality control', 'Quality assurance')",
    "resumeText.substring('Quality control', 'Quality assurance')",
    "resumeText.indexOf('Quality control').join('Quality assurance')"
];

// Правильный ответ
let correctAnswer = options[0];

// Перемешиваем варианты ответов
shuffle(options);

// Вывод вопроса и вариантов ответов
console.log("Вопрос: Какими методами можно заменить 'Quality control' на 'Quality assurance' в тексте резюме?");
for (let i = 0; i < options.length; i++) {
    console.log((i + 1) + ". " + options[i]);
}

// Функция для перемешивания вариантов ответов
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        let temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
}
*/
/*
Этот код создает тест с вопросом о замене "Quality control" на "Quality assurance" в тексте резюме. Правильный ответ представлен в переменной `correctAnswer`, а варианты ответов перемешаны перед выводом.
*/

/*
Вопрос: Какими методами можно заменить 'Quality control' на 'Quality assurance' в тексте резюме?
1. resumeText.replace('Quality control', 'Quality assurance')
2. resumeText.indexOf('Quality control').join('Quality assurance')
3. resumeText.substring('Quality control', 'Quality assurance')
4. resumeText.split('Quality control').join('Quality assurance')
*/

/*
Задача 11.
Тестировщик хочет исправить в резюме слова 'Quality control' на 'Quality assurance'.;

*/

let resumeText = 'Quality control'; //  заменить на 'Quality assurance'.;
resumeText.split("Quality control").join("Quality assurance");
console.log(resumeText);

/*
1) Результат достигнут и в консоль выводится 'Quality assurance';
2) Результат не достигнут и в консоль ничего не выводится;
3) Результат не достигнут и в консоль выводится 'Quality controlQuality assurance'; 
4) Результат не достигнут и в консоль выводится 'Quality control';

Выберите один ответ:
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить.
:one:   :two:   :three:   :four: 

//************************* 
// объяснение
Правильный ответ: 4) Результат не достигнут и в консоль выводится 'Quality control';

Пояснение: Методы строк в JavaScript не изменяют оригинальную строку, они возвращают новую строку с примененными изменениями. В данном случае, `split()` и `join()` создают новую строку, в которой "Quality control" заменяется на "Quality assurance", но этот результат не сохраняется ни в какую переменную и не выводится в консоль. Таким образом, исходная переменная `resumeText` остается неизменной, и в консоль выводится ее исходное значение "Quality control".

// let correctedResume = resumeText.split("Quality control").join("Quality assurance");

// console.log(correctedResume);
*/
