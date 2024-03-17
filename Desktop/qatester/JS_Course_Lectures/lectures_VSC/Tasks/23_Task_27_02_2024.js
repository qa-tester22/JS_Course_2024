/*
пример программы на JavaScript, которая формирует корзину покупателя в зависимости от заданных условий по цене:
*/
// Задача 23. Выбор десерта. 
// Какой десерт окажется в корзине покупателя после выполнения данной программы?

// Массив товаров для десерта
const desserts = [
  { name: "Пирожное", price: 120 },
  { name: "Мороженое", price: 90 },
  { name: "Торт", price: 250 }
];

// Функция для поиска десерта для покупателя
function findTheBestProduct(products) {
  let customerProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > customerProduct.price) {
      customerProduct = products[i];
    }
  }
  return customerProduct;
}

// Поиск десерта для покупателя
const theBestDessert = findTheBestProduct(desserts);

// Вывод выбранного десерта
console.log("Наслаждайтесь лучшим десертом:", theBestDessert.name);

/*
Варианты ответов:

1. "Пирожное", 
2. "Мороженое", 
3. "Торт", 
4. "Ни один из перечисленных"


Выберите один ответ.
/ можно просто нажать на нужную цифру-эмоджи или в комментариях ответить. Если что-то не понятно - задавайте вопросы в комментариях.
:one:   :two:   :three:   :four:
//**************************************************************************************
// Правильный ответ: 3. "Торт".

Программа выбирает десерт, основываясь на самом высоком значении цены (`price`) из массива `desserts`. Точка перед `price` означает, что мы обращаемся к свойству `price` в каждом объекте товара в массиве `desserts`.

Ответ: 3. "Торт". 

Поскольку "Торт" имеет самую высокую цену среди всех десертов в массиве, он будет выбран как лучший десерт для покупателя.

`desserts` представляет собой массив объектов `desserts`, который содержит информацию о различных десертах. Каждый объект в массиве представляет один вид десерта и содержит два свойства: `name`, которое обозначает название десерта, и `price`, которое обозначает его цену.

Например, объект `{ name: "Пирожное", price: 120 }` представляет пирожное с ценой 120, объект `{ name: "Мороженое", price: 90 }` представляет мороженое с ценой 90, и так далее.

Этот массив будет использоваться в программе для выбора самого дорогого десерта для покупателя.

Функция `findTheBestProduct` принимает массив продуктов в качестве аргумента. Она начинает с предположения, что первый продукт в массиве (`products[0]`) является самым дорогим. Затем она проходит по всем остальным продуктам в массиве с помощью цикла `for` и сравнивает цены каждого продукта с ценой предполагаемого самого дорогого продукта (`customerProduct`). Если цена текущего продукта больше цены предполагаемого самого дорогого продукта, то `customerProduct` обновляется, и теперь в нем хранится текущий продукт с более высокой ценой. После прохождения всех продуктов в массиве функция возвращает найденный самый дорогой продукт.

Таким образом, после выполнения этой функции переменная `theBestDessert` будет содержать объект десерта с самой высокой ценой, который затем выводится на экран.

На экран выводится только название продукта, потому что в выводе используется только свойство `name` объекта `theBestDessert`, а не его цена. В коде вывода мы используем `theBestDessert.name`, что означает, что будет выведено только название продукта.

Если вы хотите вывести и цену продукта, вам нужно добавить соответствующий код. Например:

console.log("Наслаждайтесь лучшим десертом:", theBestDessert.name, "- Цена:", theBestDessert.price);

Такой код выведет и название десерта, и его цену.

Измените программу (findThePopularProduct(products)) так, чтобы лучшим продуктом для покупателя считался самый дешевый десерт.
*/
/*
Для изменения программы так, чтобы лучшим продуктом для покупателя считался самый дешевый десерт, нужно изменить условие в функции `findTheBestProduct`. Вместо сравнения с текущим лучшим продуктом по цене (`>`) мы будем сравнивать с текущим лучшим продуктом по цене наоборот (`<`).

Вот измененный код:
*/

