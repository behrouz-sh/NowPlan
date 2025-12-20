function saveLabel(labels) {
  localStorage.setItem("labels", JSON.stringify(labels));
}
function loadLabel() {
  var labels = localStorage.getItem("labels");
  return labels ? JSON.parse(labels) : [];
}
function addLabelDOM() {
  let searchBoxText = document.querySelector("#label__search-box").value.trim();
  const labels = loadLabel();
  const filteredLabel = labels.filter((label) =>
    label.toLowerCase().includes(searchBoxText.toLowerCase())
  );

  const labelNotFound = document.querySelector(".label-not-found");
  const addLabelBtn = document.querySelector(".add-label");
  const labelsContainer = document.querySelector(".labels");

  if (!filteredLabel.length && searchBoxText !== "") {
    labelNotFound.style.display = "inline";
    addLabelBtn.style.display = "flex";
  } else {
    labelNotFound.style.display = "none";
    addLabelBtn.style.display = "none";
  }

  let html = "";
  filteredLabel.forEach((e) => {
    html += `
        <label class="label">
          <div class="label__text-warp">
            <span class="label__text-atsign">@</span>
            <span class="label__text-label">${e}</span>
          </div>
          <input class="label__checkbox" type="checkbox" name="">
        </label>
      `;
  });
  labelsContainer.innerHTML = html;
}

const slidebarLabelBTN = document.getElementById("slidebar-label--btn");
const slidebarLabelSubmenu = document.querySelector("#slidebar-label__submenu");
const labelSearchBox = document.querySelector("#label__search-box");
const addLabelText = document.querySelector("#add-label__text");
const addLabelBtn = document.querySelector("#add-label__btn");
slidebarLabelBTN.addEventListener("click", () => {
  slidebarLabelSubmenu.classList.toggle("label__submenu--open");
  addLabelDOM();

  const selectedLabels = slidebarAddTaskBox.selectedLabels || [];

  document.querySelectorAll(".label").forEach((labelEl) => {
    const labelText = labelEl
      .querySelector(".label__text-label")
      .innerText.trim();
    const checkbox = labelEl.querySelector(".label__checkbox");
    checkbox.checked = selectedLabels.includes(labelText);
  });

  document.querySelector(".labels").addEventListener(
    "change",
    (e) => {
      if (!e.target.classList.contains("label__checkbox")) return;

      const labelText = e.target
        .closest(".label")
        .querySelector(".label__text-label")
        .innerText.trim();

      if (e.target.checked) {
        if (!selectedLabels.includes(labelText)) {
          selectedLabels.push(labelText);
        }
      } else {
        const index = selectedLabels.indexOf(labelText);
        if (index !== -1) {
          selectedLabels.splice(index, 1);
        }
      }
      slidebarAddTaskBox.selectedLabels = selectedLabels;
      if (slidebarAddTaskBox.selectedLabels.length) {
        slidebarLabelBTN.style.borderColor = "var(--color-primary-300)";
        slidebarLabelBTN.style.background = "var(--color-primary-100)";
        slidebarLabelBTN.style.color = "var(--color-primary-300)";
      } else {
        slidebarLabelBTN.style.borderColor = "var(--color-neutral-500)";
        slidebarLabelBTN.style.background = "transparent";
        slidebarLabelBTN.style.color = "var(--color-neutral-700)";
      }
    },
    { once: false }
  );
});

labelSearchBox.addEventListener("input", () => {
  addLabelText.textContent = labelSearchBox.value;
  addLabelDOM();
});

addLabelBtn.addEventListener("click", () => {
  const labels = loadLabel();
  labels.push(addLabelText.textContent.trim());
  saveLabel(labels);
  addLabelDOM();
});
