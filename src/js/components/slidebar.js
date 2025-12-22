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
  if (window.innerWidth < 768) {
    document.querySelector(".sidebar").classList.remove("sidebar--open");
    document.querySelector(".main").classList.remove("main--open");
    document.querySelector(".sidebar__open-btn-icon").style.display = "block";
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
  inputAddTaskBox.container.style.display = "none";
  restTaskBox(slidebarAddTaskBox);
});
// --- SEARCH ------------------------------------------------------------------
const searchListAddInputBTN = document.getElementById("sidebar-list__search");
const searchWarp = document.querySelector(".search__warp");
searchListAddInputBTN.addEventListener("click", function () {
  searchWarp.style.display = "block";
});

// --- INPUT ------------------------------------------------------------------
const sidebarListAddInputBTN = $.getElementById("sidebar-list__inputs");
sidebarListAddInputBTN.addEventListener("click", () => {
  titleSection.textContent = "تمام کار ها";
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
  if (!loadTasksToday().length) {
    todayAboutPage.style.display = "block";
  } else {
    todayTaskAddBTN.style.display = "flex";
  }
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
const idUnenable = ["filter-label", "profile"];
idUnenable.forEach((id) => {
  $.getElementById(id).addEventListener("click", () => {
    $.querySelector(".coming-soon-warp").style.display = "block";
  });
});
$.querySelector(".coming-soon__btn-close").addEventListener("click", () => {
  $.querySelector(".coming-soon-warp").style.display = "none";
});
$.getElementById("coming-soon__layer").addEventListener("click", () => {
  $.querySelector(".coming-soon-warp").style.display = "none";
});

/*=============================================
              Responsive: remove classes under 700px
=============================================*/
const handleResizeSidebar = () => {
  const sidebar = document.querySelector(".sidebar");
  const main = document.querySelector(".main");
  const openBtn = document.querySelector(".sidebar__open-btn-icon");
  if (!sidebar || !main || !openBtn) return;
  if (window.innerWidth < 768) {
    sidebar.classList.remove("sidebar--open");
    main.classList.remove("main--open");
    openBtn.style.display = "block";
  }
};
window.addEventListener("resize", handleResizeSidebar);
window.addEventListener("load", handleResizeSidebar);
