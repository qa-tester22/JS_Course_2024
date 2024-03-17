/*
Map and Set
Отображения и наборы

В ЕSб введены две популярные структуры данных: отображения (map) и наборы
(set). 
Отображения подобны объектам, они способны сопоставлять ключи со значениями, а наборы подобны массивам за исключением того, что дубликаты не допускаются.

Map - Отображения **************************************

До появления ЕSб, когда требовалось сопоставить ключам значения, использовались объекты, поскольку объекты позволяют сопоставить строковые ключи со значениями объектов любых типов. Однако при использовании объектов для этой цели возникает много проблем.
• Прототипы, лежащие в основе объектов, способны создать сопоставления, о которых вы и не предполагали.
• Нет никакого простого способа узнать количество сопоставлений, находящихся в объекте.
• Ключи должны быть строками или символами, сопоставить со значениями объекты невозможно.
• Объекты не гарантируют порядка своих свойств.

Объект Мар ликвидирует эти недочеты и является превосходным выбором для сопоставления ключей со значениями (даже если ключи - строки). Предположим, например,
что у вас есть объекты пользователей, которые необходимо сопоставить с ролями.
*/

const u1 = { name: "Cynthia" };
const u2 = { name: "Jackson" };
const u3 = { name: "Olive" };
const u4 = { name: "James" };

// Сначала создадим отображение Map

const userRoles = new Map();

/*
Затем используем отображение для назначения пользователям ролей с использованием ее метода set () .

*/
userRoles.set(u1, "User");
userRoles.set(u2, "User");
userRoles.set(u3, "Admin");

/*
// бедный Джеймс . . . мы не назначили ему роль

Метод set () допускает также цепочки, что позволяет сэкономить на вводе.
*/
userRoles
    .set(u1, "User")
    .set(u2, "User")
    .set(u3, "Admin");

/*
Вы можете также передать в конструктор массив массивов.
*/
const userRoles2 = new Map([
    [u1, "User"],
    [u2, "User"],
    [u3, "Admin"],
]);

/*
Теперь, если необходимо выяснить роль пользователя u2, можно использовать
метод get () .
*/
userRoles2.get(u2);  // 
console.log(userRoles2.get(u2));  // User
console.log(userRoles.get(u2));   // User

/*
Вызов метода get для ключа, отсутствующего в отображении, возвратит значение
undefined. Кроме того, вы можете использовать метод 
has ( ) для определения наличия в отображении заданного ключа.
*/

console.log(userRoles2.has(u4));   //  false
console.log(userRoles2.get(u4));   // undefined
console.log(userRoles.has(u1));   // true
console.log(userRoles.get(u1));   // User

/*
Вызов метода set ( ) для ключа, уже присутствующего в отображении, приведет
к замене его значения.
*/
userRoles2.set(u1, "Admin");
console.log(userRoles2.get(u1));  // Admin

/*
Свойство size возвращает количество элементов в отображении map.
*/
console.log(userRoles2.size);  // 3 

