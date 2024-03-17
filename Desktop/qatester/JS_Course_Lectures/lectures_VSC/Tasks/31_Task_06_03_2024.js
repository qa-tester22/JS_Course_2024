/* Задача 31: Семейные узы.
*/
function Family(lastName) {
    this.lastName = lastName;
    this.addMember = function(memberType, details) {
        this[memberType] = { ...details };
    };
}

const skriptunovyFamily = new Family("Скриптуновы");
skriptunovyFamily.addMember("mother", { name: "Анна", age: 35, profession: "Учитель" });
skriptunovyFamily.addMember("father", { name: "Иван", age: 40, profession: "Инженер" });
skriptunovyFamily.addMember("daughter", { name: "Екатерина", age: 10, hobby: "Рисование" });
skriptunovyFamily.addMember("son", { name: "Алексей", age: 15, hobby: "Футбол" });

const sonsHobby = skriptunovyFamily.son.hobby;
console.log(sonsHobby); // Output: "Футбол"

/*
Вопрос: Какое увлечение у сына в семье Скриптуновых?

1. Учитель
2. Инженер
3. Рисование
4. Футбол 

Выберите один ответ.
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
:one:   :two:   :three:   :four:
******************************************************************************************************

Правильный ответ 4. Футбол.

Объяснение: При вызове метода `addMember()`, который добавляет члена семьи, мы передаем тип члена семьи (например, "son") и детали этого члена семьи в виде объекта. Затем внутри метода `addMember()` мы используем оператор распыления (`...details`), чтобы развернуть переданные детали в новый объект, который мы сохраняем в свойстве объекта `skriptunovyFamily` под именем, соответствующим типу члена семьи ("son" в данном случае).

Таким образом, когда мы обращаемся к свойству `skriptunovyFamily.son.hobby`, мы получаем значение свойства `hobby` сына, которое равно "Футбол".

Оператор распыления, также известный как спред оператор (`...`), используется для развертывания значений массива или объекта в местах, где ожидается несколько аргументов или элементов.

В данном случае, в методе `addMember()` мы используем спред оператор (`...details`), чтобы развернуть переданные детали в виде массива параметров, который мы затем используем для создания нового объекта с помощью синтаксиса объектного литерала `{ ...details }`. Это позволяет нам скопировать свойства и значения из массива параметров в новый объект, что упрощает добавление новых членов семьи с произвольными деталями.




const family = {
    lastName: "Скриптуновы",
    mother: {
        name: "Анна",
        age: 35,
        profession: "Учитель"
    },
    father: {
        name: "Иван",
        age: 40,
        profession: "Инженер"
    },
    daughter: {
        name: "Екатерина",
        age: 10,
        hobby: "Рисование"
    },
    addMember(memberType, ...details) {
        this[memberType] = { ...details };
    }
};

family.addMember("son", { name: "Алексей", age: 15, hobby: "Футбол" });

const sonsHobby = family.son.hobby;
console.log(sonsHobby); // Output: "Футбол"

/*
Вопрос: Какое увлечение у сына в семье Скриптуновых?

1. Учитель
2. Инженер
3. Рисование
4. Футбол (Правильный ответ)


   Выберите один ответ.
   / можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
   :one:   :two:   :three:   :four:

******************************************************************************************************
*/
/*
Правильный ответ: 4


*/