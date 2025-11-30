/*=============================================
               Task Add Function
=============================================*/
function saveTasks(tasks) {
  localStorage.setItem("todoTasks", JSON.stringify(tasks));
}
function loadTasks() {
  var Tasks = localStorage.getItem("todoTasks");
  return Tasks ? JSON.parse(Tasks) : [];
}
function addTaskToDOM(task) {
  let border = "#6b7280";
  let background = "rgba(107, 114, 128, 0.12)";
  switch (task.priority) {
    case "priority-1":
      border = "#EF4444";
      background = "rgba(254, 226, 226, 0.5)";
      break;

    case "priority-2":
      border = "#FACC15";
      background = "rgba(250, 204, 21, 0.12)";
      break;

    case "priority-3":
      border = "#3B82F6";
      background = "rgba(59, 130, 246, 0.05)";
      break;
  }

  const taskHTML = `<div class="task" data-task-id="${task.id}">
      <div class="task__warp">
        <svg
        class="task__tick-Square-icon"
        width="20"
        height="20"
        viewBox="0 0 20 20"
        >
        <rect
          x="0"
          y="0"
          width="20"
          height="20"
          fill="${background}"
          rx="4"
          ry="4"
        />

        <path
        class="task__tick-icon"

          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M13.409 7.58052C13.653 7.8246 13.653 8.22032 13.409 8.4644L9.45397 12.4194C9.20993 12.6634 8.81427 12.6635 8.57018 12.4195L6.59184 10.442C6.34771 10.198 6.34763 9.80224 6.59166 9.55811C6.83568 9.31398 7.23141 9.3139 7.47554 9.55793L9.01193 11.0937L12.5251 7.58052C12.7692 7.33644 13.1649 7.33644 13.409 7.58052Z"
          fill="${border}"
        />
        <path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M3.53592 3.53592C4.92573 2.1461 7.07476 1.6665 9.99984 1.6665C12.9249 1.6665 15.0739 2.1461 16.4638 3.53592C17.8536 4.92573 18.3332 7.07476 18.3332 9.99984C18.3332 12.9249 17.8536 15.0739 16.4638 16.4638C15.0739 17.8536 12.9249 18.3332 9.99984 18.3332C7.07476 18.3332 4.92573 17.8536 3.53592 16.4638C2.1461 15.0739 1.6665 12.9249 1.6665 9.99984C1.6665 7.07476 2.1461 4.92573 3.53592 3.53592ZM4.4198 4.4198C3.40066 5.43894 2.9165 7.14409 2.9165 9.99984C2.9165 12.8556 3.40066 14.5607 4.4198 15.5799C5.43894 16.599 7.14409 17.0832 9.99984 17.0832C12.8556 17.0832 14.5607 16.599 15.5799 15.5799C16.599 14.5607 17.0832 12.8556 17.0832 9.99984C17.0832 7.14409 16.599 5.43894 15.5799 4.4198C14.5607 3.40066 12.8556 2.9165 9.99984 2.9165C7.14409 2.9165 5.43894 3.40066 4.4198 4.4198Z"
          fill="${border}"
        />
        </svg>

        <div class="task__text-warp">
          <span class="task__title">${task.title}</span>
          <span class="task__description">${task.description}</span>
        </div>
      </div>
      <div class="task__icons">
        <svg
          class="task__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.058 11.1918L17.2852 9.55689C17.8932 8.74689 18.1492 7.7489 18.0062 6.74589C17.8632 5.74289 17.3392 4.85689 16.5292 4.24889C14.8582 2.99489 12.4762 3.33189 11.2212 5.00489L4.46919 13.9999C2.45719 16.6829 4.24719 19.8789 4.32419 20.0139C4.42819 20.1949 4.60319 20.3239 4.80719 20.3709C4.86519 20.3849 5.42519 20.5089 6.20619 20.5089C7.46919 20.5089 9.30719 20.1859 10.5332 18.5519L15.9018 11.3999C15.933 11.3705 15.9621 11.3381 15.9887 11.3027C16.0154 11.2672 16.0385 11.2301 16.058 11.1918ZM5.47719 18.9619C6.25819 19.0569 8.22819 19.1239 9.33319 17.6509L14.3293 10.9951L10.6646 8.24362L5.66819 14.8999C4.54119 16.4039 5.16119 18.2449 5.47719 18.9619ZM11.5648 7.04449L15.23 9.79514L16.0852 8.65589C16.8442 7.6459 16.6392 6.20689 15.6292 5.44789C14.6182 4.69089 13.1782 4.8959 12.4202 5.90489L11.5648 7.04449Z"
            fill="currentcolor"
          />
          <path
            d="M19.733 20.2471H13.356C12.942 20.2471 12.606 19.9111 12.606 19.4971C12.606 19.0831 12.942 18.7471 13.356 18.7471H19.733C20.147 18.7471 20.483 19.0831 20.483 19.4971C20.483 19.9111 20.147 20.2471 19.733 20.2471Z"
            fill="currentcolor"
          />
        </svg>
        <svg
          class="task__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.30894 6.05983C4.08225 7.28641 3.49976 9.33854 3.49976 12.775C3.49976 16.2114 4.08225 18.2635 5.30894 19.4901C6.53564 20.7167 8.58779 21.299 12.0238 21.299C15.4602 21.299 17.5126 20.7167 18.7395 19.4901C19.9663 18.2635 20.5488 16.2114 20.5488 12.775C20.5488 9.33854 19.9663 7.28643 18.7395 6.05985C17.5126 4.83324 15.4602 4.25098 12.0238 4.25098C8.58779 4.25098 6.53564 4.83323 5.30894 6.05983ZM4.24832 4.99912C5.91987 3.32772 8.50472 2.75098 12.0238 2.75098C15.5433 2.75098 18.1284 3.32771 19.8 4.9991C21.4718 6.67052 22.0488 9.25541 22.0488 12.775C22.0488 16.2945 21.4718 18.8794 19.8 20.5509C18.1284 22.2222 15.5433 22.799 12.0238 22.799C8.50472 22.799 5.91987 22.2222 4.24832 20.5508C2.57676 18.8794 1.99976 16.2945 1.99976 12.775C1.99976 9.25541 2.57676 6.67054 4.24832 4.99912Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M2.27515 9.32324C2.27515 8.90903 2.61093 8.57324 3.02515 8.57324H21.0331C21.4474 8.57324 21.7831 8.90903 21.7831 9.32324C21.7831 9.73746 21.4474 10.0732 21.0331 10.0732H3.02515C2.61093 10.0732 2.27515 9.73746 2.27515 9.32324Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6785 13.2607C15.6785 12.8465 16.0143 12.5107 16.4285 12.5107H16.4375C16.8517 12.5107 17.1875 12.8465 17.1875 13.2607C17.1875 13.675 16.8517 14.0107 16.4375 14.0107H16.4285C16.0143 14.0107 15.6785 13.675 15.6785 13.2607Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.2791 13.2607C11.2791 12.8465 11.6148 12.5107 12.0291 12.5107H12.0381C12.4523 12.5107 12.7881 12.8465 12.7881 13.2607C12.7881 13.675 12.4523 14.0107 12.0381 14.0107H12.0291C11.6148 14.0107 11.2791 13.675 11.2791 13.2607Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.87134 13.2607C6.87134 12.8465 7.20712 12.5107 7.62134 12.5107H7.63034C8.04455 12.5107 8.38034 12.8465 8.38034 13.2607C8.38034 13.675 8.04455 14.0107 7.63034 14.0107H7.62134C7.20712 14.0107 6.87134 13.675 6.87134 13.2607Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M15.6785 17.1123C15.6785 16.6981 16.0143 16.3623 16.4285 16.3623H16.4375C16.8517 16.3623 17.1875 16.6981 17.1875 17.1123C17.1875 17.5265 16.8517 17.8623 16.4375 17.8623H16.4285C16.0143 17.8623 15.6785 17.5265 15.6785 17.1123Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M11.2791 17.1123C11.2791 16.6981 11.6148 16.3623 12.0291 16.3623H12.0381C12.4523 16.3623 12.7881 16.6981 12.7881 17.1123C12.7881 17.5265 12.4523 17.8623 12.0381 17.8623H12.0291C11.6148 17.8623 11.2791 17.5265 11.2791 17.1123Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.87134 17.1123C6.87134 16.6981 7.20712 16.3623 7.62134 16.3623H7.63034C8.04455 16.3623 8.38034 16.6981 8.38034 17.1123C8.38034 17.5265 8.04455 17.8623 7.63034 17.8623H7.62134C7.20712 17.8623 6.87134 17.5265 6.87134 17.1123Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M16.033 1.2998C16.4472 1.2998 16.783 1.63559 16.783 2.0498V5.3118C16.783 5.72602 16.4472 6.0618 16.033 6.0618C15.6187 6.0618 15.283 5.72602 15.283 5.3118V2.0498C15.283 1.63559 15.6187 1.2998 16.033 1.2998Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M8.02466 1.2998C8.43887 1.2998 8.77466 1.63559 8.77466 2.0498V5.3118C8.77466 5.72602 8.43887 6.0618 8.02466 6.0618C7.61044 6.0618 7.27466 5.72602 7.27466 5.3118V2.0498C7.27466 1.63559 7.61044 1.2998 8.02466 1.2998Z"
            fill="currentcolor"
          />
        </svg>
        <svg
          class="task__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            d="M12 22C4.617 22 2 19.383 2 12C2 4.617 4.617 2 12 2C12.414 2 12.75 2.336 12.75 2.75C12.75 3.164 12.414 3.5 12 3.5C5.486 3.5 3.5 5.486 3.5 12C3.5 18.514 5.486 20.5 12 20.5C18.514 20.5 20.5 18.514 20.5 12C20.5 11.586 20.836 11.25 21.25 11.25C21.664 11.25 22 11.586 22 12C22 19.383 19.383 22 12 22Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M19.2365 9.38594L20.2952 8.1906C21.4472 6.8896 21.3252 4.8946 20.0252 3.7416C19.3952 3.1836 18.5812 2.9036 17.7452 2.9556C16.9052 3.0066 16.1352 3.3826 15.5772 4.0126L9.6932 10.6606C7.8692 12.7186 9.1172 15.4396 9.1712 15.5546C9.2602 15.7436 9.4242 15.8876 9.6232 15.9496C9.6802 15.9686 10.3442 16.1716 11.2192 16.1716C12.2042 16.1716 13.4572 15.9126 14.4092 14.8366L19.0774 9.56559C19.1082 9.54033 19.1374 9.51226 19.1646 9.48138C19.1915 9.45105 19.2155 9.41912 19.2365 9.38594ZM10.4082 14.5956C11.0352 14.7096 12.4192 14.8216 13.2862 13.8426L17.5371 9.04286L15.0656 6.85399L10.8172 11.6556C9.9292 12.6566 10.2122 13.9916 10.4082 14.5956ZM16.0596 5.73064L18.5322 7.91926L19.1722 7.1966C19.7752 6.5146 19.7122 5.4686 19.0312 4.8656C18.7002 4.5736 18.2712 4.4246 17.8362 4.4526C17.3962 4.4806 16.9932 4.6766 16.7002 5.0066L16.0596 5.73064Z"
            fill="currentcolor"
          />
        </svg>
        <svg
          class="task__icon"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M5.30396 5.30396C4.08098 6.52693 3.5 8.5731 3.5 12C3.5 15.4269 4.08098 17.4731 5.30396 18.696C6.52693 19.919 8.5731 20.5 12 20.5C15.4269 20.5 17.4731 19.919 18.696 18.696C19.919 17.4731 20.5 15.4269 20.5 12C20.5 8.5731 19.919 6.52693 18.696 5.30396C17.4731 4.08098 15.4269 3.5 12 3.5C8.5731 3.5 6.52693 4.08098 5.30396 5.30396ZM4.24329 4.24329C5.91107 2.57552 8.4899 2 12 2C15.5101 2 18.0889 2.57552 19.7567 4.24329C21.4245 5.91107 22 8.4899 22 12C22 15.5101 21.4245 18.0889 19.7567 19.7567C18.0889 21.4245 15.5101 22 12 22C8.4899 22 5.91107 21.4245 4.24329 19.7567C2.57552 18.0889 2 15.5101 2 12C2 8.4899 2.57552 5.91107 4.24329 4.24329Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M14.9934 12C14.9934 11.4477 15.4411 11 15.9934 11H16.0024C16.5547 11 17.0024 11.4477 17.0024 12C17.0024 12.5523 16.5547 13 16.0024 13H15.9934C15.4411 13 14.9934 12.5523 14.9934 12Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10.9944 12C10.9944 11.4477 11.4421 11 11.9944 11H12.0034C12.5557 11 13.0034 11.4477 13.0034 12C13.0034 12.5523 12.5557 13 12.0034 13H11.9944C11.4421 13 10.9944 12.5523 10.9944 12Z"
            fill="currentcolor"
          />
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M6.99561 12C6.99561 11.4477 7.44332 11 7.99561 11H8.00461C8.55689 11 9.00461 11.4477 9.00461 12C9.00461 12.5523 8.55689 13 8.00461 13H7.99561C7.44332 13 6.99561 12.5523 6.99561 12Z"
            fill="currentcolor"
          />
        </svg>
      </div>
    </div>`;
  $.querySelector(".tasks").innerHTML += taskHTML;
}
function addNewTasks(task) {
  const todoTasks = loadTasks();
  todoTasks.push(task);
  saveTasks(todoTasks);
  addTaskToDOM(task);
}
function renderAllTasks() {
  const tasks = loadTasks();
  const tasksContainer = $.querySelector(".tasks");
  tasksContainer.innerHTML = "";
  tasks.forEach((task) => {
    if (task.completed === false) {
      addTaskToDOM(task);
    }
  });
}
/*=============================================
                    Date
=============================================*/
jalaliDatepicker.startWatch({
  minDate: "attr",
});
// مطمئن شو $ وجود داره

