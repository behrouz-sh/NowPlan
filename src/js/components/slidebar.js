const slidebarOpenBTN = $.querySelector(".sidebar__open-btn-icon");
const slidebarCloseBTN = $.querySelector(".sidebar__close-btn-icon");
/*=============================================
              Open-Close Sidebar
=============================================*/
const openCloseSlidebar = function () {
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
const titleSection = $.querySelector(".title-section");

const sidebarListLinkActive = function (active) {
  const sidebarListLink = [
    sidebarListAddInputBTN,
    sidebarListAddTodayBTN,
    sidebarListAddCompletedBTN,
  ];
  for (let i = 0; i < sidebarListLink.length; i++) {
    sidebarListLink[i].classList.remove("sidebar__list-link--active");
  }
  active.classList.add("sidebar__list-link--active");
};

const sectionActive = function (active) {
  const sectionActive = ["input-section", "today-section", "completed-section"];
  for (let i = 0; i < sectionActive.length; i++) {
    $.getElementById(sectionActive[i]).style.display = "none";
  }

  // active
  $.getElementById(active).style.display = "block";
};

// --- ADD TASK ----------------------------------------------------------------
const sidebarListAddTaskBTN = $.getElementById("sidebar-list__add-task");
const slidebarAddTaskBoxWarp = document.querySelector(".add-task-box__warp");
sidebarListAddTaskBTN.addEventListener("click", () => {
  slidebarAddTaskBoxWarp.classList.add("add-task-box__warp--open");
  $.getElementById("slidebar-add-task-box__bg").addEventListener(
    "click",
    () => {
      slidebarAddTaskBoxWarp.classList.remove("add-task-box__warp--open");
    }
  );
  restTaskBox(slidebarAddTaskBox);
});

// --- INPUT ------------------------------------------------------------------
const sidebarListAddInputBTN = $.getElementById("sidebar-list__inputs");
sidebarListAddInputBTN.addEventListener("click", () => {
  titleSection.textContent = "ورودی ها";
  sidebarListLinkActive(sidebarListAddInputBTN);
  sectionActive("input-section");
});

// --- TODAY ------------------------------------------------------------------
const sidebarListAddTodayBTN = $.getElementById("sidebar-list__today");
sidebarListAddTodayBTN.addEventListener("click", () => {
  titleSection.textContent = `کار های امروز | ${todayDate.format(
    "dddd (DD MMMM  YYYY)"
  )}`;
  sidebarListLinkActive(sidebarListAddTodayBTN);
  sectionActive("today-section");

  renderAllTasksToday();
  todayTaskAddBTN.style.display = "flex";
});
// --- COMPLETED  -------------------------------------------------------------
const sidebarListAddCompletedBTN = $.getElementById("sidebar-list__completed");
sidebarListAddCompletedBTN.addEventListener("click", () => {
  titleSection.textContent = "انجام‌شده ها";
  sidebarListLinkActive(sidebarListAddCompletedBTN);
  sectionActive("completed-section");
  if (loadCompleted().length) {
    $.getElementById("completed-about-page").style.display = "none";
    $.getElementById("completed-task-container").style.display = "flex";
    renderAllTasksCompleted();
  }
});

/*=============================================
              Feature Unenable
=============================================*/
const idUnenable = ["tasks", "filter-label", "profile"];
idUnenable.forEach((id) => {
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
