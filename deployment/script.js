const menuBtn = document.querySelector('.header .icon-hamburger');
const menuCloseBtn = document.querySelector('.header .icon-close');
const navBar = document.querySelector('.header');
const navBarMobile = document.querySelector('.header-mobile');
const imgPhone = document.querySelector('#home-section .img-container .phones-img');

menuBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
    navBarMobile.classList.toggle('open');
    imgPhone.classList.toggle('open');
});

menuCloseBtn.addEventListener('click', () => {
    navBar.classList.toggle('open');
    navBarMobile.classList.toggle('open');
    imgPhone.classList.toggle('open');
});
