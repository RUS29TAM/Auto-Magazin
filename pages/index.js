"use strict";

const headerLogo = document.querySelector(".header__logo");
let headerLinks = document.querySelector(".header__links");
let burgerToggle = document.querySelector("#burger-toggle");

burgerToggle.addEventListener("change", function () {
  if (this.checked) {
    headerLogo.style.visibility = "hidden";
    headerLinks.style.visibility = "visible";
  } else {
    headerLogo.style.visibility = "visible";
    headerLinks.style.visibility = "hidden";
  }
});

let slider = document.querySelectorAll(".slider__item");
let currentSlide = 0;

function showSlider() {
  slider[currentSlide].classList.add("slider__item_visible");
}

let btnPrev = document.querySelector("#prev");
let btnFwd = document.querySelector("#fwd");
showSlider();
function hideSlide() {
  slider[currentSlide].classList.remove("slider__item_visible");
}

function showSlider() {
  slider[currentSlide].classList.add("slider__item_visible");
}

document.querySelectorAll("#fwd").forEach((btn) =>
  btn.addEventListener("click", () => {
    hideSlide();
    if (currentSlide - 1 == -1) {
      currentSlide = slider.length - 1;
    } else {
      currentSlide--;
    }
    showSlider();
  })
);

document.querySelectorAll("#prev").forEach((btn) =>
  btn.addEventListener("click", () => {
    hideSlide();
    if (currentSlide + 1 == slider.length) {
      currentSlide = 0;
    } else {
      currentSlide++;
    }
    showSlider();
  })
);
