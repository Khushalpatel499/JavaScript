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
//logo.className = 'khushal';

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

//event propagation in practice
//  by attach event handlers to navigation link

//rgb(255,255,255)

const randomInt = (min, max) =>
  Math.floor(Math.random() * (max - min + 1) + min);

const randomColor = () =>
  `rgb(${randomInt(0, 255)},${randomInt(0, 255)},${randomInt(0, 255)})`;
//in event handler this keyword is always point to element on which event handler is attached.
document.querySelector('.nav__link').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  //target is essentially where the event originated.(where the event first happen)(is not the element where event handler is actually attached.)
  //current target is the element on which the event handler is attached.
  console.log('Link', e.target, e.currentTarget);
  console.log(e.currentTarget === this); //true
});

//add event listner only listening for events in the bubbling phase , not in capturing phase so that is the default behaviour
//capturing phase not imp that much but the bubbling phase is very useful for called evnet delegation.
//if we want to capture events in capturing phase ,we can define third parameter in the addEventListner function which is true(event handler will no longer listen to bublling events) or false.
//both will look same but in console we see that nav look before container and navLink because nav see when the event as it travel down from the dom towards target while other listen event when it travel back up.
document.querySelector('.nav__links').addEventListener('click', function (e) {
  this.style.backgroundColor = randomColor();
  console.log('Container', e.target, e.currentTarget);

  //stop propagation
  e.stopPropagation();
});
//now same event happen in parent element also which is .nav_links which is parent of .nav_link ,when we click on .nav_link event due to same event happen in parents that also start happen

document.querySelector('.nav').addEventListener(
  'click',
  function (e) {
    this.style.backgroundColor = randomColor();
    console.log('Nav', e.target, e.currentTarget);
  },
  true
);

//use power of event bubbling to implement something called event delegation.
//implement smoothing scrolling behaviour in naviagation
//due to anchor when we click then it move to that section of id.
//here we use forEach function for 3 elements but if there are 1000 elment then attach event handler to large numbers ,effecitvely creating 1000 copies of same function which impact performance.
//so better solution is to used event delegation.(in this we use the fact that events bubble up)
document.querySelectorAll('.nav__link').forEach(function (el) {
  el.addEventListener('click', function (e) {
    e.preventDefault();
    const id = this.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  });
});

// so we put our event handler on container .nav_links which is parent of all .nav__link

//step1: implement eventlistner to common parent element of all we need.

//step2: determine the what element originated the event.

document.querySelector('.nav__links').addEventListener('click', function (e) {
  console.log(e.target);
  e.preventDefault();
  //Matching strategy
  if (e.target.classList.contains('nav__link')) {
    const id = e.target.getAttribute('href');
    console.log(id);
    document.querySelector(id).scrollIntoView({ behavior: 'smooth' });
  }
});

//event delgelation is use like when we are working with elements that are not yet on the page on runtime,
//by the time the page loads they come ex: button, are added dynamically while using the application so it is not possible to add eventhandler on that which not exist,
// but we still handle that events by event delegation

//DOM traversing(we can select an element based on another element)

// const h1 = document.querySelector('h1');
console.log(h1);

//going downwords:child
console.log(h1.querySelectorAll('.highlight')); //here it select all the element of highlight class this will work no matter how deep child element would be inside the h1 element.
//direct childrens
console.log(h1.childNodes);
console.log(h1.children); //it give html collection

//first and last element child
h1.firstElementChild.style.color = 'white';
h1.lastElementChild.style.color = 'black';

//going upwards: parents
console.log(h1.parentNode); //direct parent element
console.log(h1.parentElement);

//some time we need a parent element which is not a direct parent
//for this we have closest method

//let there multiple class of header on page but we want to find the parent  (which is header) of elment of h1
//it receive a querystring just like queryselector or queryselectorAll
//it will select the closest header to our h1 element.

h1.closest('.header').style.background = 'var(--gradient-secondary)';
//if the selector mathches on which we are calling closest than that actually the element that's gonna be returned.
//closest is opposite of queryselector ,queryselector find childrens no matter how deep in the dom tree
//while closest method find the parents
h1.closest('h1').style.background = 'var(--gradient-primary)';

// going sideways : sibling
//so we can only access direct sliblings in js
console.log(h1.previousElementSibling);
console.log(h1.nextElementSibling);
console.log(h1.previousSibling);
console.log(h1.nextSibling);

//find all the sibling (trick moving up to parent element then read all children)
console.log(h1.parentElement.children);
[...h1.parentElement.children].forEach(function (el) {
  if (el !== h1) el.style.transform = 'scale(0.5)';
});

//tabbed component

const tabs = document.querySelectorAll('.operations__tab');
const tabContainer = document.querySelector('.operations__tab-container');
const tabsContent = document.querySelectorAll('.operations__content');

