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

document.getElementById("radio-1").onclick = jornalEngadget;
jornalEngadget();
function jornalEngadget() {
  let jornal = document.getElementById("press");
  jornal.innerHTML =
    '<h2 class="press__main-text" id="press"><span class="press__main-text-m">Engadget:</span> VW’s e-BULLI concept  shows how your classic van can become an EV.</h2>';
  let buttonPres = document.getElementById("form-press");
  buttonPres.action =
    "https://www.engadget.com/2020-03-20-vw-unveils-e-bulli-t1-electric-conversion.html";
}

document.getElementById("radio-2").onclick = jornalDrive;

function jornalDrive() {
  let jornal = document.getElementById("press");
  jornal.innerHTML =
    '<h2 class="press__main-text" id="press"><span class="press__main-text-m">Drive.ru:</span> Вэн Volkswagen e-Bulli скрестил классику с современной техникой.</h2>';
  let buttonPres = document.getElementById("form-press");
  buttonPres.action =
    "https://www.drive.ru/news/volkswagen/5e7447bdec05c4b251000010.html";
}

/*-------------------------*/

const sectionSubscribe = document.querySelector(".subscribe");
// subscribe form
const subscribeForm = sectionSubscribe.querySelector(".subscribe__form");
const firstnameInput = subscribeForm.querySelector("#firstname");
const secondNameInput = subscribeForm.querySelector("#secondname");
const emailInput = subscribeForm.querySelector("#email");
const btnSubscribe = subscribeForm.querySelector(".subscribe__form-button");

firstnameInput.addEventListener("input", validateForm);
secondNameInput.addEventListener("input", validateForm);
emailInput.addEventListener("input", validateForm);

function validateForm() {
  const isNameFilled = firstnameInput.value.length > 0;
  const isSecondNameFilled = secondNameInput.value.length > 0;
  const isEmailFilled = emailInput.value.length > 0;

  const isFormValid = isNameFilled && isSecondNameFilled && isEmailFilled;
  btnSubscribe.disabled = !isFormValid;

  // document.getElementById("btn-subscribe").onclick = done;
  btnSubscribe.addEventListener('onclick', done);

  function done(evt) {
    evt.preventDefault();
    let done = document.getElementById("btn-subscribe");
    done.innerHTML = "Готово!";
  }
}
