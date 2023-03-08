// Создайте функцию clear(elem), которая удаляет всё содержимое из elem.

{
  /* <ol id="elem">
  <li>Привет</li>
  <li>Мир</li>
</ol> */
}

function clear(elem) {
  /* ваш код */
  while (elem.firstChild) {
    elem.firstChild.remove();
  }
}

clear(elem); // очищает список
