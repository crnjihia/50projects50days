document.addEventListener("DOMContentLoaded", () => {
  const hourEl = document.querySelector(".hour");
  const minuteEl = document.querySelector(".minute");
  const secondEl = document.querySelector(".second");
  const timeEl = document.querySelector(".time");
  const dateEl = document.querySelector(".date");
  const toggle = document.querySelector(".toggle");

  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  toggle.addEventListener("click", toggleTheme);

  function toggleTheme() {
    const html = document.documentElement;
    const isDarkMode = html.classList.toggle("dark");
    toggle.innerHTML = isDarkMode ? "Light mode" : "Dark mode";
  }

  function setTime() {
    const now = new Date();
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();
    const ampm = hours >= 12 ? "PM" : "AM";

    const hoursForClock = hours % 12 || 12; // Convert 0 to 12 for 12-hour clock

    hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
      hoursForClock,
      0,
      12,
      0,
      360
    )}deg)`;
    minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
      minutes,
      0,
      60,
      0,
      360
    )}deg)`;
    secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
      seconds,
      0,
      60,
      0,
      360
    )}deg)`;

    timeEl.innerHTML = `${hoursForClock}:${minutes
      .toString()
      .padStart(2, "0")} ${ampm}`;
    dateEl.innerHTML = `${days[now.getDay()]}, ${
      months[now.getMonth()]
    } <span class="circle">${now.getDate()}</span>`;
  }

  const scale = (num, in_min, in_max, out_min, out_max) => {
    return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
  };

  setTime();
  setInterval(setTime, 1000);
});
