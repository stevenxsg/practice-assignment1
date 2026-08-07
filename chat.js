function multiplyNumbers(num1, num2) {
    return num1 * num2;
}

let result = multiplyNumbers(4, 6);

console.log("The result of multiplying 4 and 6 is: " + result);



function sayHello(name) {
    console.log("Hello, " + name + "!");
}
sayHello("javascript");


function greet(name) {
    return "Hello, " + name + "!";
}
console.log(greet("stephen"));
console.log(greet("esther"));
console.log(greet("james"));

function substract(num1, num2) {
    return num1 - num2;
}
console.log(substract(10, 3));

function multiply(num1, num2) {
    return num1 * num2;
}
console.log(multiply(6, 7));

function isEven(num) {
    if (num % 2 === 0) {
        return "even";
    } else {
        return "odd";
    }
}
console.log(isEven(8));
console.log(isEven(9));

function canVote(age) {
    if (age >= 18) {
        return "eligible";
    } else {
        return "not eligible";
    }
}
console.log(canVote(20));
console.log(canVote(15));

function largest(num1, num2) {
    if (num1 > num2) {
        return num1;
    } else if (num2 > num1) {
        return num2;
    } else {
        return "equal";
    }
} console.log(largest(20, 15));

function caculator(num1, num2, operator) {
    if (operator === "+") {
        return num1 + num2;
    } else if (operator === "-") {
        return num1 - num2;
    } else if (operator === "*") {
        return num1 * num2;
    } else if (operator === "/") {
        return num1 / num2;
    } else {
        return "Invalid operator";
    }
}
console.log(caculator(10, 5, "+"));
console.log(caculator(10, 5, "*"));

function printOddNumbers() {
    for (let i = 1; i <= 15; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}