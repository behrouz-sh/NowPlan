const inputAboutPage = document.getElementById("input-about-page");
const inputAboutPageBTN = document.getElementById("input-about-page-btn");
const inputTaskContainer = document.getElementById("input-task-container");
const inputTaskAddBTN = document.getElementById("input-task__add-btn");

if (loadTasks().length) {
  inputAboutPage.style.display = "none";
  inputTaskContainer.style.display = "block";
  inputTaskAddBTN.style.display = "flex";
}
/*=============================================
              Task Remove Function
=============================================*/

function completeTask(taskId) {
  const taskElement = $.querySelector(`[data-task-id="${taskId}"]`);
  taskElement.remove();

  loadTasks().forEach((task) => {
    if (task.id === taskId) {
      saveCompleted(task);
    }
  });

  const updatedTasks = loadTasks().filter((task) => task.id != taskId);
  saveTasks(updatedTasks);
}

function setupTaskEvents(taskWarp) {
  taskWarp.addEventListener("click", function (e) {
    const tick = e.target.closest(".task__tick-Square-icon");
    if (tick) {
      const taskElement = e.target.closest(".task");
      const taskId = Number(taskElement.dataset.taskId);
      completeTask(taskId);
      // today
      renderAllTasksToday();
    }
  });
}

setupTaskEvents(inputTaskContainer);
renderAllTasks();

/*=============================================
                   Add Task
=============================================*/
inputTaskAddBTN.addEventListener("click", () => {
  inputTaskAddBTN.style.display = "none";
  inputAddTaskBox.container.style.display = "block";
  renderAllTasks();
});