// Массив товаров для десерта
// const desserts = [
    // { name: "Пирожное", price: 120 },
    // { name: "Мороженое", price: 90 },
    // { name: "Торт", price: 250 }
//   ];
  
  // Функция для поиска популярного десерта для покупателя
  function findThePopularProduct(products) {
    let popularProduct = products[0];
    for (let i = 1; i < products.length; i++) {
      if (products[i].price < popularProduct.price) {
        popularProduct = products[i];
      }
    }
    return popularProduct;
  }
  
  // Поиск популярного десерта для покупателя
  const thePopularDessert = findThePopularProduct(desserts);
  
  // Вывод выбранного десерта
  console.log("Наслаждайтесь популярным десертом:", thePopularDessert.name);

// Теперь программа выберет самый дешевый десерт для покупателя.

/*
// Массив товаров для десерта
const desserts = [
  { name: "Пирожное", price: 120 },
  { name: "Мороженое", price: 90 },
  { name: "Торт", price: 250 }
];

// Функция для поиска самого дорогого товара
function findMostExpensiveProduct(products) {
  let mostExpensiveProduct = products[0];
  for (let i = 1; i < products.length; i++) {
    if (products[i].price > mostExpensiveProduct.price) {
      mostExpensiveProduct = products[i];
    }
  }
  return mostExpensiveProduct;
}

// Поиск самого дорогого десерта
const mostExpensiveDessert = findMostExpensiveProduct(desserts);

// Вывод выбранного десерта
console.log("Выбранный десерт:", mostExpensiveDessert.name);


// Этот код находит самый дорогой десерт в массиве `desserts` и выводит его название в консоль.
*/

/*
выбор товара средней цены:

const dessert = [
  { name: 'Пирожное', price: 80 },
  { name: 'Мороженое', price: 100 },
  { name: 'Торт', price: 120 },
];

// Функция для поиска продукта средней цены в массиве
const findAveragePriceProduct = (products) => {
  const sortedProducts = products.sort((a, b) => a.price - b.price);
  const middleIndex = Math.floor(sortedProducts.length / 2);
  return sortedProducts[middleIndex];
};

const averageDessert = [findAveragePriceProduct(dessert)];

console.log("Десерт в корзине покупателя:", averageDessert);


// А теперь добавим вопрос с 4 вариантами ответа:


const question = "Какой товар в корзине покупателя является средней ценой?";
const options = [
  { text: "Пирожное", correct: false },
  { text: "Мороженое", correct: true },
  { text: "Торт", correct: false },
  { text: "Ни один из перечисленных", correct: false }
];

console.log(question);
options.forEach(option => console.log(option.text));
*/

