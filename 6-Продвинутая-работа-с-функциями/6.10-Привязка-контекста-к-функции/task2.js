function f() {
  alert(this.name);
}

f = f.bind({ name: "Вася" }).bind({ name: "Петя" });

f();


// Что выведет этот код?
// Ответ: Вася