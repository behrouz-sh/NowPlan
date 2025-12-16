const slidebarAddTaskBox = {
  container: document.getElementById("slidebar-add-task-box"),
  backgroundLayer: document.getElementById("add-task-box__layer"),
  title: document.getElementById("slidebar-add-task-box-title"),
  description: document.getElementById("slidebar-add-task-box-description"),
  hiddenDate: document.getElementById("slidebar-hiddenDate"),
  addBTN: document.getElementById("slidebar-add-task-box-add-btn"),
  closeBTN: document.getElementById("slidebar-add-task-box-close-btn"),
};
const inputAddTaskBox = {
  container: document.getElementById("input-add-task-box"),
  title: document.getElementById("input-add-task-box-title"),
  description: document.getElementById("input-add-task-box-description"),
  hiddenDate: document.getElementById("input-hiddenDate"),
  addBTN: document.getElementById("input-add-task-box-add-btn"),
  closeBTN: document.getElementById("input-add-task-box-btn-close"),
};
const todayAddTaskBox = {
  container: document.getElementById("today-add-task-box"),
  title: document.getElementById("today-add-task-box-title"),
  description: document.getElementById("today-add-task-box-description"),
  hiddenDate: document.getElementById("today-hiddenDate"),
  addBTN: document.getElementById("today-add-task-box-add-btn"),
  closeBTN: document.getElementById("today-add-task-box-btn-close"),
};

/*=============================================
               change placeholder - *ai*
=============================================*/
const tasks = [
  "چک کردن ایمیل‌های مهم",
  "نوشتن گزارش پروژه",
  "جلسه آنلاین با تیم",
  "مرور تقویم روزانه",
  "برنامه‌ریزی برای هفته آینده",
  "مرتب کردن میز کار",
  "نوشتن یادداشت‌های مهم",
  "تمرین ۲۰ دقیقه‌ای یوگا",
  "خواندن فصل بعدی کتاب",
  "آماده کردن وعده غذایی سالم",
  "پیاده‌روی کوتاه بعد از ناهار",
  "تماس با دوست یا خانواده",
  "به‌روزرسانی لیست خرید",
  "بررسی شبکه‌های اجتماعی",
  "تنظیم آلارم یا یادآور",
  "مرور و پاکسازی فایل‌های کامپیوتر",
  "تمرین مهارت جدید (کدنویسی، زبان، طراحی)",
  "نوشتن ایده‌های خلاقانه",
  "استراحت کوتاه و تمرین تنفس",
  "مرور اهداف روز و هفته",
];

const typePlaceholder = function (text, callback, inputEl) {
  let i = 0;
  inputEl.placeholder = "";
  const interval = setInterval(() => {
    inputEl.placeholder += text[i];
    i++;
    if (i >= text.length) {
      clearInterval(interval);
      if (callback) callback();
    }
  }, 72);
};

const changePlaceholder = function (inputEl) {
  const task = tasks[Math.floor(Math.random() * tasks.length)];
  typePlaceholder(
    task,
    () => {
      setTimeout(() => changePlaceholder(inputEl), 2500);
    },
    inputEl
  );
};

const inputs = [
  slidebarAddTaskBox.title,
  inputAddTaskBox.title,
  todayAddTaskBox.title,
];

inputs.forEach((el) => {
  changePlaceholder(el);
});

/*=============================================
                    Date
=============================================*/
jalaliDatepicker.startWatch({
  minDate: "attr",
});

const todayDate = new persianDate();
function showDayOrDate(arr) {
  if (typeof arr === "string") {
    arr = arr.split("/");
  }

  const d = new persianDate(arr);

  const isToday =
    d.year() === todayDate.year() &&
    d.month() === todayDate.month() &&
    d.date() === todayDate.date();

  if (isToday) {
    return "امروز";
  }

  const diff = d.diff(todayDate, "day");

  if (Math.abs(diff) < 7) {
    return d.format("dddd");
  }
  return d.format("D MMMM YYYY");
}

function updateDateDisplay(date, textContent) {
  document.getElementById(textContent).textContent = showDayOrDate(date);
}

function stupeDate(hiddenDate, pickDateBtnText, getcancelBTN) {
  const inputDate = document.getElementById(hiddenDate);
  const cancelBtn = document.getElementById(getcancelBTN);

  inputDate.addEventListener("change", () => {
    const dateArr = inputDate.value.split("/");
    const year = Number(dateArr[0]);
    const mon = Number(dateArr[1]);
    const day = Number(dateArr[2]);
    const tarikh = new persianDate([year, mon, day]);
    updateDateDisplay(tarikh, pickDateBtnText);
    cancelBtn.style.display = "block";
  });

  cancelBtn.addEventListener("click", () => {
    cancelBtn.style.display = "none";
    inputDate.value = "";
    document.getElementById(pickDateBtnText).textContent = "تاریخ";
  });
}

