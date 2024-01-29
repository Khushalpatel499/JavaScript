'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

/////////////////////////////////////////////////
// Data

// DIFFERENT DATA! Contains movement dates, currency and locale

const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 455.23, -306.5, 25000, -642.21, -133.9, 79.97, 1300],
  interestRate: 1.2, // %
  pin: 1111,

  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,

  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const accounts = [account1, account2];

/////////////////////////////////////////////////
// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/////////////////////////////////////////////////
// Functions

const formatMovementDate = function (date, locale) {
  const calcdaysPassed = (date1, date2) =>
    Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

  const passedDays = calcDisplayBalance(new Date(), date);
  console.log(passedDays);
  if (passedDays === 0) return 'Today';
  if (passedDays === 1) return 'Yesterday';
  if (passedDays <= 7) return `${passedDays} days ago`;

  //   const day = `${date.getDate()}`.padStart(2, 0);

  //   const month = `${date.getMonth() + 1}`.padStart(2, 0);
  //   const year = date.getFullYear();

  //   return `${day}/${month}/${year}`;

  return new Intl.DateTimeFormat(locale).format(date);
};

const formatCur = function (value, locale, currency) {
  return new Intl.NumberFormat(acc.locale, {
    style: 'currency',
    currency: 'USD',
  }).format(value);
};
const displayMovements = function (acc, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort
    ? acc.movements.slice().sort((a, b) => a - b)
    : acc.movements;

  movs.forEach(function (mov, i) {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const date = new Date(acc.movementsDates[i]);

    const displayDate = formatMovementDate(date, acc.locale);
    // const formattedMov=new Intl.NumberFormat(acc.locale,{
    //     style:'currency',
    //     currency:'USD',
    // }).format(mov);
    const formattedMov = formatCur(mov, acc.locale, acc.currency);
    const html = `
      <div class="movements__row">
        <div class="movements__type movements__type--${type}">${
      i + 1
    } ${type}</div>
    <div class="movements__date">${displayDate}</div>
         <div class="movements__value">${mov.toFixed(2)}€</div>
         <div class="movements__value">${formattedMov}</div>
      </div>
    `;

    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  const formattedMov = formatCur(acc.balance, acc.locale, acc.currency);
  //   labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
  labelBalance.textContent = `${formattedMov}`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter(mov => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = formatCur(incomes, acc.locale, acc.currency);
  //   labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter(mov => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = formatCur(Math.abs(out), acc.locale, acc.currency);
  //   labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter(mov => mov > 0)
    .map(deposit => (deposit * acc.interestRate) / 100)
    .filter((int, i, arr) => {
      // console.log(arr);
      return int >= 1;
    })
    .reduce((acc, int) => acc + int, 0);
  labelSumInterest.textContent = formatCur(interest, acc.locale, acc.currency);
  //labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

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

const updateUI = function (acc) {
  // Display movements
  displayMovements(acc);

  // Display balance
  calcDisplayBalance(acc);

  // Display summary
  calcDisplaySummary(acc);
};
const startLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(time / 60)).padStart(2, 0);
    const sec = String(time % 60).padStart(2, 0);
    //in each call, print the remaining time to ui
    labelTimer.textContent = `${min}:${sec}`;
    //decrease 1s
    // time--;

    //when 0 second ,stop timer and log out user.
    if (time === 0) {
      clearInterval(timer);
      labelWelcome.textContent = 'Log in to get started';
      containerApp.style.opacity = 0;
    }

    //decrease 1s
    time--;
  };
  //set time to 5minute
  let time = 100;
  tick();
  //we want to call function immediately so we take it out in another function
  //call the timer every second;
  const timer = setInterval(
    tick, //function () {
    //     const min = String(Math.trunc(time / 60)).padStart(2, 0);
    //     const sec = String(time % 60).padStart(2, 0);
    //     //in each call, print the remaining time to ui
    //     labelTimer.textContent = `${min}:${sec}`;
    //     //decrease 1s
    //     time--;

    //     //when 0 second ,stop timer and log out user.
    //     if (time === 0) {
    //       clearInterval(timer);
    //       labelWelcome.textContent = 'Log in to get started';
    //       containerApp.style.opacity = 0;
    //     }
    //   }
    1000
  );
  return timer;
};
///////////////////////////////////////
// Event handlers
let currentAccount, timer;

//Fake always logged in
// currentAccount = account1;
// updateUI(currentAccount);
// containerApp.style.opacity = 100;

// const now = new Date();
// const day = `${now.getDate()}`.padStart(2, 0);
// // console.log(typeof day);
// //here day is number so to pad with want to convert intostring
// const month = `${now.getMonth() + 1}`.padStart(2, 0);
// const year = now.getFullYear();
// const hour = now.getHours();
// const min = now.getMinutes();
// labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`;

//Experimenting API
const now = new Date();
//option object.
// const options = {
//   hour: 'numeric',
//   minute: 'numeric',
//   day: 'numeric',
//   month: 'long', //month:'numeric'//month:'2-digit'
//   year: 'numeric',
// };

// //to geT user language from browser.
// const locale = navigator.language;
// console.log(locale);
// //we have to pass locale string these locale is language -country
// // labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);
// labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(now);
// labelDate.textContent = new Intl.DateTimeFormat(locale, options).format(now);

btnLogin.addEventListener('click', function (e) {
  // Prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(
    acc => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    // Display UI and message
    labelWelcome.textContent = `Welcome back, ${
      currentAccount.owner.split(' ')[0]
    }`;
    containerApp.style.opacity = 100;
    //create current date and time

    const now = new Date();
    // const day = `${now.getDate()}`.padStart(2, 0);
    // // console.log(typeof day);
    // //here day is number so to pad with want to convert intostring
    // const month = `${now.getMonth() + 1}`.padStart(2, 0);
    // const year = now.getFullYear();
    // const hour = `${now.hour()}`.padStart(2, 0);
    // const min = `${now.getMinutes()}`.padStart(2, 0);
    // labelDate.textContent = `${day}/${month}/${year},${hour}:${min}`;

    const options = {
      hour: 'numeric',
      minute: 'numeric',
      day: 'numeric',
      month: 'long', //month:'numeric'//month:'2-digit'
      year: 'numeric',
    };

    //to geT user language from browser.
    // const locale = navigator.language;
    // console.log(locale);
    //we have to pass locale string these locale is language -country
    // labelDate.textContent = new Intl.DateTimeFormat('en-US').format(now);
    labelDate.textContent = new Intl.DateTimeFormat('en-US', options).format(
      now
    );
    labelDate.textContent = new Intl.DateTimeFormat(
      currentAccount.locale,
      options
    ).format(now);

    // Clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();
    //timer
    if (timer) clearInterval(timer);
    timer = startLogOutTimer();
    // Update UI
    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', function (e) {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    acc => acc.username === inputTransferTo.value
  );
  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    // Doing the transfer
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //add transfer date
    currentAccount.movements.push(new Date().toISOString());
    receiverAcc.movements.push(new Date().toISOString());
    // Update UI
    updateUI(currentAccount);

    //reset timer
    clearInterval(timer);
    timer = startLogOutTimer();
  }
});

