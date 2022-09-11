function add(num1, num2) {
  return num1 + num2;
};

function subtract(num1, num2) {
  return num1 - num2;
};

function multiply(num1, num2) {
  return num1 * num2;
};

function divide(num1, num2) {
  return num1 / num2;
}

function typeNumbers(event) {
  numberClicked = true;
  let result = document.querySelector(".result");
  if (!completeNumber) {
    result.innerHTML = result.innerHTML + event.target.textContent;
  } else {
    result.innerHTML = event.target.textContent;
    completeNumber = false;
  }
}

function typeOperators(event) {
  if (numberClicked === true) {
    let expression = document.querySelector(".expression");
    let result = document.querySelector(".result");
    completeNumber = true;
    num1 = parseInt(result.innerHTML);
    expression.innerHTML = result.innerHTML + " " + event.target.textContent;
    operator = event.target.textContent;
  }
}

function equals(event) {
  num2 = parseInt(document.querySelector(".result").innerHTML);

  console.log(num1);
  console.log(num2);
  console.log(multiply(num1, num2))

  let expression = document.querySelector(".expression");
  let result = document.querySelector(".result");
  expression.innerHTML = expression.innerHTML + " " + result.innerHTML + " ="
  if (operator === "+") {
    result.innerHTML = Math.round(add(num1, num2) * 100000) / 100000;
  } else if (operator === "-") {
    result.innerHTML = Math.round(subtract(num1, num2) * 100000) / 100000;
  } else if (operator === "×") {
    result.innerHTML = Math.round(multiply(num1, num2) * 100000) / 100000;
  } else {
    result.innerHTML = Math.round(divide(num1, num2) * 100000) / 100000;
  }
  completeNumber = true;
}

function clear() {
  num1 = null;
  num2 = null;
  completeNumber = false;
  let expression = document.querySelector(".expression");
  let result = document.querySelector(".result");
  expression.innerHTML = "";
  result.innerHTML = "";
}

let numberClicked = false;
let completeNumber = false;
let num1;
let num2;
let operator;

let numBtns = document.querySelectorAll(".number-button");
numBtns.forEach(button => button.addEventListener("click", typeNumbers));

let opBtns = document.querySelectorAll(".operator-button");
opBtns.forEach(button => button.addEventListener("click", typeOperators));

let equalBtn = document.querySelector(".equal-button");
equalBtn.addEventListener("click", equals);

let clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener("click", clear);