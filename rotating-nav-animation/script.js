const openButton = document.getElementById("open");
const closeButton = document.getElementById("close");
const container = document.querySelector(".container");

// Event listeners for buttons
openButton.addEventListener("click", () => toggleNavigation(true));
closeButton.addEventListener("click", () => toggleNavigation(false));

// Function to toggle navigation
function toggleNavigation(isOpen) {
  if (isOpen) {
    container.classList.add("show-nav");
  } else {
    container.classList.remove("show-nav");
  }
}
