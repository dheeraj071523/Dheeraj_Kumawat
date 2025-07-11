class Calculator {
  calculate(a, b, operation) {
    if (typeof a !== "number" || typeof b !== "number") {
      throw new Error('Both "a" and "b" must be numbers (double)');
    }

    switch (operation.toLowerCase()) {
      case "addition":
      case "add":
      case "+":
        return this.add(a, b);

      case "subtraction":
      case "subtract":
      case "-":
        return this.subtract(a, b);

      case "multiplication":
      case "multiply":
      case "*":
        return this.multiply(a, b);

      case "division":
      case "divide":
      case "/":
        return this.divide(a, b);

      default:
        throw new Error(
          "Invalid operation. Please use: add, subtract, multiply, or divide."
        );
    }
  }

  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Division by zero is not allowed.");
    }
    return a / b;
  }
}

const calculator = new Calculator();

try {
  console.log(calculator.calculate(5.5, 3.2, "add"));
  console.log(calculator.calculate(10, 4, "subtract"));
  console.log(calculator.calculate(7, 2, "multiply"));
  console.log(calculator.calculate(15, 3, "divide"));
} catch (error) {
  console.error(error.message);
}
