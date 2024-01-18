'use strict';

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

//creat one player array for each team
const [player1, player2] = game.players;
console.log(player1);
console.log(player2);
//first player in team is goalkeeper and other are fieldPlayers
// const [gk, ...fieldPlayers] = [...player1];
const [gk, ...fieldPlayers] = player1;
console.log(gk);
console.log(fieldPlayers);

//contain all players for both team
// const [...allPlayers] = [...player1, ...player2];
const allPlayers = [...player1, ...player2];
console.log(allPlayers);

// add substitue player

const players1Final = [...player1, 'Thiago', 'Coutinho', 'Perisic'];
console.log(players1Final);

//create one variable for each object
// const { team1: team1, x: draw, team2: team2 } = game.odds;
const {
  odds: { team1, x: draw, team2 },
} = game;
console.log(team1, draw, team2);

//function pass arbitrary number of player;
const printGoals = function (...players) {
  for (let i = 0; i < players.length; i++) {
    console.log(`${players.length}total goals were scored by ${players[i]}`);
  }
};
printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals('Davis', 'Muller');
printGoals(...game.scored);

//which team wins

team1 < team2 && console.log('Team 1 is win');
team1 > team2 && console.log('Team 2 is win');

//challenge 2:
//1.
for (const [i, el] of game.scored.entries()) {
  console.log(`Goal ${i + 1}:${el}`);
}

//2.
let avg = 0;
const odds = Object.values(game.odds);
for (const odd of odds) {
  avg += odd;
}
//console.log(typeof Object.values(game.odds));
avg /= odds.length;
console.log(avg);

//3
const entries = Object.entries(game.odds);
for (const [team, odd] of entries) {
  const str = team === x ? 'draw' : `victory ${game[team]}`;
  console.log(`odds ${str} of ${odd}`);
}

//4.BOnus
const scores = {};
for (const player of game.scored) {
  scores[player] ? scores[player]++ : (scores[player] = 1);
}
console.log(scores);
