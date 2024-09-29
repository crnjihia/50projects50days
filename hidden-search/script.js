const search = document.querySelector(".search");
const btn = document.querySelector(".btn");
const input = document.querySelector(".input");

// Toggle search visibility
btn.addEventListener("click", toggleSearch);

function toggleSearch() {
  search.classList.toggle("active");
  if (search.classList.contains("active")) {
    input.focus();
  }
}
