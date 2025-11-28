if (loadTasks().length) {
  $.querySelector(".about-page").style.display = "none";
  $.querySelector(".tasks").style.display = "block";
  $.querySelector(".task__add").style.display = "flex";
}

/*=============================================
              Task Remove Function 
=============================================*/
function setupTaskEvents() {
  $.querySelector(".tasks").addEventListener("click", function (e) {
    if (e.target.closest(".task__tick-Square-icon")) {
      const taskElement = e.target.closest(".task");
      const taskId = Number(taskElement.getAttribute("data-task-id"));
      completeTask(taskId);
    }
  });
}

function loadCompleted() {
  const TasksCompleted = localStorage.getItem("Completed");
  return TasksCompleted ? JSON.parse(TasksCompleted) : [];
}

function saveCompleted(tasks) {
  localStorage.setItem("Completed", JSON.stringify(tasks));
}

function completeTask(taskId) {
  const taskElement = $.querySelector(`[data-task-id="${taskId}"]`);
  loadTasks().forEach((task) => {
    if (task.id === taskId) {
      task.completed === true;
      if ((task.completed = true)) {
        const Completeds = loadCompleted();
        Completeds.push(task);
        saveCompleted(Completeds);
      }
    }
  });
  if (taskElement) {
    taskElement.remove();
  }
  const tasks = loadTasks();
  const updatedTasks = tasks.filter((task) => task.id != taskId);
  saveTasks(updatedTasks);
}
setupTaskEvents();
renderAllTasks();

/*=============================================
                   Add Task 
=============================================*/
$.querySelector(".task__add").addEventListener("click", () => {
  $.querySelector(".task__add").style.display = "none";
  $.querySelector("#add-task-box--input").style.display = "block";
  renderAllTasks();
});