// قالب اولیه‌ی دکمه (حالت پیش‌فرض)
const originalPickHTML = `
  <svg class="add-task-box-option-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30894 6.05983C4.08225 7.28641 3.49976 9.33854 3.49976 12.775C3.49976 16.2114 4.08225 18.2635 5.30894 19.4901C6.53564 20.7167 8.58779 21.299 12.0238 21.299C15.4602 21.299 17.5126 20.7167 18.7395 19.4901C19.9663 18.2635 20.5488 16.2114 20.5488 12.775C20.5488 9.33854 19.9663 7.28643 18.7395 6.05985C17.5126 4.83324 15.4602 4.25098 12.0238 4.25098C8.58779 4.25098 6.53564 4.83323 5.30894 6.05983ZM4.24832 4.99912C5.91987 3.32772 8.50472 2.75098 12.0238 2.75098C15.5433 2.75098 18.1284 3.32771 19.8 4.9991C21.4718 6.67052 22.0488 9.25541 22.0488 12.775C22.0488 16.2945 21.4718 18.8794 19.8 20.5509C18.1284 22.2222 15.5433 22.799 12.0238 22.799C8.50472 22.799 5.91987 22.2222 4.24832 20.5508C2.57676 18.8794 1.99976 16.2945 1.99976 12.775C1.99976 9.25541 2.57676 6.67054 4.24832 4.99912Z" fill="currentcolor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M2.27515 9.32324C2.27515 8.90903 2.61093 8.57324 3.02515 8.57324H21.0331C21.4474 8.57324 21.7831 8.90903 21.7831 9.32324C21.7831 9.73746 21.4474 10.0732 21.0331 10.0732H3.02515C2.61093 10.0732 2.27515 9.73746 2.27515 9.32324Z" fill="currentcolor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6785 13.2607C15.6785 12.8465 16.0143 12.5107 16.4285 12.5107H16.4375C16.8517 12.5107 17.1875 12.8465 17.1875 13.2607C17.1875 13.675 16.8517 14.0107 16.4375 14.0107H16.4285C16.0143 14.0107 15.6785 13.675 15.6785 13.2607Z" fill="currentcolor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2791 13.2607C11.2791 12.8465 11.6148 12.5107 12.0291 12.5107H12.0381C12.4523 12.5107 12.7881 12.8465 12.7881 13.2607C12.7881 13.675 12.4523 14.0107 12.0381 14.0107H12.0291C11.6148 14.0107 11.2791 13.675 11.2791 13.2607Z" fill="currentcolor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87134 13.2607C6.87134 12.8465 7.20712 12.5107 7.62134 12.5107H7.63034C8.04455 12.5107 8.38034 12.8465 8.38034 13.2607C8.38034 13.675 8.04455 14.0107 7.63034 14.0107H7.62134C7.20712 14.0107 6.87134 13.675 6.87134 13.2607Z" fill="currentcolor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6785 17.1123C15.6785 16.6981 16.0143 16.3623 16.4285 16.3623H16.4375C16.8517 16.3623 17.1875 16.6981 17.1875 17.1123C17.1875 17.5265 16.8517 17.8623 16.4375 17.8623H16.4285C16.0143 17.8623 15.6785 17.5265 15.6785 17.1123Z" fill="currentcolor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2791 17.1123C11.2791 16.6981 11.6148 16.3623 12.0291 16.3623H12.0381C12.4523 16.3623 12.7881 16.6981 12.7881 17.1123C12.7881 17.5265 12.4523 17.8623 12.0381 17.8623H12.0291C11.6148 17.8623 11.2791 17.5265 11.2791 17.1123Z" fill="currentcolor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87134 17.1123C6.87134 16.6981 7.20712 16.3623 7.62134 16.3623H7.63034C8.04455 16.3623 8.38034 16.6981 8.38034 17.1123C8.38034 17.5265 8.04455 17.8623 7.63034 17.8623H7.62134C7.20712 17.8623 6.87134 17.5265 6.87134 17.1123Z" fill="currentcolor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M16.033 1.2998C16.4472 1.2998 16.783 1.63559 16.783 2.0498V5.3118C16.783 5.72602 16.4472 6.0618 16.033 6.0618C15.6187 6.0618 15.283 5.72602 15.283 5.3118V2.0498C15.283 1.63559 15.6187 1.2998 16.033 1.2998Z" fill="currentcolor"></path>
    <path fill-rule="evenodd" clip-rule="evenodd" d="M8.02466 1.2998C8.43887 1.2998 8.77466 1.63559 8.77466 2.0498V5.3118C8.77466 5.72602 8.43887 6.0618 8.02466 6.0618C7.61044 6.0618 7.27466 5.72602 7.27466 5.3118V2.0498C7.27466 1.63559 7.61044 1.2998 8.02466 1.2998Z" fill="currentcolor"></path>
  </svg>
  تاریخ
  <input class="hiddenDate" id="hiddenDate--input" type="text" data-jdp="" data-jdp-min-date="today" placeholder="نمایش تاریخ از امروز" autocomplete="off">
  <input type="hidden" id="finalIsoDate--input">
`;

