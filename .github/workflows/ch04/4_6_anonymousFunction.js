/*
Анонимная функция
Anonymous Function

Часть имени функции в заголовке функции не требуется, и вы можете создавать функции без имен. Это может показаться странным, потому что функция без имени подобна собаке без имени; у вас нет возможности позвонить! Однако анонимные функции могут быть назначены переменным при их создании, что дает вам те же возможности, что и использование имени в заголовке функции:
*/

let doTheThing = function(thingToDo) {
    console.log('I will do this thing: ' + thingToDo);
   //  document.write('I will do this thing: ' + thingToDo + "<br>")
   };
   
   doTheThing("sleep");
   
   
   /*
   Knowing the differences between anonymous and named functions
   Знание различий между анонимными и именованными функциями
   
   Есть несколько важных, а иногда и полезных различий между созданием именованной функции и присвоением анонимной функции переменной. 
   
   * Во-первых, анонимная функция, присвоенная переменной, существует только и может быть вызвана только после того, как программа выполнит присвоение. 
   
   Именованные функции доступны в любом месте программы.
   */
   
   // doTheThingNow("play"); // ReferenceError: Cannot access 'doTheThingNow' before initialization - нельзя вызвать до объявления
   
   let doTheThingNow = function(thingToDo) {
    console.log('I will do this thing: ' + thingToDo);
   //  document.write('I will do this thing: ' + thingToDo + "<br>")
   };
   
   doTheThingNow("walk");
   
   /*
   * Второе различие между именованными функциями и анонимными функциями, назначенными переменным, заключается в том, что вы можете изменить значение переменной и назначить ей другую функцию в любой момент. Это делает анонимные функции, присваиваемые переменным, более гибкими, чем именованные функции.
   */
   /*
    Анонимные функции, присваиваемые переменным, действительно позволяют более гибко изменять поведение переменной, так как вы можете переназначить переменную на другую функцию в любой момент.
   */
   
   // Именованная функция
   function greet() {
       console.log("Hello, world!");
   }
   
   // Анонимная функция, присваиваемая переменной
   let sayGoodbye = function() {
       console.log("Goodbye, world!");
   };
   
   // Вызываем исходную функцию
   greet(); // Output: "Hello, world!"
   
   // Вызываем исходную анонимную функцию
   sayGoodbye(); // Output: "Goodbye, world!"
   
   // Переназначаем переменную на другую функцию
   sayGoodbye = function() {
       console.log("See you later, world!");
   };
   
   // Вызываем новую функцию, к которой теперь ссылается переменная
   sayGoodbye(); // Output: "See you later, world!"
   
   /*
   В этом примере `greet()` - это именованная функция, а `sayGoodbye` - это переменная, которой была присвоена анонимная функция. После этого переменная `sayGoodbye` переназначается на другую функцию. Такое переназначение переменной невозможно с именованными функциями, что делает анонимные функции более гибкими в этом отношении.
   */
   
   /*
   Самовыполняющиеся анонимные функции
   Self-executing anonymous functions
   
   Другое использование анонимных функций — это самоисполняющиеся функции. Самоисполняющаяся анонимная функция — это функция, которая выполняется сразу после создания.
   
   Чтобы превратить обычную анонимную функцию в самовыполняющуюся, вы просто заключаете анонимную функцию в круглые скобки и добавляете после нее набор круглых скобок и точку с запятой.
   
   Преимущество использования самовыполняющихся анонимных функций заключается в том, что переменные, которые вы создаете внутри них, уничтожаются при выходе из функции. Таким образом, вы можете избежать конфликтов между именами переменных и избежать хранения переменных в памяти после того, как они больше не нужны.  как писать и использовать самовыполняющиеся анонимные функции:
   */
   
   let myVariable = 'I live outside the function';
   
   (function() {
       let myVariable = 'I live in this anonymous function';
       console.log(myVariable);
   })();
   
   console.log(myVariable);
   
   
   var myVariableVar = 'I live outside the function with var';
   
   (function() {
       var myVariableVar = 'I live in this anonymous function with var';
       console.log(myVariableVar);
   })();
   
   console.log(myVariableVar);
   
   
   myVariable__ = 'I live outside the function with __';
   console.log(myVariable__);  // I live outside the function with __
   
   (function() {
       myVariable__ = 'I live in this anonymous function with __';
       console.log(myVariable__);
   })();
   
   console.log(myVariable__);  // I live in this anonymous function with __
   
   // не защищает область от глобальной переменной