/*
Асинхронный JavaScript (MDN docs)
Asynchronous JavaScript

Асинхронное программирование — это метод, который позволяет вашей программе запускать потенциально длительную задачу и при этом реагировать на другие события во время выполнения этой задачи, 
вместо того, чтобы ждать завершения этой задачи. 
Как только эта задача будет завершена, вашей программе будет представлен результат.

Многие функции, предоставляемые браузерами, особенно самые интересные, потенциально могут выполняться долго и поэтому являются асинхронными. Например:

- Выполнение HTTP-запросов с помощью fetch()
- Доступ к камере или микрофону пользователя с помощью getUserMedia()
- Просьба пользователя выбрать файлы с помощью showOpenFilePicker()

*******************************************************
`fetch()` - это встроенная функция JavaScript для выполнения HTTP-запросов к серверу и получения данных. Она предоставляет простой и гибкий способ взаимодействия с сервером из веб-приложений.

`fetch()` возвращает объект Promise, который разрешается с объектом Response после завершения запроса. Response содержит информацию о HTTP-ответе, включая статус ответа, заголовки и тело ответа.

Пример использования `fetch()` для отправки GET-запроса и получения данных:


 fetch('https://api.example.com/data')
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json();
  })
  .then(data => {
    console.log(data); // Вывод полученных данных
  })
  .catch(error => {
    console.error('There was a problem with the fetch operation:', error);
  });

  

Этот код отправляет GET-запрос на `https://api.example.com/data`, затем преобразует полученный ответ в формат JSON и выводит данные в консоль. Если возникает ошибка в процессе выполнения запроса, она будет обработана в блоке `catch`.
*/
/*
*******************************************************
Таким образом, даже если вам не придется часто реализовывать свои собственные асинхронные функции, вам, скорее всего, придется их правильно использовать .

Есть проблемы, связанные с длительным выполнением синхронных функций, из-за которых асинхронное программирование становится необходимостью.

Синхронное программирование******************************
Synchronous programming

Рассмотрим следующий код:
*/

const name = "Miriam";
const greeting = `Hello, my name is ${name}!`;
console.log(greeting);  // Hello, my name is Miriam!


/*
Этот код:

1. Объявляет строку с именем name.
2. Объявляет другую строку с именем greeting, которая использует name.
3. Выводит приветствие на консоль JavaScript.

Здесь следует отметить, что браузер эффективно проходит программу по одной строке за раз, в том порядке, в котором мы ее написали. В каждой точке браузер ожидает завершения работы строки, прежде чем перейти к следующей строке. Это необходимо сделать, поскольку каждая строка зависит от работы, проделанной в предыдущих строках.

Это делает эту программу синхронной synchronous program. Это все равно было бы синхронно, даже если бы мы вызвали отдельную функцию, например:
*/

function makeGreeting(name) {
    return `Hello, my name is ${name}!`;
}

const greetingGirl = makeGreeting(name);
console.log(greetingGirl);  // Hello, my name is Miriam!

