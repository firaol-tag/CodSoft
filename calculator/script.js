let display = document.getElementById("display");
let expression = "";

function appendNumber(number) {
  expression += number;
  display.value = expression;
}

function appendOperator(operator) {
  expression += operator;
  display.value = expression;
}

function clearDisplay() {
  expression = "";
  display.value = expression;
}

function calculate() {
  let operators = ["+", "-", "*", "/"];
  let cOperator = "";
  let numbers = [];

  for (let i = 0; i < expression.length; i++) {
    if (operators.includes(expression[i])) {
      cOperator = expression[i];
    } else {
      let startIndex = i;
      while (i < expression.length && !operators.includes(expression[i])) {
        i++;
      }
      let number = expression.substring(startIndex, i);
      numbers.push(parseFloat(number));
      i--;
    }
  }

  let result = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (cOperator === "+") {
      result += numbers[i];
    } else if (cOperator === "-") {
      result -= numbers[i];
    } else if (cOperator === "*") {
      result *= numbers[i];
    } else if (cOperator === "/") {
      if (numbers[i] !== 0) {
        result /= numbers[i];
      } else {
        display.value = "Cannot divide by zero";
        return;
      }
    }
  }

  display.value = result;
  expression = result.toString();
}
