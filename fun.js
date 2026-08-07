
function printOddNumbers() {
    for (let i = 1; i <= 15; i++) {
        if (i % 2 !== 0) {
            console.log(i);
        }
    }
}
printOddNumbers();

function printEvenNumbers() {
    for (let i = 1; i <=20; i++) {
        if (i % 2 === 0) {
            console.log(i);
        }
    }
}
printEvenNumbers();

function sumNumbers(limit) {
    let sum = 0;
    for (let i = 1; i <= limit; i++) {
        sum += i;
    }
    return sum;
}
console.log(sumNumbers(5));

function agecheck(age) {
    if (age >= 18) {
        return("You are an adult.");
    } else {
        return("You are a minor.");
    }
}
console.log(agecheck(20));

function agechecker(age) {
    return age >= 18;
}
    let esthers = agechecker(15);


console.log(esthers); 


function luckyNumber(num) {
    if (num === 4) {
        return "You are lucky!";
    } else {
        return "try again.";
    }
}

console.log(luckyNumber(4));
console.log(luckyNumber(7));



function gradingSystem(score) {
    if (score >=70 && score <= 100) {
        return "A";
    } else if (score >= 50 && score < 69) {
        return "B";
    } else if (score >= 0 && score < 49) {
        return "F";
    }
}

console.log(gradingSystem(80));
console.log(gradingSystem(60));
console.log(gradingSystem(40));


// arrow fuctions