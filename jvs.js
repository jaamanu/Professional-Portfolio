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

menuBtn.addEventListener('click', () => {
  if (!navShown) {
    nav.classList.add('show-menu');
    btn.classList.add('menu-active');
    noScroll.classList.add('no-scroll');
    navShown = true;
  } else {
    closeMenu();
  }
});

navLink.forEach((link) => {
  link.addEventListener('click', () => {
    closeMenu();
  });
});





















// const spanEmail = document.querySelector('.emailmsg')

// function emailval(){
//     const email = document.querySelector('.email').value
//     const border = document.querySelector('#email')
//     if (email.length == 0){
//         border.style.border='red 2px solid'
//         spanEmail.innerHTML="required"
//         spanEmail.style.color='red'
//         return false
//     }
//     if (!email.match(/^[a-z-0-9.!#$%&'*+/=?^_`{|}~-]+@[a-z-0-9-]*[\.][a-z]+(?:\.[a-z-0-9-]+)*$/)){
//         spanEmail.innerHTML="lower case only"
//         border.style.border='red 2px solid'
//         spanEmail.style.color='red'
//         return false
//     }
//     spanEmail.innerHTML="correct"
//     border.style.border='green 2px solid'
//     spanEmail.style.color='green'
//     return true
// }


// function disp(){
//     if(!emailval()){
//         return false
//     }
// } 
// //  _____________________________________END FORM VALIDATION __________________________________________

// const fullnames = document.querySelector('.fullnames')

// const full1 = localStorage.getItem('Ashanti')
// if(full1){
//     fullnames.value=full1
// }

// const email = document.querySelector('.email')

// const email1 = localStorage.getItem('Adela')
// if(email1){
//     email.value=email1
// }

// const textarea = document.querySelector('.textarea')

// const text1 = localStorage.getItem('Ken')
// if(text1){
//     textarea.value=text1
// }

// fullnames.addEventListener('input',(e)=>{
//     localStorage.setItem('Ashanti', e.target.value)
// })

// email.addEventListener('input',(e)=>{
//     localStorage.setItem('Adela', e.target.value)
// })

// textarea.addEventListener('input',(e)=>{
//     localStorage.setItem('Ken', e.target.value)
// })