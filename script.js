'use strict';

const phoneNumber = document.getElementById('phone');
const ph = document.querySelector('.ph');
const project_1 = document.getElementById('project_1');

const showNumber = function () {
  console.log('jdhajsdh');
  // phoneNumber.classList.toggle('hi');
  // phoneNumber.classList.toggle('active');
  ph.classList.toggle('active');
};

const bigger = function () {
  project_1.add('hidden');
};

phoneNumber.addEventListener('click', showNumber);

project_1.addEventListener('click', bigger);
