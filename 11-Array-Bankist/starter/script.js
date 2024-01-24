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
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const btnLogin = document.querySelector('.login__btn');
const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const labelWelcome = document.querySelector('.welcome');
const contaierApp = document.querySelector('.app');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnClose = document.querySelector('.form__btn--close');
const inputCloseUser = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');
const btnLoan = document.querySelector('.form__btn--loan');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const btnSort = document.querySelector('.btn--sort');

//start dom manipualtion
//to better pratice instead write code in global we create a function.

//create html
// after we want to attached that container to webpage so we use a method called insertAdjacentHTML.
//this method accept two string,first is position in which we want to attach the html,second is string containing html that we want to inset
// we can see that the old data is also present because we only add new elments to container not overiding it.
const displayMovements = function (movements, sort = false) {
  // remove all old elments when start the contaier

  containerMovements.innerHTML = ''; //it is similar to textcontent it return text itself while innerhtml return eveything ,including the html
  //.tectcontent =0;

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movements.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
    <div class="movements__type movements__type--${type}">${i + 1}${type}</div>
    <div class="movements__date">3 days ago</div>
    <div class="movements__value">${mov}€</div>
  </div>
       `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  }); // afterbegin,beforeend(order of movement change each add after previous one)
};
//displayMovements(account1.movements);

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

//reduce method
//here in callback function of reduced mathod the first parameter is accumulator
//accumulator is like snowball which take everything
//it has a seoncd parameter which is initial value of accumulator

// const balance = movements.reduce(function (acc, curr, i, arr) {
//   console.log(`Iteration ${i} :${acc}`);
//   return acc + curr;
// }, 0);
const balance = movements.reduce((acc, curr) => acc + curr, 0);
console.log(balance);

let balance2 = 0;
for (const mov of movements) balance2 += mov;
console.log(balance2);

//now we want to show total balance for account
//we create label elements ,label means we simply want to put some text

// const calDisplayBalance = function (movements) {
//   const balance = movements.reduce((acc, mov) => acc + mov, 0);
//   labelBalance.textContent = `${balance}€`;
// };

const calDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance}€`;
};

//calDisplayBalance(account1.movements);

//maximum value

// const maxiValue = movements.reduce(function (acc, mov) {
//   return acc < mov ? (acc = mov) : acc;
// }, movements[0]);

// console.log(maxiValue);
const max = movements.reduce((acc, mov) => {
  if (acc > mov) return acc;
  else return mov;
}, movements[0]);
console.log(max);

//chainging method
//we can chain after first one return an array.

const totalDepositeUSD = movements
  .filter(mov => mov > 0)
  .map((mov, i, arr) => {
    //console.log(arr);
    return mov * eurToUsd;
  })
  //.map(mov => mov * eurToUsd)
  .reduce((acc, mov) => acc + mov, 0);

console.log(totalDepositeUSD);

//add summery data
// const calDisplaySummary = function (movements) {
//   const incomes = movements
//     .filter(mov => mov > 0)
//     .reduce((acc, mov) => acc + mov, 0);
//   labelSumIn.textContent = `${incomes}€`;

//   const outcomes = movements
//     .filter(mov => mov < 0)
//     .reduce((acc, mov) => acc + Math.abs(mov), 0);
//   labelSumOut.textContent = `${outcomes}€`;

//   const interest = movements
//     .filter(mov => mov > 0)
//     .map(deposite => (deposite * 1.2) / 100)
//     .filter((int, i, arr) => {
//       console.log(arr);
//       return int >= 1;
//     })
//     .reduce((acc, int) => acc + int, 0);
//   labelSumInterest.textContent = `${interest}€`;
// };
//calDisplaySummary(account1.movements);

const calDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes}€`;

  const outcomes = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + Math.abs(mov), 0);
  labelSumOut.textContent = `${outcomes}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposite => (deposite * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = `${interest}€`;
};

const updateUI = function (currAcc) {
  displayMovements(currAcc.movements);
  //display balance
  calDisplayBalance(currAcc);
  //display summary
  calDisplaySummary(currAcc);
};
//Event handler
//when we click login the page reload beacuse the button is in a form element so default behaviour in html when we click buttton is reload.
let currentAccount;
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();
  console.log('Login');
  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  // console.log(inputLoginUsername);
  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    // console.log('Login');
    //display ui and message
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    labelWelcome.textContent = `Welcome back,${
      currentAccount.owner.split(' ')[0]
    }`;
    contaierApp.style.opacity = 100;

    //display movements
    // displayMovements(currentAccount.movements);
    // //display balance
    // calDisplayBalance(currentAccount);
    // //display summary
    // calDisplaySummary(currentAccount);

    //update ui
    updateUI(currentAccount);
  }
});

