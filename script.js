const demoFormBtn = document.getElementById("demoFormBtn");

if (demoFormBtn) {
  demoFormBtn.addEventListener("click", () => {
    alert("To jest formularz pokazowy. W finalnej wersji można podpiąć go pod e-mail lub formularz kontaktowy.");
  });
}

const hotspots = document.querySelectorAll(".hotspot");

hotspots.forEach((hotspot) => {
  hotspot.addEventListener("click", (event) => {
    event.stopPropagation();

    hotspots.forEach((item) => {
      if (item !== hotspot) {
        item.classList.remove("active");
      }
    });

    hotspot.classList.toggle("active");
  });
});

document.addEventListener("click", () => {
  hotspots.forEach((hotspot) => {
    hotspot.classList.remove("active");
  });
});
