"use strict";

const testimoniesBox = document.querySelectorAll(".testimonial__box");
const btnNext = document.querySelector(".btn__next");
const btnPrev = document.querySelector(".btn__prev");

const transition = function () {
  testimoniesBox.forEach((testi) => {
    testi.classList.contains("visible")
      ? testi.classList.remove("visible")
      : testi.classList.add("visible");
  });
};

btnNext.addEventListener("click", transition);
btnPrev.addEventListener("click", transition);