// اطمینان از وجود container
const pickBtn = $.querySelector("#pickDateBtn--input");
if (!pickBtn) throw new Error("عنصر #pickDateBtn--input یافت نشد");

// helper: رندر حالت انتخاب‌شده با متن displayDate
function renderPicked(displayDate, selectedDateObj) {
  pickBtn.innerHTML = `
    <svg class="add-task-box-option-icon" width="24" height="24" viewBox="0 0 24 24" fill="none">
        <path fill-rule="evenodd" clip-rule="evenodd" d="M5.30894 6.05983C4.08225 7.28641 3.49976 9.33854 3.49976 12.775C3.49976 16.2114 4.08225 18.2635 5.30894 19.4901C6.53564 20.7167 8.58779 21.299 12.0238 21.299C15.4602 21.299 17.5126 20.7167 18.7395 19.4901C19.9663 18.2635 20.5488 16.2114 20.5488 12.775C20.5488 9.33854 19.9663 7.28643 18.7395 6.05985C17.5126 4.83324 15.4602 4.25098 12.0238 4.25098C8.58779 4.25098 6.53564 4.83323 5.30894 6.05983ZM4.24832 4.99912C5.91987 3.32772 8.50472 2.75098 12.0238 2.75098C15.5433 2.75098 18.1284 3.32771 19.8 4.9991C21.4718 6.67052 22.0488 9.25541 22.0488 12.775C22.0488 16.2945 21.4718 18.8794 19.8 20.5509C18.1284 22.2222 15.5433 22.799 12.0238 22.799C8.50472 22.799 5.91987 22.2222 4.24832 20.5508C2.57676 18.8794 1.99976 16.2945 1.99976 12.775C1.99976 9.25541 2.57676 6.67054 4.24832 4.99912Z" fill="currentcolor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M2.27515 9.32324C2.27515 8.90903 2.61093 8.57324 3.02515 8.57324H21.0331C21.4474 8.57324 21.7831 8.90903 21.7831 9.32324C21.7831 9.73746 21.4474 10.0732 21.0331 10.0732H3.02515C2.61093 10.0732 2.27515 9.73746 2.27515 9.32324Z" fill="currentcolor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6785 13.2607C15.6785 12.8465 16.0143 12.5107 16.4285 12.5107H16.4375C16.8517 12.5107 17.1875 12.8465 17.1875 13.2607C17.1875 13.675 16.8517 14.0107 16.4375 14.0107H16.4285C16.0143 14.0107 15.6785 13.675 15.6785 13.2607Z" fill="currentcolor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2791 13.2607C11.2791 12.8465 11.6148 12.5107 12.0291 12.5107H12.0381C12.4523 12.5107 12.7881 12.8465 12.7881 13.2607C12.7881 13.675 12.4523 14.0107 12.0381 14.0107H12.0291C11.6148 14.0107 11.2791 13.675 11.2791 13.2607Z" fill="currentcolor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87134 13.2607C6.87134 12.8465 7.20712 12.5107 7.62134 12.5107H7.63034C8.04455 12.5107 8.38034 12.8465 8.38034 13.2607C8.38034 13.675 8.04455 14.0107 7.63034 14.0107H7.62134C7.20712 14.0107 6.87134 13.675 6.87134 13.2607Z" fill="currentcolor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6785 17.1123C15.6785 16.6981 16.0143 16.3623 16.4285 16.3623H16.4375C16.8517 16.3623 17.1875 16.6981 17.1875 17.1123C17.1875 17.5265 16.8517 17.8623 16.4375 17.8623H16.4285C16.0143 17.8623 15.6785 17.5265 15.6785 17.1123Z" fill="currentcolor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M11.2791 17.1123C11.2791 16.6981 11.6148 16.3623 12.0291 16.3623H12.0381C12.4523 16.3623 12.7881 16.6981 12.7881 17.1123C12.7881 17.5265 12.4523 17.8623 12.0381 17.8623H12.0291C11.6148 17.8623 11.2791 17.5265 11.2791 17.1123Z" fill="currentcolor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M6.87134 17.1123C6.87134 16.6981 7.20712 16.3623 7.62134 16.3623H7.63034C8.04455 16.3623 8.38034 16.6981 8.38034 17.1123C8.38034 17.5265 8.04455 17.8623 7.63034 17.8623H7.62134C7.20712 17.8623 6.87134 17.5265 6.87134 17.1123Z" fill="currentcolor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M16.033 1.2998C16.4472 1.2998 16.783 1.63559 16.783 2.0498V5.3118C16.783 5.72602 16.4472 6.0618 16.033 6.0618C15.6187 6.0618 15.283 5.72602 15.283 5.3118V2.0498C15.283 1.63559 15.6187 1.2998 16.033 1.2998Z" fill="currentcolor"></path>
        <path fill-rule="evenodd" clip-rule="evenodd" d="M8.02466 1.2998C8.43887 1.2998 8.77466 1.63559 8.77466 2.0498V5.3118C8.77466 5.72602 8.43887 6.0618 8.02466 6.0618C7.61044 6.0618 7.27466 5.72602 7.27466 5.3118V2.0498C7.27466 1.63559 7.61044 1.2998 8.02466 1.2998Z" fill="currentcolor"></path>
      </svg>
    ${displayDate}
    <svg class="add-task-box-cansel-icon" id="add-task-box-cansel-icon--input" x="0px" y="0px" width="100" height="100" viewBox="0 0 24 24">
      <path d="M 12 2 C 6.4889971 2 2 6.4889971 2 12 C 2 17.511003 6.4889971 22 12 22 C 17.511003 22 22 17.511003 22 12 C 22 6.4889971 17.511003 2 12 2 z M 12 4 C 16.430123 4 20 7.5698774 20 12 C 20 16.430123 16.430123 20 12 20 C 7.5698774 20 4 16.430123 4 12 C 4 7.5698774 7.5698774 4 12 4 z M 8.7070312 7.2929688 L 7.2929688 8.7070312 L 10.585938 12 L 7.2929688 15.292969 L 8.7070312 16.707031 L 12 13.414062 L 15.292969 16.707031 L 16.707031 15.292969 L 13.414062 12 L 16.707031 8.7070312 L 15.292969 7.2929688 L 12 10.585938 L 8.7070312 7.2929688 z"></path>
    </svg>
  <input class="hiddenDate" id="hiddenDate--input" type="text" data-jdp="" data-jdp-min-date="today" placeholder="نمایش تاریخ از امروز" autocomplete="off">
  <input type="hidden" id="finalIsoDate--input">

    
  `;
  pickBtn.style.background = "#edeff3";

  // در صورت نیاز لاگ گرفتن
  if (selectedDateObj && typeof selectedDateObj.format === "function") {
    console.log("Persian Date:", selectedDateObj.format("YYYY/MM/DD"));
  }
}

