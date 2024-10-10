(() => {
  const boxesContainer = document.getElementById("boxes");
  const btn = document.getElementById("btn");

  btn.addEventListener("click", () => {
    boxesContainer.classList.toggle("big");
  });

  function createBoxes() {
    const boxSize = 125; // Avoid hardcoding multiple times
    for (let i = 0; i < 4; i++) {
      for (let j = 0; j < 4; j++) {
        const box = document.createElement("div");
        box.classList.add("box");
        box.style.backgroundPosition = `${-j * boxSize}px ${-i * boxSize}px`;
        boxesContainer.appendChild(box);
      }
    }
  }

  createBoxes();
})();
