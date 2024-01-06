let markWeight,markHeight,johnWeight,johnHeight;
markWeight= 78;
markHeight =1.69;
johnWeight = 92;
johnHeight=1.95;
let BMI1 = markWeight/markHeight **2;
let BMI2 = johnWeight/johnHeight **2;

let markHigherBMI;



//console.log(BMI1);
//console.log(BMI2);
console.log(BMI1,BMI2);
markHigherBMI = BMI1>BMI2;
console.log(markHigherBMI);

markWeight= 95;
markHeight =1.88;
johnWeight = 85;
johnHeight=1.76;

//console.log(BMI1);
//console.log(BMI2);
console.log(BMI1,BMI2);
markHigherBMI = BMI1>BMI2;
console.log(markHigherBMI);

if (markHigherBMI){
  //  console.log("Mark's BMI("+BMI1+") is higher than John's("+BMI2+")!");
    console.log(`Mark's BMI (${BMI1}) is higher than John's (${BMI2})!`);
}
else{
   // console.log("John's BMI("+BMI2+") is higher than Mark's("+BMI1+")!");
   console.log(`John's BMI (${BMI2}) is higher than Mark's (${BMI1})! `);
}

