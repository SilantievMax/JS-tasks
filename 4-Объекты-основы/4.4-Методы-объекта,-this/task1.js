// Каким будет результат при обращении к свойству объекта ref? Почему?

function makeUser() {
  return {
    name: "John",
    ref: this,
  };
}

let user = makeUser();

// alert( user.ref.name ); // Каким будет результат?

console.log(user.ref.name); // undefined

// ответ
// Здесь значение this внутри makeUser() равно undefined, потому что
// оно вызывается как функция, а не через «точечный» синтаксис как метод.
