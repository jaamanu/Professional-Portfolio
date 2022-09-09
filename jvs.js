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

const projects = [{
  projectTitle: 'Professional Art Printing Data',
  projectTitle2: 'Professional Art Printing Data',
  projectImage: './images/jamanu1png.png',
  description2: ' A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry"s standard',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
  technology: ['HTML', 'Bootstrap', 'CSS'],
  sourceCode: '',
  liveDemo: '',
},
{
  projectTitle: 'Professional Art Printing Data',
  projectTitle2: 'Professional Art Printing Data',
  projectImage: './images/jamanu1png.png',
  description2: ' A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry"s standard',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
  technology: ['HTML', 'Bootstrap', 'CSS'],
  sourceCode: '',
  liveDemo: '',
},
{
  projectTitle: 'Professional Art Printing Data',
  projectTitle2: 'Professional Art Printing Data',
  projectImage: './images/jamanu1png.png',
  description2: ' A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry"s standard',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
  technology: ['HTML', 'Bootstrap', 'CSS'],
  sourceCode: '',
  liveDemo: '',
}, {
  projectTitle: 'Professional Art Printing Data',
  projectTitle2: 'Professional Art Printing Data',
  projectImage: './images/jamanu1png.png',
  description2: ' A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry"s standard',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
  technology: ['HTML', 'Bootstrap', 'CSS'],
  sourceCode: '',
  liveDemo: '',
}, {
  projectTitle: 'Professional Art Printing Data',
  projectTitle2: 'Professional Art Printing Data',
  projectImage: './images/jamanu1png.png',
  description2: ' A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry"s standard',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
  technology: ['HTML', 'Bootstrap', 'CSS'],
  sourceCode: '',
  liveDemo: '',
}, {
  projectTitle: 'Professional Art Printing Data',
  projectTitle2: 'Professional Art Printing Data',
  projectImage: './images/jamanu1png.png',
  description2: ' A daily selection of privately personalized reads; no accounts orsign-ups required. has been the industry"s standard',
  description: 'A daily selection of privately personalized reads; no accounts or sign-ups required. has been the industry"s standard',
  technology: ['BOOTSTRAP', 'HTML', 'CSS'],
  sourceCode: '',
  liveDemo: '',
},
];

const cards = document.querySelector('.grid');
const popup = document.querySelector('.pop');

projects.forEach((project) => {
  const card = document.createElement('div');
  const button = document.createElement('div');
  card.innerHTML = `
<article class="card-article flex flex-col">
<div class="card-block">
<header class="article-title">
<h2>${project.projectTitle}</h2>
</header>
<p class="card-art-desc">
${project.description}
</p>
<ul class="card-links tags flex">
<li><a class="card-link tag" href="#">${project.technology[0]}</a></li>
<li><a class="card-link tag" href="#">${project.technology[2]}</a></li>
<li><a class="card-link tag" href="#">${project.technology[1]}</a></li>
</ul>
</div>
</article>
`;
  card.classList.add('work-card');
  card.classList.add('flex');
  card.classList.add('flex-col');
  card.classList.add('end-col-left');
  card.append(button);

  button.innerHTML = `
<p>see project</p>
`;
  button.classList.add('card-btn');
  button.classList.add('button');

  button.addEventListener('click', () => {
    popup.style.display = 'block';
    document.body.style.overflow = 'hidden';
    popup.innerHTML = `
  <div class="modal">
  <div class="second flex align justbtw">
      <h2 class="modHeader">${project.projectTitle2}</h2>
      <div class="burg">
          <div class="bur1"></div>
          <div class="bur2"></div>
          <div class="bur3"></div>
      </div>
  </div>
  <ul class="lang2 flex">
      <li>${project.technology[1]}</li>
      <li>${project.technology[0]}</li>
      <li>${project.technology[2]}</li>
  </ul>
<div class="flexit">
  <div class="vi">
      <img class="mod" src=${project.projectImage} alt="background image">
  </div>

  <div class="vie">
      <p class="p">${project.description2}</p>
      <ul class="flex align see">
          <li><a class="white" href="${project.liveDemo}">See Project</a></li>
          <li><a class="white" href="${project.sourceCode}">See Source</a></li>
      </ul>
  </div>
</div>
</div>
  `;
    const btnPop = document.querySelector('.burg');
    btnPop.addEventListener('click', () => {
      popup.style.display = 'none';
      document.body.style.overflow = 'initial';
    });
  });
  cards.append(card);
});

const emailError = document.querySelector('.spanMail');
const submitError = document.querySelector('.spanSubmit');

function emailVal() {
  const email = document.querySelector('.email').value;

  if (email.length === 0) {
    emailError.innerHTML = 'Required';
    emailError.style.color = 'red';
    return false;
  }
  if (!email.match(/^[a-z-0-9.!#$%&'+/=?^_`{|}~-]+@[a-z-0-9-]\.[a-z]+(?:\.[a-z-0-9-]+)*$/)) {
    emailError.innerHTML = 'lowercase only';
    emailError.style.color = 'red';
    return false;
  }
  emailError.innerHTML = 'correct';
  emailError.style.color = 'green';
  return true;
}

function validateForm() {
  if (!emailVal()) {
    submitError.innerHTML = 'fix errors';
    setTimeout(() => { submitError.style.display = 'none'; }, 4000);
    return false;
  }
  return true;
}
validateForm();
const Name = document.querySelector('.name');
const NameValue = localStorage.getItem('Name');

if (NameValue) {
  Name.value = NameValue;
}
// select the class of email input
const Email = document.querySelector('.email');
const EmailValue = localStorage.getItem('Email');

if (EmailValue) {
  Email.value = EmailValue;
}
// select the class of textarea
const Texted = document.querySelector('.textarea');
const formTextValue = localStorage.getItem('Text');

if (formTextValue) {
  Texted.value = formTextValue;
}

Name.addEventListener('input', (e) => {
  localStorage.setItem('Name', e.target.value);
});
Email.addEventListener('input', (e) => {
  localStorage.setItem('Email', e.target.value);
});
Texted.addEventListener('input', (e) => {
  localStorage.setItem('Text', e.target.value);
});