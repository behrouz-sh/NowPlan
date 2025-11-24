/*=============================================
              Open-Close Sidebar
=============================================*/
let slidebarOpenBTN = $.querySelector(".sidebar__open-btn-icon");
let slidebarCloseBTN = $.querySelector(".sidebar__close-btn-icon");
let openCloseSlidebar = function () {
  $.querySelector(".main").classList.toggle("main--open");
  $.querySelector(".sidebar").classList.toggle("sidebar--open");
};
slidebarCloseBTN.addEventListener("click", () => {
  openCloseSlidebar();
  slidebarOpenBTN.style.display = "block";
});
slidebarOpenBTN.addEventListener("click", () => {
  openCloseSlidebar();
  slidebarOpenBTN.style.display = "none";
});

/*=============================================
                Sidebar List
=============================================*/
// --- Add Task ---
$.querySelector("#add_task").addEventListener("click", () => {
  $.querySelector("#add-task-box").classList.toggle(
    "input__add-task-box--open"
  );
  $.querySelector(".add-task-box__layer").style.display = "block";
});

$.querySelector(".add-task-box__layer").addEventListener("click", () => {
  $.querySelector(".add-task-box__layer").style.display = "none";
  $.querySelector("#add-task-box").classList.toggle(
    "input__add-task-box--open"
  );
});

// --- Input ---
$.querySelector("#inputs").addEventListener("click", () => {
  $.querySelector(".input").style.display = "block";
  $.querySelector(".complated").style.display = "none";
  $.querySelector(".sidebar__list-link--active").classList.remove(
    "sidebar__list-link--active"
  );
  $.querySelector("#inputs").classList.add("sidebar__list-link--active");

  $.querySelector(".title-section").textContent = "ورودی ها";
});

// --- Complated ---
$.querySelector("#complated").addEventListener("click", () => {
  $.querySelector(".complated").style.display = "block";
  $.querySelector(".input").style.display = "none";
  $.querySelector(".sidebar__list-link--active").classList.remove(
    "sidebar__list-link--active"
  );
  $.querySelector("#complated").classList.add("sidebar__list-link--active");

  $.querySelector(".title-section").textContent = "انجام‌شده ها";
});

/*=============================================
              Feature Unenabel
=============================================*/
const idUnenabel = ["search", "today", "tasks", "filter-label", "profile"];
idUnenabel.forEach((id) => {
  $.getElementById(id).addEventListener("click", () => {
    $.querySelector(".pagenone").style.display = "flex";
    $.querySelector(".pagenone__layer").style.display = "block";
  });
});
$.querySelector(".pagenone__btn-close").addEventListener("click", () => {
  $.querySelector(".pagenone").style.display = "none";
  $.querySelector(".pagenone__layer").style.display = "none";
});
$.querySelector(".pagenone__layer").addEventListener("click", () => {
  $.querySelector(".pagenone").style.display = "none";
  $.querySelector(".pagenone__layer").style.display = "none";
});
