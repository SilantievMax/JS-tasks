let hamster = {
  stomach: [],

  eat(food) {
    this.stomach = [food];
  },
};

let speedy = {
  __proto__: hamster,
  stomach: [],
};

let lazy = {
  __proto__: hamster,
  stomach: [],
};

speedy.eat("apple");
console.log(speedy.stomach);

console.log(lazy.stomach);
