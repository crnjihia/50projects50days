const body = document.body;
const slides = document.querySelectorAll(".slide");
const leftBtn = document.getElementById("left");
const rightBtn = document.getElementById("right");
let activeSlide = 0;

rightBtn.addEventListener("click", () => {
  activeSlide = (activeSlide + 1) % slides.length;
  updateSlider();
});

leftBtn.addEventListener("click", () => {
  activeSlide = (activeSlide - 1 + slides.length) % slides.length;
  updateSlider();
});

function updateSlider() {
  body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
  slides.forEach((slide, index) => {
    slide.classList.toggle("active", index === activeSlide);
  });
}

updateSlider();
