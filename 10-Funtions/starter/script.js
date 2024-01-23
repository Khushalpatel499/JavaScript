'use strict';

//default parameters
const bookings = [];
const createBooking = function (
  flightNum,
  numPassengers = 1,
  price = 199 * numPassengers
) {
  //Es5
  //numPassengers=numPassengers||1;
  //price =price||199;
  // here we can directly pass parameter instead of flightNum:flightNum
  const booking = {
    flightNum,
    numPassengers,
    // pric: price,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH123', 2, 800);
createBooking('LH123', 2);
createBooking('LH123', 2);
createBooking('LH123', 5);

createBooking('LH123', undefined, 1000);

//How Passing arguments works value vs Reference

const flight = 'LH234';
const jonas = {
  name: 'Jonas Schmedtmann',
  passport: 244567654,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = 'Mr. ' + passenger.name;

  if (passenger.passport === 244567654) {
    alert('Checked in');
  } else {
    alert('Wrong passport');
  }
};

checkIn(flight, jonas); //flight is primitive type and when we pass it into a function is basically a copy
console.log(flight);
console.log(jonas);

//Is the same as doing...
const flightNum = flight;
const passenger = jonas;

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 1000);
};

newPassport(jonas);
checkIn(flight, jonas);

// js doesnt have passing by references it only have passing by values even though it look like its passing by reference
//but for objects ,we do in fact pass in a reference but that reference itself is still a value,it simply a value that contain a memory address.
//we pass a reference to the function but not pass by reference

//fundamental properties of js language

//first class function(means all functions are values)
// javascript treats function as first class citizen.
// this means that functions are simply values.
// functions are just another type of object.

//store functions in variable or properties.
//pass functions as arguments to other function.
//return function from funtion.
//call method on function.

//higher order function
//a function that receive another function as an arguemnt,
//that returns a new function or both
//this is only possible because of first class function

//function that receive another function
//function that return new function

//functions accepting callback functions

const oneWord = function (str) {
  return str.replace(/ /g, '').toLowerCase();
};

const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};

//Higher -order function

const transformer = function (str, fn) {
  console.log(`Original string:${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};

transformer('JavaScript is the best!', upperFirstWord);
transformer('JavaScript is the best!', oneWord);

//Js uses callbacks all the time
const high5 = function () {
  console.log('👋');
};

document.body.addEventListener('click', high5);

//forEach method
['jonas', 'Martha', 'Adam'].forEach(high5);

//advantges of callbacks
//it more easy to split code amd more reusable and interconnected parts.
//it allows to create abstraction means hide some detail of code implementation

//function returning functions

const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};

const greetHey = greet('Hey');
greetHey('Jonas');
greetHey('Steven');

greet('Hello')('Jonas');

// const greetArr = greeting => {
//   return name => console.log(`${greeting} ${name}`);
// };

const greetArr = greeting => name => console.log(`${greeting} ${name}`);

//the call and apply method
//this keyword set manually

// const lufthansa = {
//   airline: 'Lufthansa',
//   iataCode: 'LH',
//   bookings: [],
//   //book:function(){}//es5
//   book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, num });
//   },
// };

// lufthansa.book(239, 'Jonas Scheme');
// lufthansa.book(635, 'John smith');
// console.log(lufthansa);

// const eurowings = {
//   name: 'Eurowings',
//   iataCode: 'EW',
//   bookings: [],
//book(flightNum, name) {
//     console.log(
//       `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
//     );
//     this.bookings.push({ flight: `${this.iataCode}${flightNum}`, num });
//   },
// };

const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  //book:function(){}//es5
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, num });
  },
};

lufthansa.book(239, 'Jonas Scheme');
lufthansa.book(635, 'John smith');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book; //here book is now a copy but a sperate function
//but here this key not work because book is regular function call
// book(23, 'Khushal Patel'); //this give undefined
//so we to manually tell js about this keyword
//there are three ways call,apply and bind.

//call method
book.call(eurowings, 23, 'Khushal Patel');
console.log(eurowings);

book.call(lufthansa, 239, 'Mary Cooper');
console.log(lufthansa);

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};

book.call(swiss, 583, 'Mary Cooper');
console.log(swiss);

//Apply method (does not receive a list of arguments after the this keyword)

const flightData = [583, 'George Cooper'];
book.apply(swiss, flightData);
console.log(swiss);

book.call(swiss, ...flightData);

//Bind method(it does not immediatly call the function instead it return a new function where this keyword is bound)

const bookEW = book.bind(eurowings);
const bookLH = book.bind(lufthansa);
const bookLX = book.bind(swiss);

bookEW(23, 'Steven Williams');

//partial application: a part of the original function are already applied
const bookEW23 = book.bind(eurowings, 23);
bookEW23('Jonas Amed');
bookEW23('Martha cooper');

//other use of bind is when used object with eventListners
lufthansa.planes = 300;
lufthansa.buyPlanes = function () {
  console.log(this); // this will return button
  this.planes++;
  console.log(this.planes);
};
// lufthansa.buyPlanes();

//it will return button so we need manually define this keyword
// document.querySelector('.buy').addEventListener('click', lufthansa.buyPlanes);

document
  .querySelector('.buy')
  .addEventListener('click', lufthansa.buyPlanes.bind(lufthansa));

//partila application

const addTax = (rate, value) => value + value * rate;
console.log(addTax(0.1, 200));

const addVAT = addTax.bind(null, 0.23);
// addTax =value =>value +value * 0.23;

console.log(addVAT(100));
console.log(addVAT(23));

const addTaxRate = function (rate) {
  return function (value) {
    return value + value * rate;
  };
};

const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

//Immediate invoked function expression
//we need a function that is only executed once.
//this technique we need with sommething called async/await.
//why this created because we know that function create scope
//one sccope doesnot have access to variable from an inner scope
const runOnce = function () {
  console.log('This will never run again');
};
runOnce();

// IIFE
(function () {
  console.log('This will never run again');
  const isPrivate = 23;
})();

// console.log(isPrivate);

(() => console.log('This will ALSO never run again'))();

{
  const isPrivate = 23;
  var notPrivate = 46;
}
// console.log(isPrivate);
console.log(notPrivate);

//closures

const secureBooking = function () {
  let passengerCount = 0;

  return function () {
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  };
};

const booker = secureBooking();

booker();
booker();
booker();

console.dir(booker);

// Example 2
const boardPassengers = function (n, wait) {
  const perGroup = n / 3;

  setTimeout(function () {
    console.log(`We are now boarding all ${n} passengers`);
    console.log(`There are 3 groups, each with ${perGroup} passengers`);
  }, wait * 1000);

  console.log(`Will start boarding in ${wait} seconds`);
};

const perGroup = 1000;
boardPassengers(180, 3);
