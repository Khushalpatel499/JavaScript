const country = "india";
const continent = "asia";
let population = 120000000;

console.log(country);
console.log(continent);
console.log(population);


const isIsland = false;
console.log(isIsland);

let language;
console.log(language);

console.log(typeof country);
console.log(typeof language);
console.log(typeof population);
console.log(typeof isIsland);

language ="hindi";


console.log(population/2);
//console.log(population+1);
population++;
console.log(population);
const finlandPopulation =600000;
console.log(population> finlandPopulation);

const avgPopualtion = 300000;
console.log(population<avgPopualtion);

let description = country+ " is in "+ continent +",and its "+population+ " million people speak " + language;
console.log(description);

let description1 =`${country} is in ${continent} and its ${population} million people speak ${language}`;
console.log(description1);

if(population> 33000){
    console.log(`${country} population is above average`);
}else{
    console.log(`${country} population is ${333000-population} million below average`);
}


//4(number) , 617 (string) , 23 (number),  false  ,1143(number)