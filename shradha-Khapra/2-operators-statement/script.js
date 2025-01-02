//Airthmetic operator

let a = 5;
let b = 6;
console.log("a+b=", a + b);

//assignment operator

let c = 5;
c += 2;
console.log(c);

// comparison operator

let d = 6;
let f = 7;

console.log("is d==f", d == f);

//conditional
let age = 35;
if (age > 20) {
  console.log("let's go");
}

//ternary
let x = 30;

console.log(x > 20 ? "adult" : "notadult");
x > 20 ? console.log("adult") : console.log("notadult");

//pratice 1:
let num = prompt("Enter a number");
console.log(num);
console.log(typeof num);
if (num % 5 === 0) {
  console.log(num, "num is multiple of 5");
} else {
  console.log(num, "number is not multiple of 5");
}

//2.
let score = 20;

if (score >= 80 && score <= 100) {
  console.log("A");
} else if (score >= 70 && score <= 79) {
  console.log("A");
} else if (score >= 60 && score <= 69) {
  console.log("A");
} else if (score >= 50 && score <= 59) {
  console.log("A");
} else {
  console.log("F");
}
