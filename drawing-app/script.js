const canvas = document.getElementById("canvas");
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById("size");
const colorEl = document.getElementById("color");
const clearEl = document.getElementById("clear");

const ctx = canvas.getContext("2d");

let size = 10;
let isDrawing = false;
let color = colorEl.value; // Default color
let x, y;

// Event Listeners
canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", draw);
increaseBtn.addEventListener("click", increaseSize);
decreaseBtn.addEventListener("click", decreaseSize);
colorEl.addEventListener("input", (e) => (color = e.target.value));
clearEl.addEventListener("click", clearCanvas);

// Drawing Functions
function startDrawing(e) {
  isDrawing = true;
  [x, y] = [e.offsetX, e.offsetY];
}

function stopDrawing() {
  isDrawing = false;
  ctx.beginPath(); // Reset the path
}

function draw(e) {
  if (!isDrawing) return;

  const [x2, y2] = [e.offsetX, e.offsetY];
  drawCircle(x2, y2);
  drawLine(x, y, x2, y2);
  [x, y] = [x2, y2]; // Update current position
}

function drawCircle(x, y) {
  ctx.beginPath();
  ctx.arc(x, y, size, 0, Math.PI * 2);
  ctx.fillStyle = color;
  ctx.fill();
}

function drawLine(x1, y1, x2, y2) {
  ctx.beginPath();
  ctx.moveTo(x1, y1);
  ctx.lineTo(x2, y2);
  ctx.strokeStyle = color;
  ctx.lineWidth = size * 2;
  ctx.stroke();
}

// Size Adjustment Functions
function increaseSize() {
  size = Math.min(size + 5, 50);
  updateSizeDisplay();
}

function decreaseSize() {
  size = Math.max(size - 5, 5);
  updateSizeDisplay();
}

function updateSizeDisplay() {
  sizeEl.textContent = size;
}

// Clear Canvas
function clearCanvas() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.beginPath(); // Reset the path
}

// Initialize size display
updateSizeDisplay();
