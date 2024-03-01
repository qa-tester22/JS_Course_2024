/*
Understanding Multidimensional Arrays
// Понимание многомерных массивов

Вы можете не только хранить массивы внутри массивов, но даже помещать массивы внутри массивов внутри массивов. Это может продолжаться и продолжаться.

Массив, содержащий массив, называется многомерным массивом. Чтобы написать многомерный массив, вы просто добавляете несколько наборов квадратных скобок к имени переменной. Например:
*/


let multiArray = []; // Объявление пустого массива

// Заполнение массива
multiArray[0] = []; // Создание внутреннего массива в multiArray[0]
multiArray[0][0] = []; // Создание внутреннего массива в multiArray[0][0]
multiArray[0][0][0] = []; // Создание внутреннего массива в multiArray[0][0][0]
multiArray[0][0][0][0] = 'Value'; // Присвоение значения элементу multiArray[0][0][0][0]
multiArray[0][0][0][1] = 'Value1';

console.log(multiArray[0][0][0][1]); // Вывод значения элемента multiArray[0][0][0][0]  // Value

// Такой подход корректно создаст многомерный массив и позволит вам обращаться к его элементам по индексам.
console.log(multiArray);  // [ [ [ [Array] ] ] ]

// Чтобы увидеть реальное содержимое многомерного массива, вы можете использовать циклы или выводить каждый элемент по отдельности, чтобы увидеть его значения.

/*
Многомерные массивы может быть сложно визуализировать, когда вы впервые начинаете с ними работать. 
Стол с ящиками, в которых много коробочек. В каждой коробочке может быть еще коробочки.
или Дом - в доме подъезды - в подъездах квартиры - в квартирах комнаты - в комнатах коробочки - в коробочках коробочки.
*/

/*
Вы также можете визуализировать многомерные массивы в виде иерархических списков или структур.

Например:

Лучшие альбомы по жанрам
1. Кантри
1.1 Джонни Кэш: Концерт в тюрьме Фолсом
1.2 Пэтси Клайн: сентиментально ваша
1.3 Хэнк Уильямс: Внутри я синий
2. Рок
2.1 Ти-Рекс: Слайдер
2.2 Нирвана: Неважно
2.3 Лу Рид: Трансформер
3. Панк
3.1 Флиппер: универсальный
3.2 Мертвые молочники: Большая ящерица на моем заднем дворе
3.3 Патти Смит: Пасха
Вот код, который создаст массив:
// */ 
// не правильный способ формирования массива: 
// let bestAlbumsByGenre = []
// bestAlbumsByGenre[0] = 'Country';
// bestAlbumsByGenre[0][1][0] = 'Johnny Cash:Live at Folsom Prison';
// bestAlbumsByGenre[0][1][1] = 'Patsy Cline:Sentimentally Yours';
// bestAlbumsByGenre[0][1][2] = 'Hank Williams:I\'m Blue Inside'; 
// bestAlbumsByGenre[1] = "Rock"; 
// bestAlbumsByGenre[1][0] = "T-Rex:Slider"; 
// bestAlbumsByGenre[1][1] = "Nirvana:Nevermind"; 
// bestAlbumsByGenre[1][2] = "Lou Reed:Tranformer"; 
// bestAlbumsByGenre[2] = "Punk"; 
// bestAlbumsByGenre[2][0] = "Flipper:Generic"; 
// bestAlbumsByGenre[2][1] = "The Dead Milkmen:Big Lizard in my Backyard";
// bestAlbumsByGenre[2][2] = "Patti Smith:Easter";

// console.log(bestAlbumsByGenre);
// console.log(bestAlbumsByGenre[0][1][1]);

// [[["Country"], ['Johnny Cash:Live at Folsom Prison'], ['Patsy Cline:Sentimentally Yours'], ['Hank Williams:I\'m Blue Inside']]],[],[]]

