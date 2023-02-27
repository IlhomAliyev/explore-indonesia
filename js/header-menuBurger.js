"use strict"

export default {
    allFunctions() {
        const iconMenu = document.querySelector('.menu__icon');
        const menuBody = document.querySelector('.menu-body');
        const menuList = document.querySelector('.menu__list');
        const header = document.querySelector('header');
        const searchInput = document.querySelector('#search-input');

        if (window.scrollY > 0) {
            header.classList.add('_scrolled');
        }
        
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

        const menuArrows = document.querySelectorAll('.menu__arrow');
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
    }
}