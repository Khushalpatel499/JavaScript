'use strict';

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.close-modal');
const btnOpenModal = document.querySelectorAll('show-modal');
console.log(btnOpenModal);
// add and remove functionality of classes
//each class functions a bit like container with lot of properties in it
const openModal = function () {
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

for (let i = 0; i < btnCloseModal.length; i++) {
  btnOpenModal[i].addEventListener('click', openModal);

  btnCloseModal[i].addEventListener('click', closeModal);

  overlay.addEventListener('click', closeModal);
}
