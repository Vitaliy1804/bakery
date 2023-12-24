const mobileMenu = document.querySelector('.mobile-menu');
const menuBtnOpen = document.querySelector('.menu-btn-open');
const menuBtnClose = document.querySelector('.menu-btn-close');

const toggleMenu = () => mobileMenu.classList.toggle('is-open');

menuBtnOpen.addEventListener('click', toggleMenu);
menuBtnClose.addEventListener('click', toggleMenu);


// const menu = document.querySelector('.header__nav');
// const menuBtn = document.querySelector('.header__burger');


// const body = document.body;

// if (menu && menuBtn) {
//   menuBtn.addEventListener('click', () => {
//     menu.classList.toggle('active')
//     menuBtn.classList.toggle('active')
//     body.classList.toggle('lock')
//   })

//   menu.querySelectorAll('.menu__link').forEach(link => {
//     link.addEventListener('click', () => {
//       menu.classList.remove('active')
//       menuBtn.classList.remove('active')
//       body.classList.remove('lock')
//     })
//   })
// }

// const anchors = document.querySelectorAll('a[href*="#"]');

//    anchors.forEach((anchor) => {
//       anchor.addEventListener('click', event => {
//         event.preventDefault();

//         const blockId = anchor.getAttribute('href').substring(1);

//         document.getElementById(blockId).scrollIntoView({
//           behavior: 'smooth',
//           block: 'start'
//         })
//       })
//    })