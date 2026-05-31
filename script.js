const demoFormBtn = document.getElementById("demoFormBtn");

if (demoFormBtn) {
  demoFormBtn.addEventListener("click", () => {
    alert("To jest formularz pokazowy. W finalnej wersji można podpiąć go pod e-mail lub formularz kontaktowy.");
  });
}

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {
  if (!header) return;

  if (window.scrollY > 40) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
