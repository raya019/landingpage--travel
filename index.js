const ham = document.querySelector(".navbar-menu-ham");
const link = document.querySelector(".navbar-nav-link");

ham.addEventListener("click", function () {
  link.classList.toggle("active");
});

// Menghilangkan navbar dimanapun
document.addEventListener("click", (e) => {
  if (!ham.contains(e.target)) {
    link.classList.remove("active");
  }
});

// Slider touch
const heroContainer = document.querySelector(".hero-container");

let bool = false;
let start = 0;

heroContainer.addEventListener("mousedown", function (e) {
  bool = true;
  start = e.clientX;
  this.style.cursor = "grabbing";
});

window.addEventListener("mouseup", function () {
  bool = false;
  heroContainer.style.cursor = "grab";
});

heroContainer.addEventListener("mousemove", function (e) {
  if (!bool) {
    return;
  }

  this.scrollLeft += start - e.clientX;
});
