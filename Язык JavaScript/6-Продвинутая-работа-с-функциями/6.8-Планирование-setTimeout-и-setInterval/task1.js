// Используем setInterval
const printNumbers = (from, to) => {
  let current = from;

  let timerId = setInterval(() => {
    console.log(current);
    if (current == to) {
      clearInterval(timerId);
    }
    current++;
  }, 1000);
};

printNumbers(5, 10);

// Используем setTimeout
const printNumbers = (from, to) => {
  let current = from;

  setTimeout(
    (go = () => {
      console.log(current);
      if (current < to) {
        setTimeout(go, 1000);
      }
      current++;
    }),
    1000
  );
};

// использование:
printNumbers(5, 10);
