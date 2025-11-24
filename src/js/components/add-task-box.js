/*=============================================
              Input Add Task Box
=============================================*/
$.getElementById("add-task-box-btn-open").addEventListener("click", () => {
  let taskTitle = $.querySelector("#add-task-box-title");
  let taskDscription = $.querySelector("#add-task-box-description");
  const newtask = {
    id: Date.now(),
    title: taskTitle.value,
    description: taskDscription.value,
    completed: false,
    createdAt: -1, //Not Devlopment
    dueDate: -1, //Not Devlopment
    priority: -1, //Not Devlopment
    tags: -1, //Not Devlopment
  };

  if ($.querySelector(".add-task-box-title").value) {
    addNewTasks(newtask);
    taskTitle.value = "";
    taskDscription.value = "";
  }
});

/*=============================================
              Input Cansel** Task Box
=============================================*/
$.getElementById("add-task-box-btn-close").addEventListener("click", () => {
  $.querySelector(".add-task-box__layer").style.display = "none";
  $.querySelector("#add-task-box").classList.toggle(
    "input__add-task-box--open"
  );
});
