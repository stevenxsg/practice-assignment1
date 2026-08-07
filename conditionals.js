
//if/else
let age = 40;
if (age >= 18) {
  console.log('You can vote.');
} else {
  console.log('You cannot vote.');
}

//if/else if
let gender="female";
if (gender === "female") {
    console.log("You are a female. Use the ladies room.");
} else if (gender === "non-binary") {
    console.log("You are non-binary. Use the unisex restroom.");
} else if (gender === "transgender") {
    console.log("You are transgender. Use the unisex restroom.");
}

//loops
//for loop
for (let i = 0; i < 10; i++) {
    console.log(i);
}
let arrofNames = ["Alice", "Bob", "Charlie", "David"];
for (let name= 0; name < arrofNames.length; name++) {
    console.log("TECHCRUSH: " + arrofNames[name]);
}


for (let x=0; x<=36; x++) {
    console.log(x * 2);
}

for (let y=0; y<=12; y++) {
    console.log(y * 3);
}

// while loop
let loginAttempts = 0;
while (loginAttempts < 3) {
    console.log(' attempt number ' + loginAttempts);
    loginAttempts++;

}

