////////////////////////////////////////////
// back to top
////////////////////////////////////////////
const scrollBtnX = document.querySelector(".back-to-top");

const btnVisibility = () => {
  if (window.scrollY > 400) {
    scrollBtnX.style.visibility = "visible";
  } else {
    scrollBtnX.style.visibility = "hidden";
  }
};

scrollBtnX.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

document.addEventListener("scroll", () => {
  btnVisibility();
});
// hero-carousel
var mainCarousel = new Swiper(".main-news-carousel", {
  speed: 1400,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".main-news-carousel .swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".main-news-carousel .swiper-button-next",
    prevEl: ".main-news-carousel .swiper-button-prev",
  },
});

var miniMainNews = new Swiper(".mini-main-news", {
  speed: 1400,
  spaceBetween: 20,
  autoplay: {
    delay: 5000,
  },
  loop: true,
  pagination: {
    el: ".mini-main-news .swiper-pagination",
    clickable: true,
  },
});

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

var latestNewsCarousel = new Swiper(".latest-news-carousel", {
  speed: 1400,
  spaceBetween: 20,
  slidesPerView: 1,

  // autoplay: {
  //   delay: 5000,
  // },
  // autoHeight: true,

  // loop: true,
  navigation: {
    nextEl: ".latest-news-carousel .swiper-button-next",
    prevEl: ".latest-news-carousel .swiper-button-prev",
  },
  pagination: {
    el: ".latest-news-carousel .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    // when window width is >= 640px
    1200: {
      slidesPerView: 3.15,
      pagination: false,
    },
  },
});
//sections-most-views
var mostViewsCarousel = new Swiper(".sections-most-views-wrapper .sections-most-section", {
  speed: 1400,
  spaceBetween: 10,
  slidesPerView: 1.8,

  autoplay: {
    delay: 5000,
  },
  navigation: {
    nextEl: ".sections-most-views-wrapper .swiper-button-next",
    prevEl: ".sections-most-views-wrapper .swiper-button-prev",
  },
  pagination: {
    el: ".sections-most-views .swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    390: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    480: {
      slidesPerView: 2.5,
      slidesPerGroup: 2,
    },
    576: {
      slidesPerView: 2.8,
      slidesPerGroup: 2,
    },
    768: {
      slidesPerView: 4,
      slidesPerGroup: 4,
    },
    992: {
      spaceBetween: 20,
      slidesPerView: 5,
    },
    // when window width is >= 640px
    1200: {
      spaceBetween: 20,
      slidesPerView: 6,
      pagination: false,
    },
  },
});
var searchClass = document.querySelector(".search");
searchClass.addEventListener("click", function (e) {
  e.stopPropagation();
  document.getElementsByTagName("body")[0].classList.toggle("search-open");
  searchClass.classList.toggle("open");
});
document
  .getElementById("autoComplete-box")
  .addEventListener("click", function (e) {
    e.stopPropagation();
  });

document
  .getElementsByTagName("body")[0]
  .addEventListener("click", function (e) {
    document.getElementsByTagName("body")[0].classList.remove("search-open");
    searchClass.classList.remove("open");
  });

let openMobileMenu = document.getElementById("openMobileMenu"),
  openMenuSearchMobile = document.getElementById("openMenuSearchMobile"),
  closeMobileMenu = document.getElementById("closeMobileMenu");
openMobileMenu.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
});
openMenuSearchMobile.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
});
closeMobileMenu.addEventListener("click", function () {
  document.getElementsByTagName("body")[0].classList.remove("overflow-hidden");
});
