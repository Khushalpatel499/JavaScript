const checkDogs = function (dogsJulia, dogskate) {
  //   const dogsJuliaCopy = dogsJulia.slice(1, dogsJulia.length - 2);
  const dogsJuliaCopy = dogsJulia.slice();
  dogsJuliaCopy.splice(0, 1);
  dogsJuliaCopy.splice(-2);
  //   const correctData = [...dogsJuliaCopy, ...dogskate];
  const correctData = dogsJuliaCopy.concat(dogskate);
  correctData.forEach(function (val, i) {
    if (val >= 3)
      console.log(`Dog Number ${i + 1} is an adult, and is ${val} year old`);
    else console.log(`Dog Number ${i + 1} is an puppy🐶`);
  });
};
checkDogs([3, 5, 2, 12, 7], [4, 1, 15, 8, 3]);
checkDogs([9, 16, 6, 8, 3], [10, 5, 6, 1, 4]);

//challenge 2
const calAverageHumanAge = function (ages) {
  const humanAges = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4));
  console.log(humanAges);
  const adults = humanAges.filter(age => age >= 18);
  console.log(adults);
  //   const average = adults.reduce((acc, age) => acc + age, 0);
  //   return average / adults.length;
  const average = adults.reduce(
    (acc, age, i, arr) => acc + age / arr.length,
    0
  );
  // 2 3. (2+3)/2 = 2.5 === 2/2+3/2 = 2.5
  return average;
};

const avg1 = calAverageHumanAge([5, 2, 4, 1, 15, 8, 3]);

const avg2 = calAverageHumanAge([16, 6, 10, 5, 6, 1, 4]);

console.log(avg1, avg2);

//challenge 3

const calAverageHumanAge1 = ages =>
  ages
    .map(age => (age <= 2 ? 2 * age : 16 + age * 4))
    .filter(age => age >= 18)
    .reduce((acc, age, i, arr) => acc + age / arr.length, 0);

const avg3 = calAverageHumanAge1([5, 2, 4, 1, 15, 8, 3]);

const avg4 = calAverageHumanAge1([16, 6, 10, 5, 6, 1, 4]);

console.log(avg3, avg4);

//find method
//reterive one element from array based on a condition
//it also accept a callback function
// filter return all the element match the condition
//while find return first elment that match the condition

const firstWithdrawl = movements.find(mov => mov < 0);
console.log(movements);
console.log(firstWithdrawl);

const account = accounts.find(acc => acc.owner === 'Jessica Davis');
console.log(account);

for (const acc of accounts) {
  if (acc.owner === 'Jessica Davis') console.log(acc);
}

//random die roll create an array of size 100 using Array.from()

const roll = Array.from(
  { length: 100 },
  () => Math.trunc(Math.random() * 6) + 1
);
console.log(roll);

//challenge 4

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

//1.
dogs.forEach(el => (el.recFood = Math.trunc(el.weight ** 0.75 * 25)));

console.log(dogs);

//2.

const dogSarah = dogs.find(dog => dog.owners.includes('Sarah'));
console.log(dogSarah);
console.log(
  `Sarah's dog is eating too ${
    dogSarah.curFood > dogSarah.recFood ? 'much' : 'little'
  }`
);

//3.

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatTooMuch);

const ownersEatToolittle = dogs
  .filter(dog => dog.curFood < dog.recFood)
  .flatMap(dog => dog.owners);
console.log(ownersEatToolittle);

//4.
console.log(`${ownersEatTooMuch.join(' and ')}'s dogs eat too much!`);
console.log(`${ownersEatToolittle.join(' and ')}'s dogs eat too little`);

//5.
console.log(dogs.some(dog => dog.curFood === dog.recFood));

//6
const checkEatingOkay = dog =>
  dog.curFood > dog.recFood * 0.9 && dog.curFood < dog.recFood * 1.1;
console.log(dogs.some(checkEatingOkay));

//7.
console.log(dogs.filter(checkEatingOkay));

//8.
const dogsCopy = dogsCopy.slice().sort((a, b) => a.recFood - b.recFood);
console.log(dogsCopy);
