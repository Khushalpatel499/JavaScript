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
  onder: function (starterIndex, mainIndex) {
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
const [starter, mainCourse] = restaurant.onder(2, 0);
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
for (const [i, el] of menu.entries()) {
  console.log(item); // it give output an array with index and value
  console.log(`${i + 1}:${el}`);
}
console.log(menu.entries()); //it give iterator
console.log([...menu.entries()]);

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
  onder: function (starterIndex, mainIndex) {
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
