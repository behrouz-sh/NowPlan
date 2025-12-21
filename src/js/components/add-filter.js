


// function setupLabel(section, sectionSubmenu) {
//   section.addEventListener("click", () => {
//     sectionSubmenu.classList.toggle("label__submenu--open");
//     addLabelDOM(section, labelsContainer, labelNotFound, searchBoxText);

//     const selectedLabels = slidebarAddTaskBox.selectedLabels || [];

//     document.querySelectorAll(".label").forEach((labelEl) => {
//       const labelText = labelEl
//         .querySelector(".label__text-label")
//         .innerText.trim();
//       const checkbox = labelEl.querySelector(".label__checkbox");
//       checkbox.checked = selectedLabels.includes(labelText);
//     });

//     document.querySelector(".labels").addEventListener(
//       "change",
//       (e) => {
//         if (!e.target.classList.contains("label__checkbox")) return;

//         const labelText = e.target
//           .closest(".label")
//           .querySelector(".label__text-label")
//           .innerText.trim();

//         if (e.target.checked) {
//           if (!selectedLabels.includes(labelText)) {
//             selectedLabels.push(labelText);
//           }
//         } else {
//           const index = selectedLabels.indexOf(labelText);
//           if (index !== -1) {
//             selectedLabels.splice(index, 1);
//           }
//         }
//         slidebarAddTaskBox.selectedLabels = selectedLabels;
//         if (slidebarAddTaskBox.selectedLabels.length) {
//           section.style.borderColor = "var(--color-primary-300)";
//           section.style.background = "var(--color-primary-100)";
//           section.style.color = "var(--color-primary-300)";
//         } else {
//           section.style.borderColor = "var(--color-neutral-500)";
//           section.style.background = "transparent";
//           section.style.color = "var(--color-neutral-700)";
//         }
//       },
//       { once: false }
//     );
//   });

//   labelSearchBox.addEventListener("input", () => {
//     addLabelText.textContent = labelSearchBox.value;
//     addLabelDOM(section, labelsContainer, labelNotFound, searchBoxText);
//   });

//   addLabelBtn.addEventListener("click", () => {
//     const labels = loadLabel();
//     labels.push(addLabelText.textContent.trim());
//     saveLabel(labels);
//     addLabelDOM(section, labelsContainer, labelNotFound, searchBoxText);
//   });
// }

// setupLabel(slidebarLabelBTN, slidebarLabelSubmenu);
