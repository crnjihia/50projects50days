const sounds = ["applause", "boo", "gasp", "tada", "victory", "wrong"];
const buttonsContainer = document.getElementById("buttons");

// Event delegation for better performance
buttonsContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("btn")) {
    stopSongs();
    document.getElementById(e.target.innerText).play();
  }
});

// Generate buttons dynamically
sounds.forEach((sound) => {
  const btn = document.createElement("button");
  btn.classList.add("btn");
  btn.innerText = sound.charAt(0).toUpperCase() + sound.slice(1); // Capitalize the first letter
  buttonsContainer.appendChild(btn);
});

function stopSongs() {
  sounds.forEach((sound) => {
    const song = document.getElementById(sound);
    song.pause();
    song.currentTime = 0;
  });
}