function restDate(hiddenInput) {
  hiddenInput.value = "";
  document.getElementById("slidebar-add-task-box-cancel-date").style.display =
    "none";
  document.getElementById("input-add-task-box-cancel-date").style.display =
    "none";
  document.getElementById("today-add-task-box-cancel-date").style.display =
    "none";

  document.getElementById("slidebar-pickDateBtn__text").textContent = "تاریخ";
  document.getElementById("input-pickDateBtn__text").textContent = "تاریخ";
  document.getElementById("today-pickDateBtn__text").textContent = "تاریخ";
}

stupeDate(
  "slidebar-hiddenDate",
  "slidebar-pickDateBtn__text",
  "slidebar-add-task-box-cancel-date"
);
stupeDate(
  "input-hiddenDate",
  "input-pickDateBtn__text",
  "input-add-task-box-cancel-date"
);
stupeDate(
  "today-hiddenDate",
  "today-pickDateBtn__text",
  "today-add-task-box-cancel-date"
);

/*=============================================
              Priority Item
=============================================*/
function restPriority() {
  const prioritySubmenuList = [
    "slidebar-priority__submenu",
    "input-priority__submenu",
    "today-priority__submenu",
  ];
  for (let i = 0; i < prioritySubmenuList.length; i++) {
    document
      .getElementById(prioritySubmenuList[i])
      .classList.remove("priority__submenu--active");
  }

  const priorityBTNList = [
    "#slidebar-priority--btn",
    "#input-priority-btn",
    "#today-priority-btn",
  ];
  for (let i = 0; i < priorityBTNList.length; i++) {
    document.querySelector(priorityBTNList[i]).innerHTML = `
        <svg class="add-task-box-option-icon" width="24" height="24" viewBox="0 0 24 24" fill="none"><path fill-rule="evenodd" clip-rule="evenodd" d="M16.7124 9.27144C17.0398 9.52515 17.0996 9.99625 16.8459 10.3237L13.9169 14.1037C13.7945 14.2616 13.6143 14.3641 13.4161 14.3886C13.2178 14.4131 13.018 14.3576 12.8609 14.2342L10.0426 12.0218L7.51139 15.3107C7.25876 15.639 6.78786 15.7003 6.45961 15.4477C6.13135 15.195 6.07004 14.7241 6.32267 14.3959L9.31567 10.5069C9.43775 10.3482 9.61816 10.245 9.81677 10.2201C10.0154 10.1952 10.2157 10.2508 10.3731 10.3744L13.1935 12.5883L15.6602 9.40491C15.9139 9.07749 16.385 9.01774 16.7124 9.27144Z" fill="currentcolor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M19.6671 3.09961C19.0193 3.09961 18.4951 3.62382 18.4951 4.27161C18.4951 4.91865 19.0196 5.44361 19.6671 5.44361C20.3146 5.44361 20.8391 4.91865 20.8391 4.27161C20.8391 3.62382 20.3149 3.09961 19.6671 3.09961ZM16.9951 4.27161C16.9951 2.7954 18.1909 1.59961 19.6671 1.59961C21.1433 1.59961 22.3391 2.7954 22.3391 4.27161C22.3391 5.74657 21.1436 6.94361 19.6671 6.94361C18.1906 6.94361 16.9951 5.74657 16.9951 4.27161Z" fill="currentcolor"></path><path fill-rule="evenodd" clip-rule="evenodd" d="M5.00342 5.60669C3.78045 6.82966 3.19946 8.87583 3.19946 12.3027C3.19946 15.7302 3.78046 17.7763 5.0034 18.9991C6.22635 20.222 8.2725 20.8027 11.6995 20.8027C15.127 20.8027 17.1731 20.222 18.3959 18.9992C19.6187 17.7763 20.1995 15.7302 20.1995 12.3027C20.1995 11.1971 20.1397 10.2276 20.0136 9.37898C19.9527 8.96926 20.2355 8.58777 20.6452 8.52688C21.0549 8.466 21.4364 8.74878 21.4973 9.15849C21.6372 10.0999 21.6995 11.1464 21.6995 12.3027C21.6995 15.8132 21.1242 18.3921 19.4565 20.0598C17.7889 21.7275 15.21 22.3027 11.6995 22.3027C8.18943 22.3027 5.61058 21.7275 3.94278 20.0598C2.27497 18.3922 1.69946 15.8133 1.69946 12.3027C1.69946 8.79264 2.27498 6.21381 3.94276 4.54603C5.61054 2.87825 8.18936 2.30273 11.6995 2.30273C12.8345 2.30273 13.8631 2.36296 14.7902 2.49751C15.2001 2.557 15.4842 2.93753 15.4247 3.34745C15.3652 3.75737 14.9847 4.04145 14.5747 3.98196C13.7379 3.86051 12.7844 3.80273 11.6995 3.80273C8.27256 3.80273 6.22639 4.38372 5.00342 5.60669Z" fill="currentcolor"></path></svg>
                    بدون اولویت
        `;
  }

  document.querySelectorAll(".priority__submenu-item").forEach((item) => {
    item.classList.remove("priority__submenu-item--active");
  });
  document.querySelectorAll("#priority-4").forEach((priority) => {
    priority.classList.add("priority__submenu-item--active");
  });
}