btnLoan.addEventListener('click', function (e) {
  e.preventDefault();

  const amount = Math.floor(inputLoanAmount.value);

  if (amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1)) {
    setTimeout(function () {
      // Add movement
      currentAccount.movements.push(amount);
      //add loan date
      currentAccount.movements.push(new Date().toISOString());
      // Update UI
      updateUI(currentAccount);

      //reset timer
      clearInterval(timer);
      timer = startLogOutTimer();
    }, 3500);
  }
  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', function (e) {
  e.preventDefault();

  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      acc => acc.username === currentAccount.username
    );
    console.log(index);
    // .indexOf(23)

    // Delete account
    accounts.splice(index, 1);

    // Hide UI
    containerApp.style.opacity = 0;
  }

  inputCloseUsername.value = inputClosePin.value = '';
});

let sorted = false;
btnSort.addEventListener('click', function (e) {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES
//how numbers work in javaScript
//how to convert values to number
//how to check if certain values are number or not
// in js all numbers are represent internally as floating point numbers
//represent internally in 64 base 2 format(means numbers are stored in binary format)
console.log(23 === 23.0); //true
//Base 10 - 0 to 9
//binary base 2 - 0 1
console.log(0.1 + 0.2); // 0.300000000004 not 0.30000000 because it deal in binary numbers
console.log(0.1 + 0.2 === 0.3); //false

//string convert into number
console.log(Number('23'));
//by using + by seeing + js do type coercion
console.log(+'23');

//parsing (parse a number from string)(string start with number)
//parsing function accept a second argument called regex is a base of numeral system
console.log(Number.parseInt('30px', 10)); //30
console.log(Number.parseInt('e23', 10)); //NAN

console.log(Number.parseFloat('2.5rem')); //2.5
console.log(Number.parseInt('   2.5rem   ')); //2
//parseFLoat and parseInt are global function

console.log(parseFloat('2.5rem'));

//isNaN to  check if any value is not a number

console.log(Number.isNaN(20)); //false
console.log(Number.isNaN('20')); //false beacuse it just a regular value
console.log(Number.isNaN(+'20X')); //true
console.log(Number.isNaN(23 / 0)); //false

//isFInite check if value is number
console.log(Number.isFinite(23)); //true
console.log(Number.isFinite('20')); //false
console.log(Number.isFinite(+'20X')); //flase
console.log(Number.isFinite(23 / 0)); //false

console.log(Number.isInteger(23)); //true
console.log(Number.isInteger(23.0)); //true
console.log(Number.isInteger(23 / 0)); //false

//Math and rounding
console.log(Math.sqrt(25)); //5
console.log(25 ** (1 / 2)); //5
console.log(8 ** (1 / 3)); //3

console.log(Math.max(5, 18, 23, 11, 2)); //23
console.log(Math.max(5, 18, '23', 11, 2)); //23
console.log(Math.max(5, 18, '23px', 11, 2)); //NaN

console.log(Math.min(5, 18, 23, 11, 2)); //2

//area of circle
console.log(Math.PI * Number.parseFloat('10px') ** 2);

//random

console.log(Math.floor(Math.random() * 6) + 1);

//generate any random number between two values

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min) + 1) + min;

