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

  let displayBottom = document.querySelector(".display-bottom");

  if (!completeNumber) {
    displayBottom.textContent = displayBottom.textContent + event.target.textContent;
  } else {
    displayBottom.textContent = event.target.textContent;
    completeNumber = false;
  }
}

function typeOperators(event) {
  if (numberClicked === true) {
    completeNumber = true;
    operatorClickCount++;

    let displayTop = document.querySelector(".display-top");
    let displayBottom = document.querySelector(".display-bottom");

    if (num1 === null) {
      num1 = Number(displayBottom.textContent);
    } else {
      num2 = Number(displayBottom.textContent);
    }

    if (event.target.textContent === "=") {
      let result = equals();
      displayTop.textContent = displayTop.textContent + " " + num2 + " =";
      displayBottom.textContent = result;
      num1 = null;
      num2 = null;
      operatorClickCount = 0;
    } else if (operatorClickCount === 2) {
      console.log(num1, num2, operator)
      let result = equals();
      console.log(result);
      operator = event.target.textContent;
      console.log(operator)
      displayTop.textContent = result + " " + operator;
      displayBottom.textContent = "";
      num1 = result;
      num2 = null;
      operatorClickCount = 1;
    } else {
      operator = event.target.textContent;
      displayTop.textContent = displayBottom.textContent + " " + event.target.textContent;
    }
  } else {
    return;
  }
}

function equals() {
  console.log(num1, num2)
  if (operator === "+") {
    return Math.round(add(num1, num2) * 100000) / 100000;
  } else if (operator === "-") {
    return Math.round(subtract(num1, num2) * 100000) / 100000;
  } else if (operator === "×") {
    return Math.round(multiply(num1, num2) * 100000) / 100000;
  } else {
    return Math.round(divide(num1, num2) * 100000) / 100000;
  }
}

function clear() {
  completeNumber = false;
  num1 = null;
  num2 = null;
  let displayTop = document.querySelector(".display-top");
  let displayBottom = document.querySelector(".display-bottom");
  displayTop.textContent = "";
  displayBottom.textContent = "";
}

function deleteChar() {
  let displayBottom = document.querySelector(".display-bottom");
  deleted = Math.floor(displayBottom.textContent / 10);
  displayBottom.textContent = deleted;
}

let numberClicked = false;
let completeNumber = false;
let num1 = null;
let num2 = null;
let operator;
let operatorClickCount = 0;

let numBtns = document.querySelectorAll(".number-button");
numBtns.forEach(button => button.addEventListener("click", typeNumbers));

let opBtns = document.querySelectorAll(".operator-button");
opBtns.forEach(button => button.addEventListener("click", typeOperators));

let clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener("click", clear);

let deleteBtn = document.querySelector(".delete-button");
deleteBtn.addEventListener("click", deleteChar);