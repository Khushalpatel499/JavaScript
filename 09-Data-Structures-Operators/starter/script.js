//array destructuring
//means unpacking values from an array or object into separate variable
//destructruing means is to break a complext data structure down into a smaller data structure like a variable.
'use strict';
//simple divide
const arr = [2, 3, 4];
const a = arr[0];
const b = arr[1];
const c = arr[2];

// destructuring
const [x, y, z] = arr;
console.log(x, y, z);
console.log(arr);

//reastuent menu;

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  openingHours: {
    thu: {
      open: 12,
      closs: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // open 24 hours
      close: 24,
    },
  },
  //   orderDelivery: function (obj) {
  //     console.log(obj);
  //   },
  orderDelivery: function ({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Orderr received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza: function (mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
  },
};

restaurant.orderDelivery({
  time: '22:30',
  address: 'Via del sole,21',
  mainIndex: 2,
  starterIndex: 1,
});
restaurant.orderDelivery({
  address: 'via del solo',
  starterIndex: 1,
});

// const [first, , second] = restaurant.categories;
// console.log(first, second);

let [main, , secondary] = restaurant.categories;
console.log(main, secondary);
//normal change to values
// const temp=main;
// main =secondary;
// secondary=temp;
// console.log(main,secondary);

//use destructuring to change value
[main, secondary] = [secondary, main];
console.log(main, secondary);

//receive 2 return values form a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

//nested array

const nested = [2, 4, [5, 6]];
// const [i, ,j]=nested;
const [i, , [j, k]] = nested;
console.log(i, j, k);

//Default value
// const [p,q,r]=[8,9];
// console.log(p,q,r);// output :p=8,q=9,r undefined
const [p = 1, q = 1, r = 1] = [8, 9];
console.log(p, q, r);

//destructuring obeject we used curly braces
// this help in api call when data come in obect

const { name, openingHours, categories } = restaurant;
console.log(name, openingHours, categories);
const {
  name: restaurantName,
  openingHours: hours,
  categories: tags,
} = restaurant;
console.log(restaurantName, hours, tags);

//assign default value

const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//Mutating variables
let m = 111;
let n = 999;
const obj = { m: 23, n: 7, k: 14 };

//  {m,n} =obj;//syntax error because when we start a line with a curly braces
//then js expects a code block and we cant assign anythink to a code block
//sloution:
({ m, n } = obj);
console.log(a, b);

//nested objects
const {
  fri: { open: o, close: d },
} = openingHours;

console.log(o, d);

//spread operator(...): to basically expand an array into all its element
// use in build new array and pass argument in funntion
const arr1 = [7, 8, 9];
//expand an array
const badNewArr = [1, 2, arr1[0], arr1[1], arr1[2]];
console.log(badNewArr);
// const newArray=[1,2,arr];//here an array put in another array
const newArr = [1, 2, ...arr]; //here each element spread out from arr and put in new array
console.log(newArr); //output array
console.log(...newArr); //output element individually

const newMenu = [...restaurant.mainMenu, 'Gnocci'];
console.log(newMenu);

//copy array or shallow copy
const mainMenuCopy = [...restaurant.mainMenu];

//joins two array
const menu1 = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(menu1);

//spread ooperator also work on iterables are things like all array,strings,maps,sets but not object

const str = 'Khushal';
const letters = [...str, ' ', 'S.'];
console.log(letters);
// console.log(`${...str} schemdtann`);//no work because it not expect mutliple values separated by commas.

const ingredients = [
  prompt("let's make pasta !Ingredinet1"),
  prompt('Ingredient 2'),
  prompt('Ingredient 3'),
];
console.log(ingredients);

restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
restaurant.orderPasta(...ingredients);

//from es 2018 spread operator also work on object even object is not iterables

const newRestaurant = { founderIn: 1998, ...restaurant, founder: 'Khushal' };
console.log(newRestaurant);
//shallow copy of object
const restaurantCopy = { ...restaurant };
restaurantCopy.name = 'Ristornate';
console.log(restaurantCopy.name);
console.log(restaurant.name);

//changing one object will also change the other object but here we made copy by spread operator

//Rest pattern and Parameters(opposite of spread operator)
// it collect multiple elements and condense them into an array.
//spread upack the array while rest pack element into array

//for destructuring

//Spread, because on right side of =
const arr2 = [1, 2, ...[3, 4]];
//Rest,because  on left side of =
const [e, f, ...others] = [1, 2, 3, 4, 5];
console.log(e, f, others);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];
console.log(pizza, risotto, otherFood);

