const sInp = document.getElementById("search-input");
const sBtn = document.getElementById("search-btn");
const mMenu = document.getElementById("menu");
const mBtn = document.getElementById("menu-btn");

function toggleMenu() {
  if (mMenu.classList.contains("show")) {
    mMenu.classList.remove("show");
    mMenu.style.display = ""
  } else {
    mMenu.classList.add("show");
  }
}

function toggleSearch() {
  if (sInp.classList.contains("hide") && sBtn.classList.contains("show")) {
    sInp.classList.replace("hide", "show");
    sBtn.classList.replace("show", "hide");
  } else if (
    sInp.classList.contains("show") &&
    sBtn.classList.contains("hide")
  ) {
    sBtn.classList.replace("hide", "show");
    sInp.classList.replace("show", "hide");
  }
}

sBtn.addEventListener("click", (event) => {
  event.preventDefault();
  console.log(event);
  toggleSearch();
});

mBtn.addEventListener("click", (e) => {
  console.log(e);
  e.preventDefault();
  toggleMenu();
});
