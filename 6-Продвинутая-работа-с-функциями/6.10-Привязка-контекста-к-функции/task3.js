function sayHi() {
  alert(this.name);
}
sayHi.test = 5;

let bound = sayHi.bind({
  name: "Вася",
});

alert(bound.test);

//  что выведет? почему?
// Ответ: undefined
// Результатом работы bind является другой объект. У него уже нет свойства test