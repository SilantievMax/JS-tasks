let animal = {
  jumps: null,
};

let rabbit = {
  __proto__: animal,
  jumps: true,
};

console.log(rabbit.jumps); // ? (1)

delete rabbit.jumps;

console.log(rabbit.jumps); // ? (2)

delete animal.jumps;

console.log(rabbit.jumps); // ? (3)

// Ответ
// true, берётся из rabbit.
// null, берётся из animal.
// undefined, такого свойства больше нет.
