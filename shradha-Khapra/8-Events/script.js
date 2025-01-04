//events

let btn1 = document.querySelector("#btn1");
btn1.onclick = (e) => {
  console.log("hello new button");
  let a = 20;
  a++;
  console.log(a);
  console.log(e);
  console.log(e.type);
  console.log(e.target);
  console.log(e.clientX, e.clientY);
};
btn1.onclick = (e) => {
  console.log("hello");
};

// the problem is here is that there is only a single event handler for one event
//event listner come
//we can access as argument
btn1.addEventListener("click", (e) => {
  console.log("button 1 is here");
  console.log(e.type);
});
btn1.addEventListener("click", () => {
  console.log("button 1 again is here");
});

//Pratice 1:

let toggle = document.querySelector("#mode");
let currMode = "light";
toggle.addEventListener("click", () => {
  console.log("you are trying to change mode");
  if (currMode === "light") {
    currMode = "dark";
    // document.querySelector("body").style.backgroundColor = "black";
    // using a better way by add class using css.
    document.querySelector("body").classList.add("dark");
    document.querySelector("body").classList.remove("light");
  } else {
    // document.querySelector("body").style.backgroundColor = "white";
    // document.querySelector("body").setAttribute("class", "light");
    document.querySelector("body").classList.add("light");
    currMode = "light";
  }
  console.log(currMode);
});
