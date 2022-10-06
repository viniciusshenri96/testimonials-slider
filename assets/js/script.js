"use strict";

const slides = document.querySelectorAll(".testimonial");
const btnPrev = document.querySelectorAll(".btn-prev");
const btnNext = document.querySelectorAll(".btn-next");

let curSlide = 0;
const maxSlide = slides.length;

const goToSlide = function (slide) {
  slides.forEach((s, i) => {
    s.style.transform = `translateX(${100 * (i - slide)}%)`;
  });
};

goToSlide(0);

// Next slide
const nextSlide = function () {
  if (curSlide === maxSlide - 1) {
    curSlide = 0;
  } else {
    curSlide++;
  }
  goToSlide(curSlide);
};

// Previous slide
const prevSlide = function () {
  if (curSlide === 0) {
    curSlide = maxSlide - 1;
  } else {
    curSlide--;
  }
  goToSlide(curSlide);
};

btnNext.forEach((btn) => {
  btn.addEventListener("click", nextSlide);
});

btnPrev.forEach((btn) => {
  btn.addEventListener("click", prevSlide);
});
