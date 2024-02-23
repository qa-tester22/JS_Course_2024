// Массивы являются фундаментальной частью любого языка программирования. В этом

// главе вы узнаете, что это такое, как их использовать и что делает

// Массивы JavaScript отличаются от массивов в других языках программирования. Вы работаете с массивами, создавая списки, упорядочивая списки, а также добавляя и удаляя элементы из списков.

// Мы создавали переменные 

let firstName = 'John';
let lastName = 'Doe';

// можно составить список принципов тестирования, которые выделяет ISTQB
/*
Testing Principles
1. Testing shows the presence, not the absence of defects.
2. Exhaustive testing is impossible.
3. Early testing saves time and money. 
4. Defects cluster together. 
5. Tests wear out. 
6. Testing is context dependent. 
7. Absence-of-defects fallacy. 
*/
/*
Принципы тестирования
1. Тестирование демонстрирует наличие дефектов, а не их отсутствие.
2. Исчерпывающее тестирование невозможно.
3. Раннее тестирование экономит время и деньги.
4. Кластеризация дефектов. 
5. Тесты устаревают. 
6. Тестирование зависит от контекста.
7. Заблуждение об отсутствии дефектов.
*/

// Testing Principles
let principle_1 = "Testing shows the presence, not the absence of defects";
let principle_2 = "Exhaustive testing is impossible";
let principle_3 = "Early testing saves time and money"; 
let principle_4 = "Defects cluster together";
let principle_5 = "Tests wear out"; 
let principle_6 = "Testing is context dependent"; 
let principle_7 = "Absence-of-defects fallacy";

// но если мы хотим это хранить под одним именем Testing Principles?
/*
Например, рассмотрим следующие типы списков:
✓✓Список ваших любимых исполнителей
✓✓Программа, которая при каждом запуске выбирает и отображает другую цитату из списка котировок.
✓✓Список рассылки праздничных открыток
✓✓Список ваших лучших музыкальных альбомов года
✓✓Список дней рождения всей вашей семьи и друзей
✓✓Список покупок
✓✓Список дел
✓✓Список новогодних обещаний

Используя переменные с одним значением, вам придется создавать и отслеживать несколько переменных, чтобы выполнить любую из этих задач. Вот пример списка, созданного с использованием переменных с одним значением: много let principle1...
*/

/*
Этот подход может сработать в краткосрочной перспективе, но вы быстро столкнетесь с трудностями. Например, что, если вы захотите 
отсортировать список в алфавитном порядке и 
поместить названия принципов тестирования  в правильные имена переменных в зависимости от их положения в алфавитной сортировке? 
Вам нужно сначала переместить значение principle_7 из переменной principle_7 (возможно, во временную переменную хранения), а затем переместить  в переменную principle_1. Место principle_7 тогда будет свободным для бывшего значения principle_1, но не забывайте, что его значение  все еще находится в этом временном месте! Удаление бывшего значения из principle_7 освобождает вам возможность переместить кого-то еще во временную переменную и так далее. Создание списка таким способом быстро становится сложным и запутанным.


К счастью, JavaScript (и любой другой известный нам язык программирования) поддерживает создание переменных, содержащих несколько значений, называемых массивами.

Массивы — это способ хранения групп связанных данных внутри одной переменной. С помощью массивов вы можете создавать списки, содержащие любое сочетание строковых значений, чисел, логических значений, объектов, функций, любых других типов данных и даже других массивов!
*/

// Мы не можем 

// principle_1 = principle_7;

console.log(`principle 1 is ${principle_1}`);  // principle 1 is Absence-of-defects fallacy

console.log(`principle 7 is ${principle_7}`);  // principle 7 is Absence-of-defects fallacy

// мы потеряли 1-ый принцип

let temporary = principle_1;

principle_1 = principle_7;

principle_7 = temporary;

console.log(`principle 1 is ${principle_1}`);  // principle 1 is Absence-of-defects fallacy

console.log(`principle 7 is ${principle_7}`);  // principle 7 is Testing shows the presence, not the absence of defects
