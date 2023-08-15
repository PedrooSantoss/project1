class Calculator {
    add(a, b){
        return a + b;
    }
    multiply(a, b){
        return a * b;
    }    
    subtract(a, b) {
        return a - b;
    }
}

const calculator = new Calculator();

const sumResult = calculator.add(5, 3);
console.log("Sum:", sumResult);

const multiplicationResult = calculator.multiply(4, 2);
console.log("Multiplication:", multiplicationResult);

const subtractionResult = calculator.subtract(10, 4);
console.log("Subtraction:", subtractionResult);