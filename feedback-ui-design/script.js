const ratings = document.querySelectorAll(".rating");
const ratingsContainer = document.querySelector(".ratings-container");
const sendBtn = document.querySelector("#send");
const panel = document.querySelector("#panel");
let selectedRating = "Satisfied";

ratingsContainer.addEventListener("click", (e) => {
  const targetRating = e.target.closest(".rating");
  if (targetRating) {
    updateSelectedRating(targetRating);
  }
});

ratingsContainer.addEventListener("keydown", (e) => {
  if (e.key === "Enter" || e.key === " ") {
    const targetRating = e.target.closest(".rating");
    if (targetRating) {
      updateSelectedRating(targetRating);
    }
  }
});

sendBtn.addEventListener("click", () => {
  panel.innerHTML = `
        <i class="fas fa-heart"></i>
        <strong>Thank You!</strong>
        <br>
        <strong>Feedback: ${selectedRating}</strong>
        <p>We'll use your feedback to improve our customer support</p>
    `;
});

function updateSelectedRating(targetRating) {
  removeActive();
  targetRating.classList.add("active");
  selectedRating = targetRating.querySelector("small").textContent;
}

function removeActive() {
  ratings.forEach((rating) => rating.classList.remove("active"));
}
