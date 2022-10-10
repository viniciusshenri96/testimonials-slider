"use strict";

const testimoniesBox = document.querySelectorAll(".testimonial__box");
const btnNext = document.querySelector(".btn__next");
const btnPrev = document.querySelector(".btn__prev");

let contSlide = 0;
let indexTesti = testimoniesBox.length - 1;

const returnSlide = function (index) {
  testimoniesBox[contSlide].style.opacity = 0;
  contSlide = index;
  testimoniesBox[contSlide].style.opacity = 1;
};

const nextSlide = function () {
  if (contSlide !== indexTesti) {
    testimoniesBox[contSlide + 1].previousElementSibling.style.opacity = 0;
    testimoniesBox[contSlide + 1].style.opacity = 1;

    contSlide += 1;
  } else {
    returnSlide(0);
  }
};

const prevSlide = function () {
  if (contSlide <= indexTesti && contSlide != 0) {
    testimoniesBox[contSlide - 1].style.opacity = 1;
    testimoniesBox[contSlide].style.opacity = 0;
    contSlide -= 1;
  } else {
    returnSlide(indexTesti);
  }
};

btnNext.addEventListener("click", nextSlide);
btnPrev.addEventListener("click", prevSlide);
