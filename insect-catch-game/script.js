const screens = document.querySelectorAll(".screen");
const chooseInsectBtns = document.querySelectorAll(".choose-insect-btn");
const startBtn = document.getElementById("start-btn");
const gameContainer = document.getElementById("game-container");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const message = document.getElementById("message");

let seconds = 0;
let score = 0;
let selectedInsect = {};
let insectCreationInterval;

startBtn.addEventListener("click", () => screens[0].classList.add("up"));

chooseInsectBtns.forEach((btn) => {
  btn.addEventListener("click", () => {
    const img = btn.querySelector("img");
    selectedInsect = {
      src: img.getAttribute("src"),
      alt: img.getAttribute("alt"),
    };
    screens[1].classList.add("up");
    setTimeout(createInsect, 1000);
    startGame();
  });
});

function startGame() {
  insectCreationInterval = setInterval(increaseTime, 1000);
}

function increaseTime() {
  seconds++;
  const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
  const sec = String(seconds % 60).padStart(2, "0");
  timeEl.textContent = `Time: ${minutes}:${sec}`;
}

function createInsect() {
  const insect = document.createElement("div");
  insect.classList.add("insect");
  const { x, y } = getRandomLocation();
  insect.style.top = `${y}px`;
  insect.style.left = `${x}px`;
  insect.innerHTML = `<img src="${selectedInsect.src}" alt="${
    selectedInsect.alt
  }" style="transform: rotate(${Math.random() * 360}deg)" />`;
  insect.addEventListener("click", catchInsect);
  gameContainer.appendChild(insect);
}

function getRandomLocation() {
  const width = window.innerWidth - 200;
  const height = window.innerHeight - 200;
  return {
    x: Math.random() * width + 100,
    y: Math.random() * height + 100,
  };
}

function catchInsect() {
  increaseScore();
  this.classList.add("caught");
  setTimeout(() => this.remove(), 2000);
  addInsects();
}

function addInsects() {
  setTimeout(createInsect, 1000);
  setTimeout(createInsect, 1500);
}

function increaseScore() {
  score++;
  scoreEl.textContent = `Score: ${score}`;
  if (score > 19) {
    message.classList.add("visible");
  }
}
