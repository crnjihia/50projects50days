const left = document.querySelector(".left");
const right = document.querySelector(".right");
const container = document.querySelector(".container");

// Using event delegation for better performance
container.addEventListener("mouseenter", (e) => {
  if (e.target.closest(".left")) {
    container.classList.add("hover-left");
    container.classList.remove("hover-right");
  } else if (e.target.closest(".right")) {
    container.classList.add("hover-right");
    container.classList.remove("hover-left");
  }
});

container.addEventListener("mouseleave", () => {
  container.classList.remove("hover-left", "hover-right");
});