tabContainer.addEventListener('click', function (e) {
  const clicked = e.target.closest('.operations__tab');
  console.log(clicked);

  //Guard clause
  if (!clicked) return;
  //we need to read the data tab attribute,this one contains the number of tab that should become visible
  // we used closest to find closest parent

  //remove active class
  tabs.forEach(t => t.classList.remove('operations__tab--active'));
  tabsContent.forEach(c => c.classList.remove('operations__content--active'));
  //active tab
  clicked.classList.add('operations__tab--active');

  //activate content area
  console.log(clicked.dataset.tab);
  document
    .querySelector(`.operations__content--${clicked.dataset.tab}`)
    .classList.add('operations__content--active');
});

//passing arguments to event handlers
// all the links fade out when we hover over one of them,except for the link
//menu fade animation

const nav = document.querySelector('.nav');
//mouseenter and mousehover is similar event difference is that mouseenter doesnot bubble.
//opposite of mouseenter is mouseleave, and the opposite of this mouseover is mouseout.

const handleHover = function (e) {
  console.log(this, e.currentTarget); //1 or 0.5
  if (e.target.classList.contains('nav__link')) {
    const link = e.target;
    const siblings = link.closest('.nav').querySelectorAll('.nav__link');
    const logo = link.closest('.nav').querySelector('img');

    siblings.forEach(el => {
      if (el !== link) el.style.opactiy = this;
    });
    logo.style.opactiy = this;
  }
};
// nav.addEventListener('mousehover', function (e) {
//   //we dont use closest becuase no child element that could accidentally click here
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opactiy = 0.5;
//     });
//     logo.style.opactiy = 0.5;
//   }
// });

// nav.addEventListener('mousehover', function (e) {
//   if (e.target.classList.contains('nav__link')) {
//     const link = e.target;
//     const siblings = link.closest('.nav').querySelectorAll('.nav__link');
//     const logo = link.closest('.nav').querySelector('img');

//     siblings.forEach(el => {
//       if (el !== link) el.style.opactiy = 1;
//     });
//     logo.style.opactiy = 1;
//   }
// });
// nav.addEventListener('mousehover', handleHover(e,0.5));// it not work becuase e is not defined, and addeventlistner need a function but we here call the function which is a return something value but here we not return anythink
// nav.addEventListener('mousehover', function (e) {
//   handleHover(e, 0.5);
// });
// nav.addEventListener('mouseout', function (e) {
//   handleHover(e, 1);
// });

//we can do better by blind method(it creates a copy of the function that it called on)

//and it set the this keyword to value that we pass into bind

//passing 'argument' into handler
//handler function take only one argument
nav.addEventListener('mousehover', handleHover.bind(0.5));
nav.addEventListener('mouseout', handleHover.bind(1));

//sticky navigation the scroll event
//use scroll event that fire on each time that we scroll on ourpage.

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords); // top coordinate from top to section 1.
window.addEventListener('scroll', function () {
  console.log(this.window.scrollY); // this is between the top of page to top of view point
  if (this.window.scrollY > initialCoords.top) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
});
//it is bad for performance beacuse scroll event fires all the time ,no matter how small the change is here in the scroll

//sticky navigation a betterw way the intersection observer API
//this api allows our code to basically observe changes to the way that a certain target element intersects another element ,or the way it intersects the viewport.
//we passs a callback function and a object of options

//the callback function call each time that the observed element.
// this function have two arguments entries(are acutally array of the threshold entries) and observer object itself
const obsCallback = function (entries, observer) {
  entries.forEach(entry => {
    console.log(entry);
  });
};

//when we scroll we get our first entry because the target element came into viewport.

//it need first root property and the root is the element that the target is intersecting(we can select an element or alternative ,we can write null the we can observe our target element intersecting with entire viewport)
//here section 1 is target
// second is the threshold is basically the percentage of intersection at which the observer callback will be called.

const obsOptions = {
  root: null,
  // threshold: 0.1, // mean if section come 10% in viewport then isvisible is true.
  threshold: [0, 0.2], //0 means callback function trigger each time when target completly moves out of the view and also as soon as it enters the view.
};
const observer = new IntersectionObserver(obsCallback, obsOptions);

observer.observe(section1);

const navHeight = nav.getBoundingClientRect().height;
console.log(navHeight);
const stickyNav = function (entries) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) nav.classList.add('sticky');
  else nav.classList.remove('sticky');
};

const headerObserver = new IntersectionObserver(stickyNav, {
  root: null,
  threshold: 0,
  // rootMargin: '-90px', // means a box of 90pixel applied outside of our target element.
  rootMargin: `-${navHeight}px`,
});

headerObserver.observe(header);

//Reveal sections
const allSection = document.querySelectorAll('.section');

const revealSection = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  entry.target.classList.remove('section--hidden');
  observer.unobserve(entry.target);
};

const sectionObserver = new IntersectionObserver(revealSection, {
  root: null,
  threshold: 0.15,
  rootMargin: '200px',
});
allSection.forEach(function (section) {
  sectionObserver.observer(section);
  section.classList.add('section--hidden');
});

//lazy loading images

const imgTargets = document.querySelectorAll('img[data-src]');

