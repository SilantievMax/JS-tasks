let elem = document.querySelector('[data-widget-name]');

// читаем значение
console.log(elem.dataset.widgetName);
// или так
console.log(elem.getAttribute('data-widget-name'));