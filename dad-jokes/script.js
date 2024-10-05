const jokeEl = document.getElementById("joke");
const jokeBtn = document.getElementById("jokeBtn");

jokeBtn.addEventListener("click", generateJoke);

generateJoke();

// USING ASYNC/AWAIT with loading state
async function generateJoke() {
  jokeEl.innerHTML = "Loading...";

  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  try {
    const res = await fetch("https://icanhazdadjoke.com", config);
    const data = await res.json();

    jokeEl.innerHTML = data.joke;
  } catch (error) {
    jokeEl.innerHTML = "Oops! Something went wrong. Please try again.";
  }
}
