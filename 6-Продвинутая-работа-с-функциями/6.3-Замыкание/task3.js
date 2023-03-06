let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    console.log(`${phrase}, ${user}`);
  }
}

sayHi();

//Какой будет результат у вызова на последней строке?

// Отвкет:
// Будет ошибка, т. к. функция живет внутри блока if