//Object:
const { sat, ...weekdays } = restaurant.openingHours;
console.log(weekdays);

//for functioning
const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) sum += numbers[i];
  console.log(sum);
};

add(2, 3);
add(2, 3, 5);
add(1, 2, 4, 6, 4);
const t = [12, 23, 5];
add(...t);

restaurant.orderPizza('mushrooms', 'onion', 'olives', 'spinach');
restaurant.orderPizza('mushrooms');
//spread used where values are seperated by commas,
//rest used where variables are seperated by commas

//Short Circuiting (&& and ||)

console.log('-----------OR--------');
console.log(3 || 'Jonas'); //output:3
//three properties of logical operator:
//1.they can use any data type
//2.they can return any data type
//3.they can do short circuiting
//shortcircuting in || operator means if first value is truthy value it immediately return that value.

console.log('' || 'jonas'); //here first value is falsy so second evaluted .output: jonas(no short ciruit because reach end)
console.log(true || 0); //output: true(short ciruit not reach the end)
console.log(undefined || null); //undefined is falsy value.output:null(it is also falsy)(no short ciruit)
console.log(undefined || 0 || '' || 'Hello' || 23 || null); //output:Hello(shortcircuit)
//in or operator if first value is true then not see other values

restaurant.numGuest = 23;
const guests1 = restaurant.numGuest ? restaurant.numGuest : 10;
console.log(guests1);

const guests2 = restaurant.numGuest || 10;
console.log(guests2);

console.log('---------AND--------');
//in && operator if first value is falsy then it immediatly return that value
console.log(0 && 'jonas'); //output:0
console.log(7 && 'jonas'); //output: jonas
console.log('hello' && 23 && null && 'jonas'); //output:null

if (restaurant.orderPizza) {
  restaurant.orderPizza('mushroom', 'spinach');
}

restaurant.orderPizza && restaurant.orderPizza('mushroom', 'spanich');

//we can use the or operator to set default values,
// we can use and operator to execute code in second operand if the first one is true

//The nullish coalescing operator
// if nullish values come it will continue the elvalution else it will short cirucit.

restaurant.newGuest = 0;
const guest3 = restaurant.newGuest || 10;
console.log(guest3); //output:10;

const guestCorrect = restaurant.newGuest ?? 10;
console.log(guestCorrect); // output:0
//Nullish: null and undefined(not 0 or '')
const guestCorrect1 = restaurant.member ?? 10;
console.log(guestCorrect); // output:10

//Logical assignemnt operators

const rest1 = {
  name: 'Capri',
  //   numGuests: 20,
  numGuests: 0,
};

const rest2 = {
  name: 'Le Piazza',
  owner: 'Giovanni Rossi',
};

//OR assignment operator
//we want to add default number of guest property if that restaurent objects
// rest1.numGuests = rest1.numGuests || 10;
// rest1.numGuests ||= 10;
// rest2.numGuests = rest2.numGuests || 10;
// rest2.numGuests ||= 10;
//

//if we set in rest1 numGuest=0 then conslole return 10 beacuse 0 is falsy value to solve this we use
//Nullish assignment operatorconsole.log(rest1.numGuests);
// console.log(rest2.numGuests);
rest1.numGuests ??= 10;
rest2.numGuests ??= 10;
console.log(rest1.numGuests);
console.log(rest2.numGuests);

//and assignment operator
rest1.owner &&= '<ANONYMOUS>';
rest2.owner &&= '<ANONYMOUS>';
console.log(rest1);
console.log(rest2);

//Looping over arrays using for-of loop

const menu2 = [...restaurant.starterMenu, ...restaurant.mainMenu];
for (const item of menu2) console.log(item);
//how to get index
// for (const item of menu.entries()) {
//   console.log(item); // it give output an array with index and value
//   console.log(`${item[0] + 1}:${item[1]}`);
// }
for (const [i, el] of menu2.entries()) {
  //  console.log(item); // it give output an array with index and value
  console.log(`${i + 1}:${el}`);
}
console.log(menu2.entries()); //it give iterator
console.log([...menu2.entries()]);

//enhanced object literals

