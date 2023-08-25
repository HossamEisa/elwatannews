
// hero-carousel

var alwatanImagesCarousel = new Swiper(".alwatan-images-carousel .swiper", {
  speed: 1400,
  spaceBetween: 20,
  // autoplay: {
  //   delay: 5000,
  // },
  // autoHeight: true,

  // loop: true,
  pagination: {
    el: ".alwatan-images-carousel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".alwatan-images-carousel .swiper-button-next",
    prevEl: ".alwatan-images-carousel .swiper-button-prev",
  },
});

