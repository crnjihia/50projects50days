(() => {
  const nums = document.querySelectorAll(".nums span");
  const counter = document.querySelector(".counter");
  const finalMessage = document.querySelector(".final");
  const replay = document.querySelector("#replay");

  function resetDOM() {
    counter.classList.remove("hide");
    finalMessage.classList.remove("show");
    nums.forEach((num) => (num.classList.value = ""));
    nums[0].classList.add("in");
  }

  function handleAnimationEnd(e, idx) {
    const nextToLast = nums.length - 1;
    const currentNum = nums[idx];

    if (e.animationName === "goIn" && idx !== nextToLast) {
      currentNum.classList.remove("in");
      currentNum.classList.add("out");
    } else if (e.animationName === "goOut" && currentNum.nextElementSibling) {
      currentNum.nextElementSibling.classList.add("in");
    } else {
      counter.classList.add("hide");
      finalMessage.classList.add("show");
    }
  }

  function runAnimation() {
    nums.forEach((num, idx) => {
      num.addEventListener("animationend", (e) => handleAnimationEnd(e, idx));
    });
  }

  replay.addEventListener("click", () => {
    resetDOM();
    runAnimation();
  });

  runAnimation();
})();
