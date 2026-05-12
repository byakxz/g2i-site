const swiper = new Swiper('.swiper', {

  loop: false,

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  slidesPerView: 1,
  spaceBetween: 150,

  autoplay: {
    delay: 3000,
    disableOnInteraction: true,
  },

});