const insert = document.getElementById("insert");

window.addEventListener("keydown", (event) => {
  const keyName = event.key === " " ? "Space" : event.key; // User-friendly key name
  const keyCode = event.keyCode || "Not supported"; // Fallback for browsers that don't support keyCode
  const code = event.code || "Not supported"; // Fallback for browsers that don't support code

  insert.innerHTML = `
        <div class="key" tabindex="0" aria-label="Key pressed">
            ${keyName} <small>event.key</small>
        </div>
        <div class="key" tabindex="0" aria-label="Key code">
            ${keyCode} <small>event.keyCode</small>
        </div>
        <div class="key" tabindex="0" aria-label="Key code">
            ${code} <small>event.code</small>
        </div>
    `;
});
