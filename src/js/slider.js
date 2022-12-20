const swiper = new Swiper('.swiper', {
  // Optional parameters
  // direction: 'vertical',
  direction: 'horizontal',
  autoplay: true,
  // autoplayspeed: 6000,
  autoplay: {
    delay: 5000,
  },
  pauseOnFocus: true,
  pauseOnHover: true,
  pauseOnDotsHover: true,
  loop: true,

  // If we need pagination
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});
