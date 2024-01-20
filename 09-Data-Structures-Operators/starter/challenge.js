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
  const str = team === 'x' ? 'draw' : `victory ${game[team]}`;
  console.log(`odds ${str} of ${odd}`);
}

//4.BOnus
const scores = {};
for (const player of game.scored) {
  scores[player] ? scores[player]++ : (scores[player] = 1);
}
console.log(scores);

//challenge 3
const gameEvents = new Map([
  [17, '⚽ GOAL'],
  [36, '� Substitution'],
  [47, '⚽ GOAL'],
  [61, '� Substitution'],
  [64, '� Yellow card'],
  [69, '� Red card'],
  [70, '� Substitution'],
  [72, '� Substitution'],
  [76, '⚽ GOAL'],
  [80, '⚽ GOAL'],
  [92, '� Yellow card'],
]);

// const events = [...new Set([...gameEvents.values()])];
const events = [...new Set(gameEvents.values())];
console.log(events);
gameEvents.delete(64);
console.log(events);

console.log(
  `An event hapeened ,on average every ${90 / gameEvents.size} minutes`
);

//get last element of map
const time1 = [...gameEvents.keys()].pop();
console.log(time1);

for (const [min, event] of gameEvents) {
  const half = min > 45 ? 'SECOND' : ' FIRST';
  console.log(`[${half} HALF]${min}: ${event} `);
}

//challenge 4

document.body.append(document.createElement('textarea'));
document.body.append(document.createElement('button'));

document.querySelector('button').addEventListener('click', function () {
  const text = document.querySelector('textarea').value;
  const rows = text.split('\n');
  for (const [i, row] of rows.entries()) {
    const [first, second] = row.toLowerCase().trim().split('_');
    const output = `${first}${second.replace(
      second[0],
      second[0].toUpperCase()
    )}`;

    console.log(`${output.padEnd(20)}${'✅'.repeat(i + 1)}`);
  }
});

//pratice

const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// 🔴 Delayed Departure from FAO to TXL (11h25)
//              Arrival from BRU to FAO (11h45)
//   🔴 Delayed Arrival from HEL to FAO (12h05)
//            Departure from FAO to LIS (12h30)

// console.log(flights.split('+'));

const getCode = str => str.slice(0, 3).toUpperCase();
for (const flight of flights.split('+')) {
  const [type, from, to, time] = flight.split(';');
  const output = `${type.startsWith('_delayed') ? '🔴' : ''}${type.replaceAll(
    '_',
    ' '
  )} ${getCode(from)} ${getCode(to)} (${time.replace(':', 'h')})`.padStart(37);
  console.log(output);
}
