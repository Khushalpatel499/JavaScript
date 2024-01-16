// Deconstructing the js monster definition

//1. High-level: developer doesnot have to worry,everything happens automatically(it reduce speed as compare to low level laguages)

//2. Garbage -collected: powerfull tool that takes memory management away form developers,
// it is basically algorithm in js engine which automatically removes old,unused objects from the computer memory,
// in order not to clog it up with unnecessary stuff.

//3.Interpreted or just-in-time compiled language:
// convert our code to machine code is called compiling or interpreting

// 4. multi -paradigm language:
// paradigm: an approach and mindset of structing code,which will direct your coding style and technique.
// it is imperative  vs declarative
// types :a. Procedural programming  b. object-oriented programming  c. functional programming.

// 5. First-class function :
// in a language with first-class functions. functions are simply treated as variables.we can pass them into other functions and return them from functions.

//6.Dynamic: doesn't assign data types to variables
// if we want to use js with type then used typescript.

//7. single-thread and non -blocking event loop concurrency model.
// concurrency model is bascially how js engine handles multiple tasks happening at the same time.
// why do we need that?
// js runs in one single thread , so it can only do one thing at a time.
// so we need to have any thing to handles multiple things at the same time.
// thread is like a set of instruction that is executed in the computer cpu.
// what about a long running task(like fetching data form remote server)?
//sounds like it would block the single thread,howerver we want non-blocking behaviour
// which is achieve by event loop
// event loop takes long running tasks, executes them in the 'background',
//and put them back in the main thread once they are finished.

// JavaScript Engine:
// program that executes js code.
// every browser has its own js engine.
// popular engine is goolge v-eight.it also help nodejs
//any js engine always contain call stack and heap
// the call stack is basically where our code executed using execution contexts.
//heap is an unstructured memory pool which stores all the objects that our application needs.

//how our code compiled to machine code?
// computer processor only understand 0s and 1s.

// it done in two ways: compilation vs interpretation
// compilation: entire code is converted into machine code at once and
// written to a binary file that can be executed by a computer.

// source code ------------> machine code --- ----->  program running
//            (compilation)  (portablefile)         (execution)

// interpretation: interpreter runs through the source code and executes it line by line.
//  source code -----------------------------> program running
//               (execution line by line)

// modern javascript is mixed between compilation and interpretation. which is called just in time compilation.
// JIT compilation: entire code is converted into machine code at once, then executed immediately.

// source code ----------------> machine code ------------ ---------------->  program running
//             (compilation)  (noportablefile)     (execution (happen immediatly))

// steps in JIT:
// 1. code is parsing(means read the code) or parsed into a data structure called abstract syntax tree or AST.
//2. This AST works by first splitting up each line of code into pieces thar are meaningful to the language like the const or function keywords,
// and then saving all these pieces into the tree in a structured way.This step also check if there are any syntax errors and the resulting tree will later be used,
// to generate the machine code.
//3. next step is compilation which take AST and compiles it into machine code
//4. this machine code executed then which will happen in call stack.
//5.but in modern js engine this code is opitmizing and recompiled and executed.
//              |--------- compilation
//             |            |
//            |             |
//    optimization---------execution

//Js runtime:
// it is like a big container including all the things that we need to use js (in this case in the browser)
// the heart of js runtime is js engine.
//js runtime is combination of js engine(heap+call stack) and web APIs(DOM or Timers or Fetch)(web APIs are functionalities provided to the engine,accessible on window object)
//some js runtime also include callback queue (click or timer or data)

//js runtime in nodejs includes:
// js engines, c++ bindings and Thread pool and callback queue.

// how is js code executed?
// it happen in call stack, after compilation execution is happen then global execution context is created for top-level code.
// top-level code is basically code that is not inside any function only the code that is outside of function will be executed.
// execution context is an environment in which a piece of js is executed.Store all the necessary information for some code to be executed.
//there is exactly one global execution context(EC).

//now execution of top-level code (inside global EC) start.
// finally function start execute as well,for each and every function call a new execution context will be created.
//one execution context per function. and same for methods because they are simply function attach to objects

//all these execution together make up the call stack

//WHat inside execution context?
// first thing that's inside any execution context is called variable environment.
// all our variables and function declarations are stored,
// variable environment contains:
// let,const and var declarations ,functions,arguments object
//however a function can also access variable outside of the function this work because of scope chain.
// scope chain basically consist of references to variable that are located outside of the current function.
//finally each context also get a special variable called the this keyword.
//this all inside exution context generated during creation phase right before execution.
//Note: arrow function doesnot have argument object and this keyword.
//they can use argument object and this keyword from their closest regular function parent.

//how will engine will keep track of the order in which function we are called? ans :by call stack.

//Sccoping : how our programs variable are organized and accessed .
// 'where do variables live? 'or 'where can we access a certain variable and where not?'

//lexical scoping: scoping is controlled by placement of functions and block in the code.
//Scope :Space or environment in which a certain variable is declared(variable environment in case of function)/
//There is global scope,function scope,and block scope

//scope of a vriable:Region of our code where a certain varibale can be accessed.

// 3 types of scope: 1.global(everywhere access of variables) 2. function(inside the function only) 3.block means if else (only inside the block for let and const not for var)
//variable lookup is basically access of variables of parent scope by child scope.

//scoping pratice:
function calAge(birthYear) {
  const age = 2037 - birthYear;
  //   console.log(firstName);
  function printAge() {
    let output = `${firstName}, you are ${age}, born in ${birthYear}`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // creating new variable with same name
      const firstName = 'Patel';

      // reassinging outer scope
      output = 'New output';

      const str = `oh, and you're a millenial , ${firstName}`;
      console.log(str);

      function add(a, b) {
        return a + b;
      }
    }
    console.log(millenial);
    console.log(output);
    // add(2,3);(funtion are also block scope in strict mode)
  }
  printAge();
  return age;
}
const firstName = 'Khushal';
calAge(1991);

