/*
Доступ к элементам массива

Вы можете получить доступ к элементам массивов так же, как вы их задали, используя квадратные скобки и номер индекса. Например, чтобы получить доступ к третьему элементу в любом массиве с именем myArray, вы должны использовать следующее:
*/

let progLang = ['Java', 'JavaScript', 'Pyton'];

console.log(progLang[1]);

/*
Чтобы получить доступ к элементам многомерного массива, просто добавьте больше квадратных скобок, чтобы добраться до нужного элемента:
*/

// let city = [];

// city[0] = ['Street One', 'Street Two', 'Street Three' ];

// city[0][0] = [1, 2, 3, 4, 5, 6, 7];  // houses
// city[0][1] = [8, 9, 10]; // Дома на улице
// city[0][2] = [11, 12, 13, 14]; // Дома на улице

// city[0][0][0] = [111, 222, 333, 444, 555, 666, 777]; // Квартиры в доме  apartments
// city[0][0][1] = [888, 999, 1010, 1111, 1212]; // Квартиры в доме
// city[0][0][2] = [1313, 1414, 1515]; // Квартиры в доме

// city[0][0][0] = [111, 222, 333, 444, 555, 666, 777] // apartment


// bestAlbumsByGenre[0][1]; // возвращает «Пэтси_ Клайн: Сентиментально ваш»;
/*
Чтобы проверить настройку и доступ к элементам массива, выполните следующие действия:
*/

let city = [];

city[0] = ['Street One', 'Street Two', 'Street Three' ];  // Streets of the city

console.log(city[0][0] + ' - city[0][0]');  // Street One

city[0][0] = [11, 12, 13];  // houses on the Street One

console.log(city[0][0] + " - city[0][0]");  // [ 11, 12, 13 ] - houses

city[0][0][0] = [111, 112, 113]  // Квартиры в доме 11
city[0][0][2] = [121, 122, 123]; // Квартиры в доме 12
city[0][0][3] = [131, 132, 133]; // Квартиры в доме 13

console.log(city[0][0][0] + ' - city[0][0][0] ');  // [ 111, 112, 113 ]

console.log(city + ' - city');

// city = [['Street One', [[11, [111, 222, 333]], 22, 33]], ['Street Two'], ['Street Three', []]];

city = [
    ['Street One', [
        [11, [
            111,
            112,
            113 
        ]
    ],
        [12, [
            121,
            122,
            123
        ]
    ],
        [13, [
            131,
            132,
            133
        ]
    ]
    ]
],
    ['Street Two', [
        [21, [
            211,
            212,
            213
        ]
    ], 
        [22, [
            221,
            222,
            223
        ]
    ],
        [23, [
            231,
            232,
            233
        ]
    ]
    ]
],
    ['Street Three', [
        [31, [
            311,
            312,
            313
        ]
    ],
        [32, [
            321,
            322,
            323
        ]
    ],
        [33, [
            331,
            332,
            333
        ]
    ]
    ]
]
]

 console.log('city - ' + city);  // city - Street One,11,111,112,113,12,121,122,123,13,131,132,133,Street Two,21,211,212,213,
                                   // 22, 221,222,223,23,231,232,233,Street Three,31,311,312,313,32,321,322,323,33,331,332,333

city = [['Street One',   [[11, [111,112,113]], [12, [121,122,123]], [13, [131,132,133]]]], 
        ['Street Two',   [[21, [211,212,213]], [22, [221,222,223]], [23, [231, 232,233]]]],
        ['Street Three', [[31, [311,312,313]], [32, [321,322,323]], [33, [331,332,333]]]]];
        
console.log('city: ' + city);  // city: Street One,11,111,112,113,12,121,122,123,13,131,132,133,Street Two,21,211,212,213,
                                  // 22,221,222,223,23,231,232,233,Street Three,31,311,312,313,32,321,322,323,33,331,332,333

/*

1. Откройте браузер Chrome и откройте консоль JavaScript.

Вы можете открыть консоль JavaScript с помощью меню Chrome или нажав Command + Option + J на Mac или Ctrl + Shift + J в Windows.

2. В консоли введите следующий оператор, а затем клавишу Return или Enter, чтобы создать массив с именем lengthsOfString:


let lengthsOfString = [2,4,1.5,80];

3. Введите имя массива, а затем порядковый номер в квадратных скобках, чтобы получить значение каждого элемента массива.

Например:


lengthsOfString[0];
lengthsOfString[3];
lengthsOfString[2];

4. Введите индексный номер, которого нет в массиве. Например:
lengthsOfString[4];

Обратите внимание, что значение этого элемента массива не определено.

5. Введите следующую команду, чтобы создать новую переменную для хранения всей имеющейся длины строки:


let totalLength = lengthsOfString[0] + lengthsOfString[1] + lengthsOfString[2] + lengthsOfString[3];


4.	Наконец, получите значение totalLength с помощью этой команды:
 totalLength;

*/

let lengthsOfString = [2,4,1.5,80];

console.log(lengthsOfString);  // [ 2, 4, 1.5, 80 ]

console.log(lengthsOfString[0]);  // 2
console.log(lengthsOfString[3]);  // 80
console.log(lengthsOfString[2]);  // 1.5

console.log(lengthsOfString[4]);  // undefined - нет в массиве

let totalLength = lengthsOfString[0] + lengthsOfString[1] + lengthsOfString[2] + lengthsOfString[3];

console.log(totalLength);  // 87.5
