const menuButton = document.getElementById('btnHamburger');
const closeButton = document.getElementById('close');
const header = document.querySelector('.header');

const mobileMenu = document.querySelector('.header__menu');
menuButton.addEventListener('click', () => {
  menuButton.classList.toggle('open');
  menuButton.classList.contains('open')
    ? (mobileMenu.classList.remove('has-fade'),
     mobileMenu.classList.add('fade-in'),
     mobileMenu.classList.remove('fade-out'))
    : (mobileMenu.classList.add('has-fade'),
    mobileMenu.classList.remove('fade-in'),
    mobileMenu.classList.add('fade-out'));
});
