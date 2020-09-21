"use strict";

const availableOperators = "+*";
const userOperator = getUserData(
  "Выберите математический оператор из допустимых значение (+, *)",
  operatorValidation
);
let userOperand = +getUserData(
  "Вводите числа до тех пор, пока не захотите узнать результат. Для этого нажмите cancel",
  operandValidation
);

function getUserData(title, validationFunction, defaultText = "") {
  let result;
  do {
    result = (prompt(title, defaultText) || "").trim();
  } while (!validationFunction(result));
  return result;
}

function operatorValidation(value) {
  return value.length === 1 && availableOperators.indexOf(value) !== -1;
}

function operandValidation(value) {
  const numberValue = Number(value);
  if (Math.round(numberValue) == numberValue && String(numberValue).length <= 6)
    return !isNaN(numberValue) && isFinite(numberValue);
  else return false;
}

if (userOperator == "+") {
  let total = 0;
  while (userOperand) {
    total += +userOperand;
    userOperand = +getUserData(
      "Вводите числа до тех пор, пока не захотите узнать результат. Для этого нажмите cancel",
      operandValidation
    );
  }
  let result = total;
  if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
    alert("Number is too big");
  } else {
    alert("Общая сумма чисел равна " + total);
  }
}

if (userOperator == "*") {
  let total = 1;
  while (userOperand) {
    total *= userOperand;
    userOperand = +getUserData(
      "Вводите числа до тех пор, пока не захотите узнать результат. Для этого нажмите cancel",
      operandValidation
    );
  }
  let result = total;
  if (result > Number.MAX_SAFE_INTEGER || result < Number.MIN_SAFE_INTEGER) {
    alert("Number is too big");
  } else {
    alert("Общая произведение чисел равно " + result);
  }
}