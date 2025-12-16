const searchBtn = document.getElementById("search");
const searchLayer = document.getElementById("search-box-layer");
const searchBox = document.querySelector(".search-box");
const searchInput = document.querySelector(".search-box__input");
const searchTaskWarp = document.querySelector(".search-box__task-warp");
const searchboxStatus = document.querySelector(".search-box__status");

/*===========================================
            Search Box open/close 
===========================================*/
searchBtn.addEventListener("click", function () {
  searchBox.classList.toggle("search-box--open");
  searchLayer.style.display = "block";
});
searchLayer.addEventListener("click", () => {
  searchBox.classList.remove("search-box--open");
  searchLayer.style.display = "none";
  searchInput.value = "";
  searchTaskWarp.innerHTML = "";
  const spanEl = document.createElement("span");
  spanEl.classList.add("search-box__status");
  spanEl.textContent = "تسکی را جستجو کنید!";
  searchTaskWarp.appendChild(spanEl);
});

/*=========================================== 
===========================================*/
searchboxStatus.textContent = "تسکی را جستجو کنید!";

searchInput.addEventListener("input", () => {
  let searchInputText = searchInput.value.toLowerCase();
  searchTaskWarp.innerHTML = "";

  const filteredTasks = loadTasks().filter(
    (task) =>
      task.title.toLowerCase().includes(searchInputText) ||
      task.description.toLowerCase().includes(searchInputText)
  );

  if (filteredTasks.length > 0) {
    filteredTasks.forEach((task) => {
      searchTaskWarp.innerHTML += `
      <div class="search-box__task search-box__task--not-finished" id="${task.id}">
        <div class="search-box__task-text-warp">
          <span class="search-box__task-title">${task.title}</span>
          <span class="search-box__task-description">${task.description}</span>
        </div>
      </div>
      `;
    });
  }

  const filteredTasksCompleted = loadCompleted().filter(
    (task) =>
      task.title.toLowerCase().includes(searchInputText) ||
      task.description.toLowerCase().includes(searchInputText)
  );

  if (filteredTasksCompleted.length > 0) {
    filteredTasksCompleted.forEach((task) => {
      searchTaskWarp.innerHTML += `

      <div class="search-box__task search-box__task--completed" id="${task.id}">
        <div class="search-box__task-text-warp">
          <span class="search-box__task-title">${task.title}</span>
          <span class="search-box__task-description">${task.description}</span>
        </div>
        <span class="search-box__task-completed">تمام شده</span>
      </div>
      `;
    });
  }
  if (filteredTasks.length === 0 && filteredTasksCompleted.length === 0) {
    const spanEl = document.createElement("span");
    spanEl.classList.add("search-box__status");
    spanEl.textContent = `تسکی با نام "${searchInput.value}" پیدا نشد! 🙁`;

    searchTaskWarp.appendChild(spanEl);
  }
});
