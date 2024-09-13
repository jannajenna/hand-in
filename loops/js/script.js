//loops
const numbers = [4, 7, 9, 1.2, 5, 7];
let sum = 0;
for (let x of numbers) {
    sum = sum + x;
}

console.log("The result is" + sum);

//if statemes
//let time = new Date().getTime();

let time = 8;
let greeting = "";
if (time < 10) {
    greeting = "Good morning"
} else if (time < 20) {
    greeting = "Good day"
} else {
    greeting = "Oh la la"
}

console.log(greeting);


const email = "blablabla@gmail.com";
const firstName = "Bla";
const lastName = "Blabla";

if (email === "blablabla@gmail.com" || firstName === "Bla" && lastName === "Blabla") {
    console.log("Hello");
}


const number = 4;
