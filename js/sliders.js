'use strict';

export default {
  allSliders() {
    const videoSlider = new Swiper('.video-slider', {
      pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
          if (number < 10) {
            number = '0' + number;
            return number;
          }
        },
        formatFractionTotal: function (number) {
          number = '';
          return number;
        },
      },
      scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
      },
      simulateTouch: true,
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 500,
      direction: 'vertical',
    });

    //! Убираем "/" из фракции
    const fractionCurrentNumber = document.getElementsByClassName(
      'swiper-pagination-current'
    )[0];
    fractionCurrentNumber.nextSibling.remove();
    //!==============================================

    const titles = document.querySelector('.titles');
    const titleBoxes = document.getElementsByClassName('title-box');

    videoSlider.on('slideChange', function () {
      switch (videoSlider.realIndex) {
        case 0:
          for (const otherTitleBoxes of titleBoxes) {
            otherTitleBoxes.classList.remove('_active');
          }
          document.querySelector('.title-box-1').classList.add('_active');
          break;
        case 1:
          for (const otherTitleBoxes of titleBoxes) {
            otherTitleBoxes.classList.remove('_active');
          }
          document.querySelector('.title-box-2').classList.add('_active');
          break;
        case 2:
          for (const otherTitleBoxes of titleBoxes) {
            otherTitleBoxes.classList.remove('_active');
          }
          document.querySelector('.title-box-3').classList.add('_active');
          break;

        default:
          break;
      }
    });
    //!==============================================

    titles.addEventListener('click', showTheSlide);
    function showTheSlide(event) {
      if (titleBoxes.length > 0) {
        for (const eachTitleBox of titleBoxes) {
          if (eachTitleBox.matches('._active')) {
            eachTitleBox.classList.remove('_active');
          }
        }
      }
      let selectedTitleBox = event.target.closest('.title-box');
      if (selectedTitleBox) {
        selectedTitleBox.classList.toggle('_active');
      }
      switch (selectedTitleBox.querySelector('span').textContent) {
        case '01':
          videoSlider.slideTo(0);
          break;
        case '02':
          videoSlider.slideTo(1);
          break;
        case '03':
          videoSlider.slideTo(2);
          break;

        default:
          break;
      }
    }

    //! EXPLORE-PAGE-SLIDER
    const exploreSlider = new Swiper('.explore-slider', {
      slidesPerView: 1,
      spaceBetween: 15,
      speed: 500,
      loop: true,
      centeredSlides: true,
      navigation: {
        nextEl: '.icon-button-right',
        prevEl: '.icon-button-left',
      },
      pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
        clickable: true,
      },
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      simulateTouch: true,
      touchRatio: 1,
      touchAngle: 45,
      grabCursor: true,
      keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
      },
      mousewheel: {
        sensitivity: 1,
      },
      breakpoints: {
        //? при ширине экрана >= 1050px
        1050: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });
  },

  //? Замедление воспроизведения
  // const backgroundVideo = document.getElementsByClassName('background-video');

  // for (let i = 0; i < backgroundVideo.length; i++) {
  //     const eachVideo = backgroundVideo[i];
  //     eachVideo.playbackRate = 0.5;
  // }
};
