'use strict';

//Modal window

const modal = document.querySelector('.modal');
const btnOpenModal = document.querySelectorAll('.btn--show-modal'); //it is a nodeList
const btnCloseModal = document.querySelector('.btn--close-modal');
const overlay = document.querySelector('.overlay');

//here we can see that openaccount is an href link due to which when we click it due to its behaviour it come to top so
//so we have to prevent default that position
const openModal = function (e) {
  e.preventDeafault();
  modal.classList.remove('hidden');
  overlay.classList.remove('overlay');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('overlay');
};

//oldway
// for (let i = 0; i < btnOpenModal.length; i++) {
//   btnOpenModal.addEventListener('click', openModal);
// }

//new way
btnOpenModal.forEach(btn => btn.addEventListener('click', openModal));

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});

//how DOM really work
// dom is acutually interface between js and browser or more specifically html documents that rendered by the browser.
//we can write js to create ,modify and delete html elemnts;set style,classes and attributes and listen and response to events;
//DOM tree is generated from an html document, which we can then interact with.
// dom is a vert complex api that contains lots of methods and properties to interact with the DOM tree.

//how the dom api is organized behind the scenes
// every single node in dom tree is type of node and each node in js represented by object.
//this object gets access to special node method and properties such as .textContent,.childNodes,.parentNode,.cloneNode()
//this node have different child type like: element,text,comment,document
//this all can be happen due to inheritance: means all the child type will also get access to the methods and properties of all their parent node types.
//dom api allowing all the node types to listen to events which is listen by calling addEventListner method on an element or the document, this is actually work beacuse there is a special node type called event target;
// event target is parent of both node type and window node type
// we do not create eventtarget it is just an abstract type.

//selecting ,creating and deleting elements

//selecting elements
//select top of html document
// we have special to select document of any webpage by .documentElement
console.log(document.documentElement);
//alone document is not enough to select the document element because this is not real dom element.
//like if we want to apply css style to entire page we always select documentElment.

console.log(document.head);
console.log(document.body);
//so for above this special element we dont even need to write any selector.

const header = document.querySelector('.header'); //this will return the first element which match this selector
//selecting multiple selector
const allSections = document.querySelectorAll('.section'); //this will return a nodeList
console.log(allSections);

document.getElementById('section--1'); //we dont want to select so not use . or #
const allButtons = document.getElementsByTagName('button'); // this will return an html collection
console.log(allButtons);
// html collection is a life collection means that if the dom changes then this collection is also immediatley updated automatically
console.log(document.getElementsByClassName('btn')); //return html collection

//creating and inserting elements

//we can create html elment using .insertAdjacentHtml function

//pass string of the tage name
const message = document.createElement('div'); //this will return a dom element
//that element is not yet anywhere in our dom so it nowhere found in our webpage
// if we want on page then we need to manually insert it into the page
//meassage is just an object that represent a dom element.
//if we have an element in dom we select it using querySelector then the result is also a dom object
//build a small cookie message at the bottom of the screen
message.classList.add('cookie-message');
// message.textContent = 'we use cookied for improved functionality and analytics';
//.innerHtml and .textContent is used to read and set content

message.innerHTML =
  'we use cookied for improved functionality and analytics.<button class ="btn btn--close-cookie">GOt it!</button>';

//add this to header
// header.prepend(message); //prepend adds the element as the first child of the element(here header)
header.append(message); //add last child
//now we see here that the element only insert at once now thats because this element here is indeed a life element living in the dom and so therefore it cannot be at multiple places at the same time
//so append basically move the message that is prepand before
// so basically we can use prepend and append method not only to insert elements but also move the element.

//so how to add multiple copy of same element.
//which mean first we have to cloneNode and pass true which means tha all child element will also be copied.

// header.append(message.cloneNode(true));

//two more method before and after
// header.before(message); //this will enter message before header
// header.after(message);

//delete elements
document
  .querySelector('.btn--close-cookie')
  .addEventListener('click', function () {
    message.remove(); //new way
    // document.querySelector('.cookie-message').remove();
    //moving up and down in the dom tree like selecting ,the parent elment is called dom traversing
    // message.parentElement.removeChild(message);//old way
  });

//styles(are set inline)
message.style.backgroundColor = '#37383d';
message.style.width = '120%';

console.log(message.style.height); //this return nothing because .style here work for inline that we set ourseleves it gona work for backgroundcolor that we set.
console.log(message.style.backgroundColor);

