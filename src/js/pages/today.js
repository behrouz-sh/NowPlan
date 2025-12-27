const todayAboutPage = document.getElementById('today-about-page');
const todayAboutPageBTN = document.getElementById('today-about-page__btn');
const todayTaskContainer = document.getElementById('today-task-container');
const todayTaskAddBTN = $.getElementById('today-task-add-btn');
/*==========================================================================================*/
function loadTasksToday() {
  const taskToday = [];
  loadTasks().forEach((e) => {
    if (e.dueDate == '') {
      return;
    }
    const taskDate = e.dueDate.split('/');
    const today = new persianDate();
    const isToday = Number(taskDate[0]) === today.year() && Number(taskDate[1]) === today.month() && Number(taskDate[2]) === today.date();

    if (isToday) {
      taskToday.push(e);
    }
  });
  return taskToday;
}
function renderAllTasksToday() {
  if (loadTasksToday().length) {
    todayAboutPage.style.display = 'none';
  }
  todayTaskContainer.style.display = 'block';
  const tasks = loadTasksToday();
  todayTaskContainer.innerHTML = '';
  tasks.forEach((task) => {
    addTaskToDOM(task, '#today-task-container');
  });
  tasksToday = [];
}

setupTaskEvents(todayTaskContainer);

/*=============================================
                   Add Task
=============================================*/
todayTaskAddBTN.addEventListener('click', () => {
  todayTaskAddBTN.style.display = 'none';
  todayAddTaskBox.container.style.display = 'block';
  renderAllTasks();
});
