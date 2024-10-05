const boxes = document.querySelectorAll(".box");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  },
  {
    threshold: 0.25, // Trigger when 25% of the box is visible
  }
);

boxes.forEach((box) => {
  observer.observe(box);
});
