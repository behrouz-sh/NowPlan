const $ = document;
/*=============================================
              Open-Close Sidebar
=============================================*/
$.querySelector(".side-bar__open-btn-icon").addEventListener("click", () => {
  $.querySelector(".app").classList.toggle("app--open");
  $.querySelector(".side-bar").classList.toggle("side-bar--open");
  $.querySelector(".side-bar__open-btn-icon").style.display = "none";
});
$.querySelector(".side-bar__close-btn-icon").addEventListener("click", () => {
  $.querySelector(".app").classList.toggle("app--open");
  $.querySelector(".side-bar").classList.toggle("side-bar--open");
  $.querySelector(".side-bar__open-btn-icon").style.display = "inline-block";
});

/*=============================================
              Feature Unenabel
=============================================*/
const idUnenabel = ["search", "today", "tasks", "filter-label"];
idUnenabel.forEach((id) => {
  $.getElementById(id).addEventListener("click", () => {
    $.querySelector(".pagenone").style.opacity = "1";
    $.querySelector(".pagenone").style.display = "block";
    $.querySelector(".pagenone__layer").style.opacity = "1";
    $.querySelector(".pagenone__layer").style.display = "block";
  });
});
$.querySelector(".pagenone__btn-close").addEventListener("click", () => {
  $.querySelector(".pagenone").style.opacity = "0";
  $.querySelector(".pagenone").style.display = "none";
  $.querySelector(".pagenone__layer").style.opacity = "0";
  $.querySelector(".pagenone__layer").style.display = "none";
});

/*=============================================
              Not Sidebar (move)**
=============================================*/
const btn = $.getElementById("pickDateBtn");
const dateInput = $.getElementById("hiddenDate");

btn.addEventListener("click", () => {
  dateInput.showPicker();
});

dateInput.addEventListener("change", () => {
  console.log(dateInput.value);
});

$.querySelector(".input__add-btn").addEventListener("click", () => {
  $.querySelector(".input__add").style.display = "none";
  $.querySelector(".input__add-task-box").style.display = "block";
});
$.querySelector("#input__add-task-btn-close").addEventListener("click", () => {
  $.querySelector(".input__add").style.display = "block";
  $.querySelector(".input__add-task-box").style.display = "none";
});