/*  const weekdays=['mon','tue','wed','thu','fri','sat','sun'];

const openingHours= {
    [weekdays[3]]: {
      open: 12,
      closs: 22,
    },
    [weekdays[4]]: {
      open: 11,
      close: 23,
    },
    [`days-${2+4}`]: {
      open: 0, // open 24 hours
      close: 24,
    },
  },

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  onder(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

  //es6 enhanced object literal
  openingHours,
  
  //   orderDelivery(obj) {
  //     console.log(obj);
  //   },
  orderDelivery({
    starterIndex = 1,
    mainIndex = 0,
    time = '20:00',
    address,
  }) {
    console.log(
      `Orderr received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delivered to ${address} at ${time}`
    );
  },
  orderPasta(ing1, ing2, ing3) {
    console.log(
      `Here is your declicious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },
  orderPizza(mainIngredient, ...otherIngredient) {
    console.log(mainIngredient);
    console.log(otherIngredient);
    
  },
};

*/

//without optional chaning
if (restaurant.openingHours && restaurant.openingHours.mon) {
  console.log(restaurant.openingHours.mon.open);
}

//wiht optional chaining(if before ?  thes symbol property exist then run next exist means not null or not undefined)
console.log(restaurant.openingHours.mon?.open);
//multiple optional chaining
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

