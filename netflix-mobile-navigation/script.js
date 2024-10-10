const openBtn = document.querySelector(".open-btn");
const closeBtn = document.querySelector(".close-btn");
const navElements = document.querySelectorAll(".nav");

openBtn.addEventListener("click", () => {
  toggleNav(true);
});

closeBtn.addEventListener("click", () => {
  toggleNav(false);
});

function toggleNav(isOpen) {
  navElements.forEach((nav) => {
    nav.classList.toggle("visible", isOpen);
    nav.setAttribute("aria-hidden", !isOpen);
  });
}