//transfer money

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputTransferAmount.value);
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  console.log(amount, receiverAcc);
  inputTransferTo.value = inputTransferAmount.value = '';
  //check valid transfer
  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer valid');

    //doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //udateui
    updateUI(currentAccount);
  }
});

//findIndex method
//return index of element not elemnt itself
//for delete an account we use splice method but we need index of that which come from findIndex

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    currentAccount.username === inputCloseUser.value &&
    currentAccount.pin === Number(inputClosePin.value)
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    //delete account
    accounts.splice(index, 1);
    //hide UI
    contaierApp.style.opacity = 0;
    inputCloseUser.value = inputClosePin.value = '';
    labelWelcome.textContent = 'Log in to get started';
  }
});

//some and every

//include only test equality if element present then return true
//some method help to test condition

//equality

console.log(movements);
console.log(movements.includes(-130));

//condition
console.log(movements.some(mov => mov === -130));
const anyDeposists = movements.some(mov => mov > 1500);
console.log(anyDeposists);

//now use some method to request a loan from bank
//if grant lone if at least one deposit with at least 10% of the requested loan amount

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    //add movement
    currentAccount.movements.push(amount);
    //update UI
    updateUI(currentAccount);
  }
  inputLoanAmount.value = '';
});

// every method
//same as some but return true if all the elements in the array satisfy the condition.

console.log(movements.every(mov => mov >= 0));
console.log(account4.movements.every(mov => mov > 0));

//separate callback
const deposit = mov => mov > 0;
console.log(movements.some(deposit));
console.log(movements.every(deposit));
console.log(movements.filter(deposit));

//flat and faltMap

const arr1 = [[1, 2, 3], [4, 5, 6], 7, 8];
console.log(arr.flat());
//flat method only get one level deep
//but we can specified dept by 1,2,3..
const arrDeep = [[[1, 2], 3], [4, [5, 6]], 7, 8];
console.log(arrDeep.flat(2));

//let bank calcutate all balance of all accounts movement.

// const accountMovements = accounts.map(acc => acc.movements);
// console.log(accountMovements);
// const allMovements = accountMovements.flat();
// console.log(allMovements);
// const overalBalance = allMovements.reduce((acc, mov) => acc + mov, 0);
// console.log(overalBalance);

const overalBalance = accounts
  .map(acc => acc.movements)
  .flat()
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance);

//faltmap combine a map and a flat method but we cant go deeper in flatmap method
const overalBalance2 = accounts
  .flatMap(acc => acc.movements)
  .reduce((acc, mov) => acc + mov, 0);
console.log(overalBalance2);

//sorting array
//it mutate the original array
//sort method does sorting based on string(imp)(it first convert into string then sort them)
//string
const owners = ['Jonas', 'Zach', 'Adam', 'Martha'];
console.log(owners.sort());
console.log(owners);

//number
console.log(movements);
// console.log(movements.sort());

//we can set sort by callback function which take two value current value and the next value

//imp
//return <0 , A,B(keep order)
//return >0, B,A(switch order)
//Asscnding
// movements.sort((a, b) => {
//   if (a > b) return 1;
//   if (a < b) return -1;
// });
// console.log(movements);
movements.sort((a, b) => a - b);
console.log(movements);

//descending
// movements.sort((a, b) => {
//   if (a > b) return -1;
//   if (a < b) return 1;
// });

// console.log(movements);
movements.sort((a, b) => b - a);
console.log(movements);

//if we have number and string togheter in an array then this method not work

//sort btn
let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movement, !sorted);
  sorted = !sorted;
});

//more way of creating and filling arrays
console.log([1, 2, 3, 4, 5, 6]);
console.log(new Array(1, 2, 3, 4, 5, 6));
//when we pass one argument than it create empty array of that length

const x = new Array(7);
console.log(x);
//we cant call map method on this empty array,we call only fill method on this array.
console.log(x.map(() => 5));

