// Задача 24. Получение информации из объектов.
/*
Предположим, вы разрабатываете приложение для управления задачами в командной системе. У вас есть объект `TaskList`, который представляет список задач. Каждая задача содержит информацию, такую как название, описание, статус выполнения и т.д. Вы хотите добавить метод `printTaskDetails`, который будет выводить на консоль подробную информацию о каждой задаче в списке. Для этого вы используете цикл для обхода всех задач в списке и формируете строку с информацией о каждой задаче.
*/

// Создаем объект TaskList
const TaskList = {
  tasks: [
    { name: "Подготовить отчет", description: "Подготовить ежемесячный отчет по финансам", status: "в процессе" },
    { name: "Провести собрание", description: "Организовать собрание с командой для обсуждения новых проектов", status: "запланировано" },
    { name: "Обновить дизайн", description: "Обновить дизайн веб-сайта", status: "выполнено" }
  ],

  // Метод для печати подробной информации о каждой задаче
  printTaskDetails: function() {
      }
};
// В этом контексте метод `printTaskDetails` помогает управлять списком задач, обеспечивая видимость состояния каждой из них для участников команды.

// Какой из следующих вариантов правильно выведет на консоль названия и описания задач из объекта `TaskList`, используя стандартные циклы JavaScript?

// 1)
// TaskList.printTaskDetails = function() {
//     for (let i = 0; i < this.tasks.length; i++) {
//       console.log(this.status + " | " + this.tasks[i].name + ": " + this.tasks[i].description);
//     }
//   }


// 2)
// TaskList.printTaskDetails = function() {
//     for (let i = 0; i < this.tasks.length; i++) {
//       let task = this.tasks[i];
//       console.log("Задача: " + task.name);
//       console.log("Описание: " + task.description);
//       console.log("Статус: " + task.status);
//       console.log("-------------------");
//     }
//   }


// 3)
  //    TaskList.printTaskDetails = () => {
//     for (let task of this.tasks) {
//       console.log(task.name + ": " + task.description + " | " + task.status);
//     }
//   }

// 4)
  
  TaskList.printTaskDetails = function() {
    for (let i in this.task) {
      let task = this.task[i];
      console.log("Задача: " + task.name);
      console.log("Описание: " + task.description);
      console.log("Статус: " + task.status);
      console.log("-------------------");
    }
  }
  

  // Вызываем метод для печати подробной информации о задачах
  TaskList.printTaskDetails();
  
