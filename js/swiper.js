const swiper = new Swiper('.swiper', {
 
  loop: false, 

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
    dynamicBullets: true,
    dynamicMainBullets: 1,
  },
  slidesPerView: 1,
  spaceBetween: 30,

   autoplay: {
    delay: 3000, 
    disableOnInteraction: true, 
  },

});