'use strict';
//DOM manipulation
//selecting an element in js.
//connection between code and user interface
//select an elment from page
/*console.log(document.querySelector('.message').textContent);
// basically querySelector is a method that available on document object. into these we have to pass selector

//what is the DOM?
// DOM stnads for Document Object Model,and it is basically ,a structured representation of HTML documents.
// DOM allow to access html element and styles in order to manipulate them.(ex:change text,html attribute and css style)
//in simple word dom is connection between html documents and js code.
// dom is automactically created by browser as soon as the html page loads.and its stored in a tree structure.
//in this tree,each html element is one object.
// dom always starts with the document object it is special object that we have access to in js
//and this object serves as an entry point into the dom.

                                  document 
                                      |
                                      Element(<Html></Html>)
                                      /     \                                           \
                                    /        \
                            element(head)    element(body)


// dom tree actually has more than just elment nodes
// it also has nodes for all the text itself,comment and other stuff.
// dom is complete representation of html document

//DOM!== Js
// dom methods and properites for dom manipulation are not part of js.
// DOM methods and properties are actually part of web apis.
// web apis are like libraries that browser implement and that we can access from our js code.
// beside dom other api are timers,fetch.

// selecting and manipulating elements

document.querySelector('.message').textContent = 'correct Number!';
console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
//read value property
//.value is mainly used for <input> ,</textArea>,</select>
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

// handling click events by event listener
//first we select the elment where should the event happen
// in this case we want to listen to event on this button check
let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highScore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
document.querySelector('.check').addEventListener('click', function () {
  //console.log(document.querySelector('.guess').value);
  //document.querySelector('.message').textContent = 'correct Number!';
  // what ever we got from user input is basically a type of string
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // when there is no input
  if (!guess) {
    displayMessage('⛔No number!');
    //when player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉Correct Number');
    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
  //when guess is wrong
  else if (guess !== secretNumber) {
    if (score > 0) {
      displayMessage(guess > secretNumber ? '📈Too high!' : '📉Too low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You loss the Game!');
    }
  }
  /*
  // when guess is too high
  else if (guess > secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📈Too high!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loss the Game!';
    }

    // when guess is too low
  } else if (guess < secretNumber) {
    if (score > 0) {
      document.querySelector('.message').textContent = '📉Too low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = 'You loss the Game!';
    }
  }*/
});
// into addeventlister method we first need to pass the type of the event
// and then we tell eventlister what to do so basically rection to the type of event that we pass we do this by defining the function
// that function will contain exactly the code that should be ececuted whenever  type of event happen
// that function is going to be called the event handler. because a function is just a value

//we do not funtion anywhere but js engine who call this funtion as soon as event happen.

//add functionality for again

//steps:
// 1.select the element with the 'again' class and attach a click evnet handler
document.querySelector('.again').addEventListener('click', function () {
  //restore initial value of score
  score = 20;
  document.querySelector('.score').textContent = score;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent = '?;
  //document.querySelector('.highscore').textContent = 0;
  displayMessage('Start Guessing...');
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.guess').value = '';
});
