
let js = "amazing";
if (js === "amazing") alert("JavaScript is Fun");
 console.log(40+4+10-15);

 //values

 console.log("Khushal");
 console.log(23);

 //declare and store value in variable

 let firstName = "khushal";
 console.log(firstName);

 // syntax error
 //let 3year = 3;
// let khushal&p = 3;
// let new =3; new is reserved keyword in javascript
// let function =3; not allowed
// let _function =3; allowed
// let $function =3; allowed
// let Person ="khushal";  not wrong but not use because we use uppercase in object oriented in js

//let PI=3.14; Constant not change are write in uppercase;


// data types

true;
console.log(true);

let javascriptIsFun = true;
console.log(javascriptIsFun);

// typeof

console.log(typeof true);
console.log(typeof javascriptIsFun);
console.log(typeof 23);
console.log(typeof "khushal");

//  firstName //this is not string it give reference error because variable is not defined;

// reaasigned values to a variable

javascriptIsFun = "khushal!";
console.log(typeof javascriptIsFun);

// undefined datatype

let year;
console.log(year);
console.log(typeof year);

year = 1222;
console.log(typeof year);

//null data type

console.log(typeof null); // it return type is object

// declaration of variable

let age = 22;
age =23;

const birthYear = 2000;
// const myName; not allowed

var job = "programmer";
 job = "learner";

 myClass = "b5";
 console.log(myClass);// it doesnt create a variable in scope ,it will create a property in global object.

 // math operator

 const now =2038;
 const khushalAge = now -2000;
 const ramAge =now -2003;
 console.log(khushalAge, ramAge);
 
 console.log(khushalAge *2, khushalAge/2, 2**3);
 //2 ** 3 means 2 power3 =8

 const fullName ="khushal";
 const surName = "Patel";

 console.log(fullName+" "+surName);


 // assigment operator
 let x=10+5;// 15
 x+= 10; // 25
 x*=4;//100
 x++;//101
 x--;//100
 console.log(x);

 //comparsion operator

 console.log(khushalAge> ramAge);// <,> ,<=,>=
 console.log(khushalAge>=18);

 const isFullAge = khushalAge>=18;
 console.log(now - 2002 > now -1999);// always use first subtract and then compare

 //operator precedence

 let z ,y;
 z =y = 25-10-5;// = operator has precedence right to left while subtrcation has left to right
 console.log(z,y);

 //string and template literals

 const personName = "khushal";
 const jobNow = "learner";
 const birthDay = 2002;
 const yearNow =2032;
 
 const result ="I'm " + personName + ', a ' + (yearNow -birthDay) + 'years old' + jobNow + '!';
 console.log(result);

 const personNew =`I'm ${personName} a ${yearNow -birthDay} year old ${jobNow}`;

 console.log(personNew);
 console.log(`Just a regular string...`);

 console.log('string with \n\
 mutiple\n\
 lines');

 console.log(`string 
 multiple
 lines`);


 // if-else
  const driverAge = 20;
  const isOldEnough = driverAge>=18;
  
 /* if(isOldEnough){
  console.log('Khushal can drive car🚗');
  }*/
  if(driverAge>=18){
    console.log('Khushal can drive car🚗');
  }else{
     const  yearLeft = 18 -driverAge;
     console.log(`Khushal is young .wait another ${yearLeft}`);
    
  }

  const birth1= 2002;
  let century;
  if(birth1<=2000){ 
    century=20;
  }else{
    century=21;
  }
  console.log(century);


  //type conversion 

  const inputYear ="2002";
  console.log(Number(inputYear), inputYear);
 // console.log(inputYear +18);
 console.log(Number(inputYear)+18);
 //console.log(Number('khushal')); output -NaN(not a number)
 console.log(typeof NaN);// output is number

 console.log(String(23));

 //type coercion

 console.log('I am'+ 23 +'year old');// + operator convert number into string
 console.log('23'-'10'-3);// - operator convert stirng into number output=20
 console.log('23'+'10'+3);// output =23103
 console.log('23' * '2');//convert into number output=46
 console.log('23'/'2');// convert into number output =11.5

 let n= '1'+1; //11(string)
 n=n-1;//10(number)
 let m = 2+3+'8';//58


 //truthy and falsy values:

 console.log(Boolean(0));//false
 console.log(Boolean(undefined));//false
 console.log(Boolean('Khushal'));//ture
 console.log(Boolean(''));//false
 console.log(Boolean({}));//true

 //convertion to boolean is always implicit not explicit or in other words is always tpyed coercion
 // it happen in two cases when using logical operators  a lgoical context like in codition of if else .
 

 const money =0;
 if(money){
    console.log("Don't spend it all");
 }else{
    console.log("You should get a job");
 }

let height;
if(height){
    console.log("Height is defined");
}else{
    console.log("Height is not defined");
}

//equality operator == and ===

let myAge ='18';

if(age ===18) console.log("You Just became an adult (strict)");
if(age ==18) console.log("You became Just adult(loose)");


// prompt function

const favourite =prompt("What is ypur favourite number");
console.log(favourite);
console.log(typeof favourite);//string

if(favourite===23){
    console.log("23 is amazing");// not execute because favarourite is string
}

const favourite1= Number(prompt("What is your liked number"));
if(favourite1===23){
    console.log("23 is amazing");
}else if(favourite1===7){
    console.log("7 is amazing");
}else{
    console.log("Number is not 7 or 23");
}

// !=(loose) and !==(strict)
if(favourite1!==23) console.log("why not 23");


//logical Operators

const hasDriversLicense =true;
const hasGoodVision = false;

console.log(hasDriversLicense && hasGoodVision);
console.log(hasDriversLicense || hasGoodVision);
console.log(!hasDriversLicense);

const shouldDrive = hasDriversLicense && hasGoodVision;
if(shouldDrive){
    console.log("able to drive");
}else{
    console.log("not able to drive");
}




// switch statement

const day ='monday';

switch(day){
    case 'monday':
        console.log("Plan course structure");
        console.log("Go to coding meetup");
        break;
    case 'tuesday':
        console.log("Prepare theory videos");
        break;
    case 'wednesday':
    case 'thursday':
        console.log('Write code examples');
        break;
    case 'friday':
        console.log('Record vidoes');
        break;
    case 'saturday':
    case 'sunday':
        console.log("Enjoy the weekend");
        break;
    default:
        console.log('Not a valid day');
}



// statement and expression

//statement

if(23> 10){
    const str ='23 is bigger';// 23 is bigger is expression but the whole line is statement
}


//conditinal (ternary) operator:

const ageYour = 20;
age >=18? console.log("I like to drink wine🍷"): console.log("I like to drink water💧");

const drink = age>=18 ? 'wine': 'water';
console.log(drink);
console.log(`I like to drink ${age>=18 ? 'wine':'water'}`);