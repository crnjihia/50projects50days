const API_KEY = "3fd2be6f0c70a2a598f084ddfb75487c";
const API_URL = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}&page=1`;
const IMG_PATH = "https://image.tmdb.org/t/p/w1280";
const SEARCH_API = `https://api.themoviedb.org/3/search/movie?api_key=${API_KEY}&query=`;

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error("Network response was not ok");
    const data = await res.json();
    showMovies(data.results);
  } catch (error) {
    console.error("Error fetching movies:", error);
    main.innerHTML = "<p>Failed to fetch movies. Please try again later.</p>";
  }
}

function showMovies(movies) {
  main.innerHTML = "";

  if (movies.length === 0) {
    main.innerHTML = "<p>No movies found. Please try a different search.</p>";
    return;
  }

  movies.forEach((movie) => {
    const { title, poster_path, vote_average, overview } = movie;

    const movieEl = document.createElement("div");
    movieEl.classList.add("movie");

    movieEl.innerHTML = `
            <img src="${IMG_PATH + poster_path}" alt="${title}" loading="lazy">
            <div class="movie-info">
                <h3>${title}</h3>
                <span class="${getClassByRate(
                  vote_average
                )}">${vote_average}</span>
            </div>
            <div class="overview">
                <h3>Overview</h3>
                <p>${overview}</p>
            </div>
        `;
    main.appendChild(movieEl);
  });
}

function getClassByRate(vote) {
  if (vote >= 8) {
    return "green";
  } else if (vote >= 5) {
    return "orange";
  } else {
    return "red";
  }
}

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const searchTerm = search.value.trim();

  if (searchTerm) {
    getMovies(SEARCH_API + encodeURIComponent(searchTerm));
    search.value = "";
  } else {
    window.location.reload();
  }
});
