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
  let clickedBtns = document.getElementsByClassName("button-clicked");
  equalBtn.disabled = false;

  if (clickedBtns.length > 0) {
    clickedBtns[0].classList.toggle("button-clicked");
  }

  numberClicked = true;

  if (event.target.textContent === ".") {
    let point = document.querySelector("#point");
    point.disabled = true;
  }

  if (numberComplete === false) {
    screen.textContent = screen.textContent + event.target.textContent;
  } else {
    screen.textContent = event.target.textContent;
    numberComplete = false;
  }
}

function typeNumbersKey(key) {
  let clickedBtns = document.getElementsByClassName("button-clicked");
  equalBtn.disabled = false;

  if (clickedBtns.length > 0) {
    clickedBtns[0].classList.toggle("button-clicked");
  }

  numberClicked = true;

  if (numberComplete === false) {
    screen.textContent = screen.textContent + key;
  } else {
    screen.textContent = key;
    numberComplete = false;
  }
}

function typeOperators(event) {
  if (numberClicked === false) {
    return;
  } else {
    numberComplete = true;
    point.disabled = false;

    let id = this.id;
    let clickedBtn = document.getElementById(id);
    clickedBtn.classList.add("button-clicked");

    if (operatorActsAsEquals === false) {
      num1 = Number(screen.textContent);
      operator = event.target.textContent;
      operatorActsAsEquals = true;
    } else {
      typeEqual();
      operator = event.target.textContent;
      operatorActsAsEquals = true;
    }
  }
}

function typeOperatorsKey(key) {
  if (numberClicked === false) {
    return;
  } else {
    numberComplete = true;
    point.disabled = false;

    let id;
    if (key === "÷") {
      id = "divided-by";
    } else if (key === "×") {
      id = "times";
    } else if (key === "-") {
      id = "minus";
    } else if (key === "+") {
      id = "plus";
    }

    let clickedBtn = document.getElementById(id);
    clickedBtn.classList.add("button-clicked");

    if (operatorActsAsEquals === false) {
      num1 = Number(screen.textContent);
      operator = key;
      operatorActsAsEquals = true;
    } else {
      typeEqual();
      operator = key;
      operatorActsAsEquals = true;
    }
  }
}

function typeEqual() {
  if (typeof(num1) !== "number") {
    return
  } else {
    num2 = Number(screen.textContent);
    equalBtn.disabled = true;
    let result = equals();
    screen.textContent = result;
    num1 = result;
    operatorActsAsEquals = false;
  }
}

function equals() {
  let point = document.querySelector("#point");
  point.disabled = false;

  if (operator === "+") {
    return Math.round(add(num1, num2) * 100000) / 100000;
  } else if (operator === "-") {
    return Math.round(subtract(num1, num2) * 100000) / 100000;
  } else if (operator === "×") {
    return Math.round(multiply(num1, num2) * 100000) / 100000;
  } else {
    if (num2 === 0) {
      return "ERROR!";
    }
    return Math.round(divide(num1, num2) * 100000) / 100000;
  }
}

function clear() {
  numberClicked = false;
  numberComplete = false;
  num1 = null;
  num2 = null;
  operator = null;
  operatorActsAsEquals = false;
  let point = document.querySelector("#point");
  point.disabled = false;
  equalBtn.disabled = false;
  screen.textContent = "";
}

function deleteChar() {
  let str = screen.textContent.toString();
  str = str.slice(0, -1);
  screen.textContent = Number(str);
}

let numberClicked = false;
let numberComplete = false;
let num1;
let num2;
let operator;
let operatorActsAsEquals = false;

let screen = document.querySelector(".screen");

let numBtns = document.querySelectorAll(".number-button");
numBtns.forEach(button => button.addEventListener("click", typeNumbers));

let opBtns = document.querySelectorAll(".operator-button");
opBtns.forEach(button => button.addEventListener("click", typeOperators));

let equalBtn = document.querySelector(".equal-button");
equalBtn.addEventListener("click", typeEqual);

let clearBtn = document.querySelector(".clear-button");
clearBtn.addEventListener("click", clear);

let deleteBtn = document.querySelector(".delete-button");
deleteBtn.addEventListener("click", deleteChar);

document.addEventListener("keydown", event => {
  console.log(event)
  if (event.key.toLowerCase() === "0") {
    typeNumbersKey(0);
  }
  if (event.key.toLowerCase() === "1") {
    typeNumbersKey(1);
  }
  if (event.key.toLowerCase() === "2") {
    typeNumbersKey(2);
  }
  if (event.key.toLowerCase() === "3") {
    typeNumbersKey(3);
  }
  if (event.key.toLowerCase() === "4") {
    typeNumbersKey(4);
  }
  if (event.key.toLowerCase() === "5") {
    typeNumbersKey(5);
  }
  if (event.key.toLowerCase() === "6") {
    typeNumbersKey(6);
  }
  if (event.key.toLowerCase() === "7") {
    typeNumbersKey(7);
  }
  if (event.key.toLowerCase() === "8") {
    typeNumbersKey(8);
  }
  if (event.key.toLowerCase() === "9") {
    typeNumbersKey(9);
  }
  if (event.key.toLowerCase() === "/") {
    typeOperatorsKey("÷");
  }
  if (event.key.toLowerCase() === "*" && event.shiftKey === true) {
    typeOperatorsKey("×");
  }
  if (event.key.toLowerCase() === "-") {
    typeOperatorsKey("-");
  }
  if (event.key.toLowerCase() === "+" && event.shiftKey === true) {
    typeOperatorsKey("+");
  }
  if (event.key.toLowerCase() === "=") {
    typeEqual();
  }
})