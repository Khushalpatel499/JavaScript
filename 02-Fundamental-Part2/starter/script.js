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



// Arrays
// two imp data structure in js is array and objects
// literal syntax
const friends =['khushal','Ram','shayam'];
console.log(friends);

const years =new Array(1991,1984,2008,2020);
console.log(friends[0]);
console.log(friends.length);
console.log(friends[friends.length-1]);

friends[2]='lakshman';// here we can see that friend is const value but we change it but we know that prmitive values are immutable where array is not primitive.
// we can't replace entire friend array
// friends =['bob','Alice'];
console.log(friends);

const firstName='Khushal';
const khushal =[firstName,'Patel', 2037-2002,'learner',friends];
console.log(khushal);


const calcAge5 =function(birthYear){
    return 2037-birthYear;
}
const year =[1990,1967,2002,2010,2018];

const age5=[calcAge5(year[0]),calcAge5(year[1]),calcAge5(year.length-1)];
console.log(age5);


// array operation (methods)
// add elements
// push (add last)
const friend =['khushal','Rahul'];
const newLenght =friend.push('Patel');
//since push is a function so it return a value which is length of new array.
console.log(friend);
console.log(newLenght);

// unshift (add beginnig of array)

friend.unshift('Name');
console.log(friend);
// remove element 
// pop method (remove from last)
friend.pop();// it return removed element
const popped = friend.pop();
console.log(popped);
console.log(friend);
// remove from first
friend.shift();// it return the element that removed
console.log(friend);

// find the index
console.log(friend.indexOf('khushal'));
console.log(friend.indexOf('bob'));

// es6 method include(it return true if present or false not present)
// strict testing with strict equality it doesn't do type coercion
friend.push(23);
console.log(friend.includes('Khushal'));
console.log(friend.includes("bob"));
console.log(friend.includes('23'));// false

// it is useful for conditional statement
if(friend.includes("khushal")){
    console.log("You have a friend");
}



// objects (we define key value pair or we can assign a name to each value which is not possible in array)
// in array order matter but not in object
const myData ={
    firstName: 'Khushal',
    lastName: 'Patel',
    age: 2037-2000,
    job: 'Learner',
    friends : ['Ram','Shyam','Mohan']
};

//two ways of getting properties from object
//1. dot notation

console.log(myData.lastName);
//2. bracket notation
console.log(myData['lastName']);
//IMP below bracket notation
const nameKey='Name';
console.log(myData['first'+nameKey]);
console.log(myData['last'+nameKey]);

const interestedIn =prompt('What do you want to know about khushal? choose between firstName,lastName,age,job,and friends');
if(myData.interestedIn){
console.log(myData.interestedIn);
}

//adding new properties

myData.location ='india';
myData['twitter'] ='@khushal';
console.log(myData);

//challenge 
//"khushal has 3 friends,and his best friend is called Ram"

console.log(`${myData.firstName} has ${myData.friends.length} friends,and his best friend is called ${myData.friends[0]}`);


//object method
const myData1 ={
    firstName: 'Khushal',
    lastName: 'Patel',
    birthDay: 2000,
    job: 'Learner',
    friends : ['Ram','Shyam','Mohan'],
    hasDriversLicense:true,
// this keyword is basically the object on which method is called
    // calcAge: function(birthYear){
    //     return 2037-birthYear;
    // }
    // calcAge: function(){
    //     console.log(this);
    //     return 2037 -this.birthYear;
    // }
    calcAge: function(){
        // console.log(this);
        this.age=2037 -this.birthYear;
        return this.age;
    }
};
// console.log(myData1.calcAge(1991));
// console.log(myData1['calcAge'](1991));
//  console.log(myData1.calcAge());
//  console.log(myData1.calcAge());
//  console.log(myData1.calcAge());
//  console.log(myData1.calcAge());
 //calling again and again same might be heavier computation
 //cal age once and store in the object reterive from the object

 console.log(myData1.age);
 console.log(myData1.age);
 console.log(myData1.age);

 //challenge
 //"khushal is 37 year old learner , and he has a/no driver's license"

 const myData2 ={
    firstName: 'Khushal',
    lastName: 'Patel',
    birthYear: 2000,
    job: 'Learner',
    friends : ['Ram','Shyam','Mohan'],
    hasDriversLicense:true,

    calcAge: function(){
        this.age=2037 -this.birthYear;
        return this.age;
    },

    summery: function(){
        // if(this.hasDriversLicense){
        //     //return `${this.firstName} is a ${this.age} year old ${this.job}, and he has a driver's license`;//this.age not give age because we not call calAge before summery
        //     return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has  a driver's license`;
        // }
        // else{
        //   //  return `${this.firstName} is a ${this.age} year old ${this.job}, and he has not a driver's license`;
        //   return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has not a driver's license`;
        // }

        return `${this.firstName} is a ${this.calcAge()} year old ${this.job}, and he has ${this.hasDriversLicense ? 'a':'not'} driver's license`;
    }
 };
 //console.log(myData2.calcAge());
 //console.log(myData2.age);
 console.log(myData2.summery());

 // array is also an object or a special kind of object



 //for loop

 for(let rep = 1;rep<=10 ;rep++){
    console.log(`Lifting weights reptition-${rep}`);
 }


const myArray =[
    'khushal',
    'Patel',
    '2036-2002',
    'learner',
    ['ram','shyam','mohan']
];
 const types =[];
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i],typeof myArray[i]);
//filling array
    // types[i]=typeof myArray[i];
    types.push(typeof myArray[i]);
}
console.log(types);


const birth2=[1993,2002,2005,1888,1444];
const age =[];

for(let i=0;i<birth2.length; i++){
    age.push(2037-birth2[i]);
}
console.log(age);


// continue (is to exit the current iteration of the loop and continue to next one)
for(let i=0;i<myArray.length;i++){
    if(typeof myArray[i]!== 'string') continue;
    console.log(myArray[i],typeof myArray[i]);
}

// break(terminate the whole loop not current iteration)

for(let i=0;i<myArray.length;i++){
    if(typeof myArray=== 'number') break;
    console.log(myArray[i],typeof myArray[i]);

}



//looping backwards and loops in loops

const myArray1 =[
    'khushal',
    'Patel',
    '2036-2002',
    'learner',
    ['ram','shyam','mohan']
];

for(let i=myArray1.length-1;i>=0;i--){
    console.log(myArray1[i]);
}


//loop inside loop

for(let excercise =1;excercise<4;excercise++){
    console.log(`starting excercise ${excercise}`);

    for(let rep=1;rep<6;rep++){
        console.log(`excerise ${excercise} ::lifting rep ${rep}`);
    }
}


//while loop
let rep=1;
while(rep<=10){
    console.log(`Lifting weights repetition ${rep}`);
    rep++;
}

let dice = Math.trunc(Math.random() * 6) +1;
//math.random create random number between 0 and 1
console.log(dice);
//console.log(Math.random());
//math.trunc help to rid of decimal part

// while(dice!==6){
//     console.log(`you rolled a ${dice}`);
//     dice = Math.trunc(Math.random() * 6) +1;
// }