// event delegation برای change روی input تاریخ — اینطوری حتی با بازساختن innerHTML هم کار می‌کنه
document.addEventListener("change", (e) => {
  if (e.target && e.target.id === "hiddenDate--input") {
    const dateInput = e.target;
    const val = dateInput.value || "";
    if (!val) return;

    const darr = val.split("/");
    const year = parseInt(darr[0], 10);
    const month = parseInt(darr[1], 10);
    const day = parseInt(darr[2], 10);

    // ساختن selectedDate با persianDate (تو کد شما هست)
    const selectedDate = new persianDate().year(year).month(month).date(day);
    const today = new persianDate();

    // محاسبات هفته
    const dayOfWeek = today.day();
    const weekStart = today.clone().subtract(dayOfWeek, "day");
    const weekEnd = weekStart.clone().add(6, "day");

    let displayDate = "";
    if (selectedDate.format("YYYY/MM/DD") === today.format("YYYY/MM/DD")) {
      displayDate = "امروز";
    } else if (
      selectedDate.valueOf() >= weekStart.valueOf() &&
      selectedDate.valueOf() <= weekEnd.valueOf()
    ) {
      displayDate = selectedDate.format("dddd");
    } else {
      displayDate = selectedDate.format("D MMMM YYYY");
    }

    // رندر حالت انتخاب شده
    renderPicked(displayDate, selectedDate);

    // اگر لازم دارید ISO یا چیز دیگه‌ای ذخیره کنید:
    const isoHidden = document.getElementById("finalIsoDate--input");
    if (isoHidden)
      isoHidden.value = selectedDate.toISOString
        ? selectedDate.toISOString()
        : "";
  }
});

