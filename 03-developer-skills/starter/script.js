'use strict';
//use prettier
const x = 23;
if (x === 23) console.log(23);
//we want to convert the double quotes to single quotes
// so we have to configure prettier file
// so we have to create a configuration file

const calcAge = birthYear => 2037 - birthYear;
//define global snippet

//Problem
//we work for a company building a smart home thermometer.
//our most recent task is this :"Given an array of temperatures of one day, calculate the temperature amplitude.
//keep in mind that sometimes there might be a sensor error."

const temperatures = [3, -2, -6, -1, 'error', 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
//what is temp ampltitude? it is differnce between highest and lowest temp
// how to compute max and min temperature?
// what's a sensor error? and what to do?

//2. breaking up into subproblem
// igore error
// find max value
// find min value
//  return amplitude

const calcTempAmplitude = function (temps) {
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitude([3, 7, 4, 23]);
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

//Problem 2:
//function should now receive 2 arrays of temps

//1 . Understanding the problem
// with 2 array ,should we implement functionality twice?
// no!just merge two array

//2.break into sub problem
// merge two array

const calcTempAmplitudeNew = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = temps[0];
  let min = temps[0];
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitudeNew([3, 7, 4, 23], [9, 0.5]);
const amplitudeNew = calcTempAmplitudeNew(temperatures);
console.log(amplitudeNew);

// debudding with the console and breakpoints

const measureKelvin = function () {
  const measurement = {
    type: 'temp',
    unit: 'celsius',
    //c. fix bug
    value: Number(prompt('degree celsius:')),
  };
  //b. find bug
  console.log(measurement);
  //   console.table(measurement);
  //   console.warn(measurement.value);
  //   console.warn(measurement.value);
  console.log(measurement.value);
  const kevlin = measurement.value + 273;
  return kevlin;
};

//learn debugger in google chrome go to source and in script.js and set breakpoints

//A. Identify
console.log(measureKelvin());

// debugger

const calcTempAmplitudeBug = function (t1, t2) {
  const temps = t1.concat(t2);
  let max = 0;
  let min = 0;
  for (let i = 0; i < temps.length; i++) {
    const curTemp = temps[i];
    if (typeof curTemp !== 'number') continue;

    //debugger; we use debugger or go to source and add breakpoints
    if (curTemp > max) max = curTemp;
    if (curTemp < min) min = curTemp;
  }
  console.log(max, min);
  return max - min;
};

calcTempAmplitudeBug([3, 7, 4, 23], [9, 0, 5]);
const amplitudeBug = calcTempAmplitudeBug(temperatures);
// a.identify
console.log(amplitudeNew);
