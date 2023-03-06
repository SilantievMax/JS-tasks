// С использованием цикла.

const sumTo = (n) => {
  let result = 0;
  for (let i = n; i > 0; i--) {
    result += i;
  }
  return result;
};

// Через рекурсию, т.к. sumTo(n) = n + sumTo(n-1) for n > 1.

const sumTo = (n) => (n == 1 ? 1 : n + sumTo(n - 1));

// С использованием формулы арифметической прогрессии.

const sumTo = (n) => (n * (n + 1)) / 2;

console.log(sumTo(1));
console.log(sumTo(2));
console.log(sumTo(3));
console.log(sumTo(4));
console.log(sumTo(100));

//Какой вариант решения самый быстрый?
// Ответ
// арифметическая прогрессия
// С использованием цикла
// Через рекурсию
