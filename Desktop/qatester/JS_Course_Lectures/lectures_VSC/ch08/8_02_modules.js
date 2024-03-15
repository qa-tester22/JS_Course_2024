/*
w3schools.com

Модули
(файлы: 8_10_asyncPromise, message.js, person.js);

Модули JavaScript позволяют разбивать код на отдельные файлы.

Это упрощает поддержку базы кода.

Модули импортируются из внешних файлов с import оператором.

Модули также зависят type="module" от тега <script>.

<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Modules</h1>

<p id="demo"></p>

<script type="module">
import message from "./message.js";

document.getElementById("demo").innerHTML = message();

</script>

</body>
</html>

Экспорт******************************************

Модули с функциями или переменными могут храниться в любом внешнем файле.

Существует два типа экспорта: 
- именованный экспорт и 
-экспорт по умолчанию .

Именованный экспорт
Давайте создадим файл с именем person.js и наполним его тем, что мы хотим экспортировать.

Вы можете создать именованный экспорт двумя способами. В линию по отдельности или все сразу внизу.
person.js
В линии индивидуально:
*/
export const name = "Tom";
export const age = 35;
/*
Все сразу внизу:
person.js
*/
const name = "Jerry";
const age = 25;

export {name, age};

/*
Экспорт по умолчанию
Давайте создадим еще один файл с именем message.jsи будем использовать его для демонстрации экспорта по умолчанию.

В файле может быть только один экспорт по умолчанию.

Пример
message.js
*/
const message = () => {
    const name = "Tony";
    const age = 25;
    return name + " is " + age + " years old."
}

export default message; 

/*
Импортировать

Импортировать модули в файл можно двумя способами в зависимости от того, называются ли они экспортом или экспортом по умолчанию.

Именованный экспорт создается с помощью фигурных скобок. Экспорт по умолчанию — нет.

Импорт из именованного экспорта
Импортируйте именованный экспорт из файла person.js:
в файл 8_10_asyncPromise.html
*/

import { name, age} from "./person.js";

/*
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Modules</h1>

<p id="demo"></p>

<script type="module">
import { name, age } from "./person.js";

let text = "My name is " + name + ", I am " + age + ".";

document.getElementById("demo").innerHTML = text;
</script>

</body>
</html>
*/

/*
Импорт из экспорта по умолчанию
Импортируйте экспорт по умолчанию из файла message.js:
в файл 8_10_asyncPromise.html

*/

import message from "./message.js";

/*
<!DOCTYPE html>
<html>
<body>
<h1>JavaScript Modules</h1>

<p id="demo"></p>

<script type="module">
import message from "./message.js";

document.getElementById("demo").innerHTML = message();

</script>

</body>
</html>
*/

/*
Примечание
Модули работают только с протоколом HTTP(s).

Веб-страница, открытая по протоколу file://, не может использовать импорт/экспорт.
*/