const priorityItem = [
  "#priority-1",
  "#priority-2",
  "#priority-3",
  "#priority-4",
];
document.querySelectorAll(priorityItem).forEach((prioritySubmenuItem) => {
  prioritySubmenuItem.addEventListener("click", () => {
    for (let i = 0; i < priorityItem.length; i++) {
      document
        .querySelector(priorityItem[i])
        .classList.remove("priority__submenu-item--active");
    }

    const prioritySubmenuList = [
      "slidebar-priority__submenu",
      "input-priority__submenu",
      "today-priority__submenu",
    ];
    for (let i = 0; i < prioritySubmenuList.length; i++) {
      document
        .getElementById(prioritySubmenuList[i])
        .classList.remove("priority__submenu--active");
    }

    prioritySubmenuItem.classList.add("priority__submenu-item--active");

    const priorityBTN = [
      "slidebar-priority--btn",
      "input-priority-btn",
      "today-priority-btn",
    ];
    for (let i = 0; i < priorityBTN.length; i++) {
      document.getElementById(priorityBTN[i]).innerHTML =
        prioritySubmenuItem.innerHTML;
    }
  });
});
function toggleMenu(buttonSelector, menuSelector) {
  document.getElementById(buttonSelector).addEventListener("click", () => {
    document
      .getElementById(menuSelector)
      .classList.toggle("priority__submenu--active");
  });
}

toggleMenu("slidebar-priority--btn", "slidebar-priority__submenu");
toggleMenu("input-priority-btn", "input-priority__submenu");
toggleMenu("today-priority-btn", "today-priority__submenu");

/*=============================================
              Add BTN (Task Box)
=============================================*/
function setupTaskBox(addTaskBox) {
  const addBTN = addTaskBox.addBTN;
  const title = addTaskBox.title;
  const description = addTaskBox.description;
  const hiddenDate = addTaskBox.hiddenDate;

  addBTN.addEventListener("click", () => {
    const taskTitle = title;
    const taskDescription = description;
    const taskPriority = document.querySelector(
      ".priority__submenu-item--active"
    );

    const newTask = {
      id: Date.now(),
      title: taskTitle.value,
      description: taskDescription.value,
      completed: false,
      completedAt: false,
      dueDate: hiddenDate.value,
      priority: taskPriority.getAttribute("id"),
      tags: -1,
    };

    if (taskTitle.value) {
      addNewTasks(newTask);
      taskTitle.value = "";
      taskDescription.value = "";
      restPriority();
      restDate(hiddenDate);

      if (addTaskBox == slidebarAddTaskBox) {
        renderAllTasksToday();
      }
      if (addTaskBox == todayAddTaskBox) {
        renderAllTasksToday();
      }
      if (loadTasks().length && addTaskBox !== inputAddTaskBox) {
        inputAboutPage.style.display = "none";
        inputTaskContainer.style.display = "block";
        inputTaskAddBTN.style.display = "flex";
      }
    }
  });
}

setupTaskBox(slidebarAddTaskBox);

setupTaskBox(inputAddTaskBox);

setupTaskBox(todayAddTaskBox);
/*=============================================
              cancel (Task Box)
=============================================*/

const restTaskBox = function (addTaskBox) {
  addTaskBox.title.value = "";
  addTaskBox.description.value = "";
  restDate(addTaskBox.hiddenDate);
  restPriority();
};

slidebarAddTaskBox.closeBTN.addEventListener("click", () => {
  $.querySelector(".add-task-box__warp").classList.remove(
    "add-task-box__warp--open"
  );

  // rest
  restTaskBox(slidebarAddTaskBox);
});

inputAddTaskBox.closeBTN.addEventListener("click", () => {
  inputAddTaskBox.container.style.display = "none";
  if (!loadTasks().length) {
    inputAboutPage.style.display = "block";
    return;
  }
  inputTaskAddBTN.style.display = "flex";

  // rest
  restTaskBox(inputAddTaskBox);
});

todayAddTaskBox.closeBTN.addEventListener("click", () => {
  todayAddTaskBox.container.style.display = "none";
  if (!loadTasksToday().length) {
    todayAboutPage.style.display = "block";
    return;
  }
  todayTaskAddBTN.style.display = "flex";

  // rest
  restTaskBox(todayAddTaskBox);
});
