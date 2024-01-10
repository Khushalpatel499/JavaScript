 
 function describeCountry(country, population, capitalCity){
    const output =`${country} has ${population} million people and its capital city is ${capitalCity}`;
    return output;
 }

 const detail1=describeCountry('india',10,'delhi');
 const detail2=describeCountry('Finland',6,'Helsinki');
 const detail3=describeCountry('America',9,'newyork');

 console.log(detail1);
 console.log(detail2);
 console.log(detail3);



 function percentageOfWorld1(population){
    return (population/7900)*100;
 }

 const pop1=percentageOfWorld1(1441);
 const pop2=percentageOfWorld1(1551);
 const pop3=percentageOfWorld1(1661);

 console.log(pop1);
 console.log(pop2);
 console.log(pop3);

 const percentageOfWorld2 =function(population){
    return (population/7900)*100;
 }

 const pop4=percentageOfWorld2(1441);
 const pop5=percentageOfWorld2(1551);
 const pop6=percentageOfWorld2(1661);

 console.log(pop4);
 console.log(pop5);
 console.log(pop6);


 const percentageOfWorld3 = population => (population/7900)*100;

 console.log(percentageOfWorld3(1222));


 const describePopulation = function(country,population){
    return `${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;
 }
 console.log(describePopulation('india',1441));
 console.log(describePopulation('china',35));
 console.log(describePopulation('maldives',6));


 const populations =[144,122,188,199];

 /*if(populations.length ===4){
    console.log("true");
 }else{
    console.log("false");
 }*/
 console.log(populations.length===4);

 const percentages =[percentageOfWorld1(populations[0]),percentageOfWorld1(populations[1]),percentageOfWorld1(populations[2]),percentageOfWorld1(populations[populations.length-1])];
 console.log(percentages);




const neighbour= ['pakistan','srilanka','china','nepal'];

console.log(neighbour.push('Utopia'));
console.log(neighbour.pop());
if(!neighbour.includes('Germany')){
    console.log("Probably not a central European country");
}

const index = neighbour.indexOf('pakistan');
console.log(index);
neighbour[index] ='Bangladesh';
console.log(neighbour);


//objects

const myCountry ={
     country : 'india',
     capital : 'delhi',
     language: 'hindi',
     population: 255,
     neighbours: ['pakistan','china','srilanka','nepal']
};
console.log(myCountry);

console.log(`${myCountry.country} has ${myCountry.population} million ${myCountry.language} speaking people,${myCountry.neighbours.length} neighbouring countries and a capital called ${myCountry.capital}`);
myCountry.population+=2;
console.log(myCountry);
myCountry['population']-=2;
console.log(myCountry);

//object methods

const myCountry1 ={
    country : 'india',
    capital : 'delhi',
    language: 'hindi',
    population: 255,
    neighbours: ['pakistan','china','srilanka','nepal'],

    describe : function(){
        return `${this.country} has ${this.population} million ${this.language} speaking people,${this.neighbours.length} neighbouring countries and a capital called ${this.capital}`;
    },

    checkIsland :function(){
        // this.isIsland = this.neighbours.length===0 ? true:false;
        // return this.isIsland;
        this.isIsland = !Boolean(this.neighbours.length);
        return this.isIsland;
    }
};

console.log(myCountry1.describe());

console.log(myCountry1.checkIsland());
console.log(myCountry1.isIsland);


//for loop

for(let voter=1;voter<=50;voter++){
    console.log(`Voter number ${voter} is currently voting`);
}



const populations1 =[144,122,188,199];

const percentages2 =[];
for(let i=0;i<populations1.length;i++){
    percentages2.push(percentageOfWorld1(populations1[i]))
}
console.log(percentages2);


//loop backword and loops in loops

const listOfNeighbours =[
    ['Canada','Mexico'],
    ['Spain'],
    ['Norway','Sweden','Russia']
];

for(let i=0;i<listOfNeighbours.length;i++){
    console.log(`----${listOfNeighbours[i][0]}`);
    for(let j=1;j<listOfNeighbours[i].length;j++){
        console.log(`${listOfNeighbours[i][j]}`);
    }
}



//while loop

const percentages3 = [];
let i =0;
while(i<populations1.length){
    percentages3.push(percentageOfWorld1(populations1[i]));
    i++;
}
console.log(percentages3);