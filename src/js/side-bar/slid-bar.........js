document
  .querySelector(".side-bar__open-close-btn-icon")
  .addEventListener("click", function (event) {
    document.querySelector(".side-bar").classList.toggle("side-bar--close");
    // TODO: chang methot to best
    document.querySelector(".app").classList.toggle(".app--full");
  });
