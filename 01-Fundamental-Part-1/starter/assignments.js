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


const numNeighbours =Number(prompt("how many neighbour countries does your country have?"));
if(numNeighbours===1) console.log("Only 1 border!");
else if(numNeighbours>1) console.log("More than 1 border");
else  console.log("No borders");

// when we use === and write 1 input which is string so === is strict operator so it doesn't do type coersion
// but after convert into number it become number by type conversion.



if(language ==='English' && population<50000 && isIsland){
    console.log(`You should live in ${country}`);
}else{
    console.log(`${country} doesn't meet your cirteria`);

}



//switch case:



switch(language){
    case 'chinese':
    case 'mandarin':
        console.log("most number of native speakers!");
        break;
    case 'spanish':
        console.log('2nd place in number of native speakers');
        break;
    case 'Hindi':
        console.log('Number 4');
        break;
    case 'arabic':
        console.log('5th most spoken language');
        break;
    default:
        console.log("great language too");
}


// teranry operator

//console.log(`${population}> 300000? '${population} population is above average':'${population} popultion is below averge'`);//wrong
console.log(`${country} population is ${population> 33000 ? 'above':'below'} average`);