const carouselInner = document.querySelector('.carousel-inner');
const prevButton = document.querySelector('.prev');
const nextButton = document.querySelector('.next');
let currentIndex = 0;

function updateCarousel() {
    const width = carouselInner.clientWidth;
    carouselInner.style.transform = `translateX(-${currentIndex * width}px)`;
}

prevButton.addEventListener('click', () => {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = carouselInner.children.length - 1; 
    }
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    if (currentIndex < carouselInner.children.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0; 
    }
    updateCarousel();
});

window.addEventListener('resize', updateCarousel);

function autoPlayCarousel() {
    nextButton.click(); 
}

setInterval(autoPlayCarousel, 2000);

updateCarousel();
