let ul = document.createElement("ul");
document.body.append(ul);

while (true) {
  const data = prompt("Введите текст для элемента списка", "");

  if (!data) {
    break;
  }

  const li = document.createElement("li");
  li.textContent = data;
  ul.append(li);
}
