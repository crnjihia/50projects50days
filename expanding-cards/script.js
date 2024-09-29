const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", () => {
    setActivePanel(panel);
  });
});

function setActivePanel(activePanel) {
  removeActiveClasses();
  activePanel.classList.add("active");
}

function removeActiveClasses() {
  panels.forEach((panel) => {
    panel.classList.remove("active");
  });
}
