const menuBtn = document.querySelector('.menu-btn-container');
const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.menu');
const noScroll = document.querySelector('body');
const navLink = document.querySelectorAll('.nav-link');
let navShown = false;

function closeMenu() {
  nav.classList.remove('show-menu');
  btn.classList.remove('menu-active');
  noScroll.classList.remove('no-scroll');
  navShown = false;
}

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});