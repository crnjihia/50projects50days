const textEl = document.getElementById("text");
const speedEl = document.getElementById("speed");
const text = "We Love Programming!";
const BASE_SPEED = 300;
let idx = 1;
let speed = BASE_SPEED / speedEl.value;

function writeText() {
  textEl.innerText = text.slice(0, idx);
  idx = idx > text.length ? 1 : idx + 1;
  setTimeout(writeText, speed);
}

speedEl.addEventListener("input", (e) => {
  speed = BASE_SPEED / e.target.value;
});

writeText();