// 0...1 -> 0....(max-min)
// add min both side
//0...(max-min)->min....max

console.log(randomInt(10, 20));

//rounding

//int
console.log(Math.trunc(23.3));

console.log(Math.round(23.3)); //23
console.log(Math.round(23.9)); //24
//round up
console.log(Math.ceil(23.3)); //24
console.log(Math.ceil(23.9)); //24
//round down
console.log(Math.floor(23.3)); //23
console.log(Math.floor(23.9)); //23

//these all method also do type coercion
console.log(Math.floor('23.9')); //23

//floor and trunc are same when we dealing with positive number
//floor is better than trunc
console.log(Math.trunc(-23.9)); //-23
console.log(Math.floor(-23.9)); //=24

//rounding decimals

//tofixed always return a string not a number
console.log((2.7).toFixed(0)); //3
console.log((2.7).toFixed(3)); //2.700
console.log((2.345).toFixed(2)); //2.35
console.log(+(2.345).toFixed(2)); //2.35

//this numbers are primitive so primitive dont have methods
//so behind the scence js do boxing is basically transform to a number object, then call the method on that object
//when operation is finished then convert back to a primitive

// the remainder Operator

console.log(5 % 2); //1
console.log(5 / 2);

console.log(8 % 3); //2
console.log(8 / 3);

console.log(6 % 2);
console.log(6 / 2);

console.log(7 % 2);
console.log(7 / 2);

const isEven = n => n % 2 === 0;
console.log(isEven(8));
console.log(isEven(23));
console.log(isEven(514));

labelBalance.addEventListener('click', function () {
  [...document.querySelectorAll('.movements__row')].forEach(function (row, i) {
    if (i % 2 === 0) row.style.backgroundColor = 'orangered';
    if (i % 3 === 0) row.style.backgroundColor = 'blue';
  });
});

// Numeric Separator (format a number by putting _ between them)
//287,467,000,000
const diameter = 287_460_000_000;
console.log(diameter);

const price = 345_99;
console.log(price); //34599

const transferFee1 = 15_00;
const transferFee2 = 1_500;

const PI = 3.14_15;
console.log(PI); //3.1415

//not allowe like 3_.1415,3._1415,_1500,15__00

//when we try to convert string that contain undrscore to number
console.log(Number('230000')); //230000
console.log(Number('230_00')); //NaN
console.log(parseInt('230_00')); //230

//primitive datatype bigInt
//numbers are stroed in 64 bits mean there are only 64 1's or 64 0's but only 53 are use to store digits
//the rest are stored position of the decimal point and the sign

console.log(2 ** 53 - 1);
console.log(Number.MAX_SAFE_INTEGER); //give biggest number

