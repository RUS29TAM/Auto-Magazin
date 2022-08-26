"use strict";

const headerLogo = document.querySelector(".header__logo");
let headerLinks = document.querySelector(".header__links")
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