/*
Метод keys () позволяет получить ключи в отображении, метод values () - возвратить значения, а метод entries () - получить элементы в виде массивов, в которых первый элемент - ключ, а второй - значение. Все эти методы возвращают
итерируемый объект, который может быть перебран в цикле for ... of. 

for ( let и of userRoles . keys ( ) )
console . log (u.name ) ;
for ( let r of userRoles . value s ( } )
console . log ( r) ;
for ( let ur of userRoles . entrie s ( ) )
console . log ( '$ { ur [ О ] . name } : $ { ur [ 1] } ' ) ;
11 обратите внимание : чтобы сделать этот перебор еще более
11 естественным, мы можем использовать деструктуризацию:
for ( let [u, r] of userRoles . entries ( ) )
console . log('${ u.name } : $ { r } ');
/ / метод entries () - это стандартный итератор для отображений, так
/ / вы можете сократить предыдущий пример :
for ( let [u, r] of userRoles )
console . log(' ${u.name ) : ${r }');
Если вместо итерируемого объекта необходим массив, вы можете использовать
оператор расширения.
[ . . . userRoles.values ( ) ]; / / [ "User", "User ", "Admin " ]
Чтобы удалить одиночный элемент из отображения, используйте метод delete ( ) .
userRoles.delete ( u2 ) ;
userRoles . s ize; 11 2
Наконец, если вы хотите удалить все элементы из отображения, то можете сделать это, используя метод clear ( ) .
userRoles.clear ();
userRoles. size; 11 о


Слабые отображения*************************************


Объект WeakМap идентичен объекту Мар, кроме следующего.
• Его ключи должны быть объектами.
• Ключи в WeakМap допускают сборку мусора.
• Объект WeakМap не может быть перебран или очищен.
Обычно JavaScript хранит объект в памяти, пока где-нибудь есть ссылка на него.
Например, если у вас будет объект, который является ключом в Мар, то JavaScript
будет хранить этот объект в памяти, пока объект Мар существует. С WeakМap все не
так. Из-за этого объект WeakMap не может быть перебран (есть слишком большая опасность, что при переборе произойдет доступ к объекту, который уже был уничтожен в процессе сборки мусора).
Благодаря этим свойствам объект WeakMap применяется для хранения закрытых
ключей в экземплярах объекта.
const SecretHolder = ( function ()
const secrets = new WeakМap ( ) ;
return class {
setSecret ( secret) {
secrets. set ( this, secret ) ;
getSecret () {
return secrets . get ( this ) ;
}) ( ) ;
Здесь мы поместили свой объект WeakMap в немедленно вызываемое функциональное выражение (IIFE) наравне с классом, который его использует. Вне IIFE мы
получаем класс SecretHolder, экземпляры которого способны хранить секреты. Мы
можем установить секрет, только используя метод setSecret, а получить к нему доступ - только через метод getSecret.
const а new SecretHolder ( ) ;
const Ь = new SecretHolder ();
a . setSecret ( ' secret А ' );
b . setSecret ( ' secret В ' );
a . getSecret ( ) ; 11 "secret А"
b . getSecret ( ) ; 11 "secret В"
Мы могли бы использовать обычный объект Мар, но сообщенные его экземплярам SecretHolder секреты никогда не будут уничтожены в процессе сборки мусора!


Set Наборы***********************************************


Набор (set) - это коллекция данных, в которой дубликаты недопустимы. Используя наш предыдущий пример, мы можем назначить пользователя на несколько
ролей. Например, у всех пользователей могла бы быть роль "User", а у администраторов - и "User", и "Adrnin". Однако для пользователя нет никакого логического
смысла иметь одну и ту же роль многократно. Набор - идеальная структура данных
для этого случая.
Сначала создайте экземпляр объекта Set.
const roles = new Set(); 

Если мы теперь хотим добавить роль пользователя, можем воспользоваться методом add ( ) .
roles.add ( "User" ); / / Набор [ 11User11 ]
Чтобы сделать этого пользователя администратором, вызовите метод add () снова.
roles . add ( "Admin") ; / / Набор [ "User", "Admin "
Как и у Мар, у объекта Set есть свойство size.
roles . size; 11 2
Достоинство наборов в том, что мы не должны выяснять, находится ли уже нечто
в наборе, прежде чем его добавим. При попытке добавить в набор нечто, что уже там
находится, ничего не происходит.
roles.add ( "User" );
roles . size;
11 Набор
11 2
"User", "Admin " ]
Чтобы удалить роль, мы просто вызываем метод delete (), который возвращает
true, если роль была в наборе, и false - в противном случае.
roles . delete ( "Admin" );
roles;
roles . delete ( "Admin") ;


Слабые наборы ******************************************


11 true
/ / Набор [ "User" J
/ / false
Слабые наборы могут содержать только объекты, и эти объекты удаляются в процессе сборки мусора. Как и в WeakМap, значения в WeakSet не могут быть перебраны,
что делает слабые наборы очень редко применяемыми. Фактически единственный
подходящий случай использования для слабых наборов - это когда необходимо
определять, есть ли данный объект в наборе.
Например, у Санта Клауса мог бы быть WeakSet по имени naughty (непослушные), чтобы он мог решить, кому достанется уголь.
const naughty = new WeakSet ();
const children = [
name : " Suzy" },
name : " Derek" } ,
] ;
naughty . add ( children [l] );
for ( let child of children)
if ( naughty . ha s ( child) )

console . log(' Yгoль для ${child . name } ! ');
else
console . log ( ' Пoдapки для ${child . name } ! ');
Расставаясь с объектной привычкой1
Если вы - опытный программист JavaScript, который является новичком в ЕSб,
возможно, вы уже привыкли использовать объекты для сопоставления значений.
И без сомнения, вы изучили все нюансы применения объектов в виде отображений,
позволяющие обойти подводные камни. Но теперь у вас есть реальные отображения,
и вы должны использовать их! Аналогично вы, вероятно, привыкли использовать
объекты с логическими значениями в качестве наборов; вам также больше не нужно
делать это. Когда вы создаете объект, остановитесь и спросите себя: "Я использую
этот объект, только чтобы получить отображение?" Если ответ - "Да': то рассмотрите возможность использования вместо него объекта Мар.

*/