/*
Здесь makeGreeting() это синхронная функция , поскольку вызывающая сторона должна дождаться, пока функция завершит свою работу и вернет значение, прежде чем вызывающая сторона сможет продолжить.

Длительная синхронная функция****************************
A long-running synchonous function

Что делать, если синхронная функция занимает много времени?

В приведенной ниже программе используется очень неэффективный алгоритм для генерации нескольких больших простых чисел, когда пользователь нажимает кнопку «Создать простые числа». Чем больше простых чисел указывает пользователь, тем больше времени займет операция.

HTML

<label for="quota">Number of primes:</label>
<input type="text" id="quota" name="quota" value="1000000" />

<button id="generate">Generate primes</button>
<button id="reload">Reload</button>

<div id="output"></div>


JS

const MAX_PRIME = 1000000;

function isPrime(n) {
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) {
      return false;
    }
  }
  return n > 1;
}

const random = (max) => Math.floor(Math.random() * max);

function generatePrimes(quota) {
  const primes = [];
  while (primes.length < quota) {
    const candidate = random(MAX_PRIME);
    if (isPrime(candidate)) {
      primes.push(candidate);
    }
  }
  return primes;
}

const quota = document.querySelector("#quota");
const output = document.querySelector("#output");

document.querySelector("#generate").addEventListener("click", () => {
  const primes = generatePrimes(quota.value);
  output.textContent = `Finished generating ${quota.value} primes!`;
});

document.querySelector("#reload").addEventListener("click", () => {
  document.location.reload();
});

!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Файл 8_10_asyncPromis.html

Попробуйте нажать «Создать простые числа». В зависимости от скорости вашего компьютера, вероятно, пройдет несколько секунд, прежде чем программа отобразит сообщение «Готово!». сообщение.

Проблема с долго выполняющимися синхронными функциями
Следующий пример аналогичен предыдущему, за исключением того, что мы добавили текстовое поле для ввода. На этот раз нажмите «Создать простые числа» и попробуйте ввести текст сразу после этого.

Вы обнаружите, что пока наша generatePrimes() функция работает, наша программа совершенно не отвечает: вы не можете ничего печатать, что-либо щелкать или делать что-либо еще.



Причина этого в том, что эта программа JavaScript является однопоточной . 
= single-threaded.

= a thread = Поток — это последовательность инструкций, которым следует программа. Поскольку программа состоит из одного потока, она может делать только одну вещь за раз: поэтому, если она ожидает возврата нашего длительного синхронного вызова, она не может делать ничего другого.

The reason for this is that this JavaScript program is single-threaded. A thread is a sequence of instructions that a program follows. Because the program consists of a single thread, it can only do one thing at a time: so if it is waiting for our long-running synchronous call to return, it can't do anything else.

What we need is a way for our program to:

Start a long-running operation by calling a function.
Have that function start the operation and return immediately, so that our program can still be responsive to other events.
Have the function execute the operation in a way that does not block the main thread, for example by starting a new thread.
Notify us with the result of the operation when it eventually completes.

Нам нужен способ, с помощью которого наша программа:

1. Запустит длительную операцию, вызвав функцию.
2. Пусть эта функция запустит операцию и немедленно вернется, чтобы наша программа могла реагировать на другие события.
3. Попросите функцию выполнить операцию таким образом, чтобы не блокировать основной поток, например, запустив новый поток.
4. Сообщите нам о результате операции, когда она завершится.

Именно это и позволяют нам делать асинхронные функции. Остальная часть этого файла объясняет, как они реализованы в JavaScript.

Event handlers******************************************
Обработчики событий

Описание асинхронных функций, которое мы только что видели, может напомнить вам об обработчиках событий, и если это так, то вы будете правы. Обработчики событий на самом деле являются формой асинхронного программирования: вы предоставляете функцию (обработчик событий), которая будет вызываться не сразу, а всякий раз, когда произойдет событие. 
Если «событием» является «асинхронная операция завершена», то это событие можно использовать для уведомления вызывающей стороны о результате вызова асинхронной функции.

Некоторые ранние асинхронные API использовали события именно таким образом. 
API XMLHttpRequest позволяет отправлять HTTP-запросы к удаленному серверу с помощью JavaScript. Поскольку это может занять много времени, это асинхронный API, и вы получаете уведомление о ходе и возможном завершении запроса, присоединяя к объекту прослушиватели событий XMLHttpRequest.

Следующий пример показывает это в действии. Нажмите «Нажмите, чтобы начать запрос», чтобы отправить запрос.

Создаем новый XMLHttpRequestи слушаем его loadend событие. Обработчик регистрирует сообщение «Готово!». сообщение вместе с кодом состояния.

После добавления прослушивателя событий мы отправляем запрос. Обратите внимание, что после этого мы можем зарегистрировать «Начавшийся запрос XHR»: то есть наша программа может продолжать работать, пока выполняется запрос, и наш обработчик событий будет вызван, когда запрос будет завершен.

HTML


<button id="xhr">Click to start request</button>
<button id="reload">Reload</button>

<pre readonly class="event-log"></pre>
JS
Играть
Скопировать в буфер обмена
const log = document.querySelector(".event-log");

document.querySelector("#xhr").addEventListener("click", () => {
  log.textContent = "";

  const xhr = new XMLHttpRequest();

  xhr.addEventListener("loadend", () => {
    log.textContent = `${log.textContent}Finished with status: ${xhr.status}`;
  });

  xhr.open(
    "GET",
    "https://raw.githubusercontent.com/mdn/content/main/files/en-us/_wikihistory.json",
  );
  xhr.send();
  log.textContent = `${log.textContent}Started XHR request\n`;
});

document.querySelector("#reload").addEventListener("click", () => {
  log.textContent = "";
  document.location.reload();
});
Играть
!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
Это похоже на обработчики событий, с которыми мы столкнулись в предыдущем модуле , за исключением того, что событием является не действие пользователя, например нажатие пользователем кнопки, а изменение состояния некоторого объекта.

Функции Обратные вызовы******************************************
Callbacks

Обработчик событий (event handler) — это особый тип функции обратного вызова. 

callback = Обратный вызов — это просто функция, которая передается в другую функцию с ожиданием, что обратный вызов будет вызван в соответствующее время. Как мы только что видели, обратные вызовы были основным способом реализации асинхронных функций в JavaScript.

Однако код на основе обратного вызова может быть трудным для понимания, когда сам обратный вызов должен вызывать функции, которые принимают обратный вызов. Это обычная ситуация, если вам нужно выполнить какую-то операцию, которая разбивается на серию асинхронных функций. Например, рассмотрим следующее:
*/


