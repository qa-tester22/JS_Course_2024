/*
Как использовать обещания Промисы Promises
Промисы — это основа асинхронного программирования в современном JavaScript. 
Промис (Обещание) — это объект, возвращаемый асинхронной функцией, который представляет текущее состояние операции. В момент возврата Промиса = обещания вызывающей стороне операция часто не завершается, но объект промиса=обещания предоставляет методы для обработки возможного успеха или неудачи операции.

Предпосылки:	Разумное понимание основ JavaScript, включая обработку событий.
Цель:	Понять, как использовать Промисы обещания в JavaScript.
В предыдущей статье мы говорили об использовании обратных вызовов для реализации асинхронных функций. При таком дизайне вы вызываете асинхронную функцию, передавая ей функцию обратного вызова. Функция немедленно возвращается и вызывает обратный вызов после завершения операции.

При использовании API на основе Промисов=обещаний асинхронная функция запускает операцию и возвращает объект Promise. Затем вы можете прикрепить обработчики к этому объекту обещания, и эти обработчики будут выполняться в случае успеха или неудачи операции.

Использование API выборки()
Примечание. В этой статье мы рассмотрим промисы, копируя примеры кода со страницы в консоль JavaScript вашего браузера. Чтобы настроить это:

откройте вкладку браузера и посетите https://example.org
на этой вкладке откройте консоль JavaScript в инструментах разработчика вашего браузера.
когда мы покажем пример, скопируйте его в консоль. Вам придется перезагружать страницу каждый раз, когда вы вводите новый пример, иначе консоль будет жаловаться, что вы переопределили fetchPromise.
В этом примере мы загрузим файл JSON с https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json и зарегистрируем некоторую информацию о нем.

Для этого сделаем HTTP-запрос к серверу. В HTTP-запросе мы отправляем сообщение запроса на удаленный сервер, и он отправляет нам ответ. В этом случае мы отправим запрос на получение файла JSON с сервера. Помните в прошлой статье мы делали HTTP-запросы с помощью XMLHttpRequestAPI? Что ж, в этой статье мы будем использовать API fetch(), который является современной заменой XMLHttpRequest.

Скопируйте это в консоль JavaScript вашего браузера:


const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

console.log(fetchPromise);

fetchPromise.then((response) => {
  console.log(`Received response: ${response.status}`);
});

console.log("Started request…");
Мы здесь:

вызов fetch()API и присвоение возвращаемого значения fetchPromise переменной
сразу после регистрации fetchPromise переменной. Это должно вывести что-то вроде: Promise { <state>: "pending" }, сообщающее нам, что у нас есть Promiseобъект, и его state значение равно "pending". Состояние "pending" означает, что операция выборки все еще продолжается.
передача функции-обработчика в метод Promise then(). Когда (и если) операция выборки завершится успешно, обещание вызовет наш обработчик, передав объект Response, содержащий ответ сервера.
регистрируя сообщение о том, что мы начали запрос.
Полный вывод должен выглядеть примерно так:

Promise { <state>: "pending" }
Started request…
Received response: 200
Обратите внимание, что Started request…это регистрируется до того, как мы получим ответ. В отличие от синхронной функции, fetch() она возвращает результат, пока запрос еще выполняется, что позволяет нашей программе оставаться отзывчивой. В ответе отображается код состояния 200 (ОК) , означающий, что наш запрос выполнен успешно.

Вероятно, это очень похоже на пример из прошлой статьи, где мы добавили к объекту обработчики событий XMLHttpRequest. Вместо этого мы передаем обработчик в then() метод возвращаемого обещания.

Объединение обещаний
С помощью fetch()API, как только вы получите Response объект, вам нужно вызвать другую функцию, чтобы получить данные ответа. В этом случае мы хотим получить данные ответа в формате JSON, поэтому мы вызываем метод json() объекта Response. Оказывается, это json() тоже асинхронно. Итак, это тот случай, когда нам нужно вызвать две последовательные асинхронные функции.

Попробуй это:

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise.then((response) => {
  const jsonPromise = response.json();
  jsonPromise.then((data) => {
    console.log(data[0].name);
  });
});
В этом примере, как и раньше, мы добавляем then()обработчик к обещанию, возвращаемому fetch(). Но на этот раз наш обработчик вызывает response.json(), а затем передает новый then() обработчик в обещание, возвращаемое response.json().

Это должно регистрировать «печеные бобы» (название первого продукта, указанного в «products.json»).

Но ждать! Помните последнюю статью, где мы говорили, что, вызывая обратный вызов внутри другого обратного вызова, мы получаем последовательно больше вложенных уровней кода? И мы сказали, что этот «ад обратных вызовов» усложнил понимание нашего кода? Разве это не то же самое, только со then() звонками?

Конечно, это так. Но элегантная особенность промисов заключается в том, что then() они сами возвращают промис, который будет завершен с результатом переданной ему функции . Это означает, что мы можем (и, конечно, должны) переписать приведенный выше код следующим образом:

const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => response.json())
  .then((data) => {
    console.log(data[0].name);
  });
Вместо вызова второго then()внутри обработчика первого then()мы можем вернуть обещание, возвращенное json(), и вызвать второй then() по этому возвращаемому значению. Это называется цепочкой обещаний и означает, что мы можем избежать постоянно растущего уровня отступов, когда нам нужно выполнять последовательные вызовы асинхронных функций.

Прежде чем мы перейдем к следующему шагу, нужно добавить еще одну деталь. Нам нужно убедиться, что сервер принял и смог обработать запрос, прежде чем мы попытаемся его прочитать. Мы сделаем это, проверив код состояния в ответе и выдав ошибку, если он не «ОК»:


const fetchPromise = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  });


Обнаружение ошибок
Это подводит нас к последнему пункту: как нам обрабатывать ошибки? API fetch() может выдать ошибку по многим причинам (например, из-за отсутствия сетевого подключения или неправильного формата URL-адреса), и мы сами выдаем ошибку, если сервер вернул ошибку.

В последней статье мы видели, что обработка ошибок при использовании вложенных обратных вызовов может оказаться очень сложной, что заставляет нас обрабатывать ошибки на каждом уровне вложенности.

Для поддержки обработки ошибок Promise объекты предоставляют catch() метод. Это очень похоже на then(): вы вызываете его и передаете функцию-обработчик. Однако, хотя переданный обработчик вызывается при успешном выполнении then() асинхронной операции , переданный обработчик вызывается при сбое асинхронной операции .catch()

Если вы добавите catch() в конец цепочки обещаний, то она будет вызываться при сбое любого из вызовов асинхронной функции. Таким образом, вы можете реализовать операцию как несколько последовательных вызовов асинхронных функций и иметь одно место для обработки всех ошибок.

Попробуйте эту версию нашего fetch() кода. Мы добавили обработчик ошибок с помощью catch(), а также изменили URL-адрес, чтобы запрос не выполнялся.


const fetchPromise = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);

fetchPromise
  .then((response) => {
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    return response.json();
  })
  .then((data) => {
    console.log(data[0].name);
  })
  .catch((error) => {
    console.error(`Could not get products: ${error}`);
  });
Попробуйте запустить эту версию: вы должны увидеть ошибку, зарегистрированную нашим catch()обработчиком.

Терминология обещаний
Промисы сопровождаются довольно специфической терминологией, с которой стоит разобраться.

Во-первых, обещание может находиться в одном из трёх состояний:

pending : обещание было создано, а асинхронная функция, с которой оно связано, еще не завершилась успешно или не удалась. Это состояние, в котором находится ваше обещание, когда оно возвращается из вызова fetch(), а запрос все еще выполняется.

выполнено : асинхронная функция завершилась успешно. Когда обещание выполняется, then()вызывается его обработчик.

отклонено : асинхронная функция не удалась. Когда обещание отклоняется, catch() вызывается его обработчик.

Обратите внимание: что здесь означает «успешно» или «неудачно», зависит от рассматриваемого API. Например, fetch()отклоняет возвращенное обещание, если (помимо других причин) сетевая ошибка помешала отправке запроса, но выполняет обещание, если сервер отправил ответ, даже если ответом была ошибка типа 404 Not Found .

Иногда мы используем термин «решено» для обозначения как выполненных , так и отклоненных обязательств .

Промис считается разрешенным , если он выполнен или «заблокирован», чтобы следовать за состоянием другого промиса.

Объединение нескольких обещаний
Цепочка обещаний — это то, что вам нужно, когда ваша операция состоит из нескольких асинхронных функций, и вам нужно, чтобы каждая из них завершилась перед запуском следующей. Но есть и другие способы объединения асинхронных вызовов функций, и PromiseAPI предоставляет для них несколько помощников.

Иногда нужно, чтобы все обещания были выполнены, но они не зависят друг от друга. В таком случае гораздо эффективнее начать их все вместе, а затем получить уведомление, когда все они будут выполнены. 
Метод Promise.all()– вот что вам нужно. Он принимает массив обещаний и возвращает одно обещание.

Возвращаемое обещание Promise.all():

выполняется, когда и если все обещания в массиве выполнены. В этом случае then() обработчик вызывается с массивом всех ответов в том же порядке, в котором промисы были переданы в all().

отклонено, когда и если какое-либо из обещаний в массиве отклонено. В этом случае catch()обработчик вызывается с ошибкой, выданной отклоненным обещанием.
Например:


const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
Здесь мы делаем три fetch()запроса к трем разным URL-адресам. Если все они успешны, мы зарегистрируем статус ответа каждого из них. Если какой-либо из них терпит неудачу, мы регистрируем сбой.

С предоставленными нами URL-адресами все запросы должны быть выполнены, хотя во втором случае сервер вернет 404(Не найден) вместо 200(ОК), поскольку запрошенный файл не существует. Таким образом, результат должен быть:

https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json: 200
https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found: 404
https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json: 200
Если мы попробуем тот же код с плохо сформированным URL-адресом, например:


const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "bad-scheme://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.all([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((responses) => {
    for (const response of responses) {
      console.log(`${response.url}: ${response.status}`);
    }
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
Затем мы можем ожидать catch() запуска обработчика и увидеть что-то вроде:

Failed to fetch: TypeError: Failed to fetch

Иногда вам может потребоваться выполнение любого из множества обещаний, и неважно, какое именно. В таком случае вы хотите Promise.any(). Это похоже на Promise.all(), за исключением того, что оно выполняется, как только выполняется любой из массивов промисов, или отклоняется, если все они отклонены:


const fetchPromise1 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
);
const fetchPromise2 = fetch(
  "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",
);
const fetchPromise3 = fetch(
  "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",
);

Promise.any([fetchPromise1, fetchPromise2, fetchPromise3])
  .then((response) => {
    console.log(`${response.url}: ${response.status}`);
  })
  .catch((error) => {
    console.error(`Failed to fetch: ${error}`);
  });
Обратите внимание: в этом случае мы не можем предсказать, какой запрос на выборку завершится первым.

Это всего лишь две дополнительные Promise функции для объединения нескольких промисов. Об остальном читайте в Promise справочной документации.

асинхронно и ждать async - await 
Ключевое async слово дает вам более простой способ работы с асинхронным кодом на основе обещаний. Добавление async в начало функции делает ее асинхронной:


async function myFunction() {
  // This is an async function
}
Внутри асинхронной функции вы можете использовать await ключевое слово перед вызовом функции, возвращающей обещание. Это заставляет код ждать в этот момент, пока обещание не будет выполнено, после чего выполненное значение обещания рассматривается как возвращаемое значение или выбрасывается отклоненное значение.

Это позволяет вам писать код, который использует асинхронные функции, но выглядит как синхронный код. Например, мы могли бы использовать его, чтобы переписать наш пример выборки:


async function fetchProducts() {
  try {
    // after this line, our function will wait for the `fetch()` call to be settled
    // the `fetch()` call will either return a Response or throw an error
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    // after this line, our function will wait for the `response.json()` call to be settled
    // the `response.json()` call will either return the parsed JSON object or throw an error
    const data = await response.json();
    console.log(data[0].name);
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

fetchProducts();
Здесь мы вызываем await fetch(), и вместо того, чтобы получить Promise, наш вызывающий объект возвращает полностью завершенный Response объект, как если бы это fetch() была синхронная функция!

Мы даже можем использовать try...catch блок для обработки ошибок, точно так же, как если бы код был синхронным.

Однако обратите внимание, что асинхронные функции всегда возвращают обещание, поэтому вы не можете сделать что-то вроде:


async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
console.log(promise[0].name); // "promise" is a Promise object, so this will not work
Вместо этого вам нужно будет сделать что-то вроде:


async function fetchProducts() {
  try {
    const response = await fetch(
      "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
    );
    if (!response.ok) {
      throw new Error(`HTTP error: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error(`Could not get products: ${error}`);
  }
}

const promise = fetchProducts();
promise.then((data) => console.log(data[0].name));
Также обратите внимание, что вы можете использовать только await внутри async функции, если только ваш код не находится в модуле JavaScript . Это означает, что вы не можете сделать это в обычном сценарии:


try {
  // using await outside an async function is only allowed in a module
  const response = await fetch(
    "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",
  );
  if (!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  console.log(data[0].name);
} catch (error) {
  console.error(`Could not get products: ${error}`);
}
Вероятно, вы будете async часто использовать функции там, где в противном случае вы могли бы использовать цепочки обещаний, и они делают работу с обещаниями намного более интуитивно понятной.

Имейте в виду, что, как и цепочка обещаний, await асинхронные операции выполняются последовательно. Это необходимо, если результат следующей операции зависит от результата последней, но если это не так, то что-то вроде Promise.all() будет более производительным.

Заключение
Промисы — это основа асинхронного программирования в современном JavaScript. Они упрощают выражение и обоснование последовательностей асинхронных операций без глубоко вложенных обратных вызовов и поддерживают стиль обработки ошибок, аналогичный синхронному try...catchоператору.

Ключевые слова async и awaitу прощают построение операции из серии последовательных вызовов асинхронных функций, избегая необходимости создавать явные цепочки обещаний и позволяя писать код, который выглядит так же, как синхронный код.

Промисы работают в последних версиях всех современных браузеров; Единственное место, где поддержка обещаний будет проблемой, — это Opera Mini, IE11 и более ранние версии.

В этой статье мы не затронули все особенности промисов, а только самые интересные и полезные. Когда вы начнете больше узнавать о промисах, вы столкнетесь с новыми функциями и методами.

Многие современные веб-API основаны на обещаниях, включая WebRTC , Web Audio API , Media Capture и Streams API и многие другие.
*/