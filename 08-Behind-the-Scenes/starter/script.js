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
