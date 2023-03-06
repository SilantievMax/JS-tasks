function Counter() {
  let count = 0;

  this.up = function () {
    return ++count;
  };
  this.down = function () {
    return --count;
  };
}

let counter = new Counter();

console.log(counter.up()); // ?
console.log(counter.up()); // ?
console.log(counter.down()); // ?

//   Будет ли он работать? Что покажет?

// Ответ:
// Будет работать, вывод 1, 2, 1
