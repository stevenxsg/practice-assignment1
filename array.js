

let students = ["Alice", "Bob", "Charlie"];
console.log(students[0]);
console.log(students[1]); 
console.log(students[2]);
students[2]=("David");
console.log(students);
students [1]=("Eve");
console.log(students);
// adding new elements to the array
students.push("Frank");
console.log(students);


students.unshift("Grace");
console.log(students);

students.pop("frank");
console.log(students);

// includes ,indexof
console.log(students.includes("Alice"));
console.log(students.indexOf("Bob"));
//reverse ,sort , splice ,slice

console.log(students.includes("Charlie"));
students.reverse();
console.log(students);
students.sort();
console.log(students);

students.splice(1,2);
console.log(students);

students.slice(1,2);
console.log(students)
 
// forEach ,map ,filter ,reduce
 const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map(function(num) {
  return num * 2;
});
console.log(doubledNumbers);

const marketlist = ["apple", "banana", "orange", "grape"];
const addedprefix = marketlist.map((item) => ("i will buy: " + item));
console.log(addedprefix);

const evenNumbers = numbers.filter((num) => num % 2 === 0);
console.log(evenNumbers);

const complexion =["fair", "dark", "medium", "light","dark"];
const darkcomplexion = complexion.filter((color) => color === "dark");
console.log(darkcomplexion);