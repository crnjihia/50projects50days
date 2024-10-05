const toggle = document.getElementById("toggle");
const nav = document.getElementById("nav");
const ul = nav.querySelector("ul");

toggle.addEventListener("click", () => {
  nav.classList.toggle("active");
  const isExpanded = toggle.getAttribute("aria-expanded") === "true";

  toggle.setAttribute("aria-expanded", !isExpanded);
  ul.setAttribute("aria-expanded", !isExpanded);
});