//n transfer regular number into and bigInt number
console.log(34598430485403094859409312345678n);
console.log(BigInt(1234567891234343));
//operation

console.log(1000n + 10000n);
console.log(23456723456723456n * 1234567654323456n);

// cant mix bigInt and regualr type
const huge = 234567654323456543n;
const regular = 234543;
// console.log(huge * regular);
console.log(huge * BigInt(regular));

//Exceptions
console.log(20n > 15); //true
console.log(20n === 20); //false
console.log(typeof 20n); //bigInt

console.log(20n == 20); //true
console.log(20n == '20'); //true

console.log(Math.sqrt(16n)); // error(not work)

console.log(huge + 'is Really big!!');

console.log(10n / 3n); // 3n
console.log(10 / 3); //3.33333

//creating dates
//month in js is 0 based.
const now1 = new Date();
console.log(now);

console.log(new Date('Aug 02 2020 18:05:41'));
console.log(new Date('December 24,2015'));
console.log(new Date(account1.movementsDates[0]));

console.log(new Date(2037, 10, 19, 15, 23, 5));
//it also auto correct like nov has 30 days then it goes to decem
console.log(new Date(2037, 10, 33)); // Dec 03 2037

//jan 01 1970
console.log(new Date(0)); // Jan 01 1970 01:00:00
console.log(new Date(3 * 24 * 60 * 60 * 1000)); //Jan 04 1970 01:00:00

//workign with dates
const future = new Date(2037, 10, 19, 15, 23);
console.log(future);
console.log(future.getFullYear());
console.log(future.getMonth());
console.log(future.getDate());
console.log(future.getDay()); //it is day of week  0 is sunday and 4 is thursday
console.log(future.getHours());
console.log(future.getMinutes());
console.log(future.getSeconds());

console.log(future.toISOString());
//time stamp is time which passed since january 1,1970
console.log(future.getTime());

console.log(new Date(2142256980000));
console.log(Date.now());

//set version
future.setFullYear(2040);
console.log(future);

//operations on dates

// we can subtract one date from another date in order to calculate how many days have passed,
//whenever we convert a date into number the result is timstamp in millisecond

const future1 = new Date(2037, 18, 19, 15, 23);
// console.log(Number(future1));
console.log(+future1);

// function that take two dates and return number of days passed betwwen them.

const calcdaysPassed = (date1, date2) =>
  Math.round(Math.abs(date1 - date2) / (1000 * 60 * 60 * 24));

// calcDisplayBalance(new Date(2037, 3, 4), new Date(2037, 3, 14));

calcDisplayBalance(new Date(2037, 3, 4, 10, 8), new Date(2037, 3, 14));

//need very precies calculation like time changes due to daylight saving changes,
//use date library like moment.js

//display in better movemnts like today,yesterday

//Js has a Internatinalization API it allow us to easily format  dates and strings according to different languages.
// foramt regualr numbers using interanationalizing api

const num = 3884764.23;

const options = {
  style: 'unit', //style:'percent'//style:'currency'
  unit: 'mile-per-hour', //unit:'celsius'
  currency: 'EUR',
  useGrouping: false,
};
console.log('US:  ', new Intl.NumberFormat('en-US', options).format(num));
console.log('Germany:  ', new Intl.NumberFormat('de-DE').format(num));
console.log('Syria:  ', new Intl.NumberFormat('ar-SY').format(num));
console.log(
  navigator.language,
  new Intl.NumberFormat(navigator.language).format(num)
);

//timers in js two types: Timeout(run just once after a defined time) and setInterval(running forever,untill we stop it)

//setTimeout() receive a callback function

setTimeout(() => console.log('Here is your pizza 🍕'), 3000); //run after 3 sec.
console.log('waiting...');
// js keeping counting the time in the background and register callback function to be called after that time has elapsed and then immediately, js will move on
// and this mechanism is called asynchronous js.
// we are not calling the set time out function so it is not easy to passarguments so all the arguments here we pass after delay will be arguments to the function.

setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza  with ${ing1} and ${ing2}🍕`),
  3000,
  'olivis',
  'spanich'
);
//we can cancel timer before 3 sec passed for above setTimeout

const ingredients = ['ovlies', 'spinach'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza  with ${ing1} and ${ing2}🍕`),
  3000,
  ...ingredients
);
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

//setInterval
setInterval(function () {
  const now = new Date();
  console.log(now);
}, 5000);