/*
Этот код добавляет вопрос "Какой товар в корзине покупателя является средней ценой?" и предоставляет 4 варианта ответа на основе товаров в корзине покупателя.

// Массив товаров для десерта
const desserts = [
  { name: "Пирожное", price: 120 },
  { name: "Мороженое", price: 90 },
  { name: "Торт", price: 250 }
];

// Функция для расчета средней цены товаров
function calculateAveragePrice(products) {
  let total = 0;
  products.forEach(product => total += product.price);
  return total / products.length;
}

// Определение средней цены для десертов
const averagePrice = calculateAveragePrice(desserts);

// Фильтрация товаров по средней цене
const basket = desserts.filter(product => product.price >= averagePrice - 20 && product.price <= averagePrice + 20);

// Вопрос о выборе товара в корзине покупателя
const question = "Какой товар окажется в корзине покупателя после выполнения данной программы?";
const options = [
  { text: "Пирожное", correct: false },
  { text: "Мороженое", correct: true },
  { text: "Торт", correct: false },
  { text: "Ни один из перечисленных", correct: false }
];

console.log(question);
options.forEach(option => console.log(option.text));
*/
/*
В этом коде сначала определяются товары для десерта, затем вычисляется средняя цена для них, и далее происходит фильтрация товаров по средней цене. После этого задается вопрос о выборе товара в корзине покупателя, и выводятся варианты ответа.
*/
/*
const fruits = [
    { name: 'Яблоко', price: 50 },
    { name: 'Банан', price: 40 },
    { name: 'Апельсин', price: 60 },
  ];
  
  const vegetables = [
    { name: 'Помидор', price: 60 },
    { name: 'Огурец', price: 35 },
    { name: 'Морковь', price: 45 },
  ];
  
  const meat = [
    { name: 'Свинина', price: 250 },
    { name: 'Говядина', price: 200 },
    { name: 'Курица', price: 150 },
  ];
  
  const dessert = [
    { name: 'Пирожное', price: 80 },
    { name: 'Мороженое', price: 100 },
    { name: 'Торт', price: 120 },
  ];
  
  // Функция для вычисления средней цены продуктов в массиве
  const calculateAveragePrice = (products) => {
    const totalPrice = products.reduce((sum, product) => sum + product.price, 0);
    return totalPrice / products.length;
  };
  
  // Функция для поиска продукта с максимальной ценой в массиве
  const findMaxPriceProduct = (products) => {
    return products.reduce((maxProduct, product) => (product.price > maxProduct.price ? product : maxProduct), products[0]);
  };
  
  // Функция для поиска продукта с минимальной ценой в массиве
  const findMinPriceProduct = (products) => {
    return products.reduce((minProduct, product) => (product.price < minProduct.price ? product : minProduct), products[0]);
  };
  
  const expensiveFruits = [findMaxPriceProduct(fruits)];
  const cheapVegetables = [findMinPriceProduct(vegetables)];
  const averageMeat = [findMaxPriceProduct(meat)]; // В данном случае мы используем функцию findMaxPriceProduct, так как она возвращает продукт с максимальной ценой
  
  console.log("Дорогие фрукты:", expensiveFruits);
  console.log("Дешевые овощи:", cheapVegetables);
  console.log("Мясо средней цены:", averageMeat);
  */
/*
// Массивы с товарами
const fruits = [
  { name: "Яблоко", price: 50 },
  { name: "Банан", price: 30 },
  { name: "Апельсин", price: 40 },
];

const vegetables = [
  { name: "Помидор", price: 60 },
  { name: "Огурец", price: 35 },
  { name: "Морковь", price: 45 },
];

const meat = [
  { name: "Говядина", price: 300 },
  { name: "Свинина", price: 250 },
  { name: "Курица", price: 150 },
];

const dessert = [
  { name: "Пирожное", price: 100 },
  { name: "Мороженое", price: 80 },
  { name: "Печенье", price: 120 },
];

// Функция для формирования корзины покупателя
function createBasket(products, condition) {
  let basket = [];
  
  switch (condition) {
    case "дорогие":
      basket = products.filter(product => product.price > 200);
      break;
    case "дешевые":
      basket = products.filter(product => product.price < 100);
      break;
    case "средняя цена":
      const totalPrices = products.map(product => product.price);
      const averagePrice = totalPrices.reduce((acc, curr) => acc + curr, 0) / totalPrices.length;
      basket = products.filter(product => product.price >= averagePrice - 20 && product.price <= averagePrice + 20);
      break;
    default:
      console.log("Неверное условие");
  }

  return basket;
}

// Пример использования
const expensiveFruits = createBasket(fruits, "дорогие");
console.log("Дорогие фрукты:", expensiveFruits);

const cheapVegetables = createBasket(vegetables, "дешевые");
console.log("Дешевые овощи:", cheapVegetables);

const averageMeat = createBasket(meat, "средняя цена");
console.log("Мясо средней цены:", averageMeat);
*/
/*
Этот код создает функцию `createBasket`, которая принимает два аргумента: массив продуктов и условие по цене ("дорогие", "дешевые", "средняя цена"). В зависимости от условия, функция фильтрует товары и возвращает корзину с покупками.
*/