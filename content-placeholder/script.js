const header = document.getElementById("header");
const title = document.getElementById("title");
const excerpt = document.getElementById("excerpt");
const profile_img = document.getElementById("profile_img");
const name = document.getElementById("name");
const date = document.getElementById("date");

const animated_bgs = document.querySelectorAll(".animated-bg");
const animated_bg_texts = document.querySelectorAll(".animated-bg-text");

setTimeout(getData, 2500);

function getData() {
  header.insertAdjacentHTML(
    "afterbegin",
    `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="Laptop workspace" />`
  );
  title.textContent = "Lorem ipsum dolor sit amet";
  excerpt.textContent =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis.";
  profile_img.insertAdjacentHTML(
    "afterbegin",
    `<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="Profile picture of John Doe" />`
  );
  name.textContent = "John Doe";
  date.textContent = "Oct 08, 2020";

  // Remove loading animations
  animated_bgs.forEach((bg) => bg.classList.remove("animated-bg"));
  animated_bg_texts.forEach((bg) => bg.classList.remove("animated-bg-text"));

  // Make elements accessible after data load
  header.setAttribute("aria-hidden", "false");
  title.setAttribute("aria-hidden", "false");
  excerpt.setAttribute("aria-hidden", "false");
  name.setAttribute("aria-hidden", "false");
  date.setAttribute("aria-hidden", "false");
}
