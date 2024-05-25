let currentSlide = 0;
const slides = document.querySelectorAll('.carousel-item');
const servicios = document.querySelector("#servicios");
const acerca = document.querySelector("#about");
const contacto = document.querySelector("#contact");

servicios.addEventListener("click", (s) => {
    s.preventDefault();

    const selectionS = document.querySelector(".servicios");
    selectionS.scrollIntoView({ behavior: "smooth" });
})

acerca.addEventListener("click", (p) => {
    p.preventDefault();

    const selectionP = document.querySelector(".about");
    selectionP.scrollIntoView({ behavior: "smooth" });
})

contacto.addEventListener("click", (c) => {
    c.preventDefault();

    const selectionC = document.querySelector(".contact");
    selectionC.scrollIntoView({ behavior: "smooth" });
})

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.classList.remove('active');
        if (i === index) {
            slide.classList.add('active');
        }
    });
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

function prevSlide() {
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    showSlide(currentSlide);
}

// Inicializa el carrusel
showSlide(currentSlide);