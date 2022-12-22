(() => {
  const mobileMenu = document.querySelector('.js-menu-container');
  const openMenuBtn = document.querySelector('.js-open-menu');
  const closeMenuBtn = document.querySelector('.js-close-menu');
  const closeMenuLink = document.querySelectorAll('.mobile-menu__link');

  const toggleMenu = () => {
    const isMenuOpen = openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');

    const scrollLockMethod = !isMenuOpen ? 'disableBodyScroll' : 'enableBodyScroll';
    bodyScrollLock[scrollLockMethod](document.body);
  };
  closeMenuLink.forEach(item => item.addEventListener('click', toggleMenu));
  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
    bodyScrollLock.enableBodyScroll(document.body);
  });
})();

// const menuLinks = document.querySelectorAll('.mobile - menu__link[data-goto');
// if (menuLinks > 0) {
//   menuLinks.forEach(menuLink => {
//     menuLink.addEventListener('click', onMenuLinkClick);
//   });
//   function onMenuLinkClick(e) {
//     const menuLink = e.target;
//     e.preventDefault();
//     if (mobileMenu.classList.toggle('is-open')) {
//       mobileMenu.classList.remove('is-open');
//     }
//   }
// }
