"use strict"
const menuIcon = document.querySelector('.menu__icon');
const menuBody = document.querySelector('.menu__body')
if(menuIcon) {
    menuIcon.addEventListener('click',(e)=> {
        document.body.classList.toggle('_lock');
        menuIcon.classList.toggle('_active');
        menuBody.classList.toggle('_active');
    });
}
console.log(document.querySelector('.header').offsetHeigh);

const menuLinks = document.querySelectorAll('.menu__link[data-goto]');
if(menuLinks.length > 0) {
    menuLinks.forEach(menuLink => {
        menuLink.addEventListener('click', onMenuLinkClick);
    });
    function onMenuLinkClick(e) {
        const menuLink = e.target;
        if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
            const gotoBlock = document.querySelector(menuLink.dataset.goto);
            const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset - document.querySelector('header').offsetHeight + 48;

            if(menuIcon.classList.contains('_active')) {
                document.body.classList.remove('_lock');
                menuIcon.classList.remove('_active');
                menuBody.classList.remove('_active');
            }

            window.scrollTo({
                top: gotoBlockValue,
                behavior: "smooth",
            });
        }
    }
}

const intro = document.querySelector('.intro-section');
const header = document.querySelector('.header');
window.addEventListener('scroll', () => {
    let scrollTop = window.scrollY;
    let introHeight = intro.offsetHeight;

    if (scrollTop >= introHeight) {
        header.classList.add('_fixed');
    } else {
        header.classList.remove('_fixed');
    }
});