//so to get other style that are not inline which are in class by getComputedStyle function which means compute the real style that appears on the page
//even if we do not declare it in our css like height but browse display it
console.log(getComputedStyle(message)); //this give all styles

console.log(getComputedStyle(message).color);
console.log(getComputedStyle(message).height); //outupt is string

//now we want to increase height of message banner by 40 pixels.

message.style.height =
  Number.parseFloat(getComputedStyle(message).height, 10) + 40 + 'px';

//css custom properties(css variables)
//root in css means document in js

document.documentElement.style.setProperty('--color-primary', 'orangered');

//attributes
// in html src,alt,class,id
const logo = document.querySelector('.nav__logo');
console.log(logo.alt);
console.log(logo.src); //this give absolute url but in html it is present relative url
console.log(logo.className); //output=nav__logo
console.log(logo.desinger);
//only standard property can be read.
//another way of reading this value from the dom.
console.log(logo.getAttribute('desinger'));

//set text
logo.alt = 'Beautiful minimalist logo';
logo.setAttribute('company', 'Bankist');

console.log(logo.getAttribute('src')); //this will give relative url

const link = document.querySelector('.nav__link--btn');
console.log(link.href);
console.log(link.getAttribute('href'));

//data attribute (start with word data)
//just like property name we need to transform into camelCase.
console.log(logo.dataset.versionNumber);
//we use data attribute when work with UI and need to store data in user interface

//CLasses
logo.classList.add('c', 'j');
logo.classList.remove('c', 'j');
logo.classList.toggle('c');
logo.classList.contains('c'); //not includes
//Don't use it because it override all existing classes
logo.className = 'khushal';

//smooth scrolling

const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

btnScrollTo.addEventListener('click', function (e) {
  //first we need coordinate of element we scroll to
  const s1coords = section1.getBoundingClientRect();
  console.log(s1coords);

  console.log(e.target.getBoundingClientRect());
  console.log('current scroll (X/Y)', window.pageXOffset, window.pageYOffset);

  console.log(
    'Height/width viewport',
    document.documentElement.clientHeight,
    document.documentElement.clientWidth
  );

  //scrolling using scrollTo(leftposition,top)
  //here the top is relative to view port not to the top of page
  //   window.scrollTo(s1coords.left,s1coords.top);
  //to make absolute position we add current scroll
  window.scrollTo(
    s1coords.left + window.pageXOffset,
    s1coords.top + window.pageYOffset
  );
  //now make more better by passing object instead of arguments.
  window.scrollTo({
    left: s1coords.left + window.pageXOffset,
    top: s1coords.top + window.pageYOffset,
    behavior: 'smooth',
  });
  //new way
  section1.scrollIntoView({ behavior: 'smooth' });
});

//types of event and event handlers
// a event is basically a signal that is generated by a certain dumb node and the singnal means something happen
//mouseenter event is like hover event in css

const h1 = document.querySelector('h1');

const alertH1 = function (e) {
  alert('adEventListner: Great! You are reading the heading');
  h1.removeEventListener('mouseenter', alertH1);
};

// h1.addEventListener('mouseenter', function (e) {
//   alert('adEventListner: Great! You are reading the heading');
// });
h1.addEventListener('mouseenter', alertH1);

setTimeout(() => h1.removeEventListener('mouseenter', alertH1), 3000);
//another way of attaching an eventListner to an element by using onevent property directly on the element
h1.onmouseenter = function (e) {
  alert('onmouseenter: Great! You are reading the heading');
};

//third way of handling event is by html  attribute

// event propagation bubbling and capturing
//js even have a imp property capturing and bubbling

//example : let we have an achor element in dom tree when we click on link the click event generated not on anchor element but root of dom tree means at document
// from here capturing phase start where event then travel all the way down from document route to the target element.
// as the event travelling down to tree it will pass through every single parent element of target element.
//as reach target the target phase begin where the events can be handled
// after reach target the event travel again to root document again is called bubbling phase.
// we say event bubble up from the target to the document route.
// if the same event happen in the parent of the anchor element then we would have handled the exact same event twice
// event can only be handled in target and bubbling phase
// while we can set event to listen the event in capturing phase.
// not also all types of events that do have capturing and bublling phase
//some are created right on the target element
//event are propagating from one place to another (capturing and bubbling)
