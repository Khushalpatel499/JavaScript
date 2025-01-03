//getattribute

let div = document.querySelector("div");
console.log(div);

let id = div.getAttribute("id");
console.log(id);

let para = document.querySelector("p");
console.log(para);
let p = para.getAttribute("class");
console.log(p);

let name = div.getAttribute("name");
console.log(name);

//toset attribute

para.setAttribute("class", "hello");
console.log(p);

//node.style
let box = document.querySelector("#box");
console.log(box);
console.log(box.style);
box.style.backgroundColor = "green";

box.style.fontSize = "26px";
// box.innerText = "hello";
// box.style.visibility = "hidden";

//create element

let btn = document.createElement("button");
//currently it not shown on screen
// console.log(btn);
btn.innerText = "Click";
// how to show on screen
//now append button inside the div after the list(end).
// box.append(btn);

//starting
// box.prepend(btn);

//before that node
// box.before(btn);

//after that node

box.after(btn);

//let create new heading

let newHeading = document.createElement("h1");
newHeading.innerText = "hello welcome back";

//now add this to top of the page

document.querySelector("body").prepend(newHeading);

//delete newHeading
//first access.

// let nH = document.querySelector("h1");
// nH.remove();
// we already access while creating so direct delete
newHeading.remove();

// Practice:

let newBtn = document.createElement("button");
newBtn.innerText = "click me";
newBtn.style.backgroundColor = "red";
newBtn.style.color = "white";

document.querySelector("body").prepend(newBtn);

//Pratice 2:

let px = document.querySelector(".px");
console.dir(px);
//to get the attribute
let pxa = px.getAttribute("class");
console.log(pxa);
// px.setAttribute("class", "newClass");
//but it overwrite the old class property but we want to append not overwirte.
console.log(pxa);

console.log(px.classList);
px.classList.add("newClass");
console.log(px.classList);
