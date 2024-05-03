/*
Введение: колбэки

В примерах мы будем использовать браузерные методы
Для демонстрации использования колбэков, промисов и других абстрактных понятий мы будем использовать некоторые браузерные методы: в частности, загрузку скриптов и выполнение простых манипуляций с документом.

Многие действия в JavaScript асинхронные.

Например, рассмотрим функцию loadScript(src):
*/

function loadScript(src) {
    let script = document.createElement('script');
    script.src = src;
    document.head.append(script);
}

loadScript('./setMap.js');
/*
Эта функция загружает на страницу новый скрипт. Когда в тело документа добавится конструкция <script src="…">, браузер загрузит скрипт и выполнит его.

Вот пример использования этой функции:

добавилось в файл 9_10_asyncPromise.html в браузере 

<!-- Code injected by live-server -->
<script>
	// <![CDATA[  <-- For SVG support
	if ('WebSocket' in window) {
		(function () {
			function refreshCSS() {
				var sheets = [].slice.call(document.getElementsByTagName("link"));
				var head = document.getElementsByTagName("head")[0];
				for (var i = 0; i < sheets.length; ++i) {
					var elem = sheets[i];
					var parent = elem.parentElement || head;
					parent.removeChild(elem);
					var rel = elem.rel;
					if (elem.href && typeof rel != "string" || rel.length == 0 || rel.toLowerCase() == "stylesheet") {
						var url = elem.href.replace(/(&|\?)_cacheOverride=\d+/, '');
						elem.href = url + (url.indexOf('?') >= 0 ? '&' : '?') + '_cacheOverride=' + (new Date().valueOf());
					}
					parent.appendChild(elem);
				}
			}
			var protocol = window.location.protocol === 'http:' ? 'ws://' : 'wss://';
			var address = protocol + window.location.host + window.location.pathname + '/ws';
			var socket = new WebSocket(address);
			socket.onmessage = function (msg) {
				if (msg.data == 'reload') window.location.reload();
				else if (msg.data == 'refreshcss') refreshCSS();
			};
			if (sessionStorage && !sessionStorage.getItem('IsThisFirstTime_Log_From_LiveServer')) {
				console.log('Live reload enabled.');
				sessionStorage.setItem('IsThisFirstTime_Log_From_LiveServer', true);
			}
		})();
	}
	else {
		console.error('Upgrade your browser. This Browser is NOT supported WebSocket for Live-Reloading.');
	}
	// ]]>
</script>
*/

/*
Такие функции называют «асинхронными», потому что действие (загрузка скрипта) будет завершено не сейчас, а потом.

Если после вызова loadScript(…) есть какой-то код, то он не будет ждать, пока скрипт загрузится.

loadScript('/my/script.js');
// код, написанный после вызова функции loadScript,
// не будет дожидаться полной загрузки скрипта
// ...

Мы хотели бы использовать новый скрипт, как только он будет загружен. Скажем, он объявляет новую функцию, которую мы хотим выполнить.

Но если мы просто вызовем эту функцию после loadScript(…), у нас ничего не выйдет:

loadScript('/my/script.js'); // в скрипте есть "function newFunction() {…}"

newFunction(); // такой функции не существует!

Действительно, ведь у браузера не было времени загрузить скрипт. Сейчас функция loadScript никак не позволяет отследить момент загрузки. Скрипт загружается, а потом выполняется. Но нам нужно точно знать, когда это произойдёт, чтобы использовать функции и переменные из этого скрипта.

Давайте передадим функцию callback вторым аргументом в loadScript, чтобы вызвать её, когда скрипт загрузится:
*/
function loadScript2(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    daocument.head.append(script);
}

/*
Событие onload в основном выполняет функцию после загрузки и выполнения скрипта.

Теперь, если мы хотим вызвать функцию из скрипта, нужно делать это в колбэке:

loadScript('/my/script.js', function() {
  // эта функция вызовется после того, как загрузится скрипт
  newFunction(); // теперь всё работает
  ...
});

Смысл такой: вторым аргументом передаётся функция (обычно анонимная), которая выполняется по завершении действия.

для веб-браузера: Возьмём для примера реальный скрипт :
*/

function loadScript3(src, callback) {
    let script = document.createElement('script');
    script.src = src;
    script.onload = () => callback(script);
    document.head.append(script);
}

loadScript3('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/3.2.0/lodash.js', script => {
    alert(`Здорово, скрипт ${script.src} загрузился`);
    alert( _ ); 
});

/*
Когда внешняя функция loadScript выполнится, вызовется та, что внутри колбэка.

А что если нам нужно загрузить ещё один скрипт?..
*/