const loadImg = function (entries, observer) {
  const [entry] = entries;
  console.log(entry);

  if (!entry.isIntersecting) return;

  //replace src with data -src images
  entry.target.src = entry.target.dataset.src;
  entry.target.addEventListener('load', function () {
    entry.target.classList.remove('lazy-img');
  });
  observer.unobserve(entry.target);
};
const imgObserver = new IntersectionObserver(loadImg, {
  root: null,
  threshold: 0,
});

imgTargets.forEach(img => imgObserver.observe(img));

const slider = function () {
  //building a slider component
  const slides = document.querySelectorAll('.slider');
  const btnLeft = document.querySelector('.slider__btn--left');
  const btnRight = document.querySelector('.slider__btn--right');
  const dotContainer = document.querySelector('.dots');

  let curSlide = 0;
  const maxSlide = slides.length;

  // const slider = document.querySelector('.slider');
  // slider.style.transform = 'scale(0.4) translateX(-800px)';
  // slider.style.overflow = 'visible';

  // slides.forEach((s, i) => (s.style.transform = `translateX(${100 * i}%)`));
  // 0%,100%,200%,300%
  activateDot(0);
  const goToSlide = function (slide) {
    slides.forEach(
      (s, i) => (s.style.transform = `translateX(${100 * (i - slide)}%)`)
    );
  };
  goToSlide(0);

  //Next slide

  const nextSlide = function () {
    if (curSlide === maxSlide - 1) {
      curSlide = 0;
    } else {
      curSlide++;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const prevSlide = function () {
    if (curSlide == 0) {
      curSlide = maxSlide - 1;
    } else {
      curSlide--;
    }
    goToSlide(curSlide);
    activateDot(curSlide);
  };

  const init = function () {
    createDots();
    goToSlide(0);
    activateDot(0);
  };
  init();
  // btnRight.addEventListener('click', function () {
  //   if (curSlide === maxSlide - 1) {
  //     curSlide = 0;
  //   } else {
  //     curSlide++;
  //   }
  //   // slides.forEach(
  //   //   (s, i) => (s.style.transform = `translateX(${100 * (i - curSlide)}%)`)
  //   // );
  //   goToSlide(curSlide);
  //   //-100%,0%,100%,200%
  // });

  btnRight.addEventListener('click', nextSlide);
  btnLeft.addEventListener('click', prevSlide);

  document.addEventListener('keydown', function (e) {
    console.log(e);
    if (e.key === 'ArrowLeft') prevSlide();
    e.key === 'ArrowRight' && nextSlide();
  });

  const createDots = function () {
    slides.forEach(function (_, i) {
      dotContainer.insertAdjacentElement(
        'beforeend',
        `<button class="dots__dot" data-slide="${i}"></button>`
      );
    });
  };

  createDots();
  const activateDot = function (slide) {
    document
      .querySelectorAll('.dots__dot')
      .forEach(dot => dot.classList.remove('dots__dot--active'));

    document
      .querySelector(`.dots__dot[data-slide="${slide}"]`)
      .classList.add('dots__dot--active');
  };
  dotContainer.addEventListener('click', function (e) {
    if (e.target.classList.contains('dots__dot')) {
      // const slide = e.target.dataset.slide;
      const { slide } = e.target.dataset;
      goToSlide(slide);
      activateDot(slide);
    }
  });
};
slider();

//life cycle dom event

//dom content loaded (this event fired by the document as soon as the html is completely parsed, means that the html has been downloaded and been converted to the dom tree.)
//all script must be downloaded and executed before the dom content loaded event can happen
//this event not wait for images and other external resources to load.
//we want all our code only to be executed after dom is available
// that why we have script tag at last in html to import
document.addEventListener('DOMContentLoadded', function (e) {
  console.log('HTML parse and DOM tree built!', e);
});
// if you are coming to vanilla js from jQuery then you probably used to wrap all your code into a document ready function.

// loadevent ( it is fired by window ,as soon as not only the html is parsed but also all the images and external resources like css files are also loaded.)

window.addEventListener('load', function (e) {
  console.log('Page fully loaded', e);
});

//beforeunload event(this event is create immediately before a user about to leave a page)
window.addEventListener('beforeunload', function (e) {
  e.preventDefault();
  console.log(e);
  //leaving confirmation
  e.returnValue = '';
});

// different way of loading a js script in html
//these attributes are gonna influence the way in which js file is fetched, which basically means download and then executed.
//three way to add js file in html
//1.regular <script src='script.js'></script>
//2. Async <script async src='script.js'></script>
//3. defer <script defer src='script.js'></script>

// in the html we can write the script tag in document head , or usually at the end of the body

//1. when we include a script without any attribute in the head , as the  user loads the page and receives the html, the html code to be start parsed by the browser and parsing the html is basically building the dom tree from the html element .
// and at certain point it will find the script tag ,start to fetch the script and execute it and after that rest of the html can be parsed and after parsing dom content loaded get fired ,it is not used because we dont want do sitting browser doing nothing while fetch script

//2. in async , the script is loaded at the same time when parsing html but it still stop when script execute.(means the script download asyncnously but execute in synchronous way)

//3. in defer, the script is loaded  asychronously but the execution is deffered until the end of the html parsing.
