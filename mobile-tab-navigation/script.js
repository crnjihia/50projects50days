const contents = document.querySelectorAll(".content");
const listItems = document.querySelectorAll("nav ul li");

// Add event listeners to each tab
listItems.forEach((item, idx) => {
  item.addEventListener("click", () => {
    updateActiveTab(idx);
  });
});

// Update the active tab and content
function updateActiveTab(index) {
  hideAllContents();
  hideAllItems();

  listItems[index].classList.add("active");
  listItems[index].setAttribute("aria-selected", "true");
  contents[index].classList.add("show");
  contents[index].setAttribute("aria-hidden", "false");
}

// Hide all content sections
function hideAllContents() {
  contents.forEach((content) => {
    content.classList.remove("show");
    content.setAttribute("aria-hidden", "true");
  });
}

// Remove 'active' class from all tabs
function hideAllItems() {
  listItems.forEach((item) => {
    item.classList.remove("active");
    item.setAttribute("aria-selected", "false");
  });
}