loadScript3('/setMap.js', function(script) {
    loadScript3('/setMap.js', function(script) {
        loadScript3('/setMap.js', function(script) {
            // ... и так далее, пока все скрипты не будут загружены 
        });
    })
});

/*
Каждое новое действие мы вынуждены вызывать внутри колбэка. Этот вариант подойдёт, когда у нас одно-два действия, но для большего количества уже не удобно. Альтернативные подходы мы скоро разберём.

Перехват ошибок*****************************************

В примерах выше мы не думали об ошибках. А что если загрузить скрипт не удалось? Колбэк должен уметь реагировать на возможные проблемы.

Ниже улучшенная версия loadScript, которая умеет отслеживать ошибки загрузки:
*/

function loadScript4(src, callback) {
    let script = document.createElement('script');

    script.src = src;

    script.onload = () => callback(null, script);
    script.onerror = |() => (new Error(`Не удалось загрузить скрипт ${src}`));

    document.head.append(script);
}



loadScript4('/setMap.js', function(script) {
    loadScript4('/setMap.js', function(script) {
        loadScript4('/setMap.js', function(script) {
            // ... и так далее, пока все скрипты не будут загружены 
        });
    })
});

/*
Мы вызываем callback(null, script) в случае успешной загрузки и callback(error), если загрузить скрипт не удалось.

Живой пример:
*/
loadScript4('/setMap.js', function(error, script) {
    if(error) {
        // обрабатываем ошибку
    } else {
        // скрипт успешно загружен
    }
});

/*
Опять же, подход, который мы использовали в loadScript, также распространён и называется «колбэк с первым аргументом-ошибкой» («error-first callback»).

Правила таковы:

Первый аргумент функции callback зарезервирован для ошибки. В этом случае вызов выглядит вот так: callback(err).
Второй и последующие аргументы — для результатов выполнения. В этом случае вызов выглядит вот так: callback(null, result1, result2…).
Одна и та же функция callback используется и для информирования об ошибке, и для передачи результатов.

Адская пирамида вызовов********************************

На первый взгляд это рабочий способ написания асинхронного кода. Так и есть. Для одного или двух вложенных вызовов всё выглядит нормально.

Но для нескольких асинхронных действий, которые нужно выполнить друг за другом, код выглядит вот так:
*/

loadScript5('1.js', function(error, script) {

    if (error) {
        handleError(error);
    } else {
        //...
        loadScript5('2.js', function(error, script) {
            if (error) {
                handleError(error);
            } else {
                //...
                loadScript5('3.js', function(error, script) {
                    if (error) {
                        handleError(error);
                    } else {
                       // ...и так далее, пока все скрипты не будут загружены (*) 
                    }
                })
            }
        })
    }
})

/*
В примере выше:

Мы загружаем 1.js. Продолжаем, если нет ошибок.
Мы загружаем 2.js. Продолжаем, если нет ошибок.
Мы загружаем 3.js. Продолжаем, если нет ошибок. И так далее (*).
Чем больше вложенных вызовов, тем наш код будет иметь всё большую вложенность, которую сложно поддерживать, особенно если вместо ... у нас код, содержащий другие цепочки вызовов, условия и т.д.

Иногда это называют «адом колбэков» или «адской пирамидой колбэков».


Пирамида вложенных вызовов растёт вправо с каждым асинхронным действием. В итоге вы сами будете путаться, где что есть.

Такой подход к написанию кода не приветствуется.

Мы можем попытаться решить эту проблему, изолируя каждое действие в отдельную функцию, вот так:
*/

loadScript6('1.sp', step1);

function step1(error, script) {
    if (error) {
        handleError(error); 
    } else {
        //...
        loadScript('2.js', step2);
    }  
}

function step2 (error, script) {
    if (error) {
        handleError(error);
    } else {
        //...
        loadScript('3.js', step3);
    }
}

function step3 (error, script) {
    if (error) {
        handleError(error);
    } else {
        // ...и так далее, пока все скрипты не будут загружены (*)
    }
};

/*
Заметили? Этот код делает всё то же самое, но вложенность отсутствует, потому что все действия вынесены в отдельные функции.

Код абсолютно рабочий, но кажется разорванным на куски. Его трудно читать, вы наверняка заметили это. Приходится прыгать глазами между кусками кода, когда пытаешься его прочесть. Это неудобно, особенно, если читатель не знаком с кодом и не знает, что за чем следует.

Кроме того, все функции step* одноразовые, и созданы лишь только, чтобы избавиться от «адской пирамиды вызовов». Никто не будет их переиспользовать где-либо ещё. Таким образом, мы, кроме всего прочего, засоряем пространство имён.

Нужно найти способ получше.

К счастью, такие способы существуют. Один из лучших — использовать промисы, о которых рассказано в следующем файле.
*/