'use strict';

import sliderModule from './sliders.js';
sliderModule.allSliders();

import headerAndMenuBurger from './header-menuBurger.js';
headerAndMenuBurger.allFunctions();

import accordionModule from './accordion.js';
accordionModule.accordion();

import searchByPage from './searchByPage.js';
searchByPage.searchByPage();

//! VIDEO-PLAY-BUTTONS
const playButtons = document.getElementsByClassName('play-button');

if (playButtons.length > 0) {
  for (const eachPlayButton of playButtons) {
      eachPlayButton.addEventListener("click", playVideo);
      function playVideo(event) {
          eachPlayButton.style.display = "none";
          let exactVideo = eachPlayButton.previousElementSibling;
          exactVideo.play();
          exactVideo.setAttribute("controls", true);
      }
  }
}

//! СКРОЛЛ ДО САМОЙ ВЕРХНЕЙ ТОЧКИ
const buttonUp = document.querySelector('.icon-button-up');
buttonUp.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

//! ПОИСК
const menuBody = document.querySelector('.menu-body');
const searchButton = document.querySelector('.icon-search-icon');
const searchInput = document.querySelector('#search-input');

searchButton.addEventListener('click', function () {
  searchInput.classList.toggle('_active');
  setTimeout(focusOnSearchInput, 100);
  //? Закрываем меню, если оно открыто
  if (
    menuBody.classList.contains('_active') ||
    document.body.classList.contains('_lock')
  ) {
    menuBody.classList.remove('_active');
    document.body.classList.remove('_lock');
  }
});

function focusOnSearchInput() {
  searchInput.focus();
}

//! POP-UP
// const popUp = document.querySelector('.pop-up');
// const closeButton = document.querySelector('.close-button');
// let popUpCounter = 0;

// document.addEventListener('mouseleave', showPopUp);
// closeButton.addEventListener('click', hidePopUp);
// window.addEventListener('keyup', hidePopUp);

// function showPopUp() {
//   if (popUpCounter < 2) {
//     popUp.classList.add('_active');
//     document.body.classList.add('_popUp');
//   }
//   popUpCounter++;
// }

// function hidePopUp(event) {
//   if (popUp && popUp.classList.contains('_active')) {
//     popUp.classList.remove('_active');
//     document.body.classList.remove('_popUp');
//     if (event.code == 'Escape') {
//       popUp.classList.remove('_active');
//       document.body.classList.remove('_popUp');
//     }
//   }
// }
