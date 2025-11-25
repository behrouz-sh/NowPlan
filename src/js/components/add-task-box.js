function priorityItem(ID) {
  $.querySelector(ID).addEventListener("click", () => {
    for (let i = 1; i <= 4; i++) {
      $.querySelector(`#priority-${i}`).classList.remove(
        "priority__submenu-item--active"
      );
    }

    $.querySelector(ID).classList.toggle("priority__submenu-item--active");
    $.querySelector(".priority__submenu").classList.toggle(
      "priority__submenu--active"
    );
    $.querySelector(".priority--btn");
    $.querySelector("#priority--btn").innerHTML = $.querySelector(ID).innerHTML;
  });
}
$.querySelector("#priority--btn").addEventListener("click", () => {
  $.querySelector(".priority__submenu").classList.toggle(
    "priority__submenu--active"
  );
});
priorityItem("#priority-1");
priorityItem("#priority-2");
priorityItem("#priority-3");
priorityItem("#priority-4");

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
    priority: taskPriority, //Not Devlopment
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