function doStep1(init) {
  return init + 1;
}

function doStep2(init) {
  return init + 2;
}

function doStep3(init) {
  return init + 3;
}

function doOperation() {
  let result = 0;
  result = doStep1(result);
  result = doStep2(result);
  result = doStep3(result);
  console.log(`result: ${result}`);
}

doOperation();  // result: 6

/*
Здесь у нас есть одна операция, разделенная на три шага, каждый из которых зависит от последнего шага. В нашем примере первый шаг добавляет 1 к входным данным, второй добавляет 2, а третий добавляет 3. Начиная с входных данных 0, конечный результат равен 6 (0 + 1 + 2 + 3). Для синхронной программы это очень просто. Но что, если мы реализуем эти шаги с помощью обратных вызовов?
*/

function doStep1(init, callback) {
  const result = init + 1;
  callback(result);
}

function doStep2(init, callback) {
  const result = init + 2;
  callback(result);
}

function doStep3(init, callback) {
  const result = init + 3;
  callback(result);
}

function doOperation() {
  doStep1(0, (result1) => {
    doStep2(result1, (result2) => {
      doStep3(result2, (result3) => {
        console.log(`result: ${result3}`);
      });
    });
  });
}

doOperation();  // result: 6

/*
Поскольку нам приходится вызывать обратные вызовы внутри обратных вызовов, мы получаем глубоко вложенную doOperation() функцию, которую гораздо сложнее читать и отлаживать. Иногда это называют «адом обратного вызова» (callback hell) или «пирамидой гибели» (потому что углубление выглядит как перевернутая пирамида) (pyramid of doom).

Когда мы вкладываем обратные вызовы, подобные этому, также может быть очень сложно обрабатывать ошибки: часто вам приходится обрабатывать ошибки на каждом уровне «пирамиды», вместо того, чтобы обрабатывать ошибки только один раз на верхнем уровне.

По этим причинам большинство современных асинхронных API не используют обратные вызовы. Вместо этого основой асинхронного программирования в JavaScript является Promise.

*/