// event delegation برای کلیک کنسل — بدون null error حتی وقتی آیکون بعداً اضافه شود
document.addEventListener("click", (e) => {
  const cancelBtn = e.target.closest
    ? e.target.closest("#add-task-box-cansel-icon--input")
    : null;
  if (cancelBtn) {
    // 1) ریست مقادیر ورودی‌ها
    const hidden = document.getElementById("hiddenDate--input");
    if (hidden) hidden.value = "";

    const finalIso = document.getElementById("finalIsoDate--input");
    if (finalIso) finalIso.value = "";

    // 2) بازگرداندن HTML دکمه به حالت اولیه
    pickBtn.innerHTML = originalPickHTML;
    pickBtn.style.background = ""; // یا هر رنگ اولیه‌ای که می‌خوای
  }
});

function restDate(hiddenInput) {
  hiddenInput.value = "";
}

/*=============================================
              Priority Item
=============================================*/
function restPriority() {
  $.querySelector(".priority__submenu--input").classList.remove(
    "priority__submenu--input--active"
  );
  $.querySelector(".priority__submenu").classList.remove(
    "priority__submenu--active"
  );
  $.querySelector("#priority--btn--input").innerHTML = `
      <svg class="add-task-box-option-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7124 9.27144C17.0398 9.52515 17.0996 9.99625 16.8459 10.3237L13.9169 14.1037C13.7945 14.2616 13.6143 14.3641 13.4161 14.3886C13.2178 14.4131 13.018 14.3576 12.8609 14.2342L10.0426 12.0218L7.51139 15.3107C7.25876 15.639 6.78786 15.7003 6.45961 15.4477C6.13135 15.195 6.07004 14.7241 6.32267 14.3959L9.31567 10.5069C9.43775 10.3482 9.61816 10.245 9.81677 10.2201C10.0154 10.1952 10.2157 10.2508 10.3731 10.3744L13.1935 12.5883L15.6602 9.40491C15.9139 9.07749 16.385 9.01774 16.7124 9.27144Z" fill="currentcolor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.6671 3.09961C19.0193 3.09961 18.4951 3.62382 18.4951 4.27161C18.4951 4.91865 19.0196 5.44361 19.6671 5.44361C20.3146 5.44361 20.8391 4.91865 20.8391 4.27161C20.8391 3.62382 20.3149 3.09961 19.6671 3.09961ZM16.9951 4.27161C16.9951 2.7954 18.1909 1.59961 19.6671 1.59961C21.1433 1.59961 22.3391 2.7954 22.3391 4.27161C22.3391 5.74657 21.1436 6.94361 19.6671 6.94361C18.1906 6.94361 16.9951 5.74657 16.9951 4.27161Z" fill="currentcolor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.00342 5.60669C3.78045 6.82966 3.19946 8.87583 3.19946 12.3027C3.19946 15.7302 3.78046 17.7763 5.0034 18.9991C6.22635 20.222 8.2725 20.8027 11.6995 20.8027C15.127 20.8027 17.1731 20.222 18.3959 18.9992C19.6187 17.7763 20.1995 15.7302 20.1995 12.3027C20.1995 11.1971 20.1397 10.2276 20.0136 9.37898C19.9527 8.96926 20.2355 8.58777 20.6452 8.52688C21.0549 8.466 21.4364 8.74878 21.4973 9.15849C21.6372 10.0999 21.6995 11.1464 21.6995 12.3027C21.6995 15.8132 21.1242 18.3921 19.4565 20.0598C17.7889 21.7275 15.21 22.3027 11.6995 22.3027C8.18943 22.3027 5.61058 21.7275 3.94278 20.0598C2.27497 18.3922 1.69946 15.8133 1.69946 12.3027C1.69946 8.79264 2.27498 6.21381 3.94276 4.54603C5.61054 2.87825 8.18936 2.30273 11.6995 2.30273C12.8345 2.30273 13.8631 2.36296 14.7902 2.49751C15.2001 2.557 15.4842 2.93753 15.4247 3.34745C15.3652 3.75737 14.9847 4.04145 14.5747 3.98196C13.7379 3.86051 12.7844 3.80273 11.6995 3.80273C8.27256 3.80273 6.22639 4.38372 5.00342 5.60669Z" fill="currentcolor"></path></svg>
                  بدون اولویت
      `;
  $.querySelector("#priority--btn").innerHTML = `
      <svg class="add-task-box-option-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7124 9.27144C17.0398 9.52515 17.0996 9.99625 16.8459 10.3237L13.9169 14.1037C13.7945 14.2616 13.6143 14.3641 13.4161 14.3886C13.2178 14.4131 13.018 14.3576 12.8609 14.2342L10.0426 12.0218L7.51139 15.3107C7.25876 15.639 6.78786 15.7003 6.45961 15.4477C6.13135 15.195 6.07004 14.7241 6.32267 14.3959L9.31567 10.5069C9.43775 10.3482 9.61816 10.245 9.81677 10.2201C10.0154 10.1952 10.2157 10.2508 10.3731 10.3744L13.1935 12.5883L15.6602 9.40491C15.9139 9.07749 16.385 9.01774 16.7124 9.27144Z" fill="currentcolor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.6671 3.09961C19.0193 3.09961 18.4951 3.62382 18.4951 4.27161C18.4951 4.91865 19.0196 5.44361 19.6671 5.44361C20.3146 5.44361 20.8391 4.91865 20.8391 4.27161C20.8391 3.62382 20.3149 3.09961 19.6671 3.09961ZM16.9951 4.27161C16.9951 2.7954 18.1909 1.59961 19.6671 1.59961C21.1433 1.59961 22.3391 2.7954 22.3391 4.27161C22.3391 5.74657 21.1436 6.94361 19.6671 6.94361C18.1906 6.94361 16.9951 5.74657 16.9951 4.27161Z" fill="currentcolor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.00342 5.60669C3.78045 6.82966 3.19946 8.87583 3.19946 12.3027C3.19946 15.7302 3.78046 17.7763 5.0034 18.9991C6.22635 20.222 8.2725 20.8027 11.6995 20.8027C15.127 20.8027 17.1731 20.222 18.3959 18.9992C19.6187 17.7763 20.1995 15.7302 20.1995 12.3027C20.1995 11.1971 20.1397 10.2276 20.0136 9.37898C19.9527 8.96926 20.2355 8.58777 20.6452 8.52688C21.0549 8.466 21.4364 8.74878 21.4973 9.15849C21.6372 10.0999 21.6995 11.1464 21.6995 12.3027C21.6995 15.8132 21.1242 18.3921 19.4565 20.0598C17.7889 21.7275 15.21 22.3027 11.6995 22.3027C8.18943 22.3027 5.61058 21.7275 3.94278 20.0598C2.27497 18.3922 1.69946 15.8133 1.69946 12.3027C1.69946 8.79264 2.27498 6.21381 3.94276 4.54603C5.61054 2.87825 8.18936 2.30273 11.6995 2.30273C12.8345 2.30273 13.8631 2.36296 14.7902 2.49751C15.2001 2.557 15.4842 2.93753 15.4247 3.34745C15.3652 3.75737 14.9847 4.04145 14.5747 3.98196C13.7379 3.86051 12.7844 3.80273 11.6995 3.80273C8.27256 3.80273 6.22639 4.38372 5.00342 5.60669Z" fill="currentcolor"></path></svg>
                  بدون اولویت
      `;

  $.querySelectorAll(".priority__submenu-item").forEach((item) => {
    item.classList.remove("priority__submenu-item--active");
  });
  $.querySelectorAll("#priority-4").forEach((priority) => {
    priority.classList.add("priority__submenu-item--active");
  });
  // taskPriority.setAttribute("id", "priority-4");
}

