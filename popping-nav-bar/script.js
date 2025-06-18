const navbar = document.querySelector(".nav");
const mql = window.matchMedia("(max-width: 900px)");

window.addEventListener("scroll", () => {
  if (!mql.matches) {
    if (window.scrollY > 1) {
      navbar.classList.add("slidedown");
    } else {
      navbar.classList.remove("slidedown");
    }
  } else {
    navbar.classList.remove("slidedown");
  }
});

