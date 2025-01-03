//functon

function myFunction() {
  console.log("Hello Fuction");
}
myFunction();

function myMess(msg) {
  console.log(msg); //msg is parameter
}
myMess("hello"); //argument

//return value:

function sum(x, y) {
  return x + y;
}

console.log(sum(1, 2));

//arrow function;

const sum1 = (a, b) => {
  return a + b;
};

console.log(sum1(1, 2));

const print = () => console.log("hello"); //self invoke

print();

// Pratice1:

function vowels(str, count) {
  for (let v of str) {
    if (v == "a" || v == "e" || v == "i" || v == "o" || v == "u") {
      count++;
    }
  }
  return count;
}
console.log(vowels("khushal", 0));

//pratice 2;

const vow = (str, count) => {
  for (let v of str) {
    if (v == "a" || v == "e" || v == "i" || v == "o" || v == "u") {
      count++;
    }
  }
  return count;
};
console.log(vow("khushal", 0));

//ForEach

let arr = [1, 2, 3, 4];

arr.forEach(function printVal(val) {
  //
  //   return val;
  console.log(val);
});

arr.forEach((val, i, arr) => console.log(val, i, arr));

//Pratice 1:

let arr1 = [1, 2, 3, 4, 5];

arr1.forEach((val) => console.log(val * val));

// let cal=(val)=> console.log(val**2);
// arr1.forEach(cal);

console.log(arr1);

let arr2 = arr1.map((val) => {
  return val;
});
console.log(arr2);

//filter:

let arr3 = [1, 2, 3, 5, 4];

let newArr = arr3.filter((val) => {
  return val % 2 == 0;
});
console.log(newArr);

//reduce:(take two value previous ,current)

let arr4 = [1, 2, 3, 4];

let sum3 = arr.reduce((res, curr) => {
  return res + curr;
});
console.log(sum3);
// Expl:   in starting res=1 and curr =2 and return 3
//     then for 3 it go to call back function   res =3 and curr=3 reutrn 6
// now for 4 it go to call back res=6 and curr =4 return 10
// then res =10 and no more arr so no further call back so sum =10;

//we can also used to find largest number.

const arr5 = [3, 4, 1, 6, 5];
const output = arr5.reduce((prev, curr) => {
  return prev > curr ? prev : curr;
});

console.log(output);

//Pratice 1:

let marks2 = [100, 92, 33, 66, 96];

let filterMarks = marks2.filter((val) => {
  return val > 90;
});
console.log(filterMarks);

//Pratice 2:
let number = prompt("Enter a number:");

let arr6 = [];

for (let i = 1; i <= number; i++) {
  arr6[i - 1] = i;
}

//sum
let sum6 = arr6.reduce((prev, curr) => {
  return prev + curr;
});
let prod = arr6.reduce((prev, curr) => {
  return prev * curr;
});

console.log(arr6);
console.log(sum6);
console.log(prod);
