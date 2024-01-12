'use strict';

//1.understand the problem
// array transformed to string, separted by ...
// what is the x days? answer: index+1

//2. break sub problem
//Transform array into string
// transform each element to string with  °C
// string need to contain day (index+1)
// add ... between elements and start and end of string
//log to console

const printForecast = function (arr) {
  let str = '';
  for (let i = 0; i < arr.length; i++) {
    str += `...${arr[i]}°C in ${i + 1} days`;
  }
  console.log(str + '...');
};

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