function priorityItem(ID) {
  $.querySelectorAll(ID).forEach((prioritySubmenuItem) => {
    prioritySubmenuItem.addEventListener("click", () => {
      for (let i = 1; i <= 4; i++) {
        $.querySelectorAll(`#priority-${i}`).forEach(
          (prioritySubmenuItemActive) => {
            prioritySubmenuItemActive.classList.remove(
              "priority__submenu-item--active"
            );
          }
        );
      }

      prioritySubmenuItem.classList.add("priority__submenu-item--active");

      $.querySelector(".priority__submenu").classList.remove(
        "priority__submenu--active"
      );
      $.querySelector(".priority__submenu--input").classList.remove(
        "priority__submenu--input--active"
      );

      $.querySelector("#priority--btn").innerHTML =
        prioritySubmenuItem.innerHTML;
      $.querySelector("#priority--btn--input").innerHTML =
        prioritySubmenuItem.innerHTML;
    });
  });
}

function toggleMenu(buttonSelector, menuSelector, activeClass) {
  $.querySelectorAll(buttonSelector).forEach((btn) => {
    btn.addEventListener("click", () => {
      $.querySelector(menuSelector).classList.toggle(activeClass);
    });
  });
}
toggleMenu("#priority--btn", ".priority__submenu", "priority__submenu--active");
toggleMenu(
  "#priority--btn--input",
  ".priority__submenu--input",
  "priority__submenu--input--active"
);
priorityItem("#priority-1");
priorityItem("#priority-2");
priorityItem("#priority-3");
priorityItem("#priority-4");

