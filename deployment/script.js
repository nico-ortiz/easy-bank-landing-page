const menuBtn = document.querySelector('.header .icon-hamburger');
const menuCloseBtn = document.querySelector('.header .icon-close');
const navBar = document.querySelector('.header');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('close');
});

menuCloseBtn.addEventListener('click', () => {
    navBar.classList.toggle('close');
});
