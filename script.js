// Script pour le carrousel
let currentSlide = 0;

function showSlide(index) {
    const slides = document.querySelectorAll('.slides img');
    slides.forEach((slide, i) => {
        slide.style.display = i === index ? 'block' : 'none';
    });
}

function nextSlide() {
    const slides = document.querySelectorAll('.slides img');
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
}

setInterval(nextSlide, 3000);

// Initialisation
document.addEventListener('DOMContentLoaded', () => {
    showSlide(currentSlide);
});
