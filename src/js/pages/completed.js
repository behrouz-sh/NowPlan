const time = function () {
  const date = new persianDate(new Date());
  return [date.format("HH:mm"), date.format("YYYY/MM/DD")];
};

function saveCompleted(task) {
  task.completedAt = time();
  task.completed = true;
  const completed = loadCompleted();
  completed.push(task);
  localStorage.setItem("Completed", JSON.stringify(completed));
}

function loadCompleted() {
  var TasksCompleted = localStorage.getItem("Completed");
  if (!TasksCompleted) return [];
  try {
    const parsed = JSON.parse(TasksCompleted);
    return Array.isArray(parsed) ? parsed : [parsed];
  } catch (e) {
    return [];
  }
}

function addTaskCompletedToDOM(task) {
  const taskHTML = `<div class="task" data-task-id="${task.id}">
      <div class="task__warp">
        <div class="task__text-warp">
          <span class="task__title">${task.title}</span>
          <span class="task__description">ساعت: ${task.completedAt[0]}</span>
        </div>
        </div>
        <span>
        ${task.completedAt[1]}
        </span>
    </div>`;
  $.querySelector(".task__completed").innerHTML =
    $.querySelector(".task__completed").innerHTML + taskHTML;
}

function renderAllTasksCompleted() {
  $.querySelector(".task__completed").innerHTML = "";
  loadCompleted().forEach((task) => {
    addTaskCompletedToDOM(task);
  });
}
if (loadCompleted().length) {
  $.querySelector("#completed-about-page").style.display = "none";
  renderAllTasksCompleted();
}
document.querySelector(".task__completed .task").style.display = "none";

document
  .getElementById("completed-task-container")
  .addEventListener("click", (e) => {
    const taskEl = e.target.closest(".task");
    const id = taskEl.dataset.taskId;
    const task = loadCompleted().find((t) => String(t.id) === String(id));
    document.querySelector(".box-completed-details-warp").style.display =
      "block";
    document.querySelector(".box-completed-details__title").textContent =
      task.title;
    if (task.description !== "") {
      document.querySelector(
        ".box-completed-details__description-warp"
      ).style.display = "block";

      document.querySelector(
        ".box-completed-details__description"
      ).textContent = task.description;
    }

    const boxCompletedDetailsPriority = document.getElementById(
      "box-completed-details__priority"
    );
    switch (task.priority) {
      case "priority-1":
        boxCompletedDetailsPriority.textContent = "اولویت اول";
        boxCompletedDetailsPriority.style.background =
          "rgba(254, 226, 226, 0.5)";
        boxCompletedDetailsPriority.style.color = "#EF4444";
        break;

      case "priority-2":
        boxCompletedDetailsPriority.textContent = "اولویت دوم";
        boxCompletedDetailsPriority.style.background =
          "rgba(250, 204, 21, 0.12)";
        boxCompletedDetailsPriority.style.color = "#FACC15";
        break;

      case "priority-3":
        boxCompletedDetailsPriority.textContent = "اولویت سوم";
        boxCompletedDetailsPriority.style.background =
          "rgba(59, 130, 246, 0.05)";
        boxCompletedDetailsPriority.style.color = "#3B82F6";
        break;

      case "priority-4":
        boxCompletedDetailsPriority.textContent = "بدون اولویت";
        boxCompletedDetailsPriority.style.background =
          "rgba(107, 114, 128, 0.12)";
        boxCompletedDetailsPriority.style.color = "#6b7280";
    }
    document.querySelector(
      ".box-completed-details__completedAt"
    ).textContent = `${task.completedAt[0]} -- ${task.completedAt[1]}`;
  });

document
  .getElementById("box-completed-details__bg-layer")
  .addEventListener("click", () => {
    document.querySelector(".box-completed-details-warp").style.display =
      "none";
  });
