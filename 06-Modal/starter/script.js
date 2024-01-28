'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('.show-modal'); //here queryselector select only first button but with all it select all button with same naem of nodelist
console.log(btnOpenModal);
// add and remove functionality of classes
//each class functions a bit like container with lot of properties in it
// when we select than use . in class.
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);
}
btnCloseModal.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);

//key press events are golobal events

document.addEventListener('keydown', function (e) {
  // console.log('A key was pressed');
  // console.log(e);
  console.log(e.key);
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});
