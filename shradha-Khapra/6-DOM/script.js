console.log("hello");
window.console.log("hello2");

console.dir(window.document);
//or
console.dir(document); //window is global object so every on know
console.dir(document.body); // this give object
console.log(document.body); // this give html version

// lets print child node
console.dir(document.body.childNodes[1]);
//dynamically change
document.body.style.backgroundColor = "lightgrey";
document.body.childNodes[1].innerText = "DOM";

// accessing by id:
let heading = document.getElementById("header");
console.log(heading);
console.dir(heading);

// using class
let headClass = document.getElementsByClassName("head-class");
console.log(headClass);
console.dir(headClass);

// using tag:
let paras = document.getElementsByTagName("p");
console.dir(paras);

//query selector:

let element = document.querySelector("p");
console.dir(element);

// for all

let elements = document.querySelectorAll("p");
console.dir(elements);

// class query selector.

let mycl = document.querySelector(".head-class");
console.dir(mycl);

// id query selector.

let myId = document.querySelector("#header");
console.dir(myId);

console.log(myId.tagName);

// first child
console.dir(document.body.firstChild);

console.dir(document.querySelector("h1").children);

let div = document.querySelector("div");
console.dir(div);
console.log(div.innerText);
console.dir(div.innerText);
console.log(div.innerHTML);

div.innerText = "abcd"; // here we set the inner text so it change all the text inside the div
console.dir(div.innerText);

//textContent
let par = document.querySelector("p");
console.dir(par.innerText); // this will not show innertext becuse of css
console.dir(par.textContent);

//Pratice 1:
// create a heding element with text "hello my name" . append "is khushal" to this using js
// first we have to access,then which property for change, then change
let h4 = document.querySelector("h4");
console.dir(h4);
h4.innerText = h4.innerText + " is Khushal";
console.dir(h4.innerText);

//Practice 2:
//create 3 divs with common class name 'box' .access them and add some unique text to each of them.
//first create div, then access ,then which property to add and then change.

let boxes = document.querySelectorAll(".box");
console.dir(boxes);
boxes[0].innerHTML = "<p>hello</p>";
boxes[1].innerHTML = "<h1> khushal</h1>";
boxes[2].innerHTML = "<a>link</a>";
console.dir(boxes[0]);
console.dir(boxes[1]);
console.dir(boxes[2]);

// it is normal but we can use for of loop

for (box of boxes) {
  console.dir(box.innerText);
}
