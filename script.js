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

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, {
  threshold: 0.15
});

revealElements.forEach((element) => {
  revealObserver.observe(element);
});

const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
const lightboxClose = document.getElementById("lightboxClose");

const galleryImages = document.querySelectorAll(".gallery-item, .gallery-card img");

galleryImages.forEach((image) => {
  image.addEventListener("click", () => {
    if (!lightbox || !lightboxImage) return;

    lightboxImage.src = image.src;
    lightboxImage.alt = image.alt;
    lightbox.classList.add("active");
  });
});

if (lightboxClose) {
  lightboxClose.addEventListener("click", () => {
    lightbox.classList.remove("active");
  });
}

if (lightbox) {
  lightbox.addEventListener("click", (event) => {
    if (event.target === lightbox) {
      lightbox.classList.remove("active");
    }
  });
}

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape" && lightbox) {
    lightbox.classList.remove("active");
  }
});
