// Как найти?…

// Таблицу с id="age-table".
// Все элементы label внутри этой таблицы (их три).
// Первый td в этой таблице (со словом «Age»).
// Форму form с именем name="search".
// Первый input в этой форме.
// Последний input в этой форме.

// 1. Таблица с `id="age-table"`.
// let table = document.getElementById("age-table");

// 2. Все label в этой таблице
// table.getElementsByTagName("label");
// или
// document.querySelectorAll("#age-table label");

// 3. Первый td в этой таблице
// table.rows[0].cells[0];
// или
// table.getElementsByTagName("td")[0];
// или
// table.querySelector("td");

// 4. Форма с name="search"
// предполагаем, что есть только один элемент с таким name в документе
// let form = document.getElementsByName("search")[0];
// или, именно форма:
// document.querySelector('form[name="search"]');

// 5. Первый input в этой форме
// form.getElementsByTagName("input")[0];
// или
// form.querySelector("input");

// 6. Последний input в этой форме
// let inputs = form.querySelectorAll("input"); // найти все input
// inputs[inputs.length - 1]; // взять последний

// Мой вариант

const table = document.querySelector("#age-table");
const label = table.querySelectorAll("label");
const td = table.querySelector("td");
const form = document.querySelector('form[name="search"]');
const input = form.querySelector("input");
let inputs = form.querySelectorAll("input");
const lastInput = inputs[inputs.length - 1];

console.log(table);
console.log(label);
console.log(td);
console.log(form);
console.log(input);
console.log(lastInput);