// Способ 1 наполнения массива : правильный
// let bestAlbumsByGenre = [];
// bestAlbumsByGenre[0] = ['Country', 
//                         ['Johnny Cash:Live at Folsom Prison', 
//                          'Patsy Cline:Sentimentally Yours', 
//                          'Hank Williams:I\'m Blue Inside']
//                        ];
// bestAlbumsByGenre[1] = ['Rock', 
//                         ['T-Rex:Slider', 
//                          'Nirvana:Nevermind', 
//                          'Lou Reed:Tranformer']
//                        ];
// bestAlbumsByGenre[2] = ['Punk', 
//                         ['Flipper:Generic', 
//                          'The Dead Milkmen:Big Lizard in my Backyard', 
//                          'Patti Smith:Easter']
//                        ];

// console.log(bestAlbumsByGenre[2][1][1]); // Выводит "The Dead Milkmen:Big Lizard in my Backyard"

//  Способ 2 - правильное наполнение и извлечение элементов массива:
// let bestAlbumsByGenre = [];
// bestAlbumsByGenre[0] = ['Country',
//                         [],
//                         []
//                        ];
// bestAlbumsByGenre[1] = ['Rock',
//                         [],
//                         []
//                        ];
// bestAlbumsByGenre[2] = ['Punk',
//                         [],
//                         []
//                        ];

// bestAlbumsByGenre[0][1][0] = 'Johnny Cash:Live at Folsom Prison';
// bestAlbumsByGenre[0][1][1] = 'Patsy Cline:Sentimentally Yours';
// bestAlbumsByGenre[0][1][2] = 'Hank Williams:I\'m Blue Inside';

// bestAlbumsByGenre[1][1][0] = 'T-Rex:Slider';
// bestAlbumsByGenre[1][1][1] = 'Nirvana:Nevermind';
// bestAlbumsByGenre[1][1][2] = 'Lou Reed:Tranformer';

// bestAlbumsByGenre[2][1][0] = 'Flipper:Generic';
// bestAlbumsByGenre[2][1][1] = 'The Dead Milkmen:Big Lizard in my Backyard';
// bestAlbumsByGenre[2][1][2] = 'Patti Smith:Easter';

// console.log(bestAlbumsByGenre[0][1][0]); // Johnny Cash:Live at Folsom Prison

// лучший способ наполнения массива
let bestAlbumsByGenre = [];
bestAlbumsByGenre[0] = ['Country']; // Создаем массив для жанра Country
bestAlbumsByGenre[0][1] = []; // Создаем массив для списка альбомов жанра Country
bestAlbumsByGenre[0][1][0] = 'Johnny Cash:Live at Folsom Prison'; // Присваиваем значение первому альбому
bestAlbumsByGenre[0][1][1] = 'Patsy Cline:Sentimentally Yours'; // Присваиваем значение второму альбому
bestAlbumsByGenre[0][1][2] = 'Hank Williams:I\'m Blue Inside'; // Присваиваем значение третьему альбому

bestAlbumsByGenre[1] = ['Rock']; // Создаем массив для жанра Rock
bestAlbumsByGenre[1][1] = []; // Создаем массив для списка альбомов жанра Rock
bestAlbumsByGenre[1][1][0] = 'T-Rex:Slider'; // Присваиваем значение первому альбому
bestAlbumsByGenre[1][1][1] = 'Nirvana:Nevermind'; // Присваиваем значение второму альбому
bestAlbumsByGenre[1][1][2] = 'Lou Reed:Tranformer'; // Присваиваем значение третьему альбому

bestAlbumsByGenre[2] = ['Punk']; // Создаем массив для жанра Punk
bestAlbumsByGenre[2][1] = []; // Создаем массив для списка альбомов жанра Punk
bestAlbumsByGenre[2][1][0] = 'Flipper:Generic'; // Присваиваем значение первому альбому
bestAlbumsByGenre[2][1][1] = 'The Dead Milkmen:Big Lizard in my Backyard'; // Присваиваем значение второму альбому
bestAlbumsByGenre[2][1][2] = 'Patti Smith:Easter'; // Присваиваем значение третьему альбому

console.log(bestAlbumsByGenre[0][1][0]); // Johnny Cash:Live at Folsom Prison


