document.addEventListener("DOMContentLoaded", () => {
  const loader = document.querySelector(".kinetic");

  // You can adjust animation timing dynamically via JavaScript, if needed
  const adjustLoaderAnimation = (duration) => {
    loader.style.setProperty("--rotate-duration", `${duration}s`);
  };

  // Example of changing the animation speed after 3 seconds
  setTimeout(() => {
    adjustLoaderAnimation(1.5); // Faster animation speed
  }, 3000);
});
