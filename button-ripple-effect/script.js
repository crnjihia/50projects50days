document.querySelectorAll(".ripple").forEach((button) => {
  button.addEventListener("click", function (e) {
    const circle = document.createElement("span");
    const rect = this.getBoundingClientRect();
    const xInside = e.clientX - rect.left;
    const yInside = e.clientY - rect.top;

    circle.classList.add("circle");
    circle.style.top = `${yInside}px`;
    circle.style.left = `${xInside}px`;
    this.appendChild(circle);

    setTimeout(() => circle.remove(), 600); // Extended the ripple duration for smoother animation
  });
});
