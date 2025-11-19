document
  .querySelector(".side-bar__open-btn-icon")
  .addEventListener("click", function (event) {
    document.querySelector(".app").style.marginRight = "32rem";
    document.querySelector(".side-bar").style.width = "24vw";
    document.querySelector(".side-bar").style.display = "block";
    document.querySelector(".side-bar__open-btn-icon").style.display = "none";
  });
document
  .querySelector(".side-bar__close-btn-icon")
  .addEventListener("click", function (event) {
    document.querySelector(".app").style.marginRight = "0%";
    document.querySelector(".side-bar").style.display = "none";
    document.querySelector(".side-bar__open-btn-icon").style.display =
      "inline-block";
  });
