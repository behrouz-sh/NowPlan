function addTaskCompletedToDOM(task) {
  const taskHTML = `<div class="task" data-task-id="${task.id}">
      <div class="task__warp">
        <div class="task__text-warp">
          <span class="task__title">${task.title}</span>
          <span class="task__description">${task.description}</span>
        </div>
      </div>
    </div>`;
  $.querySelector(".task__complated").innerHTML += taskHTML;
}

function renderAllTasksCompleted() {
  $.querySelector(".task__complated").innerHTML = "";
  loadCompleted().forEach((task) => {
    if (task.completed === true) {
      addTaskCompletedToDOM(task);
    }
  });
}
if (loadCompleted().length) {
  $.querySelector("#about-page-complated").style.display = "none";
  renderAllTasksCompleted();
}

$.querySelector("#add-task-box--complated").addEventListener("click", () => {
  $.querySelector(".input").style.display = "block";
  $.querySelector(".complated").style.display = "none";
  $.querySelector(".sidebar__list-link--active").classList.remove(
    "sidebar__list-link--active"
  );
  $.querySelector("#inputs").classList.add("sidebar__list-link--active");
  $.querySelector(".title-section").textContent = "ورودی ها";
  $.querySelector(".about-page").style.display = "none";

  $.querySelector(".tasks").style.display = "block";
  if (loadTasks().length === 0) {
    $.querySelector(".task__add").style.display = "none";
    $.querySelector("#add-task-box--input").style.display = "block";
  }
});
