const loadText = document.querySelector(".loading-text");
const bg = document.querySelector(".bg");

let load = 0;
const intervalDuration = 30;
const maxLoad = 99;

function startLoading() {
  setInterval(blurring, intervalDuration);
}

function blurring() {
  load++;

  if (load > maxLoad) {
    clearInterval(int);
  }

  updateLoadingText(load);
  updateBackgroundBlur(load);
}

function updateLoadingText(load) {
  loadText.innerText = `${load}%`;
  loadText.style.opacity = scale(load, 0, 100, 1, 0);
}

function updateBackgroundBlur(load) {
  bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

const scale = (num, in_min, in_max, out_min, out_max) => {
  return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

// Start loading process
startLoading();
