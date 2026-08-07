 // functions
function agecheck(age) {
    return age >= 18;
}

let esther = agecheck(15);
console.log(esther);

function lottery(num) {
    return num;
}
function gradeStudent(score) {
    if (score >= 70 && score <= 100) {
        return "A";
    } else if (score >= 50 && score < 70) {
        return "B";
    } else {
        return "C";
    }
}console.log(gradeStudent(80));

function agechecker(age) {
    return age >= 18;
    let esthers = agechecker(15);
}

console.log(esthers); 
