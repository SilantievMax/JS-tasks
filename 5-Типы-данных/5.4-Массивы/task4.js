function sumInput() {
  let arrNumbers = [];
  while (true) {
    let value = prompt("Введите число", 0);
    if (value === "" || value === null || !isFinite(value)) break;
    arrNumbers.push(+value);
  }
  return arrNumbers.reduce((a, b) => a + b);
}
alert(sumInput());
