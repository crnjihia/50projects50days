const toggles = document.querySelectorAll(".toggle");
const goodToggle = document.querySelector("#good");
const cheapToggle = document.querySelector("#cheap");
const fastToggle = document.querySelector("#fast");

toggles.forEach((toggle) =>
  toggle.addEventListener("change", () => handleToggleChange(toggle))
);

function handleToggleChange(clickedToggle) {
  if (goodToggle.checked && cheapToggle.checked && fastToggle.checked) {
    if (clickedToggle === goodToggle) {
      fastToggle.checked = false;
    } else if (clickedToggle === cheapToggle) {
      goodToggle.checked = false;
    } else if (clickedToggle === fastToggle) {
      cheapToggle.checked = false;
    }
  }
}