// creating new variable with same name as outer scope variable is valid in that block only
// reassinging outer scope variable changed that variable

//Execution context
//three types: variable environment, scope chain ,this keyword

// hoisting: make some types of variable accesible /usable in the code before they are actually declared."variables lifted to the top of their scope".
//before execution ,code is scanned for variable declarations, and for each variable, a new property is created in the variable environment object.

//                                              hoisted?          initial value                             scope
//function decalaration                          yes                actual function                   block(in strict mode otherwise function)
//var variables                                  yes              undefined                                  function
//let and const variable                         no               <uninitialized>,TDZ(Temporal Dead Zone)     block
//function expression and arrow function            depends if using var or let/const
//

//why hosting:
// using functions before actual declaration
//var hosting is just a byproduct.

//why TDZ?
///makes it easier to avoid and catch errors(accesing variables before declaraiton is bad practice).
// makes const variable actually work.

// Hoisting and TDZ in pratice

//variables

console.log(me);
// console.log(job);
// console.log(year);

var me = 'Jonas';
let job = 'teacher';
const year = 1991;

//funtions

console.log(addDecl(2, 3));
console.log(addExpr(2, 3));
console.log(addArrow);
console.log(addArrow(2, 3));
function addDecl(a, b) {
  return a + b;
}

const addExpr = function (a, b) {
  return a + b;
};

var addArrow = (a, b) => a + b;

//Example:
if (!numProducts) deleteShoppingCart(); // here due to var and hosting numproduct became undefined and undefined is falsy value.

var numProducts = 10;
function deleteShoppingCart() {
  console.log('ALL product deleted!');
}

// decalred with var create  window objet while let and const not
var x = 1;
let y = 2;
const z = 3;

console.log(x === window.x);
console.log(x === window.y);
console.log(x === window.z);

//how the this keyword works

//this keyword/variable: special variable that is created for every execution context(every funtion).
//takes the value of(points to) the 'owner' of the funtion in which the this keyword is used.

//this is not static .it depends on how the funtion is called,and its value is only assinged when the function isactually called

//method    this =<object that is calling the method>
///simple function call this =undefined(in strict mode otherwise window(in the browser))
// arrow function this =< of surrounding function(lexical this)>
//event listener  this =<DOM element that the handler is attached to>
//new,call,apply,bind later learn

//this does not point to the function itself,and also not the its variable environment.

//this keyword in pratice
console.log(this);
const calAge = function (birthYear) {
  console.log(2037 - birthYear);
  console.log(this);
};
calAge(1991);

const calAgeArrow = birthYear => {
  console.log(2037 - birthYear);
  console.log(this);
};
calAgeArrow(1980);

const jonas = {
  year: 1991,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
  },
};
jonas.calAge();

const matilda = {
  year: 2017,
};
//call method borrowing
matilda.calAge = jonas.calAge;
matilda.calAge();

const f = jonas.calAge;
f();

//Regular function vs arrow function.
var myName = 'Khushal';
const khushal = {
  myName: 'khushal',
  lastName: 'Patel',
  year: 1999,
  calAge: function () {
    console.log(this);
    console.log(2037 - this.year);
    // const self = this; // self or that
    // const isMillenial = function () {
    //   //   console.log(this);
    //   //   console.log(this.year >= 1981); //here this function is undefined because here reuglar function call
    //   console.log(self);
    //   console.log(self.year >= 1981);
    // };
    // isMillenial(); // now the two solutions are:1. solution is use self
    // //2.solution is use arrow function

    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981);
    };
    isMillenial();
  },
  greet: () => {
    console.log(this);
    console.log(`hey${this.myName}`); // arrow function doesnt have this keyword
  }, //it used this keyword from surrounding and the parent scope of greet  method is global scope.
};
khushal.greet();

//argument keywords.(only avaiable in regular functions)

const addArg = function (a, b) {
  console.log(arguments);
  return a + b;
};
addArg(2, 5);
addArg(2, 5, 10, 7); // arguments is accept

var addArgArrow = () => {
  console.log(arguments);
  return a + b;
};
addArgArrow(2, 5, 8); //argument is not defined.

//Primitive vs Object(primitive vs reference types)
//primitive type
let age = 30;
let oldAge = age;
age = 31;
console.log(age);
console.log(oldAge);
//reference type
const me = {
  name: 'Khushal',
  age: 30,
};

const friend = me;
friend.age = 27;
console.log('friend', friend);
console.log('me', me);
//here we can see that my age is also updated.
// primitive stored in call stack while object refernce type store in heap
friend = {}; //doesnot allow because it stored in different position memory or friend is const

//copying objects
const jessica2 = {
  firstName: 'Khushal',
  lastName: 'Patel',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2); // oject.assign merge two object and return new one.(it only create copy and deep copy if object inside object it not work)
jessicaCopy.lastName = 'Davis';
console.log('Before marriage', jessica2);
console.log('after marriage', jessicaCopy);

jessicaCopy.family.push('mary');
jessicaCopy.family.push('john');
console.log(jessica2);
console.log(jessicaCopy); //here both console add 4 element in array(it can be solved by external library like lo-dash)
//How Javascript work behind the secenes:
//1.Prototypal inheritance:Object Oriented Programming
//2. Event loop: Asynchronous js : promises,async/await and ajax
//3. how the dom really work : advanced dom and event