//x.fill(1); //fill whole array with 3
// x.fill(1, 3); //fill start from index 3
x.fill(1, 3, 5); //last index not included
console.log(x);

const arr4 = [1, 2, 3, 4, 5, 6, 7, 8];
arr4.fill(22, 2, 6);
console.log(arr4);

//recreate an array programatically we could use Array.from()
// here we are using form method on array constructor
//we pass an object with length property and second is a maping function

const y = Array.from({ length: 7 }, () => 1);
console.log(y);

const z = Array.from({ length: 7 }, (_, i) => i + 1);
console.log(z);

//Array.from in order to create array from array like structre
//string ,sets,map all are iterables so they can convert to real array from Array.from()
//thats why it name is Array.from() because we can create arrays from other things.
//another example of array like structure is the result of queryselectorAll()return a NodeList.
//NodeList: is something like array which contains all the selected elements.But it is not the real array so it doesnt have method like map(),reduce()
//if we want to use a real array method on Nodelist
//we first need to convert nodeList to an array
//and for that Array.from()is perfect

//so here we do not have movements for applicaction stored in an array.
//let pretend that we only have these values,all these movement stored in the user interface,but we donot have them somewhere in our code
//so we dont have an array containing these values
//so now we want to caluclate their sum
//so need to get somehow first from user interface and then do the calculation

// const movementsUI = Array.from(document.querySelectorAll('.movements__value'));
// console.log(movementsUI);

labelBalance.addEventListener('click', function () {
  const movementsUI = Array.from(
    document.querySelectorAll('.movements__value'),
    el => Number(el.textContent.replace('€', ''))
  );
  //   console.log(movementsUI.map(el => el.textContent.replace('€', '')));
  console.log(movementsUI);

  //other way
  const movementsUI2 = [...document.querySelectorAll('.movements__value')]; //here we have to do mapping separtly
});

//Array Pratice
//1.how much total deposite in a bank.

const bankDepositSum = accounts
  .flatMap(acc => acc.movements)
  .filter(mov => mov > 0)
  .reduce((acc, mov) => acc + mov, 0);

console.log(bankDepositSum);

//2.how many deposites there have been in the bank with at least $1000.
// const numDeposite1000 = accounts
//   .flatMap(acc => acc.movements)
//   .filter(mov => mov >= 1000).length;
// console.log(numDeposite1000);

const numDeposite1000 = accounts
  .flatMap(acc => acc.movements)
  //   .reduce((count, mov) => (mov >= 1000 ? count ++: count), 0);
  .reduce((count, mov) => (mov >= 1000 ? count + 1 : count), 0);
console.log(numDeposite1000);
//prefixed ++ operator
let a = 10;
console.log(a++); //10
console.log(a); //11
console.log(++a); //11

//3.create an ohject which contains the sum of the deposits and of the withdrawal
//we want to cal sum all the same time ,all in one go using reduce method

// const sum = accounts
//   .flatMap(acc => acc.movements)
//   .reduce(
//     (sum, cur) => {
//       cur > 0 ? (sum.deposits += cur) : (sum.withdrawals += cur);
//       return sum;
//     },
//     { deposits: 0, withdrawals: 0 }
//   );
// console.log(sum);

const { deposited, withdrawal } = accounts
  .flatMap(acc => acc.movements)
  .reduce(
    (sum, cur) => {
      //   cur > 0 ? (sum.deposits += cur) : (sum.withdrawals += cur);
      sum[cur > 0 ? 'deposite' : 'withdrawals'] += cur;
      return sum;
    },
    { deposits: 0, withdrawals: 0 }
  );
console.log(deposited, withdrawal);

//4.convert any string to a title case.(means all the words are capitaliaze except some of them)
//this is a nice title -> This Is a Nice Title
const convertTitleCase = function (title) {
  const capitaliaze = str => str[0].toUpperCase() + str.slice(1);
  const expections = ['a', 'an', 'the', 'but', 'and', 'or', 'on', 'in', 'with'];
  const titleCase = title
    .toLowerCase()
    .split(' ')
    .map(word => (expections.includes(word) ? word : capitaliaze(word)))
    .join(' ');
  return capitaliaze(convertTitleCase);
};
console.log(convertTitleCase('this is a nice title'));
console.log(convertTitleCase('this is a LONG title but not too long'));
console.log(convertTitleCase('and here is another title with an EXAMPLE'));
