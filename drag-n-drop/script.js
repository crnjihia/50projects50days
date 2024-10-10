const fill = document.querySelector(".fill");
const empties = document.querySelectorAll(".empty");

// Event listeners for the draggable element
fill.addEventListener("dragstart", dragStart);
fill.addEventListener("dragend", dragEnd);

// Event listeners for each empty drop area
empties.forEach((empty) => {
  empty.addEventListener("dragover", dragOver);
  empty.addEventListener("dragenter", dragEnter);
  empty.addEventListener("dragleave", dragLeave);
  empty.addEventListener("drop", dragDrop);
});

// Functions for drag events
function dragStart() {
  this.classList.add("hold");
  setTimeout(() => this.classList.add("invisible"), 0);
}

function dragEnd() {
  this.className = "fill";
}

function dragOver(e) {
  e.preventDefault();
}

function dragEnter(e) {
  e.preventDefault();
  this.classList.add("hovered");
}

function dragLeave() {
  this.classList.remove("hovered");
}

function dragDrop() {
  this.classList.remove("hovered");
  this.append(fill);
}
