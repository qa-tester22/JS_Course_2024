/*
JavaScript носорог

Реrулярные выражения
Регулярное выражение (regular expression или regex, или regexp) является неким
подмножеством языка JavaScript. 
Это модификация общего языка, предоставляемая
многими языками программирования и представляющая компактный способ выполнения операций сложного поиска и замены в строках. 

Регулярные выражения в JavaScript представляются объектом RegExp, и его литеральный синтаксис состоит из символов между парой косых черт. 

Вот несколько примеров (выглядящих бессмысленно, если вы никогда не видели регулярных выражений прежде).
// чрезвычайно простое средство распознавания адресов электронной почты

const email = / \b [ a-z0-9 . _- J +@ [a-z_- ] + ( ?:\. [а- z]+) +\Ь/ ;

// распознавание номера телефона в США

const phone = /(:? \+1 ) ? ( : ? \ ( \d {3}\) \s?  \d{3} [ \ s- ] ? ) \d{3} [\ s- ] ? \d{4 } / ;
*/