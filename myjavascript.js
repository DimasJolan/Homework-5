"use strict";

const availableOperators = "+*";
const userOperator = getUserData(
  "Выберите математический оператор из допустимых значение (+, *)",
  operatorValidation
);
const userOperand = +getUserData(
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
    return (
      !isNaN(numberValue) &&
      numberValue !== Infinity &&
      numberValue !== -Infinity &&
      numberValue != 0
    );
  else return false;
}

if (userOperator == "+"){
let total = userOperand;
let input = +prompt();
while(input){
	total += +input;
  input = +prompt();
};
alert("Общая сумма чисел равна [" + total +"]");
}
if (userOperator == "*"){
  let total = userOperand;
  let input = +prompt();
  while(input){
    total *= input;
    input = +prompt();
  };
  alert("Общая произведение чисел равно [" + total +"]");
  }

