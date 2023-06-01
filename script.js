const prev = document.querySelector('.scroll__left');
const next = document.querySelector('.scroll__right');
const slides = document.querySelectorAll('.img');
let currentSlide = 0;

prev.addEventListener('click', () => {
    changeSlide(currentSlide - 1)
});
next.addEventListener('click', () => {
    changeSlide(currentSlide + 1)
});

function changeSlide(index) {
    if (index >= slides.length) {
        index = 0;
    }
    if (index < 0) {
        index = slides.length - 1;
    }
    
    slides[currentSlide].classList.toggle("active");
    slides[index].classList.toggle("active");
    
    currentSlide = index;

    if (index < 0 || index > slides.length - 1) {
        return
    }
    if (index <= 0) {
        prev.style.display = "none"
    } else {
        prev.style.display = "block"
    }

    if (index >= slides.length - 1) {
        next.style.display = "none"
    } else {
        next.style.display = "block"
    }
}



