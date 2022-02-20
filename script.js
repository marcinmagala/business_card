'use strict';

const phoneNumber = document.getElementById('phone');
const ph = document.querySelector('.ph');
const project_1 = document.getElementById('project_1');
const eduBtn = document.querySelector('.education');
const eduContent = document.querySelector('.eduContent');
const expBtn = document.querySelector('.experience');
const expContent = document.querySelector('.expContent');
const desk = document.querySelector('.desk');
const square = document.querySelector('.square');
const mailBtn = document.getElementById('mail');
const phoneBtn = document.getElementById('phone');
const placeContentMail = document.querySelector('.placeContentMail');
const placeContentPhone = document.querySelector('.placeContentPhone');
const contentEducation = document.querySelector('.contentEducation');
const contentExperience = document.querySelector('.contentExperience');

const start = function () {
  contentEducation.classList.add('fontEdu');
  contentExperience.classList.add('fontEdu');
};

start();

const changeSizeFontEdu = function () {
  if (eduContent.classList.contains('showEdu')) {
    const fontEdu = function () {
      contentEducation.classList.remove('fontEdu');
    };
    window.setTimeout(fontEdu, 700);
  } else {
    const normalFontEdu = function () {
      contentEducation.classList.add('fontEdu');
    };
    window.setTimeout(normalFontEdu, 200);
  }
};

const changeSizeFontExp = function () {
  if (expContent.classList.contains('showExp')) {
    const fontEdu = function () {
      contentExperience.classList.remove('fontEdu');
    };
    window.setTimeout(fontEdu, 700);
  } else {
    const normalFontEdu = function () {
      contentExperience.classList.add('fontEdu');
    };
    window.setTimeout(normalFontEdu, 0);
  }
};

const showEdu = function () {
  eduContent.classList.toggle('showEdu');
  expContent.classList.remove('showExp');
  placeContentMail.classList.remove('showPlaceMail');
  placeContentPhone.classList.remove('showPlacePhone');

  changeSizeFontEdu();
  changeSizeFontExp();
};

const hidEdu = function () {
  eduContent.classList.remove('showEdu');

  changeSizeFontEdu();
  changeSizeFontExp();
};

const showExp = function () {
  expContent.classList.toggle('showExp');
  eduContent.classList.remove('showEdu');
  placeContentMail.classList.remove('showPlaceMail');
  placeContentPhone.classList.remove('showPlacePhone');

  changeSizeFontEdu();
  changeSizeFontExp();
};

const hidExp = function () {
  expContent.classList.remove('showExp');
  changeSizeFontExp();
  changeSizeFontEdu();
};

const showContactMail = function () {
  placeContentMail.classList.toggle('showPlaceMail');
  placeContentPhone.classList.remove('showPlacePhone');
  eduContent.classList.remove('showEdu');
  expContent.classList.remove('showExp');
  window = setTimeout(hidContact, 20000);
  changeSizeFontEdu();
  changeSizeFontExp();
};

const showContactPhone = function () {
  placeContentPhone.classList.toggle('showPlacePhone');
  placeContentMail.classList.remove('showPlaceMail');
  eduContent.classList.remove('showEdu');
  expContent.classList.remove('showExp');
  window = setTimeout(hidContact, 20000);
  changeSizeFontEdu();
  changeSizeFontExp();
};

const hidContact = function () {
  placeContentMail.classList.remove('showPlaceMail');
  placeContentPhone.classList.remove('showPlacePhone');
  changeSizeFontExp();
  changeSizeFontEdu();
};

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

eduBtn.addEventListener('click', showEdu);
eduContent.addEventListener('click', hidEdu);

expBtn.addEventListener('click', showExp);
expContent.addEventListener('click', hidExp);

mailBtn.addEventListener('click', showContactMail);
phoneBtn.addEventListener('click', showContactPhone);
placeContentMail.addEventListener('click', hidContact);
placeContentPhone.addEventListener('click', hidContact);
