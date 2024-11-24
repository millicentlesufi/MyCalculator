// Variables for numbers
const one = document.getElementById("one");
const two = document.getElementById("two");
const three = document.getElementById("three");
const four = document.getElementById("four");
const five = document.getElementById("five");
const six = document.getElementById("six");
const seven = document.getElementById("seven");
const eight = document.getElementById("eight");
const nine = document.getElementById("nine");
const zero = document.getElementById("zero");

// Variables for operators
const add = document.getElementById("add");
const subtract = document.getElementById("subtract");
const multiply = document.getElementById("multiply");
const divide = document.getElementById("divide");
const equals = document.getElementById("equals");
const sin = document.getElementById("sin");
const squareRoot = document.getElementById("squareRoot");
const exponential = document.getElementById("exponential");
const cos = document.getElementById("cos");
const tan = document.getElementById("tan");
const log = document.getElementById("log");
const ln = document.getElementById("ln");
const factorial = document.getElementById("factorial");
const pi = document.getElementById("pi");
const e = document.getElementById("e");
const leftBracket = document.getElementById("leftBracket");
const rightBracket = document.getElementById("rightBracket");
const clearBtn = document.getElementById("clearBtn");
const deleteBtn = document.getElementById("deleteBtn");

// Variable for display
const display = document.getElementById("display");

// Variables for decimal
const decimal = document.getElementById("decimal");

// Add number to display
const addToDisplay = (value) => {
  display.textContent += value;
};

// Adding numbers to the display
one.addEventListener("click", () => addToDisplay("1"));
two.addEventListener("click", () => addToDisplay("2"));
three.addEventListener("click", () => addToDisplay("3"));
four.addEventListener("click", () => addToDisplay("4"));
five.addEventListener("click", () => addToDisplay("5"));
six.addEventListener("click", () => addToDisplay("6"));
seven.addEventListener("click", () => addToDisplay("7"));
eight.addEventListener("click", () => addToDisplay("8"));
nine.addEventListener("click", () => addToDisplay("9"));
zero.addEventListener("click", () => addToDisplay("0"));

// Add operators to the display
add.addEventListener("click", () => addToDisplay("+"));
subtract.addEventListener("click", () => addToDisplay("-"));
multiply.addEventListener("click", () => addToDisplay("*"));
divide.addEventListener("click", () => addToDisplay("/"));

// Evaluate expression
equals.addEventListener("click", () => {
  try {
    const result = eval(display.textContent); // Evaluate the math expression
    display.textContent = result;
  } catch (error) {
    display.textContent = "Error";
  }
});

// Math functions
const calculateFunction = (operation, func) => {
  try {
    const number = parseFloat(display.textContent);
    if (isNaN(number)) throw new Error("Invalid number");
    const result = func(number);
    display.textContent = `${operation}(${number}) = ${result}`;
  } catch (error) {
    display.textContent = "Error";
  }
};

// Sine
sin.addEventListener("click", () => calculateFunction("sin", Math.sin));

// Cosine
cos.addEventListener("click", () => calculateFunction("cos", Math.cos));

// Tangent
tan.addEventListener("click", () => calculateFunction("tan", Math.tan));

// Logarithm (base-10)
log.addEventListener("click", () => calculateFunction("log", Math.log10));

// Natural logarithm (ln)
ln.addEventListener("click", () => calculateFunction("ln", Math.log));

// Factorial
factorial.addEventListener("click", () => {
  try {
    const number = parseInt(display.textContent);
    if (isNaN(number) || number < 0) throw new Error("Invalid number");
    let result = 1;
    for (let i = 1; i <= number; i++) {
      result *= i;
    }
    display.textContent = `${number}! = ${result}`;
  } catch (error) {
    display.textContent = "Error";
  }
});

// Exponential
exponential.addEventListener("click", () => {
  display.textContent += "**";
});

// Square root
squareRoot.addEventListener("click", () => {
  try {
    const number = parseFloat(display.textContent);
    if (isNaN(number) || number < 0) throw new Error("Invalid number");
    const result = Math.sqrt(number);
    display.textContent = `√${number} = ${result}`;
  } catch (error) {
    display.textContent = "Error";
  }
});

// Constants
pi.addEventListener("click", () => addToDisplay(Math.PI));
e.addEventListener("click", () => addToDisplay(Math.E));

// Brackets
leftBracket.addEventListener("click", () => addToDisplay("("));
rightBracket.addEventListener("click", () => addToDisplay(")"));

// Clear display
clearBtn.addEventListener("click", () => (display.textContent = ""));

// Delete last character
deleteBtn.addEventListener("click", () => {
  display.textContent = display.textContent.slice(0, -1);
});

// Decimal point
decimal.addEventListener("click", () => {
  if (!display.textContent.includes(".")) addToDisplay(".");
});