/*
  Выберите один ответ.
  / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
  :one:   :two:   :three:   :four:

  //**************************************************************************************
  // Правильный ответ: 2. 
  
Когда выбирается правильный вариант (в данном случае, вариант 2), происходит следующее:

1. Метод `printTaskDetails` добавляется к объекту `TaskList`.
2. Внутри метода создается цикл `for`, который итерирует по массиву задач `this.tasks`.
3. На каждой итерации цикла создается переменная `task`, содержащая текущую задачу.
4. Для каждой задачи выводится на консоль ее название, описание и статус с помощью команды `console.log()`.
5. Между выводом информации о каждой задаче добавляется строка-разделитель `console.log("-------------------")`, чтобы разделить информацию о задачах друг от друга.
6. В результате вызова метода `TaskList.printTaskDetails()`, на консоль выводится подробная информация о каждой задаче в списке `TaskList`.

Таким образом, метод `printTaskDetails` позволяет управлять списком задач, обеспечивая видимость состояния каждой из них для участников команды путем вывода подробной информации о каждой задаче.











//   // Метод для печати подробной информации о каждой задаче
// //   printTaskDetails: function() {
// //     for (let i = 0; i < this.tasks.length; i++) {
// //       let task = this.tasks[i];
// //       console.log("Задача: " + task.name);
// //       console.log("Описание: " + task.description);
// //       console.log("Статус: " + task.status);
// //       console.log("-------------------");
// //     }
// //   }
// // };


// // В этом контексте метод `printTaskDetails` помогает управлять списком задач, обеспечивая видимость состояния каждой из них для участников команды.

// // Какой из следующих вариантов правильно выведет на консоль названия и описания задач из объекта `TaskList`, используя стандартные циклы JavaScript?

// // A)

// printTaskDetails: function() {
//   for (let i = 0; i < this.tasks.length; i++) {
//     console.log(this.tasks[i].name + ": " + this.tasks[i].description);
//   }
// }


// // // B)

// // printTaskDetails: function() {
// //   for (let task of this.tasks) {
// //     console.log(task.name + ": " + task.description);
// //   }
// // }


// // // // C)

// // printTaskDetails: function() {
// //   for (let task in this.tasks) {
// //     console.log(this.tasks[task].name + ": " + this.tasks[task].description);
// //   }
// // }


// // // 4)

// // printTaskDetails: function() {
// //   for (let i in this.task) {
// //     let task = this.task[i];
// //     console.log("Задача: " + task.name);
// //     console.log("Описание: " + task.description);
// //     console.log("Статус: " + task.status);
// //     console.log("-------------------");
// //   }
// // }

// }
// // Вызываем метод для печати подробной информации о задачах
// TaskList.printTaskDetails();





/*
Предположим, вы разрабатываете приложение для управления задачами в командной системе. У вас есть объект `TaskList`, который представляет список задач. Каждая задача содержит информацию, такую как название, описание, статус выполнения и т.д. Вы хотите добавить метод `printTaskDetails`, который будет выводить на консоль подробную информацию о каждой задаче в списке. Для этого вы используете цикл для обхода всех задач в списке и формируете строку с информацией о каждой задаче.


// Создаем объект TaskList
const TaskList = {
  tasks: [
    { name: "Подготовить отчет", description: "Подготовить ежемесячный отчет по финансам", status: "в процессе" },
    { name: "Провести собрание", description: "Организовать собрание с командой для обсуждения новых проектов", status: "запланировано" },
    { name: "Обновить дизайн", description: "Обновить дизайн веб-сайта", status: "выполнено" }
  ],
  
//   // Метод для печати подробной информации о каждой задаче
//   printTaskDetails: function() {
//     for (let i = 0; i < this.tasks.length; i++) {
//       let task = this.tasks[i];
//       console.log("Задача: " + task.name);
//       console.log("Описание: " + task.description);
//       console.log("Статус: " + task.status);
//       console.log("-------------------");
//     }
//   }
// };


// В этом контексте метод `printTaskDetails` помогает управлять списком задач, обеспечивая видимость состояния каждой из них для участников команды.

// Какой из следующих вариантов правильно выведет на консоль названия и описания задач из объекта `TaskList`, используя стандартные циклы JavaScript?

// A)

// printTaskDetails: function() {
//   for (let i = 0; i < this.tasks.length; i++) {
//     console.log(this.tasks[i].name + ": " + this.tasks[i].description);
//   }
// }


// B)

// printTaskDetails: function() {
//   for (let task of this.tasks) {
//     console.log(task.name + ": " + task.description);
//   }
// }


// // C)

// printTaskDetails: function() {
//   for (let task in this.tasks) {
//     console.log(this.tasks[task].name + ": " + this.tasks[task].description);
//   }
// }


// Какой из вариантов верно выведет названия и описания задач?

// Какой вариант правильно выведет подробную информацию о задачах?

// 1)

// printTaskDetails: function() {
//   for (let i = 0; i < this.tasks.length; i++) {
//     let task = this.tasks[i];
//     console.log("Задача: " + task.name);
//     console.log("Описание: " + task.description);
//     console.log("Статус: " + task.status);
//     console.log("-------------------");
//   }
// }



// // 2)

// printTaskDetails: function() {
//   let self = this;
//   this.tasks.forEach(function(task) {
//     console.log("Задача: " + task.name);
//     console.log("Описание: " + task.description);
//     console.log("Статус: " + task.status);
//     console.log("-------------------");
//   });
// }


// // 3)
// printTaskDetails: function() {
//   for (let task of this.tasks) {
//     console.log("Задача: " + task.name);
//     console.log("Описание: " + task.description);
//     console.log("Статус: " + task.status);
//     console.log("-------------------");
//   }
// }


// // 4)

// printTaskDetails: function() {
//   for (let i in this.tasks) {
//     let task = this.tasks[i];
//     console.log("Задача: " + task.name);
//     console.log("Описание: " + task.description);
//     console.log("Статус: " + task.status);
//     console.log("-------------------");
//   }
// }

}
// Вызываем метод для печати подробной информации о задачах
TaskList.printTaskDetails();


/*


Объяснение:

1) В этом варианте используется обычный цикл for, который итерируется по элементам массива tasks, что является корректным способом обхода массива.

2) Вариант 2 также использует forEach, который мы исключили из рассмотрения.

3) Вариант 3 использует цикл for...of, который также является корректным способом итерации по элементам массива.

4) Вариант 4 также использует forEach, который мы исключили из рассмотрения.

Таким образом, правильным ответом является вариант A.

*/


/* ***************************************************************

Хорошая простая задача:

function MyObject() {
  this.value = 10;
  
  this.printValue = function() {
    console.log(this.value);
  };
}

var obj = new MyObject();
obj.printValue();

/*

Какой будет вывод в консоль?

A) `10`  
B) `undefined`  
C) `window.value`  
D) `ReferenceError: value is not defined`

Правильный ответ 10.
*/