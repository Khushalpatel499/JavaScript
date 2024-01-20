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