for (const day of days) {
  // here we cant do .day because day is not actual property name of object
  //   const open = restaurant.openingHours.day?.open;
  // we used bracket notation to access
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day},we opent at ${open}`);
}

//optional chaning on methods

console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.orderRisotto?.(0, 1) ?? 'Method does not exist');

//optional chaning on array
const users = [{ name: 'Jonas', email: 'hello@.io' }];
//without  optional chaning
if (users.length > 0) console.log(users[0].name);
else console.log('user array empty');

//with optional changing
console.log(users[0]?.name ?? 'user array empty');

// we loop over array which is iterable also we loop over object which is not iterable
//so we want loop over on object property names(also called keys),values or both.

// over keys
const properites = Object.keys(openingHours);
console.log(properites); //basically output is an array with properties name
// console.log(`we are open on ${properites.length} days`);
let openStr = `we are open on ${properites.length} days:`;
// for (const day of Object.keys(openingHours)) {
//   console.log(day);
// }
for (const day of properites) {
  openStr += `${day},`;
}
console.log(openStr);

//properties values
const values = Object.values(openingHours);
console.log(values);

//Entire object
const entires = Object.entries(openingHours);
console.log(entires);

//[key,value]
for (const x of entires) {
  console.log(x);
}
for (const [day, { open, close }] of entires) {
  console.log(`On ${day} we open at ${open} and close at ${close}`);
}

//sets
//sets is collection of unique values
//sets also are iterables

const orderSet = new Set(['Pasta', 'Pizza', 'Pizza', 'Risotto', 'Pasta']);
console.log(orderSet);
//strings also are iterables
console.log(new Set('Jonas'));
console.log(orderSet.size);
//check present or not in set
console.log(orderSet.has('Pizza')); //output:true
//add new element in set
orderSet.add('Garlic Bread');
console.log(orderSet);
//delete elements
orderSet.delete('Risotto');
//reterive value form set(in set there is not indexes)
//beacuse there is no meaining of getting data out of set becuase all values are unique only we
//need to know certain value is present or not

//delete all elments of the set
// orderSet.clear();

//looping over set
for (const order of orderSet) console.log(order);

//the main use of set is to remove duplicate values of the array
//example
//let we have an array of staff of a restaurents and we want to know what different position are in array
const staff = ['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter'];
// create an set and pass iterable in the set
// const staffUnique = new Set(staff);
// console.log(staffUnique);

//now we want to store position into an array of restaurent
//as we know spread(...) operator work on all iterables
const staffUnique = [...new Set(staff)];
console.log(staffUnique);
console.log(
  new Set(['Waiter', 'Chef', 'Waiter', 'Manager', 'Chef', 'Waiter']).size
);

// how many differnt letters in an string
console.log(new Set('KhushalPatel').size);

//map data structure(to map values to keys)
//data store in key value pairs
//diffrence between map and object(in map keys can be anytype and huge while in object key are basically strings)
//it could even be objects, or array or other maps

const rest = new Map(); //empty map
//pass key value pair use set method
rest.set('name', 'Classio Italiano');
rest.set(1, 'Firenze,Italy');
console.log(rest.set(2, 'Lisbon,Portugal'));

//calling the sett method return updted map so we can add more method continusly
rest
  .set('categores', ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'])
  .set('Open', 11)
  .set('Close', 23)
  .set(true, 'We arre open')
  .set(false, 'We are close');

//read data from map use get method by passing the name of key
console.log(rest.get('name'));
console.log(rest.get(true));

const time = 22;
console.log(rest.get(time > rest.get('Open') && time < rest.get('Close')));

//check if map contain certain key or not
console.log(rest.has('categories'));

//delete in map
rest.delete(2);
console.log(rest);
console.log(rest.size);
//rest.clear();
//we can also delete properites from object using delete operator but that is very slow process
// yes object also have method hasOwnProperty lern in oops

//we can used array and object as map keys
// rest.set([1, 2], 'Test');
// console.log(rest.get([1, 2])); //output:undefined
//beacuse in console and rest both array [1,2] are not same object
//they are not the same object in the heap
//in order to make it work we have to do
const arr3 = [1, 2];
rest.set(arr, 'Test');
console.log(rest.get(arr));
// these will used in dump element a special type of object.

rest.set(document.querySelector('h1'), 'Heading');
console.log(rest);

//other method to set element in an map

const question = new Map([
  ['question', 'What is the best programming language in the world'],
  [1, 'C'],
  [2, 'Java'],
  [3, 'JavaScript'],
  ['correct', 3],
  [true, 'correct🎉'],
  [false, 'Try again!'],
]);
console.log(question);
//above way is similar to

console.log(Object.entries(openingHours));

//therefore there is an easy way to convert from objects to map.
const hoursMap = new Map(Object.entries(openingHours));
console.log(hoursMap);

//iteration in map because map are iterables
//only differnce in object and map is we need object.entries() in object not in map for forloop

//quiz app
console.log(question.get('question'));
for (const [key, value] of question) {
  if (typeof key === 'number') console.log(`Answer ${key}:${value}`);
}
const answer = Number(prompt('Your answer'));
console.log(answer);
// console.log(
//   answer === question.get('correct') ? question.get(true) : question.get(false)
// );
console.log(question.get(question.get('correct') === answer));

//convert map to array
console.log([...question]);
//other method
console.log(question.entries());
//convert to array
console.log([...question.entries()]);
console.log(question.keys());
console.log([...question.keys()]);
console.log(question.values());
console.log([...question.values()]);

//summary which data structure to use.
//source of data
//1. from the program itself: data written directly in source code(eg: status message)
//2. form the UI: data input from the user or data written in DOM (eg: task in todo app);
//3.from external sources: data fetched for example from web API(eg: recipe objects)

//if we need simple list of values if so then we are gonna use an array or a set.
//or if we need key/value pair then we used objects or map.
//data from web APIs usually comes in a special data format called json.
//other buit-in: weakMap and WeakSet
//non-built in:Stack,queue,linked lists ,tree and hash tables

//arrays: use when you need ordered list of values(might contain duplicates)
// use when you need to manipulate data

//sets: use when you need to work with uique values
//use when high-performance is really important.
//use to remove duplicates from arrays

//Objects
//more traditional key/values store('abused' objects)
//easier to write and access values with . and []
//use when you need to include functions(methods)
//use when working with json (can convert to map)

//maps
//better performance
//keys can have any data type
//easy to iterate
//easy to compute size
//use when you simply need to map key to value
//use when you need keys that are not strings

//WOrking with strings

const airline = 'TAP Air Portugal';
const plane = 'A320';

console.log(plane[0]); //output: A
console.log(plane[1]); //output: 3
console.log('B737'[0]); //output:B

console.log(airline.length);
console.log('B737'.length);

console.log(airline.indexOf('r')); //first r come output:6
console.log(airline.lastIndexOf('r')); //last r come output:10
//console.log(airline.indexOf('portugal'));//output:-1 beacuse it is case sensitive
console.log(airline.indexOf('Portugal')); //output: 8

//it is used to extract of a string using the slice method and a slice method needs indexes as arguments.

//slice method
console.log(airline.slice(4)); //output:Air Portugal
//4 is the begin where extraction start
//similary we can also specified end parameter
console.log(airline.slice(4, 7)); //7 is end but it not included
//the length of extracted index always be end -begining

console.log(airline.slice(0, airline.indexOf(' '))); //output:TAP
console.log(airline.slice(airline.lastIndexOf(' ') + 1));

//negative start from end

console.log(airline.slice(-2)); //output:al
console.log(airline.slice(1, -1));

const checkMiddleSeat = function (seat) {
  //B and E are middle seats
  const s = seat.slice(-1);
  if (s === 'B' || s === 'E') console.log('YOu got the middle seat');
  else console.log('You got lucky');
};
checkMiddleSeat('11B');
checkMiddleSeat('23C');
checkMiddleSeat('3E');

//we know strings are primitive so why do we have methods?
//whenever we call method on string js convert string primitive to a string object
//and then on that object method are called and this process is called boxing.
//and operation done it return back to string primitive
console.log(new String('jonas'));
console.log(typeof new String('jonas'));
console.log(typeof new String('jonas').slice(1));

//change case of string
console.log(airline.toLowerCase());
console.log(airline.toUpperCase());

//Fix capitalization in name
const passenger = 'jOnAs'; // Jonas
const passengerLower = passenger.toLowerCase();
const passengerCorrect =
  passengerLower[0].toUpperCase() + passengerLower.slice(1);
console.log(passengerCorrect);

//comparing emails
const email = 'hello@jonas.io';
const loginEmail = '  Hello@Jonas.Io \n';

const lowerEmail = loginEmail.toLowerCase();
const trimmedEmail = lowerEmail.trim();
console.log(trimmedEmail);

const normalizedEmail = loginEmail.toLowerCase().trim();
console.log(normalizedEmail);
console.log(email === normalizedEmail);

//replacing
const priceGB = '288,97&';
const priceUS = priceGB.replace('&', '$').replace(',', '.');
console.log(priceUS);
//like other replace create new string it not mutate original one.
const announcement =
  'All passengers come to boarding door 23. Boarding door 23!';
console.log(announcement.replace('door', 'gate')); // it replace only first door
//console.log(announcement.replaceAll('door','gate'));

//other solution is by using regular expression
// write in /  / with g flag which means global
console.log(announcement.replace(/door/g, 'gate'));

//boolean
const plane1 = 'Airbus A320neo';

console.log(plane1.includes('A320')); //true
console.log(plane1.includes('Boeing')); //false
console.log(plane.startsWith('Aib')); //false

if (plane.startsWith('Airbus') && plane.endsWith('neo')) {
  console.log('Part of the NEW Aribus family');
}

//imp : when we receive input from user we usually always start by putting everything in lower case.

//practice example

const checkBaggage = function (items) {
  const baggage = items.toLowerCase();
  if (baggage.includes('knife') || baggage.includes('gun')) {
    console.log('You are NOT allowed on board');
  } else {
    console.log('Welcome aboard!');
  }
};
checkBaggage('I have a laptop, some Food and a pocket knife');
checkBaggage('Socks and camera');
checkBaggage('Got some snacks and a gun for protection');

//split method (it allow to split string into multiple parts based on a divider string)
//if have a string and call .split method  with a divider string
//and then we get an array

console.log('a+very+nice+strng'.split('+'));
console.log('Khushal Patel'.split(' '));

const [firstName, lastName] = 'Khushal Patel'.split(' ');

//join method opposite of split

const newName = ['Mr.', firstName, lastName.toUpperCase()].join(' ');

const capitalizeName = function (name) {
  const name = capitalizeName.split(' ');
  const nameUpper = [];
  for (const n of name) {
    // nameUpper.push(n[0].toUpperCase() + n.slice(1));
    nameUpper.push(n.replace(n[0], n[0].toUpperCase()));
  }
  console.log(nameUpper.join(' '));
};
capitalizeName('khushal ann simith davis');
capitalizeName('khushal patel');

//padding a string means number of characters to string until a string has a certain desired length
// start with .padStart(length we want for the string,character)

const message = 'GO to gate 23!';
console.log(message.padStart(25, '+').padEnd(30, '+'));
console.log('Khushal'.padStart(23, '+'));

//pratical examlpe of padding when we see credit card number we never see the entire number.
const maskCreditCard = function (number) {
  const str = number + '';
  const last = str.slice(-4);
  return last.padStart(str.length, '*');
};
console.log(maskCreditCard(648958930));
console.log(maskCreditCard(2349854930488930));
console.log(maskCreditCard('2345676954837495'));

//repeat method
const message2 = 'Bad wether... ALl departures delayed..';
console.log(message2.repeat(5));

const planesInLine = function (n) {
  console.log(`There are ${n} planes in line ${'✈️'.repeat(n)}`);
};
planesInLine(2);
planesInLine(10);
planesInLine(15);
