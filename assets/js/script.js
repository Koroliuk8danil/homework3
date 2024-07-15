function printNumbersUsingInterval(from, to, interval) {
  let current = from;

  const intervalId = setInterval(() => {
    console.log(current);
    if (current === to) {
      clearInterval(intervalId);
    }
    current++;
  }, interval);
}

printNumbersUsingInterval(1, 10, 1000);

function printNumbersUsingTimeout(from, to, interval) {
  let current = from;

  function print() {
    console.log(current);
    if (current < to) {
      current++;
      setTimeout(print, interval);
    }
  }

  print();
}

// Виклик функції
printNumbersUsingTimeout(1, 10, 1000);
