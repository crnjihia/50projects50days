const result = document.getElementById("result");
const filter = document.getElementById("filter");
let listItems = [];

// Fetch and display user data
async function getData() {
  try {
    const res = await fetch("https://randomuser.me/api?results=50");
    const { results } = await res.json();

    // Clear the initial loading message
    result.innerHTML = "";

    // Create user list
    listItems = results.map((user) => createUserElement(user));
    listItems.forEach((item) => result.appendChild(item));
  } catch (error) {
    result.innerHTML =
      "<li><h3>Failed to load users. Please try again later.</h3></li>";
  }
}

// Create a user list item
function createUserElement(user) {
  const li = document.createElement("li");
  li.innerHTML = `
    <img src="${user.picture.large}" alt="${user.name.first} ${user.name.last}">
    <div class="user-info">
      <h4>${user.name.first} ${user.name.last}</h4>
      <p>${user.location.city}, ${user.location.country}</p>
    </div>
  `;
  return li;
}

// Filter the list based on search input
function filterData(searchTerm) {
  searchTerm = searchTerm.toLowerCase();
  listItems.forEach((item) => {
    if (item.innerText.toLowerCase().includes(searchTerm)) {
      item.classList.remove("hide");
    } else {
      item.classList.add("hide");
    }
  });
}

// Initialize app
filter.addEventListener("input", (e) => filterData(e.target.value));
getData();
