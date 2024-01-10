'use strict';
const calAverage = (score1,score2,score3)=> (score1+score2+score3)/3;
const avgDolhins =calAverage(44,23,71);
const avgKoalas =calAverage(65,54,49);

const checkWinner = function(avgDolhins,avgKoalas){
    if(avgDolhins>= 2*avgKoalas){
        return `Dolhins win (${avgDolhins},${avgKoalas})`;
    }else if(2*avgDolhins<= avgKoalas){
        return `Koalas win (${avgKoalas},${avgDolhins})`;
    }else{
        return `no team win`;
    }
}

console.log(checkWinner(avgDolhins,avgKoalas));


//challenge2
const calcTip = function(billValue){
   // if(billValue>=50 && billValue<=300) return 0.15 *billValue;
   // else return 0.2 *billValue;
 return billValue>=50 && billValue<=300 ? billValue*0.15 : billValue*0.2;
}

const bills =[125,555,44];
console.log(bills);
const tips=[
            calcTip(bills[0]),calcTip(bills[1]),
            calcTip(bills[bills.length-1])
];
console.log(tips);
//const total =bills+tips;//wrong
const total =[
            tips[0]+bills[0],tips[1]+bills[1],
            tips[tips.length-1]+bills[bills.length-1]
];
console.log(total);


// challenge 3;

const mark ={
    fullName : 'mark miller',
    mass : 50,
    height : 1.8,

    calcBMI : function(){
       this.valueBMI = this.mass/(this.height ** 2);
       return this.valueBMI;
    }
};

const john ={
    fullName : 'john smith',
    mass : 60,
    height : 1.9,

    calcBMI : function(){
        this.valueBMI = this.mass/(this.height ** 2);
       return this.valueBMI;
    }

};

console.log(mark.calcBMI());
console.log(mark.valueBMI);// without call mark.calcBMI it doesnt work
console.log(john.calcBMI());

//console.log(`${john.valueBMI>mark.valueBMI ? 'john':'marks'} is higher than ${john.valueBMI<mark.valueBMI ? 'johns':'marks'}`);

if(john.valueBMI>mark.valueBMI){
    console.log(`${john.fullName}BMI (${john.valueBMI}) is higher than ${mark.fullName}(${mark.valueBMIBMI})`);

}else if(mark.valueBMI> john.valueBMI){
    console.log(`${mark.fullName}BMI (${mark.valueBMI}) is higher than ${john.fullName}(${john.valueBMIBMI})`)
}


// challenge 4


const bill=[122,133,144,155,166,177,188,199,111,123];
const tip =[];
const totals=[];

for(let i=0;i<10;i++){
    tip.push(calcTip(bill[i]));
    totals.push(tip[i]+bill[i]);
}

console.log(tip);
console.log(totals);

const calAverages= function(arr){
         let avg=0;
        for(let i=0;i<arr.length;i++){
            avg+=arr[i];
        }
        return avg/arr.length;
}

console.log(calAverages(bill));