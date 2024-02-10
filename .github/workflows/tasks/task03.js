// В этом коде что-то пропущено!
let day = "Monday";
let message;

// Найдите ошибку и дополните код, чтобы он работал правильно

if (day === "Monday") {
    message = "It's Monday!";
} else if (day === "Tuesday") {
    message = "It's Tuesday!";
} else if (day === "Wednesday") {
    message = "It's Wednesday!";
} else if (day === "Thursday") {
    message = "It's Thursday!";
} else if (day === "Friday") {
    message = "It's Friday!";
} else if (day === "Saturday") {
    message = "It's Saturday!";
} else if (day === "Sunday") {
    message = "It's Sunday!";
} else {
    message = "Invalid day!";
}

switch (day) {
    case "Monday":
        message += " Start of the week!";
        break;
    case "Tuesday":
        message += " Second day of the week!";
        break;
    case "Wednesday":
        message += " Midweek!";
        break;
    case "Thursday":
        message += " Almost there!";
        break;
    case "Friday":
        message += " Last workday!";
        break;
    case "Saturday":
        message += " Weekend!";
        break;
    case "Sunday":
        message += " Enjoy your Sunday!";
        break;
}

let options = ["if", "else", "switch", "case"];
let correctOption = options[Math.floor(Math.random() * options.length)];

console.log("Какое ключевое слово пропущено?");
console.log("a) " + (correctOption === "if" ? "if" : "else"));
console.log("b) " + (correctOption === "else" ? "else" : "switch"));
console.log("c) " + (correctOption === "switch" ? "switch" : "case"));
console.log("d) " + (correctOption === "case" ? "case" : "if"));

// Задача 2

// В этом коде что-то пропущено!
let number = 5;
let result;

// Найдите ошибку и дополните код, чтобы он работал правильно

if (number > 0) {
    result = "Positive";
} else if (number < 0) {
    result = "Negative";
} else {
    result = "Zero";
}

switch (number) {
    default:
        result += " is undefined";
        break;
    case 1:
    case 3:
    case 5:
    case 7:
        result += " is prime";
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 9:
    case 10:
        result += " is even";
        break;
}

console.log(result)

// Какое ключевое слово пропущено?
// a) else
// b) switch
// c) case
// d) case

// let options2 = ["if", "else", "switch", "case"];
// let correctOption2 = options2[Math.floor(Math.random() * options2.length)];

// console.log("Какое ключевое слово пропущено?");
// console.log("a) " + (correctOption2 === "if" ? "if" : "else"));
// console.log("b) " + (correctOption2 === "else" ? "else" : "switch"));
// console.log("c) " + (correctOption2 === "switch" ? "switch" : "case"));
// console.log("d) " + (correctOption2 === "case" ? "case" : "if"));


//В этой версии задачи ключевое слово "if" пропущено в switch-case конструкции.

/*
/ Задача 3
// В этом коде что-то пропущено!
let number = 5;
let result;

// Найдите ошибку и дополните код, чтобы он работал правильно

   (number > 0) {
    result = "Positive";
} else if (number < 0) {
    result = "Negative";
} else {
    result = "Zero";
}

switch (number) {
    default:
        result += " is undefined";
        break;
    case 1:
    case 3:
    case 5:
    case 7:
        result += " is prime";
        break;
    case 2:
    case 4:
    case 6:
    case 8:
    case 9:
    case 10:
        result += " is even";
        break;
}

console.log(result)
Какое ключевое слово пропущено?
1) ошибка в записи оператора присваивания +=
2) ошибка в записи switch оператора - для каждого case нужно действие
3) ошибка в записи if оператора - пропущено ключевое слово if
4) ошибка в записи switch оператора - ключевое слово default должно быть последним
Выберите один ответ:
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить.
:one:   :two:   :three:   :four:
*/