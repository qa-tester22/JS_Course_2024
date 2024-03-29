/*
Написание функций
Writing Functions
Объявление функции должно быть написано в определенном порядке. 
Объявление declaration функции состоит из следующих элементов в следующем порядке:

✓✓Ключевое слово функции function

✓✓Название функции 

✓✓ пара круглых скобок () Parentheses, которые могут содержать один или несколько параметров . 
✓✓Пара фигурных скобок {}, содержащих операторы, код.
*/
/*
Иногда вся цель функции состоит в том, чтобы вывести сообщение на экран веб-страницы. Примером случая, когда полезно иметь такую функцию, является отображение текущей даты. Следующий пример функции записывает текущую дату в окно браузера:
*/
function getTheDate() {
    let rightNow = new Date();
    console.log(rightNow.toDateString())
    // document.write(rightNow.toDateString() + "<br>");
};

getTheDate();

/*
Выполните следующие действия, чтобы опробовать эту функцию:

1. Откройте консоль JavaScript в Chrome.
2. Введите функцию в консоль.
Используйте Shift + Return (или Shift + Enter) после ввода каждой строки, чтобы создать разрыв строки в консоли без выполнения кода.
3. После того, как вы введете последний }, нажмите Return (или Enter), чтобы запустить код.
Обратите внимание, что ничего не происходит, за исключением того, что в консоли появляется слово undefined, сообщающее вам, что функция была принята, но не вернула значения.
4. Вызовите функцию, введя имя функции (getTheDate), затем скобки и точку с запятой:

getTheDate();

Функция выводит текущую дату и время в окно браузера, а затем на консоли отображается неопределенное значение, поскольку функция не имеет возвращаемого значения; его цель — просто распечатать дату в окне браузера.

Возвращаемое значение функций по умолчанию не определено, поэтому технически неопределенное значение является возвращаемым значением.
*/
