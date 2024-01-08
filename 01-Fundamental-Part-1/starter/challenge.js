let markWeight, markHeight, johnWeight, johnHeight;
markWeight = 78;
markHeight = 1.69;
johnWeight = 92;
johnHeight = 1.95;
let BMI1 = markWeight / markHeight ** 2;
let BMI2 = johnWeight / johnHeight ** 2;

let markHigherBMI;



//console.log(BMI1);
//console.log(BMI2);
console.log(BMI1, BMI2);
markHigherBMI = BMI1 > BMI2;
console.log(markHigherBMI);

markWeight = 95;
markHeight = 1.88;
johnWeight = 85;
johnHeight = 1.76;

//console.log(BMI1);
//console.log(BMI2);
console.log(BMI1, BMI2);
markHigherBMI = BMI1 > BMI2;
console.log(markHigherBMI);

if (markHigherBMI) {
    //  console.log("Mark's BMI("+BMI1+") is higher than John's("+BMI2+")!");
    console.log(`Mark's BMI (${BMI1}) is higher than John's (${BMI2})!`);
}
else {
    // console.log("John's BMI("+BMI2+") is higher than Mark's("+BMI1+")!");
    console.log(`John's BMI (${BMI2}) is higher than Mark's (${BMI1})! `);
}




//challenge 3

let dolphins1, dolphins2, dolphins3;
let koalas1, koalas2, koalas3;

dolphins1 = 96;
dolphins2 = 108;
dolphins3 = 89;

koalas1 = 88;
koalas2 = 91;
koalas3 = 110;

let avg1 = (dolphins1 + dolphins2 + dolphins3) / 3;
let avg2 = (koalas1 + koalas2 + koalas3) / 3;
if ((dolphins1 > 100 || dolphins2 > 100 || dolphins3 > 100) && (koalas1 > 100 || koalas2 > 100 || koalas3 > 100)) {
    if (dolphins1 > koalas1 && dolphins2 > koalas2 && dolphins3 > koalas3) {
        if (avg1 > avg2) {
            console.log("dolphins win the trophy!");
        }
    } else if(dolphins1 === koalas1 && dolphins2===koalas2 && dolphins3===koalas3){
        if(avg1 === avg2) {
        console.log("Match is draw");
    }
    else{
        console.log("NO team win the trophy");
    }
} else {
    console.log("koalas win the trophy!");
}
}else {
    console.log("no team have score higher than 100");
}


//challenge 3 solution of video

const scoreDolphins =(97+112+81)/3;
const scoreKoalas = (109 +95+86)/3;
console.log(scoreDolphins,scoreKoalas);

if(scoreDolphins> scoreKoalas && scoreDolphins>=100){
    console.log("Dolphins win the trophy");
}else if(scoreKoalas > scoreDolphins && scoreKoalas>=100){
    console.log("koalas win the trophy");
}else if(scoreDolphins===scoreKoalas && scoreDolphins>=100 && scoreKoalas>=100){
    console.log("Both win the trophy");
}else{
    console.log("No one win the trophy");
}



// challenge 4

const bill =275;
let tip = (country==='india' && (bill>=50 && bill<=300))  ?  bill *0.15: bill * 0.2;
console.log(`The bill was ${bill}, the tip was ${tip} and the total value ${bill +tip} `);