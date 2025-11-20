document
  .querySelector(".side-bar__open-btn-icon")
  .addEventListener("click", function (event) {
    // document.querySelector(".app").style.marginRight = "40rem";
    document.querySelector(".app").classList.toggle("app--open");
    document.querySelector(".side-bar").classList.toggle("side-bar--open");
    document.querySelector(".side-bar__open-btn-icon").style.display = "none";
  });
document
  .querySelector(".side-bar__close-btn-icon")
  .addEventListener("click", function (event) {
    document.querySelector(".app").classList.toggle("app--open");
    document.querySelector(".side-bar").classList.toggle("side-bar--open");
    document.querySelector(".side-bar__open-btn-icon").style.display =
      "inline-block";
  });
