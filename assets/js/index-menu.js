const menuButton = document.querySelector('.nav-mobile-icone');
const mobileMenu = document.querySelector('.nav-mobile-list');
const expertiseTrigger = document.querySelector('.nav-mobile .deroulant > p');
const expertiseMenu = document.querySelector('.nav-mobile .deroulant-expertise');

if (menuButton && mobileMenu) {
  menuButton.addEventListener('click', () => {
    const isOpen = mobileMenu.classList.toggle('show');
    menuButton.setAttribute('aria-expanded', String(isOpen));
  });

  mobileMenu.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      menuButton.setAttribute('aria-expanded', 'false');
    });
  });
}

if (expertiseTrigger && expertiseMenu) {
  expertiseTrigger.addEventListener('click', () => {
    expertiseMenu.classList.toggle('show1');
  });
}
