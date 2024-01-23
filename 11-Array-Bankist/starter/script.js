'use strict';
//Array Methods

//why array do have method?
//we know methods are simply functions that we can call on object.
//so they are functions attached to objects.
//if we have array methods means array are also object.

let arr = ['a', 'b', 'c', 'd', 'e'];
//slice method
//this doesnt mutate the original array it is return new array or copy of arry with extracted parts.

console.log(arr.slice(2));
console.log(arr.slice(2, 4)); //end parameter not include in the output.
//length is end-begining
console.log(arr.slice(-1));
console.log(arr.slice(-1));
console.log(arr.slice(1, -2));

//create shallow copy
console.log(arr.slice());
//we do same thing using spread operator
console.log([...arr]);

//Splice method(same as slice but it change the actual array the extracted element are gone from orginal array)

// console.log(arr.splice(2)); //output:['c','d','e']
// console.log(arr); //output:['a','b']
// console.log(arr.splice(-1));
// console.log(arr);
console.log(arr.splice(1, 2)); //here first parameter work same as slice but second is no. of parameter want to delete
console.log(arr);

//Reverse

const arr2 = ['j', 'i', 'h', 'g', 'f'];
console.log(arr2.reverse());
console.log(arr2); //this will mutate the orginal array

//concat(concatented two arrays)
//it doesnt mutate original array
const letters = arr.concat(arr2);
console.log(letters);

//we also done this in other way
console.log([...arr, ...arr2]);

//Join(result is string)
console.log(letters.join('-'));

//we already know
//push,unshift,pop,shift,indexof,include

//at method
// negative number in at count from right side

const arr3 = [23, 11, 64];
console.log(arr3[0]);
console.log(arr3.at(0));

//getting last array element
console.log(arr3[arr3.length - 1]);
console.log(arr3.slice(-1)[0]);
console.log(arr3.at(-1)); //64
console.log(arr3.at(-2)); //11
//at method also work on string
console.log('jonas'.at(0));
console.log('jonas'.at(-1));
console.log('jonas'[2]);

//if we want to calucute last elmeent and use method chaining then use at method
//if we want to get any value from array then use bracket notation

//forEach method

//it require a callback function in order to tell it what to do
//forEach method call the callback function we are not calling it ourselves.
//when forEach function call this callback function?
//it loop over the array and in each iteration it execute this  callback function.

const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

for (const movement of movements) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
}

console.log('--------forEach--------');

movements.forEach(function (movement) {
  if (movement > 0) {
    console.log(`You deposited ${movement}`);
  } else {
    console.log(`You withdraw ${Math.abs(movement)}`);
  }
});
//use callback function to tell another higher order function eaxctly waht it should do.
// 0:function(200)
//1:function(450)
//2: function(400)

//how to access currentt index of the array in for of loop

for (const [i, movement] of movements.entries()) {
  if (movement > 0) {
    console.log(`Movement ${i + 1} :You deposited ${movement}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(movement)}`);
  }
}

//forEach method who calls this callback function in each iteration
//it not only passes in the current element of the array, it will pass in index, and the entire array that we are looping.
//here the order matter ,1st is current element, second is current index,and third is entire array

movements.forEach(function (mov, i, arr) {
  if (mov > 0) {
    console.log(`Movement ${i + 1} :You deposited ${mov}`);
  } else {
    console.log(`Movement ${i + 1}: You withdraw ${Math.abs(mov)}`);
  }
});

// continue and break statement not work in forEach loop

//ForEach with set and map

//map

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

currencies.forEach(function (value, key, map) {
  console.log(`${key}:${value}`);
});

const currenciesUnique = new Set(['USD', 'GBP', 'USD', 'EUR', 'EUR']);

// currenciesUnique.forEach(function (value, key, set) {
//   console.log(`${key}:${value}`); //here key is same as value why?
// });
//to keep same signature forEach for all they not ommit key
//so they set key same as value

currenciesUnique.forEach(function (value, _, set) {
  console.log(`${value}:${value}`); //here key is same as value why?
});
// _ means in js a throwaway variable means a variable that is completely unnecessary

//BankList app

//data
// we will use object instead of map because in web api data come in form of object.
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, //%
  pin: 1111,
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

//first change the opactiy which is deafault 100
//now we want to display each movements in current balance.
//we will use forEach method to do that which allow loop through the array.

//ELements
const containerMovements = document.querySelector('.movements');
//start dom manipualtion
//to better pratice instead write code in global we create a function.

//create html
// after we want to attached that container to webpage so we use a method called insertAdjacentHTML.
//this method accept two string,first is position in which we want to attach the html,second is string containing html that we want to inset
// we can see that the old data is also present because we only add new elments to container not overiding it.
const displayMovements = function (movements) {
  // remove all old elments when start the contaier

  containerMovements.innerHTML = ''; //it is similar to textcontent it return text itself while innerhtml return eveything ,including the html
  //.tectcontent =0;
  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}</div>
  </div>
       `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  }); // afterbegin,beforeend(order of movement change each add after previous one)
};
displayMovements(account1.movements);

//read data
// console.log(containerMovements.innerHTML);

//data transformation
//in js there are three big array methods
//these are used to create new arrays based on transforming data from other array.
//three methods are map,filter,reduce

//map method
//it can be use to loop over array
//it is similar to the forEach method that we studied before
//but the difference that map creates a brand new array based on the original array.
//it return a new array containing the result

//filter method
//used to fliter elements in the original array which satisfy a certain condition.
//it return new array.

//reduce method
//boil down all element of original array into one single value.
// no new array only one single value.

//map method

const movemented = [200, 450, -400, 3000, -650, -130, 70, 1300];

const eurToUsd = 1.1;

const movementUSD = movemented.map(function (mov) {
  return mov * eurToUsd;
});

console.log(movemented);
console.log(movementUSD);

const movementsUSDfor = [];
for (const mov of movemented) movementsUSDfor.push(mov * eurToUsd);
console.log(movementsUSDfor);

// const movementUSD1 = movemented.map(mov => mov * eurToUsd);

const movementsDescriptions = movements.map(
  (mov, i) =>
    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdraw'} ${Math.abs(
      mov
    )}`
);
console.log(movementsDescriptions);
//it remove the side effect that create by forEach method in each iteration which is each action is visible in console.
//here we return each of string form the callback and they got added into new array and then finally we logged taht entire array,
//not element one by one

//use map to compute a username

// const createUsernames = function (user) {
//   const userName = user
//     .toLowerCase()
//     .split(' ')
//     .map(name => name[0])
//     .join('');
//   return userName;
// };
// const user = 'Steven Thomas Williams'; //stw

// console.log(createUsernames(user));

//on above we create create a username for specifice data but we want to create the whole accounts.
//side effect means do any work without return anything.
const createUsernames = function (accs) {
  accs.forEach(function (acc) {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(name => name[0])
      .join('');
  });
};
createUsernames(accounts);
console.log(accounts);

//filter Method

const deposits = movements.filter(function (mov, i, arr) {
  return mov > 0;
});
console.log(movements);
console.log(deposits);

const depositsFor = [];
for (const mov of movements) if (mov > 0) depositsFor.push(mov);

console.log(depositsFor);

const withdrawals = movements.filter(mov => mov < 0);
console.log(withdrawals);
