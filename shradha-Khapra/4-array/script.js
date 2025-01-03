//array
let marks = [1, 2, 3, 4];
console.log(typeof marks);
console.log(marks.length);

//for
for (let i = 0; i < marks.length; i++) {
  console.log(marks[i]);
}

//for of
for (let mark of marks) {
  console.log(mark);
}

//Pratice 1:

let sMarks = [85, 97, 44, 37, 76, 60];
let sum = 0;

for (let mark of sMarks) {
  sum += mark;
}
console.log(sum / sMarks.length);

//2;
let items = [250, 645, 300, 900, 50];
let i = 0;
for (let item of items) {
  let offer = item / 10;
  item = item - offer; // it doesn't change at index is we need index
  items[i] = item;
  i++;
}

console.log(items);

// array methods:

let veggies = ["potato", "apple", "tomato"];

veggies.push("chips", "colddrink");
console.log(veggies);
veggies.pop();
console.log(veggies);
console.log(veggies.toString());

let number = [1, 2, 3, 4, 5, 6];
number.splice(1, 2, 8, 9);
console.log(number);
//to add after 2
number.splice(2, 0, 7);
console.log(number);

//to delete 5
number.splice(5, 1);
console.log(number);
//to replace 6 with 10
number.splice(5, 1, 10);
console.log(number);

//Pratice 1:

let comp = ["Bloomberg", "Microsoft", "Uber", "Google", "IBM", "Netflix"];
//a remove the first company.
comp.shift();
console.log(comp);
//b. remove uber and add ola in its place

comp.splice(1, 1, "Ola");
console.log(comp);
//c. add amazon at the end;

comp.push("Amazon");
console.log(comp);
