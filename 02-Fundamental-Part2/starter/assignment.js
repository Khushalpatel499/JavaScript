 
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