$.querySelector("priority__submenu--active");
/*=============================================
              Input Add Task Box
=============================================*/
function setupTaskBox(
  openBtnId,
  titleSelector,
  descSelector,
  prioritySelector,
  date
) {
  $.getElementById(openBtnId).addEventListener("click", () => {
    const taskTitle = $.querySelector(titleSelector);
    const taskDescription = $.querySelector(descSelector);
    const taskPriority = $.querySelector(prioritySelector);
    const hiddenInput = document.getElementById(date);

    const newtask = {
      id: Date.now(),
      title: taskTitle.value,
      description: taskDescription.value,
      completed: false,
      createdAt: -1,
      dueDate: hiddenInput.value,
      priority: taskPriority.getAttribute("id"),
      tags: -1,
    };

    if (taskTitle.value) {
      addNewTasks(newtask);
      taskTitle.value = "";
      taskDescription.value = "";
      restPriority();
      restDate(hiddenInput);
    }
  });
}

setupTaskBox(
  "add-task-box-btn-open",
  "#add-task-box-title",
  "#add-task-box-description",
  ".priority__submenu-item--active",
  "hiddenDate"
);

setupTaskBox(
  "add-task-box-btn-open--input",
  "#add-task-box-title--input",
  "#add-task-box-description--input",
  ".priority__submenu-item--active",
  "hiddenDate--input"
);

/*=============================================
              Input Cansel** Task Box
=============================================*/
function cancelTask(btn) {
  $.getElementById(btn).addEventListener("click", () => {
    if (btn == "add-task-box-btn-close") {
      $.querySelector("#add-task-box").classList.remove(
        "input__add-task-box--open"
      );
      $.querySelector(".add-task-box__layer").style.display = "none";
    }
    if (btn == "add-task-box-btn-close--input") {
      $.querySelector("#add-task-box--input").style.display = "none";
      if (!loadTasks().length) {
        $.querySelector(".about-page").style.display = "block";
        return;
      }
      $.querySelector(".task__add").style.display = "flex";
    }
  });
}

cancelTask("add-task-box-btn-close");
cancelTask("add-task-box-btn-close--input");
