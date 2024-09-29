const progress = document.getElementById("progress");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

// Event listeners for buttons
nextButton.addEventListener("click", () => {
  if (currentActive < circles.length) {
    currentActive++;
    updateProgress();
  }
});

prevButton.addEventListener("click", () => {
  if (currentActive > 1) {
    currentActive--;
    updateProgress();
  }
});

// Update progress based on the current active step
function updateProgress() {
  circles.forEach((circle, idx) => {
    circle.classList.toggle("active", idx < currentActive);
  });

  const activeCircles = document.querySelectorAll(".active");
  progress.style.width =
    ((activeCircles.length - 1) / (circles.length - 1)) * 100 + "%";

  toggleButtonState();
}

// Toggle the state of the buttons based on the current active step
function toggleButtonState() {
  prevButton.disabled = currentActive === 1;
  nextButton.disabled = currentActive === circles.length;
}
