const API_URL = "https://api.github.com/users/";
const main = document.getElementById("main");
const form = document.getElementById("form");
const searchInput = document.getElementById("search");

async function fetchUser(username) {
  try {
    const { data } = await axios.get(API_URL + username);
    createUserCard(data);
    fetchRepos(username);
  } catch (error) {
    handleError(error);
  }
}

async function fetchRepos(username) {
  try {
    const { data } = await axios.get(
      `${API_URL}${username}/repos?sort=created`
    );
    displayRepos(data);
  } catch (error) {
    createErrorCard("Problem fetching repositories");
  }
}

function createUserCard(user) {
  const userId = user.name || user.login;
  const userBio = user.bio ? `<p>${user.bio}</p>` : "";
  const cardHTML = `
        <div class="card">
            <div>
                <img src="${user.avatar_url}" alt="${userId}'s avatar" class="avatar">
            </div>
            <div class="user-info">
                <h2>${userId}</h2>
                ${userBio}
                <ul>
                    <li>${user.followers} <strong>Followers</strong></li>
                    <li>${user.following} <strong>Following</strong></li>
                    <li>${user.public_repos} <strong>Repos</strong></li>
                </ul>
                <div id="repos"></div>
            </div>
        </div>
    `;
  main.innerHTML = cardHTML;
}

function createErrorCard(message) {
  main.innerHTML = `
        <div class="card">
            <h1>${message}</h1>
        </div>
    `;
}

function displayRepos(repos) {
  const reposEl = document.getElementById("repos");
  reposEl.innerHTML = "";
  repos.slice(0, 5).forEach((repo) => {
    const repoEl = document.createElement("a");
    repoEl.classList.add("repo");
    repoEl.href = repo.html_url;
    repoEl.target = "_blank";
    repoEl.innerText = repo.name;
    reposEl.appendChild(repoEl);
  });
}

function handleError(error) {
  if (error.response && error.response.status === 404) {
    createErrorCard("No profile found with this username");
  } else {
    createErrorCard("An error occurred while fetching data");
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const username = searchInput.value.trim();
  if (username) {
    fetchUser(username);
    searchInput.value = "";
  }
});
