"use strict"
const videoSlider = new Swiper('.video-slider', {
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
        formatFractionCurrent: function (number) {
            if (number < 10) {
                number = "0" + number;
                return number
            }
        },
        formatFractionTotal: function (number) {
            number = "";
            return number
        }
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
const fractionCurrentNumber = document.getElementsByClassName('swiper-pagination-current')[0];
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

titles.addEventListener("click", showTheSlide)
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
            videoSlider.slideTo(0)
            break;
        case '02':
            videoSlider.slideTo(1)
            break;
        case '03':
            videoSlider.slideTo(2)
            break;

        default:
            break;
    }
}

//? Замедление воспроизведения
// const backgroundVideo = document.getElementsByClassName('background-video');

// for (let i = 0; i < backgroundVideo.length; i++) {
//     const eachVideo = backgroundVideo[i];
//     eachVideo.playbackRate = 0.5;
// }

const iconMenu = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu-body');
const menuList = document.querySelector('.menu__list');
const menuBodyList = document.querySelector('.menu-body__list');
const menuBodyListLi = document.querySelectorAll('.menu-body__list li');
const header = document.querySelector('header');

document.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        header.classList.add('_scrolled');
    } else header.classList.remove('_scrolled');
})
//? Перенос ссылок при ширине экрана <= 1050px
window.addEventListener("resize", function (event) {
    if (window.innerWidth <= 1050) {
        menuBody.prepend(menuList);
    } else {
        header.firstElementChild.after(menuList);
    }
})
if (window.innerWidth <= 1050) {
    menuBody.prepend(menuList);
}
//?=========================================
//! ==============МЕНЮ-БУРГЕР==============
//? Проверка типа устройства (ПК или смартфон)
const isMobile = {
    Android: function () {
        return navigator.userAgent.match(/Android/i);
    },
    Blackberry: function () {
        return navigator.userAgent.match(/Blackberry/i);
    },
    iOS: function () {
        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
    },
    Opera: function () {
        return navigator.userAgent.match(/Opera Mini/i);
    },
    Windows: function () {
        return navigator.userAgent.match(/IEMobile/i);
    },
    any: function () {
        return (
            isMobile.Android() ||
            isMobile.Blackberry() ||
            isMobile.iOS() ||
            isMobile.Opera() ||
            isMobile.Windows()
        );
    }
};

if (isMobile.any()) {
    document.body.classList.add('_touch');
} else {
    document.body.classList.add('_pc');
}

let menuArrows = document.querySelectorAll('.menu__arrow');
if (menuArrows.length > 0) {
    for (let i = 0; i < menuArrows.length; i++) {
        const menuArrow = menuArrows[i];
        menuArrow.addEventListener("click", function (e) {
            menuArrow.parentElement.classList.toggle('_active');
        })
    }
}

//! Иконка
if (iconMenu) {
    iconMenu.addEventListener("click", function () {
        iconMenu.classList.toggle('_active');
        menuBody.classList.toggle('_active');
        let menuBodyWidth = parseInt((getComputedStyle(menuBody)).width);
        let documentWidth = document.documentElement.clientWidth;
        if (menuBodyWidth == documentWidth) {
            document.body.classList.toggle('_lock');
        }
        if (searchInput.classList.contains('_active')) {
            searchInput.classList.remove('_active');
        }
    })
}
//! ==============

//! Прокрутка при клике
const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if (menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener("click", onMenuLinkClick)
    });

    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight;

            document.body.classList.remove('_lock');

            if (iconMenu.classList.contains('_active')) {
                iconMenu.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth"
            })
            e.preventDefault();
        }
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
        disableOnInteraction: false
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
    }
});

//! VIDEO-PLAY-BUTTONS
const playButtons = document.getElementsByClassName('play-button');
if (playButtons.length > 0) {
    for (const eachPlayButton of playButtons) {
        eachPlayButton.addEventListener("click", playVideo, { capture: true });
        function playVideo(event) {
            eachPlayButton.style.display = "none";
            let exactVideo = eachPlayButton.previousElementSibling;
            exactVideo.play();
            exactVideo.setAttribute("controls", true);
            // event.stopPropagation();
        }
    }
}

//! ACCORDION
const allArticles = document.querySelectorAll('.article');

for (let eachArticle of allArticles) {
    const exactParagraph = eachArticle.querySelector('.article__paragraph');
    const exactParagraphFullText = exactParagraph.innerHTML;
    const exactParagraphShortText = exactParagraph.innerHTML.slice(0, 21) + '...';
    let exactShowMore = eachArticle.querySelector('.show-more');

    exactParagraph.innerHTML = exactParagraphShortText;
    eachArticle.addEventListener("click", openAccordion, { capture: true })

    function openAccordion(event) {
        eachArticle.classList.toggle('_active');

        if (!eachArticle.classList.contains('_active')) {
            exactParagraph.innerHTML = exactParagraphShortText;
            exactShowMore.textContent = "Show more"
        } else if (eachArticle.classList.contains('_active')) {
            exactParagraph.innerHTML = exactParagraphFullText;
            exactShowMore.textContent = "Show less"
        }
    }
}

let subArticleShowMore = document.querySelector('.sub-article__show-more');
const subArticleDescription = document.querySelector('.sub-article-video-description');
const subParagraph = document.querySelector('.sub-article-video__paragraph');
const subParagraphFullText = subParagraph.innerHTML;
const subParagraphShortText = subParagraph.innerHTML.slice(0, 21) + '...';

if (window.innerWidth <= 1050) {
    subParagraph.innerHTML = subParagraphShortText;
}

subArticleShowMore.addEventListener("click", openSubArticle, { capture: true })

function openSubArticle(event) {
    subArticleDescription.classList.toggle('_active');
    if (!subArticleDescription.classList.contains('_active')) {
        subParagraph.innerHTML = subParagraphShortText;
        subArticleShowMore.textContent = "Show more";
    } else if (subArticleDescription.classList.contains('_active')) {
        subParagraph.innerHTML = subParagraphFullText;
        subArticleShowMore.textContent = "Show less";
    }
}

//! СКРОЛЛ ДО САМОЙ ВЕРХНЕЙ ТОЧКИ
const buttonUp = document.querySelector('.icon-button-up');
buttonUp.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

//! ПОИСК
const searchButton = document.querySelector('.icon-search-icon');
const searchInput = document.querySelector('#search-input');
searchButton.addEventListener("click", function () {
    searchInput.classList.toggle('_active');
    if (menuBody.classList.contains('_active')) {
        menuBody.classList.remove('_active');
    }
})

//! POP-UP
const popUp = document.querySelector('.pop-up')
const closeButton = document.querySelector('.close-button');

document.addEventListener("mouseleave", () => {
    popUp.classList.add('_active');
    document.body.classList.add('_lock');
})

closeButton.addEventListener("click", () => {
    popUp.classList.remove('_active');
    document.body.classList.remove('_lock');
})

window.addEventListener("keyup", (event) => {
    if (popUp && popUp.classList.contains('_active')) {
        if (event.code == 'Escape') {
            popUp.classList.remove('_active');
            document.body.classList.remove('_lock');
        }
    }
})