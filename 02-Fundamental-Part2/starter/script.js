//strict Mode(To write secure Js code)
'use strict';//first statement always or we can activate strict mode for specifc  function or block
// it help us introduce the bugs into our code
// two reason: 1. it forbids to do certain things
//             2. it will create visible error for us


let hasDriversLicense = false;
const passTest = true;

//if(passTest) hasDriverLicense =true;// here we skipped s in hasDriversLicense to check strict working
if(hasDriversLicense)  console.log('I can drive');

//const interface = 'Audio';// console show strict mode reserved word



// function ( a piece of code that we can use over and over again)
function logger(){
    console.log('My name is Khushal');
}
//calling/running/ invoking function
logger();
logger();
logger();

function fruitProcessor(apples,oranges){
    console.log(apples,oranges);
    const juice = `Juice with ${apples} and ${oranges} oranges.`;
    return juice;
}
 
const appleJuice =fruitProcessor(5,0);
console.log(appleJuice);


// function declaration and Expression
// function are values in javascript
//function declaration
// we call function declarations before they are defined in code but not in expression(This is because of a process called hoisting)
const age2=calcAge(1988);// 1998 is argument
console.log(age2);
function calcAge(birthYear){ // birthyear is parameter
    return 2037- birthYear;
}

const age1=calcAge(1988);// 1998 is argument
console.log(age1);

//function expression
const calcAge2=function (birthYear){// function without name is called an anonymous function.
    return 2037-birthYear;
}
const age3= calcAge2(1991);
console.log(age3);


// arrow function(shorter and faster to write)

const calcAge3= birthYear=> 2037 -birthYear;// return actually happens implicitly.

const age4 =calcAge3(1991);
console.log(age3);

const yearsUntilRetirement = (birthYear,firstName) => {
    const age = 2037 - birthYear;
    const retirement = 65 - age;
   // return retirement;
   return `${firstName} retires in ${retirement} years`;
}

console.log(yearsUntilRetirement(1991,"khushal"));

// arrow funtion do not get this keyword.


// function calling other functions

const cutPieces =function (fruit){
    return fruit*4;
}
const fruitProcessor2 = function(apples,oranges){
    const applePieces = cutPieces(apples);
    const orangePieces =cutPieces(oranges);

    console.log(apples,oranges);
    const juice = `Juice with ${applePieces} and ${orangePieces} oranges.`;
    return juice;
}
console.log(fruitProcessor2(2,3));


// Reviewing functions

const calcAge4 = function(birthYear){
    return 2037 -birthYear;
}
const yearsUntilRetirement1= function(birthYear,firstName){
    const age = calcAge4(birthYear);
    const retirement = 65-age;
    if(retirement>0){
        return retirement;
    }else{
        return -1;
    }
    return `${firstName} retires in ${retirement} years`;
}
console.log(yearsUntilRetirement1(1991,'Khushal'));
