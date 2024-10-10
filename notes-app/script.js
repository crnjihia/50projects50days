const addBtn = document.getElementById("add");
const notes = JSON.parse(localStorage.getItem("notes")) || [];

if (notes.length) {
  notes.forEach((note) => addNewNote(note));
}

addBtn.addEventListener("click", () => addNewNote());

function addNewNote(text = "") {
  const note = document.createElement("div");
  note.classList.add("note");

  note.innerHTML = `
    <div class="tools">
      <button class="edit" aria-label="Edit note"><i class="fas fa-edit"></i></button>
      <button class="delete" aria-label="Delete note"><i class="fas fa-trash-alt"></i></button>
    </div>
    <div class="main ${text ? "" : "hidden"}"></div>
    <textarea class="${text ? "hidden" : ""}"></textarea>
  `;

  const editBtn = note.querySelector(".edit");
  const deleteBtn = note.querySelector(".delete");
  const main = note.querySelector(".main");
  const textArea = note.querySelector("textarea");

  textArea.value = text;
  main.innerHTML = marked(text);

  deleteBtn.addEventListener("click", () => {
    note.remove();
    updateLocalStorage();
  });

  editBtn.addEventListener("click", () => {
    main.classList.toggle("hidden");
    textArea.classList.toggle("hidden");
  });

  textArea.addEventListener("input", (e) => {
    main.innerHTML = marked(e.target.value);
    updateLocalStorage();
  });

  document.body.appendChild(note);
  updateLocalStorage();
}

function updateLocalStorage() {
  const notesText = [...document.querySelectorAll("textarea")].map(
    (note) => note.value
  );
  localStorage.setItem("notes", JSON.stringify(notesText));
}
