const menuButton = document.getElementById('hamburger');
const closeButton = document.getElementById('close');

const mobileMenu = document.querySelector('.mobile-menu');
menuButton.addEventListener('click', () => {
  menuButton.classList.add('hidden');
  mobileMenu.classList.remove('hidden');
  closeButton.classList.remove('hidden');
});

closeButton.addEventListener('click', () => {
  menuButton.classList.remove('hidden');
  mobileMenu.classList.add('hidden');
  closeButton.classList.add('hidden');
});
