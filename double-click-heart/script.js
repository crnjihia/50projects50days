const loveMe = document.querySelector(".loveMe");
const times = document.getElementById("times");
let timesClicked = 0;

loveMe.addEventListener("dblclick", (e) => {
  createHeart(e);
  times.innerText = ++timesClicked;
});

const createHeart = (e) => {
  const heart = document.createElement("i");
  heart.classList.add("fas", "fa-heart");

  const { clientX: x, clientY: y } = e;
  const { offsetLeft: leftOffset, offsetTop: topOffset } = e.target;

  const xInside = x - leftOffset;
  const yInside = y - topOffset;

  heart.style.top = `${yInside}px`;
  heart.style.left = `${xInside}px`;

  loveMe.appendChild(heart);

  setTimeout(() => heart.remove(), 1000);
};
