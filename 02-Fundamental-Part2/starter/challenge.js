
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
