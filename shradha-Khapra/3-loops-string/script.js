//loops

for (let i = 1; i < 5; i++) {
  console.log("hello");
}

//while
let i = 1;
while (i <= 5) {
  console.log(i);
  i++;
}

//forof
let size = 0;
let str = "khushal";
for (let i of str) {
  size++;
  console.log(i);
}
console.log(size);

//for in
let student = {
  name: "khushal",
  age: 20,
  isPass: true,
};
for (let i in student) {
  console.log(i);
  //it print every time key  like name then age then isPass
  //now it is easy to print the value;
  //becuase i is already string when it search in student
  console.log(student[i]);
}

//Pratice 1:

for (let i = 0; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//2.
let gameNumber = 12;
// let guessNumber = prompt("Enter the guess number:");

// while (guessNumber != gameNumber) {
//   //!== it is not work because prompt give output as string
//   //   guessNumber = prompt("Enter the correct number");
//   console.log(guessNumber);
//   if (gameNumber === guessNumber) {
//     alert("Congrulation you enter the correct number");
//   }
// }

//string

let str1 = "khushal";
console.log(str1);
console.log(str1.length);

//template literals

let obj = {
  item: "pen",
  price: 10,
};
console.log("the cost is", obj.item, obj.price);
console.log(`the cost is ${obj.item} is ${obj.price}`);

//string methods

let str2 = "myname";
str2.toUpperCase();

str.replace("my", "h");

let str3 = "myname";
str3[0] = "s";
console.log(str3); //still it print myname because string is immutable.
//for doing iuse replace str3.replace("m","s");

//Pratice 1;

let name = prompt("Enter your full name");
let userName = `@${name}${name.length}`; //"@"+name+name.length;
console.log(userName);
